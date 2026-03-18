# Tech Stack — Odoo Upgrade Service Website

## Core Framework
| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 14.2 | React framework with App Router, SSG, and file-based routing |
| **React** | 18.3 | UI component library |
| **TypeScript** | 5.4 | Type-safe JavaScript |

## Styling
| Technology | Purpose |
|---|---|
| **CSS Modules** | Scoped, component-level styling (`.module.css` files) |
| **CSS Custom Properties** | Design token system for colors, spacing, typography |
| **Google Fonts** | Inter (body) + Space Grotesk (headings) |

## Content & Rendering
| Technology | Purpose |
|---|---|
| **Marked** | Markdown-to-HTML parser for Insights and Case Study posts |
| **Static Site Generation (SSG)** | Pre-rendered pages via `generateStaticParams` |

## Animations & 3D
| Technology | Version | Purpose |
|---|---|---|
| **Three.js** | r134 | 3D rendering engine (dependency for Vanta.js) |
| **Vanta.js (Globe)** | Latest | Interactive 3D globe animation in the Hero section |
| **Vanta.js (Dots)** | Latest | Interactive dots animation in the Footer CTA section |
| **Framer Motion** | 11.x | React animation library for UI transitions |

## Deployment & Infrastructure
| Technology | Purpose |
|---|---|
| **Vercel** | Hosting, CI/CD, and edge delivery |
| **Git / GitHub** | Version control and repository hosting |

## SEO & Performance
| Technology | Purpose |
|---|---|
| **Next.js Metadata API** | Page-level `<title>`, `<meta>`, and OpenGraph tags |
| **Semantic HTML5** | Proper heading hierarchy, landmarks, and accessibility |
| **next/image** | Automatic image optimization and lazy loading |
| **next/script** | Efficient third-party script loading strategies |

## Development Tools
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **npm** | Package manager |
| **ESLint** | Code linting (via `next lint`) |
