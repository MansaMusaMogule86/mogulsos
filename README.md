# Mansas Moguls

### We Architect What’s Next.

A Dubai based creative and technology studio bringing together websites, applications, AI solutions, marketing, brand identity, and business strategy.

This repository contains the source for the Mansas Moguls public website.

## Project status

**In active development. Not yet verified for production.**

The project began as an Astro architecture and starter scaffold. Content, visual design, interactive experiences, and launch verification are being developed incrementally.

The presence of a route, component, or dependency does not mean its functionality is complete.

## Five divisions

| Division | Focus |
|---|---|
| **Moguls Digital** | Websites, ecommerce, application design, digital products, and maintenance |
| **Moguls AI** | AI assistants, workflow automation, knowledge systems, and custom AI applications |
| **Moguls Growth** | Digital marketing, social media, SEO, campaigns, and conversion improvement |
| **Moguls Creative** | Brand identity, art direction, content, presentations, and motion |
| **Moguls Strategy** | Business consulting, positioning, research, roadmaps, and operational planning |

AI and automation are services offered by the company. Their inclusion in website content does not imply that connected automation runs within this website.

## Website experience

The intended experience combines:

* A full width immersive hero.
* Pointer responsive particles and sculptural visuals.
* Interactive division selection with distinct visual themes.
* Scroll driven transitions and capability presentations.
* Service, industry, and solution pages.
* A portfolio prepared for approved client projects.
* Insights and editorial content.
* A guided project concierge and project inquiry journey.
* Responsive layouts and reduced motion alternatives.

Implementation and browser verification are required before treating these capabilities as complete.

## Technology

| Layer | Technology |
|---|---|
| Pages and routing | Astro |
| Interactive components | React islands |
| 3D rendering | Three.js and React Three Fiber |
| Animation | GSAP |
| Styling | Tailwind CSS and shared CSS tokens |
| Content | Local structured data and content files |
| Deployment integration | Vercel adapter, where required by server routes |

Consult `package.json` and the committed lockfile for the actual dependencies and versions.

## Getting started

### Prerequisites

* A Node.js version supported by the pinned dependencies.
* npm.
* Git.

Check your environment:

```bash
node --version
npm --version
```

Follow any Node version configuration included in the repository. Resolve engine warnings before continuing.

### Installation

```bash
npm install
```

If environment configuration is required, copy the example file.

macOS or Linux:

```bash
cp .env.example .env
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Never overwrite an existing `.env` without reviewing it.

### Local development

```bash
npm run dev
```

Default English development URL:

```text
http://localhost:4321/en/
```

Use the URL printed by the terminal if the port changes.

### Validation

```bash
npm run check
npm run build
```

Review the available scripts in `package.json` if they differ from this documentation.

## Dependency management

Keep dependency changes deliberate and reviewable.

* Use compatible, explicitly selected package versions.
* Commit the npm lockfile with dependency changes.
* Review engine and peer dependency requirements.
* Investigate audit findings individually.
* Avoid forced upgrades that introduce incompatible major versions.

For a clean installation from a verified, synchronized lockfile:

```bash
npm ci
```

## Repository guide

| Location | Purpose |
|---|---|
| `src/` | Application source, layouts, components, and routes |
| `src/data/services.ts` | Structured service definitions |
| `public/` | Publicly accessible static assets |
| `docs/00-master-plan.md` | Architecture and implementation plan |
| `docs/01-site-map.md` | Planned website structure |
| `.env.example` | Environment variable template |
| `package.json` | Dependencies and development scripts |

Refer to the current source tree for the complete structure. Planning documents may describe work that has not yet been implemented.

## Visual identity

| Token | Colour |
|---|---|
| Ink | `#141418` |
| Ivory | `#F7F5F0` |
| Electric violet | `#7456F2` |
| Soft lavender | `#EAE4FF` |
| Ice cyan | `#85E8F2` |
| Champagne | `#C8AD7F` |

Violet is the primary action colour.

Division treatments:

* **Digital:** cyan and ivory.
* **AI:** violet and cyan.
* **Growth:** ivory, violet, and restrained champagne.
* **Creative:** lavender, violet, and ink.
* **Strategy:** ink, champagne, and ivory.

Maintain readable contrast and consistent typography across all themes.

## Content and portfolio

Publish specific, useful service descriptions.

Client work must use approved assets and accurately describe the company’s contribution. Clearly distinguish completed work, ongoing projects, and illustrative concepts.

Do not publish:

* Invented testimonials or performance figures.
* Unapproved client logos or confidential material.
* Draft instructions or placeholder copy.
* Empty case studies presented as completed work.

Files in `public/` are publicly accessible. Keep private documents and client information outside that directory.

## Languages

English is the initial implementation language.

French, Arabic, and Chinese scaffolding may exist, but dictionary files alone do not establish complete language support.

Enable a locale only after its content, navigation, metadata, typography, and layout have been reviewed. Arabic requires proper right to left layout verification.

## Forms, concierge, and integrations

Inspect the implementation before assuming a contact flow is connected.

The original scaffold includes placeholder endpoints that intentionally return `503` until configured. GoHighLevel is a planned integration, not a confirmed active connection.

A local guided concierge must be described accurately. Scripted responses do not constitute a connected AI assistant.

Contact actions must clearly distinguish:

* Copying a project brief.
* Opening email or WhatsApp.
* Successfully submitting information to a configured backend.

Never show a successful submission message when no submission occurred.

## Security and privacy

* Keep secrets out of source control and public assets.
* Never expose private API credentials through `PUBLIC_` variables.
* Validate input on the server when accepting submissions.
* Add appropriate abuse protection before enabling public endpoints.
* Collect only information needed for the inquiry.
* Document the actual use of storage, analytics, cookies, and third party services.

## Accessibility and performance

Core content and navigation must remain usable if JavaScript, WebGL, or animation fails.

Before release, verify:

* Keyboard navigation and visible focus.
* Readable contrast and responsive typography.
* Reduced motion behavior.
* Touch interactions and mobile layouts.
* WebGL fallback and resource cleanup.
* Optimized images, video, and 3D assets.
* No animation layer blocking links or controls.
* No unexpected scrolling or horizontal overflow.

## Release checklist

- [ ] Dependency installation completes without unresolved conflicts.
- [ ] Type and Astro checks pass.
- [ ] Production build passes.
- [ ] Root and nested routes load correctly.
- [ ] Published pages contain complete content.
- [ ] Division controls and visual transitions work.
- [ ] Pointer and scroll effects are browser tested.
- [ ] Mobile and reduced motion experiences are verified.
- [ ] Contact actions work and describe their behavior accurately.
- [ ] Portfolio assets and claims are approved.
- [ ] Enabled translations are complete.
- [ ] Canonical URLs, metadata, sitemap, and social previews are verified.
- [ ] Privacy content matches the implementation.
- [ ] Production deployment is checked after publishing.

## Contact

**Mansas Moguls L.L.C-FZ**  
Dubai, United Arab Emirates

## Rights

Unless an accompanying license grants otherwise, original project code, branding, and content are reserved by their respective rights holders.

Third party packages and assets remain subject to their own licenses.
