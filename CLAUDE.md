# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for "Improve Stretch" - a stretch therapy business in Neyagawa, Japan. The site serves as a business landing page with service information, pricing, and contact details.

## Development Commands

- **Start development server**: `pnpm dev` (runs on port 3721)
- **Build production**: `pnpm build`
- **Production start**: `pnpm start`
- **Lint code**: `pnpm lint`
- **Format code**: Use Biome for formatting and linting (`@biomejs/biome` configured)

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

## Key Components

- **Layout**: Mobile-optimized layout with Header component
- **Header**: Business name and address with Google Maps link
- **Main Page**: Single-page application with carousel, profile, pricing grid
- **Images**: Hosted on Vercel Blob Storage

## Project Structure

The app follows Next.js App Router structure with:
- `src/app/` - Main application code
- `src/app/ui/` - Reusable UI components
- Static content served from external Vercel Blob Storage