# 🚀 Quick Start - Get Running in 3 Minutes

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Database

```bash
# Copy environment file
cp .env.example .env

# Initialize Prisma
npm run prisma:init
```

## Step 3: Start Development Server

```bash
npm run dev
```

> **Even faster:** Run `npm run setup` to do steps 1-2 in one command!

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## ✅ Verify Everything Works

### Test the Email Form

1. Go to http://localhost:3000
2. Enter your email
3. Click "Join the waitlist"
4. You should see: "You're on the list! 🎉"

### View Submitted Leads

```bash
npm run prisma:studio
```

Opens at http://localhost:5555 - you'll see your test email!

---

## 🎨 Customize

### Brand Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  pumpkin: "#F36B1C",    // Your primary color
  stemGreen: "#2F6F3E",  // Your secondary color
}
```

### Landing Page Copy

Edit `src/app/page.tsx`:

```tsx
<h1>Make your party unforgettable.</h1>
<p>Be first to get the Spin-ñata—drop your email below.</p>
```

### SEO & Meta Tags

Edit `src/app/layout.tsx`:

```tsx
export const metadata = {
  title: "Your Title",
  description: "Your description",
  // ...
};
```

---

## 📧 Add Integrations (Optional)

### Mailchimp

1. Get API key: [mailchimp.com/help/about-api-keys](https://mailchimp.com/help/about-api-keys/)
2. Add to `.env`:

```env
MAILCHIMP_API_KEY="your_key"
MAILCHIMP_AUDIENCE_ID="your_audience_id"
MAILCHIMP_SERVER_PREFIX="us1"
```

### Resend (Email Notifications)

1. Get API key: [resend.com/api-keys](https://resend.com/api-keys)
2. Add to `.env`:

```env
RESEND_API_KEY="re_your_key"
OWNER_EMAIL="you@yourdomain.com"
```

---

## 🚢 Deploy to Production

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import repository
4. Add environment variable:
   ```
   DATABASE_URL=postgresql://user:pass@host/db
   ```
5. Deploy!

Get database: [Neon](https://neon.tech) (free Postgres)

**Full deployment guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📚 Documentation

- **Setup Details**: [SETUP.md](./SETUP.md)
- **Deployment**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Full Docs**: [README.md](./README.md)

---

## 🆘 Troubleshooting

### Port 3000 in use

```bash
lsof -ti:3000 | xargs kill -9
```

### Prisma errors

```bash
npm run prisma:init
npm run dev
```

### TypeScript errors in editor

VSCode: `Cmd+Shift+P` → "TypeScript: Restart TS Server"

---

## ✨ What's Included

✅ **Next.js 14** (App Router)  
✅ **TypeScript** (strict mode)  
✅ **TailwindCSS** (with brand colors)  
✅ **shadcn/ui** (Button, Input, Toast, etc.)  
✅ **Prisma** (SQLite dev, Postgres prod)  
✅ **Form validation** (zod + react-hook-form)  
✅ **Security** (rate limiting, honeypot, disposable email blocking)  
✅ **SEO** (meta tags, OG images, sitemaps ready)  
✅ **Accessibility** (WCAG AA compliant)  
✅ **Analytics hooks** (ready for your provider)  
✅ **Email integrations** (Mailchimp + Resend)  
✅ **Dark mode** support  
✅ **Mobile responsive**

---

**Built with ❤️ for Spinnata**

Questions? Check [README.md](./README.md) or [SETUP.md](./SETUP.md)
