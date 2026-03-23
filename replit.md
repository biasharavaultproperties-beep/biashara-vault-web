# Biashara Vault - Real Estate Website

## Overview
A professional real estate landing page for Biashara Vault (BV), a Kenyan real estate consulting and property development company. The site showcases property listings, services (land acquisition, joint ventures, capital procurement), testimonials, and legal background.

## Tech Stack
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 7 with `@vitejs/plugin-react-swc`
- **Styling:** Tailwind CSS + shadcn/ui (Radix UI components)
- **Animations:** Framer Motion
- **Routing:** React Router DOM v6
- **Forms:** React Hook Form + Zod validation
- **Data Fetching:** TanStack Query v5
- **Icons:** Lucide React
- **Package Manager:** npm

## Project Structure
```
src/
  assets/        - Static images (land plots, logos)
  components/    - Feature components (Navbar, Hero, PropertyCard, etc.)
    ui/          - shadcn/ui primitive components
  config/        - SEO and app configuration
  hooks/         - Custom React hooks
  lib/           - Shared utilities (cn, etc.)
  pages/         - Top-level pages (Index, NotFound)
  test/          - Test setup and tests
  utils/         - Analytics, logo utilities
public/          - Static files (favicon, robots.txt, sitemap)
```

## Development
- Run: `npm run dev` → starts Vite dev server on port 5000
- Build: `npm run build` → outputs to `dist/`
- Test: `npm run test`

## Replit Configuration
- Dev server: `0.0.0.0:5000` with `allowedHosts: true` for proxy compatibility
- Deployment: Static site, build with `npm run build`, serve `dist/`
