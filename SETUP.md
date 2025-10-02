# Setup Guide

Get your Spinnata landing page running in 5 minutes.

## Prerequisites

- **Node.js 18+** ([download](https://nodejs.org/)) - comes with npm

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This installs all required packages including Next.js, Prisma, shadcn/ui components, and more.

### 2. Set Up Environment

Copy the example environment file:

```bash
# Create .env file
cp .env.example .env
```

For local development, the default SQLite configuration works out of the box:

```env
NODE_ENV=development
DATABASE_URL="file:./prisma/dev.db"
```

### 3. Initialize Database

```bash
npm run prisma:init
```

This will:

- Generate the Prisma Client
- Create the SQLite database file
- Push the schema to the database

You should see output like:

```
✔ Generated Prisma Client
✔ The SQLite database "dev.db" was created at "./prisma/dev.db"
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the Spinnata landing page! 🎉

---

## Optional Integrations

### Mailchimp (Email Marketing)

1. Get your API key: [mailchimp.com/help/about-api-keys](https://mailchimp.com/help/about-api-keys/)
2. Get your Audience ID: Mailchimp → Audience → Settings → Audience name and defaults
3. Add to `.env`:

```env
MAILCHIMP_API_KEY="your_api_key_here"
MAILCHIMP_AUDIENCE_ID="your_audience_id"
MAILCHIMP_SERVER_PREFIX="us1"  # Check your API key prefix
```

### Resend (Email Notifications)

Get notified when someone joins the waitlist.

1. Sign up at [resend.com](https://resend.com)
2. Create API key: Dashboard → API Keys
3. Add to `.env`:

```env
RESEND_API_KEY="re_your_key_here"
OWNER_EMAIL="you@yourdomain.com"
```

---

## Testing the Form

### 1. Submit a Test Email

1. Go to [http://localhost:3000](http://localhost:3000)
2. Enter your email in the form
3. Click "Join the waitlist"
4. You should see a success toast: "You're on the list! 🎉"

### 2. View Database

Open Prisma Studio to see your leads:

```bash
npm run prisma:studio
```

This opens a GUI at [http://localhost:5555](http://localhost:5555) where you can:

- View all submitted emails
- See timestamps, sources, IPs
- Edit or delete entries

### 3. Test Validations

Try these to test security features:

**Duplicate Email:**

- Submit same email twice
- Should see success both times (upsert)

**Invalid Email:**

- Try "notanemail"
- Should see error: "Please enter a valid email address"

**Disposable Email:**

- Try "test@tempmail.com"
- Should see error: "Please use a valid email address"

**Rate Limiting:**

- Submit 11+ emails rapidly from same IP
- 11th request will be silently rejected (honeypot behavior)

**Honeypot:**

- Bots filling hidden "company" field are silently rejected

---

## Project Structure

```
spinnata/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/lead/route.ts  # Lead submission endpoint
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout + SEO
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   └── email-form.tsx     # Email capture form
│   ├── hooks/
│   │   └── use-toast.ts       # Toast notification hook
│   └── lib/
│       ├── prisma.ts          # Prisma client singleton
│       └── utils.ts           # Utility functions
├── prisma/
│   └── schema.prisma          # Database schema
├── public/
│   └── 1002.mp4              # Product video
└── package.json
```

---

## Development Workflow

### Making Changes

1. **Edit components**: Changes hot-reload automatically
2. **Update database**: Modify `prisma/schema.prisma`, then:
   ```bash
   npm run prisma:init
   ```
3. **Add environment variables**: Edit `.env`, restart server

### Code Quality

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

### Database Management

```bash
# View data in GUI
npm run prisma:studio

# Reset database (delete all data)
rm prisma/dev.db
npm run prisma:init

# Generate Prisma Client after schema changes
npx prisma generate
```

---

## Common Issues

### "Port 3000 already in use"

```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### "Module not found: Can't resolve '@/components/...'"

```bash
# Restart TypeScript server in VSCode
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"

# Or restart dev server
npm run dev
```

### "Prisma Client not initialized"

```bash
npm run prisma:init
npm run dev
```

### Changes not reflecting

1. Hard refresh: `Cmd/Ctrl + Shift + R`
2. Clear `.next` folder:
   ```bash
   rm -rf .next
   npm run dev
   ```

---

## Next Steps

✅ **Customize branding**: Edit colors in `tailwind.config.ts`  
✅ **Update copy**: Modify text in `src/app/page.tsx`  
✅ **Add analytics**: See README for analytics setup  
✅ **Deploy**: Follow [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## Need Help?

- **Documentation**: See [README.md](./README.md)
- **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Prisma Docs**: [prisma.io/docs](https://prisma.io/docs)

Happy building! 🚀
