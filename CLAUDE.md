# Build Prompt: Pere Arilda — Executive Virtual Assistant Website

> **How to use this:** Create an empty project folder. Save Pere's website brief into it as `content/brief.md`. Save this file as `CLAUDE.md` in the project root. Then open Claude Code in that folder and say: *"Read CLAUDE.md and content/brief.md, then build the site. Start with the Home page and show me before doing the rest."*

---

## 1. What you are building

A multi-page portfolio website for **Pere Arilda**, an Executive Virtual Assistant who brings structure, coordination and follow-through to founders' and growing businesses' operations.

**Goal of the site:** position Pere as a dependable operations professional, prove it with real results, and get qualified prospects to book a discovery call or send an enquiry.

**All copy comes from `content/brief.md`.** Use her wording. You may tighten sentences, fix grammar and split long paragraphs, but do not invent results, clients, numbers, testimonials or credentials. Where something is missing, use a clearly marked placeholder (see section 7).

---

## 2. Tech stack

- **Next.js (App Router) + TypeScript + Tailwind CSS**, statically exported so it can be hosted free on Vercel or Netlify.
- Content stored in typed data files (`/data/services.ts`, `/data/experience.ts`, `/data/testimonials.ts`, `/data/faq.ts`, `/data/site.ts`) so Pere can update text without touching layout code.
- Fonts via `next/font` (Google Fonts).
- Light animation with Framer Motion or CSS only — subtle, and respects `prefers-reduced-motion`.
- Images as optimized `.webp`/`.avif` through `next/image`.
- No database. Contact form posts to a form service (Formspree or similar), with the endpoint in an env variable.

---

## 3. Design direction

The client wants to closely model three reference sites. **Take inspiration from their layout ideas and personality — do not copy their code, images, illustrations, icons or text.** All visual assets must be original.

### What to borrow from each

**rashedatjinadu.com** (structure and personality)
- Hand-drawn accents: short marker-style underline strokes beneath section headings, and a "tape" detail holding photos and buttons down, like items pinned to a board.
- Hero: portrait on one side "taped" to the page, big confident headline, one-line subheading, two buttons (primary + secondary).
- Numbered cards (`01`, `02`, `03`) for featured work, ways to work together, and principles.
- A "Choose how we can work" section of side-by-side engagement cards with checklist bullets and a button on each, followed by a small "Not sure which fits? Book a call" block.
- "How I Work" as a numbered list of principles, each with a small icon.
- Testimonials as sticky-note style cards with tape on the corners, in a horizontally scrollable row.
- Closing CTA band before the footer: "Have work that needs handling? Let's talk."
- Persistent "Book a Call" button in the nav.

**oyin.design** (colour and refinement)
- Its signature colour is a deep oxblood/burgundy (`#5e1a17`). Use it as Pere's primary brand colour.
- Editorial, premium feel: generous whitespace, strong serif headings, restrained palette.

**wasilah.online** (signature interaction)
- Soft, feminine floral/blush background texture behind the hero.
- A live clock in the header showing Pere's local time (e.g. "Lagos · WAT · 14:32") — a nice signal that she works remotely with international clients.
- A "desktop" metaphor: navigation shown as folder/file icons (About Me, My Work, Contact). Adapt this for Pere: on the Experience page, show each client engagement as a **folder** you open to reveal the case study. This fits an operations/organisation professional perfectly.
- Status pill in the hero: "Open to new clients · Remote · International".

### Visual system

| Token | Value | Use |
|---|---|---|
| `--ink` | `#2a1412` | Body text |
| `--brand` | `#5e1a17` | Primary buttons, headings accents, footer background |
| `--brand-soft` | `#8a3a33` | Hover states |
| `--blush` | `#f3dfd8` | Section backgrounds, cards |
| `--cream` | `#fbf6f1` | Page background |
| `--marker` | `#e8b04a` | Hand-drawn underline strokes and tape |
| `--muted` | `#7a6a66` | Secondary text |

- Headings: a characterful serif (e.g. **Fraunces** or **Instrument Serif**).
- Body: a clean sans (e.g. **DM Sans** or **Manrope**).
- Rounded corners (12–20px), soft shadows, thin borders in a muted tone.
- Draw the marker strokes and tape pieces as original inline SVGs.
- Fully responsive; test at 375px, 768px, 1280px. Mobile nav is a full-screen overlay menu.
- Accessible: semantic HTML, alt text, visible focus states, skip-to-content link, AA contrast.

---

## 4. Site map and page content

Nav: **Home · About · Services · Experience · How I Work · Contact** + a **Let's Talk** button linking to the Contact page.

**No Calendly or booking widget anywhere on the site.** Wherever the reference sites use "Book a Call", Pere's site sends people to the Contact page (form, email, WhatsApp).

### Home
1. **Hero** — taped portrait; status pill; headline built from her tagline ("Making Your Day Easier With Structured Support"); subheading from her bio's first lines; buttons "Let's Work Together" (to Contact) and "View My Work".
2. **Who I help** — chips/strip of ideal clients (founders, SMEs, healthcare & pharma, skincare & wellness, marketing/PR/events, international businesses).
3. **Results snapshot** — 3 numbered highlight cards: 400+ customers supported (EsteBare), award-winning brand visibility via influencer coordination (EsteBare), client contracts & intern team coordination (Karr). Link to Experience.
4. **Services preview** — 6 cards (Administrative Support, Tech & Tool Support, Workflow & Systems, Communication & Client Relations, Customer Support, Custom Services) with icon + one line each. Link to Services.
5. **Ways to work together** — 2 engagement cards: **Monthly Retainer** and **Project-Based Support**, each with checklist bullets drawn from the FAQ, and "Pricing: tailored quote after a discovery call" (she does not publish rates). Then a "Not sure which fits? Tell me what you need" block linking to Contact.
6. **Testimonials** — Esther Uzodinma and Estelle Agyeman as taped sticky notes.
7. **Closing CTA band.**

### About
- Portrait, full professional bio, her "with me by your side" closing line.
- **Core skills** as a grid of small labelled tiles (9 skills).
- **Tools I use** as a logo-style row (Google Workspace, Canva, ClickUp, Notion, Airtable, Slack, Calendly, Zapier) — use plain text labels or simple original icons, not copied brand logos unless official brand assets are downloaded properly.
- Location/time zone and travel availability.

### Services
- Each of the 6 service categories as a section/card: title, her description paragraph, the bullet list of tasks.
- Note "Tech & Tool Support" is basic-level, as stated in the brief.
- End with ideal clients and a CTA.

### Experience & Portfolio
- Folder-style index: two folders, **EsteBare** and **Karr**.
- Each opens a case study page (`/experience/estebare`, `/experience/karr`) with: one-line summary, then each workstream as a block of *What I did* (bullets) → *Result* (highlighted), then the client's testimonial at the end.
- A "Request full portfolio" button (her FAQ says she will share it).

### How I Work
- The 5-step process as a numbered vertical timeline (Understand → Define Scope → Organise → Execute → Review).
- Availability statement.
- FAQ accordion with all 9 questions.

### Contact
- Short intro and an enquiry form: name, email, business name, what you need help with (select matching her service categories), project vs. retainer, message.
- Direct contact cards:
  - **Email:** perearilda@gmail.com (`mailto:` link)
  - **Phone / WhatsApp:** +234 815 415 9539 (`tel:+2348154159539`, and a WhatsApp button linking to `https://wa.me/2348154159539`)
  - **LinkedIn:** https://www.linkedin.com/in/pere-arilda

### Footer (all pages)
Name and title, nav links, social links, "Privacy Policy" link, © year.

### Privacy Policy
A simple page covering what the contact form collects, how it is used, and how to request deletion. Mark it as a template that Pere should review.

---

## 5. SEO and metadata
- Unique title and meta description per page (e.g. "Pere Arilda | Executive Virtual Assistant & Operations Support").
- Open Graph image (1200×630) generated from the brand colours and her name.
- `sitemap.xml`, `robots.txt`, favicon from her initials ("PA") in the brand colour.

---

## 6. Build order
1. Set up the project, design tokens, fonts, and shared components (Nav, Footer, Button, SectionHeading with marker stroke, Tape, Card, TestimonialNote, Folder).
2. Build Home and pause for review.
3. Build the remaining pages.
4. Responsive, accessibility and Lighthouse pass (aim for 90+ on all four scores).
5. Write a short `README.md` explaining how Pere can edit content in `/data` and swap images in `/public/images`.

---

## 7. Placeholders and open items

### Confirmed details (store in `/data/site.ts`)
- Email: perearilda@gmail.com
- Phone / WhatsApp: +234 815 415 9539 (local format 08154159539)
- LinkedIn: https://www.linkedin.com/in/pere-arilda
- Header clock location: Lagos · WAT (UTC+1)
- Client brands **EsteBare** and **Karr** may be named publicly.

### Still to come
Use visible, easy-to-find placeholders (e.g. `TODO_DOMAIN`) in `/data/site.ts`:

- Other social profiles (optional; hide icons if empty)
- Domain name
- Headshot and any other photos (use neutral placeholder images sized correctly until supplied)
- Formspree (or similar) endpoint

### Content questions to confirm with Pere (do not guess)
- **Title:** the brief says "Operations Manager | Business Operations & Executive Support" but the bio says "Executive Virtual Assistant." Use "Executive Virtual Assistant & Operations Support" for now and flag it.
- **Testimonial attribution:** confirm which company Estelle Agyeman's testimonial relates to and her role/company name to display.
- **Client logos:** brand names are approved; use text names unless Pere supplies logo files.
- **Tools:** the brief says to show only tools she can confidently demonstrate — confirm the final list.

@AGENTS.md
