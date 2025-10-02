# Spinnata Landing Page

A high-conversion Next.js 14 landing page for Spinnata.com to collect email addresses for early access.

## Features

- ✨ **Modern Stack**: Next.js 14 (App Router), TypeScript, TailwindCSS, shadcn/ui
- 📧 **Email Collection**: Full form validation with zod & react-hook-form
- 🗄️ **Database**: Prisma with SQLite (dev) / Postgres (prod)
- 🛡️ **Security**: Honeypot spam protection, rate limiting, disposable email blocking
- 🎨 **Design**: Responsive, dark-mode friendly, accessible (WCAG compliant)
- 📊 **Analytics**: Custom event hooks for easy integration
- 🔌 **Integrations**: Optional Mailchimp & Resend email support

## Quick Start

### Prerequisites

- Node.js 18+
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Initialize Prisma and create database
npm run prisma:init

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your landing page.

## Environment Variables

Create a `.env` file in the root directory:

```env
# Database (SQLite for dev, Postgres for prod)
DATABASE_URL="file:./prisma/dev.db"

# Optional: Mailchimp Integration
MAILCHIMP_API_KEY=""
MAILCHIMP_AUDIENCE_ID=""
MAILCHIMP_SERVER_PREFIX="us1"

# Optional: Resend Email Notifications
RESEND_API_KEY=""
OWNER_EMAIL="your@email.com"

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=""
```

### Database Setup

**Development (SQLite):**

```bash
DATABASE_URL="file:./prisma/dev.db"
npm run prisma:init
```

**Production (Postgres - e.g., Neon, Supabase):**

```bash
DATABASE_URL="postgresql://user:password@host:5432/database"
npm run prisma:init
```

## Project Structure

```
spinnata/
├── src/
│   ├── app/
│   │   ├── api/lead/          # API endpoint for lead submission
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout with SEO
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   └── email-form.tsx     # Email capture form
│   ├── hooks/
│   │   └── use-toast.ts       # Toast notifications hook
│   └── lib/
│       ├── prisma.ts          # Prisma client
│       └── utils.ts           # Utility functions
├── prisma/
│   └── schema.prisma          # Database schema
└── public/
    └── 1002.mp4              # Product teaser video
```

## API Endpoint

### POST `/api/lead`

Submit a new lead to the database.

**Request Body:**

```json
{
  "email": "user@example.com",
  "company": "",
  "source": "google",
  "campaign": "launch"
}
```

**Response:**

```json
{
  "ok": true,
  "id": "clx1y2z3..."
}
```

**Features:**

- ✅ Email validation with zod
- ✅ Honeypot field (`company` must be empty)
- ✅ Rate limiting (10 requests/minute per IP)
- ✅ Disposable email blocking
- ✅ Duplicate detection (upsert)
- ✅ Optional Mailchimp subscription
- ✅ Optional Resend email notification

## Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Database
npm run prisma:init      # Generate Prisma client & push schema
npm run prisma:studio    # Open Prisma Studio (GUI)

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run type-check       # TypeScript type checking

# Quick Setup
npm run setup            # Install deps + initialize database
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   - `DATABASE_URL` (use a Postgres provider like [Neon](https://neon.tech))
   - Optional: `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX`
   - Optional: `RESEND_API_KEY`, `OWNER_EMAIL`
3. **Deploy!** Vercel will automatically build and deploy

### Database Setup for Production

**Recommended: Neon (Serverless Postgres)**

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add to Vercel environment variables as `DATABASE_URL`

Example:

```
DATABASE_URL="postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb"
```

## Customization

### Brand Colors

Edit `tailwind.config.ts` to change brand colors:

```ts
colors: {
  pumpkin: "#F36B1C",    // Primary brand color
  stemGreen: "#2F6F3E",  // Secondary accent
  midnight: "#0F172A",   // Dark mode base
}
```

### SEO & Metadata

Edit `src/app/layout.tsx` to customize:

- Page title & description
- Open Graph images
- Twitter cards
- Favicons

### Analytics

The email form dispatches a custom event on successful submission:

```js
window.dispatchEvent(
  new CustomEvent("lead:submitted", {
    detail: { email: "user@example.com" },
  })
);
```

Add your analytics listener in `layout.tsx`:

```js
useEffect(() => {
  window.addEventListener("lead:submitted", (e) => {
    // Track with your analytics provider
    gtag("event", "lead_submitted", { email: e.detail.email });
  });
}, []);
```

## Performance

- Lighthouse Score Target: **≥ 90** (Mobile)
- Image optimization with Next.js `<Image>`
- Video lazy-loading and autoplay optimization
- Font optimization with `next/font/google`
- Static generation where possible

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Color contrast (WCAG AA)
- ✅ Screen reader support

## License

© 2024 Spinnata. All rights reserved.

---

Built with ❤️ in Houston
