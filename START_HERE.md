# 🎃 Welcome to Spinnata Landing Page!

> **Note:** This project uses **npm** (not pnpm). All commands use `npm run`.

## ⚡ Quick Start (30 seconds)

```bash
npm run setup && npm run dev
```

Open http://localhost:3000 - Done! 🎉

---

## 📖 What's This?

A complete Next.js 14 landing page for collecting email addresses:

✅ **Full-Stack**: TypeScript, TailwindCSS, Prisma, shadcn/ui  
✅ **Email Capture**: Form with validation  
✅ **Database**: SQLite (dev) / Postgres (prod)  
✅ **Security**: Honeypot, rate limiting, spam blocking  
✅ **Production Ready**: SEO, accessibility, responsive

---

## 🚀 Get Started

### Option 1: One Command

```bash
npm run setup && npm run dev
```

### Option 2: Step by Step

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env

# 3. Initialize database
npm run prisma:init

# 4. Start dev server
npm run dev
```

Visit **http://localhost:3000** 🎉

---

## 🧪 Test It

1. **Submit an email** on the form
2. **View database**: Run `npm run prisma:studio`
3. Opens at http://localhost:5555

---

## 📦 NPM Commands

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server
npm run setup         # Install + initialize

npm run prisma:init   # Initialize database
npm run prisma:studio # Open database GUI

npm run lint          # Lint code
npm run format        # Format code
npm run type-check    # Check TypeScript
```

---

## 📚 Documentation

- **[NPM_QUICKSTART.md](NPM_QUICKSTART.md)** ← Start here for npm!
- **[QUICKSTART.md](QUICKSTART.md)** - 3-minute setup
- **[SETUP.md](SETUP.md)** - Detailed setup guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to production
- **[README.md](README.md)** - Full documentation
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete overview

---

## 🎨 Quick Customizations

### Colors

Edit `tailwind.config.ts`:

```ts
pumpkin: "#F36B1C",    // Change this
stemGreen: "#2F6F3E",  // And this
```

### Landing Page Text

Edit `src/app/page.tsx`:

```tsx
<h1>Make your party unforgettable.</h1>
```

### SEO

Edit `src/app/layout.tsx`:

```tsx
title: "Your Title",
description: "Your description",
```

---

## 🚢 Deploy to Production

1. **Push to GitHub**
2. **Go to** [vercel.com/new](https://vercel.com/new)
3. **Import** your repository
4. **Add environment variable:**
   ```
   DATABASE_URL=postgresql://user:pass@host/db
   ```
5. **Deploy!**

Get free Postgres: [Neon.tech](https://neon.tech)

**Full guide:** [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🆘 Need Help?

### Port 3000 in use?

```bash
npx kill-port 3000
```

### Prisma not working?

```bash
npm run prisma:init
```

### TypeScript errors?

VSCode: Press `F1` → Type "TypeScript: Restart TS Server"

### Dependencies broken?

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## ✨ Features

- 🎯 **Email Collection** - Validated form with toast notifications
- 🗄️ **Database** - Prisma ORM with SQLite/Postgres
- 🛡️ **Security** - Honeypot, rate limiting, spam blocking
- 📧 **Integrations** - Optional Mailchimp & Resend
- 📱 **Responsive** - Mobile-first design
- 🌙 **Dark Mode** - Automatic theme switching
- ♿ **Accessible** - WCAG AA compliant
- 🔍 **SEO** - Complete meta tags & OG images
- 📊 **Analytics Ready** - Custom event hooks
- ⚡ **Fast** - Optimized for Lighthouse 90+

---

## 📁 Project Structure

```
spinnata/
├── src/
│   ├── app/              # Pages & API routes
│   │   ├── api/lead/     # Lead submission endpoint
│   │   └── page.tsx      # Landing page
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── email-form.tsx
│   └── lib/             # Utilities & Prisma
├── prisma/              # Database schema
├── public/              # Static assets
└── [config files]
```

---

**🎃 Ready to collect emails and make parties unforgettable!**

**Questions?** Check [NPM_QUICKSTART.md](NPM_QUICKSTART.md) or the other docs!
