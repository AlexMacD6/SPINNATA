# 🚀 NPM Quick Start

Your Spinnata landing page is ready! Here's how to get started with **npm**:

## ⚡ Super Quick Setup (One Command)

```bash
npm run setup && npm run dev
```

That's it! Open http://localhost:3000 🎉

---

## 📝 Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment

```bash
# Copy environment template
cp .env.example .env
```

The default `.env` works out of the box with SQLite!

### 3. Initialize Database

```bash
npm run prisma:init
```

### 4. Start Dev Server

```bash
npm run dev
```

Open **http://localhost:3000** and you're live! 🎃

---

## 🎯 Test It Out

1. **Submit an email** on the landing page
2. **View your data**: Run `npm run prisma:studio`
3. Opens at http://localhost:5555

---

## 📦 Available Scripts

```bash
npm run dev              # Start development (http://localhost:3000)
npm run build            # Build for production
npm run start            # Start production server
npm run setup            # Install + initialize in one command

npm run prisma:init      # Initialize Prisma database
npm run prisma:studio    # Open database GUI

npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run type-check       # TypeScript checking
```

---

## 🎨 Customize

### Change Colors

Edit `tailwind.config.ts`:

```ts
pumpkin: "#F36B1C",    // Your primary color
stemGreen: "#2F6F3E",  // Your secondary color
```

### Update Copy

Edit `src/app/page.tsx`:

```tsx
<h1>Make your party unforgettable.</h1>
<p>Be first to get the Spin-ñata—drop your email below.</p>
```

### Update SEO

Edit `src/app/layout.tsx`:

```tsx
title: "Your Title Here",
description: "Your description here",
```

---

## 📧 Add Email Integrations (Optional)

### Mailchimp

1. Get API key from [Mailchimp](https://mailchimp.com/help/about-api-keys/)
2. Add to `.env`:
   ```env
   MAILCHIMP_API_KEY="your_key"
   MAILCHIMP_AUDIENCE_ID="your_audience_id"
   MAILCHIMP_SERVER_PREFIX="us1"
   ```

### Resend

1. Get API key from [Resend](https://resend.com/api-keys)
2. Add to `.env`:
   ```env
   RESEND_API_KEY="re_your_key"
   OWNER_EMAIL="you@yourdomain.com"
   ```

---

## 🚢 Deploy to Production

### Quick Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Deploy**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Add environment variable:
     ```
     DATABASE_URL=postgresql://user:pass@host/db
     ```
   - Deploy!

3. **Get Database**
   - Free Postgres: [Neon.tech](https://neon.tech)
   - Copy connection string
   - Add to Vercel environment variables

**Full deployment guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🆘 Common Issues

### Port 3000 in use

```bash
# Windows
npx kill-port 3000

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Prisma errors

```bash
npm run prisma:init
```

### TypeScript errors

VSCode: `Cmd/Ctrl + Shift + P` → "TypeScript: Restart TS Server"

### Dependencies issues

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Full Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Detailed quick start
- **[SETUP.md](./SETUP.md)** - Complete setup guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment
- **[README.md](./README.md)** - Full documentation
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview

---

## ✨ What's Included

✅ Next.js 14 (App Router) + TypeScript  
✅ TailwindCSS with brand colors  
✅ shadcn/ui components  
✅ Prisma ORM (SQLite → Postgres ready)  
✅ Email validation (zod + react-hook-form)  
✅ Security (honeypot, rate limiting, spam blocking)  
✅ SEO optimized  
✅ Fully accessible  
✅ Dark mode support  
✅ Mobile responsive  
✅ Analytics ready  
✅ Mailchimp + Resend integrations

---

**Built with ❤️ for Spinnata 🎃**

Questions? Check the docs or ask for help!

