# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### 1. Prerequisites

- GitHub/GitLab account with your code pushed
- [Vercel account](https://vercel.com/signup) (free tier works)
- [Neon account](https://neon.tech) for Postgres (free tier available)

### 2. Set Up Database

**Option A: Neon (Recommended)**

1. Go to [console.neon.tech](https://console.neon.tech)
2. Create new project
3. Copy the connection string (looks like: `postgresql://user:pass@ep-xxx.aws.neon.tech/neondb`)
4. Save for step 3

**Option B: Supabase**

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database → Connection string
4. Copy the URI (enable session pooling)

**Option C: Railway**

1. Go to [railway.app](https://railway.app)
2. Create new project → Add Postgres
3. Copy the connection string from variables

### 3. Deploy to Vercel

#### Via Dashboard:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. Add Environment Variables:

   ```
   DATABASE_URL=postgresql://user:pass@host/db
   ```

   Optional variables:

   ```
   MAILCHIMP_API_KEY=your_key
   MAILCHIMP_AUDIENCE_ID=your_id
   MAILCHIMP_SERVER_PREFIX=us1
   RESEND_API_KEY=your_key
   OWNER_EMAIL=you@example.com
   ```

5. Click **Deploy**

#### Via CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, then deploy to production
vercel --prod
```

### 4. Post-Deployment

1. **Verify database**: Check Vercel logs to ensure Prisma connected
2. **Test form**: Submit a test email on your live site
3. **Check Prisma Studio**: Run `pnpm prisma:studio` locally with production DATABASE_URL
4. **Set up custom domain**: In Vercel dashboard → Domains

---

## Alternative: Deploy to Netlify

### 1. Prerequisites

- [Netlify account](https://app.netlify.com/signup)
- Database setup (same as above)

### 2. Deploy

1. Go to [app.netlify.com/start](https://app.netlify.com/start)
2. Connect your Git repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Functions directory: `.netlify/functions`

4. Add environment variables (same as Vercel)
5. Deploy

---

## Deploy to Docker / VPS

### 1. Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable pnpm && pnpm build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### 2. Build & Run

```bash
# Build image
docker build -t spinnata .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://..." \
  -e MAILCHIMP_API_KEY="..." \
  spinnata
```

---

## Environment Variables Reference

### Required

| Variable       | Description                | Example                          |
| -------------- | -------------------------- | -------------------------------- |
| `DATABASE_URL` | Postgres connection string | `postgresql://user:pass@host/db` |

### Optional

| Variable                   | Description             | Example           |
| -------------------------- | ----------------------- | ----------------- |
| `MAILCHIMP_API_KEY`        | Mailchimp API key       | `abc123...`       |
| `MAILCHIMP_AUDIENCE_ID`    | Mailchimp list ID       | `def456...`       |
| `MAILCHIMP_SERVER_PREFIX`  | Mailchimp server prefix | `us1`             |
| `RESEND_API_KEY`           | Resend API key          | `re_xxx...`       |
| `OWNER_EMAIL`              | Email for notifications | `you@example.com` |
| `NEXT_PUBLIC_ANALYTICS_ID` | Analytics ID            | `G-XXX`           |

---

## Troubleshooting

### "Prisma Client not generated"

```bash
npm run prisma:init
npm run build
```

### "Can't reach database server"

- Check `DATABASE_URL` format
- Ensure database allows connections from Vercel IP ranges
- For Neon: enable "connection pooling"

### Rate limit not working

- Rate limiting uses in-memory storage
- In serverless (Vercel), each function instance has separate memory
- For production, consider [Upstash Redis](https://upstash.com) rate limiting

### Build fails on Vercel

- Ensure `prisma generate` runs before build
- Check package.json build script: `"build": "prisma generate && prisma db push && next build"`
- Verify all environment variables are set

---

## Performance Optimization

1. **Enable caching**: Add `revalidate` to API routes
2. **Add CDN**: Vercel includes this automatically
3. **Optimize images**: Use Next.js `<Image>` component
4. **Database indexes**: Already included in Prisma schema

---

## Monitoring

### Vercel

- Built-in analytics: [vercel.com/analytics](https://vercel.com/analytics)
- Real-time logs: Vercel Dashboard → Project → Logs

### Database

- **Prisma Studio**: `npm run prisma:studio`
- **Neon Dashboard**: View connection stats, queries
- **Query monitoring**: Enable in Prisma client

---

## Scaling

As your waitlist grows:

1. **Upgrade database**: Neon Pro for better performance
2. **Add Redis**: Use Upstash for distributed rate limiting
3. **Enable caching**: Add Redis cache for duplicate email checks
4. **CDN**: Already included with Vercel
5. **Database connection pooling**: Use PgBouncer or Neon's built-in pooling

---

Need help? Check the [README.md](./README.md) or open an issue.
