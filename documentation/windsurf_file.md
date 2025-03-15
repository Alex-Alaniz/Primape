# .windsurfrules

## Project Overview

*   **Type:** windsurf_file
*   **Description:** Project Summary: PrimapePrediction Documentation PrimapePrediction is a multi-outcome prediction market platform built on blockchain technology (Arbitrum One) using pari-mutuel mechanics. The documentation provides a comprehensive resource for users and developers, covering everything from onboarding and wallet connection instructions to detailed smart contract and SDK integration guides.
*   **Primary Goal:** To simplify onboarding, clarify technical concepts, and offer detailed developer guidelines to ensure both users and developers can effectively interact with the PrimapePrediction platform built on Arbitrum One.

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   Next.js 14 (App Router): Enforce the use of the `app/` directory with nested route folders following the `app/[route]/page.tsx` conventions.
    *   Example 1: "Next.js 14 (App Router)" → `app/[route]/page.tsx` conventions
    *   Example 2: "Next.js (Pages Router)" → `pages/[route].tsx` pattern (not applicable here)
    *   Example 3: "React Router 6" → `src/routes/` with `createBrowserRouter`

### Core Directories

*   **Versioned Structure:**

    *   app/api: Next.js 14 API routes with Route Handlers for backend interactions and blockchain integration support.
    *   Example 1: `app/api` → "Next.js 14 API routes with Route Handlers"
    *   Example 2: `src/views` → "Vue 3 composition API components" (for non-Next.js projects)

### Key Files

*   **Stack-Versioned Patterns:**

    *   app/dashboard/layout.tsx: Implements Next.js 14 root layouts for consistent UI structure across documentation pages.
    *   Example 1: `app/dashboard/layout.tsx` → "Next.js 14 root layouts"
    *   Example 2: `pages/_app.js` → "Next.js Pages Router customization" (not used in this project)

## Tech Stack Rules

*   **Version Enforcement:**

    *   next@14: App Router is required; usage of `getInitialProps` is not permitted.
    *   Example: "next@14": "App Router required, no `getInitialProps`"

## PRD Compliance

*   **Non-Negotiable:**

    *   "PrimapePrediction Documentation is being built to provide a comprehensive resource that serves both new and experienced users, simplifying onboarding and offering in-depth technical guidance for developers." : Must adhere to detailed developer guidelines and ensure clear documentation of smart contracts, SDK integration, and wallet connection processes.

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Example: "Next.js 14 Documentation Flow → `app/docs/home/page.tsx` uses server actions for dynamic content loading and interactive features such as ChatGPT integration."
