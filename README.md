# WIN — Modern Design Agency Homepage

A modern digital design agency homepage built with Next.js 16, React 19, and Tailwind CSS.

## Setup Instructions

### Prerequisites
- Node.js 18.18.0 or later
- npm (bundled with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/akil4/win-design-agency-homepage.git
   cd win-design-agency-homepage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. Production build:
   ```bash
   npm run build
   npm run start
   ```

5. Type check and linting:
   ```bash
   npm run lint
   ```

## Tech Stack Used

- **Framework:** Next.js 16.4.6 (App Router, Turbopack)
- **UI Library:** React 19.0.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.15 with PostCSS and Autoprefixer
- **Smooth Scrolling:** Lenis 1.3.27
- **Icons:** Lucide React 0.460.0
- **Theme Management:** next-themes 0.4.3 (Dark / Light mode)

## Assumptions & Additional Features

### Assumptions
- **Generic Studio Brand:** Built under the fictional brand `WIN.` with generic contact details (`hello@win.studio`, Chennai, India) to avoid brand or trademark conflicts with any real corporate entity while showcasing design capabilities.
- **Client-Side Form Handling:** Since no backend API endpoint or database was specified in the requirements, the contact form uses client-side validation (RFC-compliant email regex, character length checks) with simulated network latency and state reset.
- **Asset Hosting:** Case study images are delivered via Unsplash CDNs with explicit responsive aspect ratios configured in `next.config.mjs`.

### Additional Features
- **Dynamic Livery Selector:** An interactive starting grid palette switcher inspired by MotoGP prototypes (Desmosedici Red, RC16 Orange, VR46 Neon, YZR-M1 Blue, RS-GP Violet, RC213V Honda) that updates accent colors across cards, buttons, badges, and focus rings in real time via React Context.
- **Lenis Smooth Inertial Scrolling:** Integrated Lenis smooth momentum scrolling with sticky header offset compensation (`-80px`) so anchor navigation glides to sections without harsh jumps.
- **Utopia Fluid Typography & Spacing:** Replaced discrete breakpoint font resizing with continuous mathematical scales (`clamp()`) calculated from 360px mobile to 1440px desktop, ensuring typography scales smoothly on any viewport size without horizontal overflow.
- **Full Viewport Section Framing:** Each major section (`Hero`, `Services`, `Portfolio`, `Process`, `Contact`) occupies at minimum full screen height (`min-h-[100dvh]`) with vertical centering on desktop, while expanding naturally on mobile screens to prevent content clipping.
- **Hydration-Safe Theme Toggle:** Dark and light mode toggle with SSR hydration guards to prevent server-client rendering mismatches.
- **Custom Vector Brand Mark:** Hand-coded SVG geometric "W" Apex monogram and matching vector favicon (`app/icon.svg`).
