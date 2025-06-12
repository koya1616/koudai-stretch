# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for "Improve Stretch" - a stretch therapy business in Neyagawa, Japan. The site serves as a business landing page with service information, pricing, and contact details.

## Development Commands

- **Start development server**: `pnpm dev` (runs on port 3721)
- **Build production**: `pnpm build`
- **Production start**: `pnpm start`
- **Lint and typecheck**: `pnpm lint` (runs Biome check with auto-fix + TypeScript compiler check)

## Tech Stack & Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 + DaisyUI components
- **Language**: TypeScript
- **Package Manager**: pnpm (migrated from npm)
- **Code Quality**: Biome (replaces ESLint/Prettier)
- **Deployment**: Vercel

## Code Style

- **Indentation**: Tabs (configured in Biome)
- **Quotes**: Double quotes for JavaScript
- **Import organization**: Enabled via Biome
- **Mobile-first**: Layout uses `max-w-md mx-auto` for mobile optimization

## Architecture & Key Features

- **Google Calendar Integration**: API route at `/api/calendar` fetches events using Google Calendar API
  - Requires `GOOGLE_SERVICE_ACCOUNT_KEY` and `GOOGLE_CALENDAR_ID` environment variables
  - Service account authentication with read-only calendar scope
  - Fetches events for next 30 days (despite "今週" in UI)
- **Calendar UI**: `/src/app/ui/calendar.tsx` displays formatted events with date/time ranges
- **Mobile-first Design**: All layouts optimized for mobile with `max-w-md mx-auto`
- **Static Assets**: Images hosted on Vercel Blob Storage (external)

## Project Structure

- `src/app/` - Next.js App Router pages and API routes
- `src/app/ui/` - Reusable UI components (header, calendar)
- `src/app/api/calendar/` - Google Calendar integration API endpoint
- `src/app/calendar/` - Calendar display page