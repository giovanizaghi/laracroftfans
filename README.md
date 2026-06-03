# Lara Croft Fans

Lara Croft Fans is a fan-made Tomb Raider portal planned around games, articles, guides, galleries, and community content.

This repository currently contains only the initial project bootstrap and architecture foundation. It intentionally does not include feature-specific implementation, authentication, admin flows, database models, landing pages, blog pages, or business logic.

## Tech Stack

- Next.js 15
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma
- PostgreSQL
- next-intl
- ESLint
- Prettier

## Development Setup

Install dependencies:

```bash
npm install
```

Create a local environment file from the template:

```bash
cp .env.example .env
```

Configure the required environment variables:

```bash
DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_YOUTUBE_URL=
DEFAULT_LOCALE=en
```

The PostgreSQL database is expected to be hosted on Railway for all environments, including local development. Use the Railway-provided PostgreSQL connection string for `DATABASE_URL`.

Generate the Prisma client:

```bash
npm run prisma:generate
```

Start the development server:

```bash
npm run dev
```

Run code quality checks:

```bash
npm run lint
npm run format:check
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Prisma

The Prisma schema is configured for PostgreSQL and currently contains only the generator and datasource. Database models will be added in later phases.

Useful commands:

```bash
npm run prisma:generate
npm run prisma:studio
```

## Internationalization

The project is configured with `next-intl` and supports:

- English (`en`)
- Portuguese, Brazil (`pt`)

Message files are located in `src/messages`.

## Railway Deployment

Create a Railway project and attach a Railway PostgreSQL database. Configure the same environment variables listed in `.env.example`.

Railway can deploy the application with the standard scripts:

```bash
npm run build
npm run start
```

The build script runs `prisma generate` before `next build`, so the Prisma client is prepared during deployment.

## Health Check

The health endpoint is available at:

```text
/api/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "lara-croft-fans"
}
```

## Roadmap

### Phase 1

Project Bootstrap

### Phase 2

Public Website

### Phase 3

Blog

### Phase 4

Games Database

### Phase 5

Admin Area

### Phase 6

Media Galleries
