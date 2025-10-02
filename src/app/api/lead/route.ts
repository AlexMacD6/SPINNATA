import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Validation schema
const leadSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  company: z.string().optional(),
  source: z.string().optional(),
  campaign: z.string().optional(),
});

// Disposable email domains blocklist
const DISPOSABLE_DOMAINS = [
  "tempmail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "mailinator.com",
  "throwaway.email",
  "temp-mail.org",
  "sharklasers.com",
  "yopmail.com",
  "maildrop.cc",
  "trashmail.com",
];

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per minute
const RATE_WINDOW = 60 * 1000; // 1 minute in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 1000);

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  
  if (realIp) {
    return realIp.trim();
  }
  
  return "unknown";
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, "");
}

async function addToMailchimp(email: string) {
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
    return;
  }

  try {
    const mailchimp = await import("@mailchimp/mailchimp_marketing");
    
    mailchimp.default.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER_PREFIX || "us1",
    });

    await mailchimp.default.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "pending", // Double opt-in
      }
    );
  } catch (error) {
    console.error("Mailchimp error:", error);
    // Don't throw - this is optional
  }
}

async function sendNotificationEmail(email: string, leadData: any) {
  if (!process.env.RESEND_API_KEY || !process.env.OWNER_EMAIL) {
    return;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Spinnata Notifications <onboarding@resend.dev>",
      to: process.env.OWNER_EMAIL,
      subject: "🎉 New Spinnata Lead!",
      html: `
        <h2>New lead submitted!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${leadData.source || "Direct"}</p>
        <p><strong>Campaign:</strong> ${leadData.campaign || "N/A"}</p>
        <p><strong>User Agent:</strong> ${leadData.ua || "N/A"}</p>
        <p><strong>IP:</strong> ${leadData.ip || "N/A"}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    });
  } catch (error) {
    console.error("Resend error:", error);
    // Don't throw - this is optional
  }
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(req);

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return new NextResponse(null, { status: 204 }); // Silently reject
    }

    // Parse and validate request body
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const { email, company, source, campaign } = parsed.data;

    // Honeypot check - if company field is filled, it's likely a bot
    if (company && company.trim() !== "") {
      return new NextResponse(null, { status: 204 }); // Silently reject
    }

    // Check for disposable email domains
    const emailDomain = email.split("@")[1];
    if (DISPOSABLE_DOMAINS.includes(emailDomain)) {
      return NextResponse.json(
        { error: "Please use a valid email address" },
        { status: 400 }
      );
    }

    // Get user agent and strip any HTML
    const userAgent = req.headers.get("user-agent") || undefined;
    const cleanUa = userAgent ? stripHtml(userAgent) : undefined;
    const cleanEmail = stripHtml(email);

    // Upsert lead to database
    const lead = await prisma.lead.upsert({
      where: { email: cleanEmail },
      update: {
        source: source ? stripHtml(source) : null,
        campaign: campaign ? stripHtml(campaign) : null,
        ua: cleanUa,
        ip: clientIp !== "unknown" ? clientIp : null,
      },
      create: {
        email: cleanEmail,
        source: source ? stripHtml(source) : null,
        campaign: campaign ? stripHtml(campaign) : null,
        ua: cleanUa,
        ip: clientIp !== "unknown" ? clientIp : null,
      },
    });

    // Optional integrations (fire and forget)
    Promise.all([
      addToMailchimp(cleanEmail),
      sendNotificationEmail(cleanEmail, {
        source,
        campaign,
        ua: cleanUa,
        ip: clientIp,
      }),
    ]).catch((err) => {
      console.error("Integration error:", err);
    });

    return NextResponse.json({ ok: true, id: lead.id }, { status: 200 });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}


