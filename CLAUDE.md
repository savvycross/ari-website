# Pere Arilda Website — Full Build Prompt for Claude Code

This file replaces every earlier prompt, brief and revision note. Pere's brief, exactly as she wrote it, is in `content/brief.md` (the "Appendix" referred to below).

- **Part A:** the rule about Pere's wording, which overrides everything else
- **Part B:** changes to make to what is already built
- **Part C:** stack, design system and scroll motion
- **Part D:** page-by-page structure
- **Part E:** contact details, SEO, build order and open items

---

## PART A — THE WORDING RULE (most important)

Pere said her grammar and wording were changed. That must not happen again.

1. **Every sentence, heading, list item, result, FAQ answer and testimonial on the site must be copied exactly from the Appendix.** Do not fix grammar, change punctuation, change capitalisation, shorten sentences, merge sentences, change British/American spelling, or "improve" anything. If she wrote "organized" in one place and "organised" in another, keep both as written.
2. **Do not write any new sentences, taglines, summaries or headings.** Section headings must use her own words from the Appendix (for example "Services", "Core Skills", "Ideal Clients", "Tools and Platforms", "Experience and Credibility", "How I Work", "Frequently Asked Questions").
3. **Choosing which of her sentences to show is allowed; changing them is not.** You may show one complete sentence from a paragraph (for example as a short summary on the Home page), but it must be the whole sentence, word for word.
4. **Only these short functional labels may be written by you:** navigation links, button text ("View My Work", "Send message", "Read more"), form field labels and dropdown options, the success/error message after sending the form, numbers like `01` / `(06)`, and the Privacy Policy page. Keep them minimal.
5. **If the layout needs a sentence that is not in the Appendix, do not invent one.** Leave a visible placeholder `TODO_PERE: [what is needed]` and list it in your final report so Pere can write it herself.
6. **Testimonials must be exact.** An excerpt may only be one or more complete sentences from the quote, unchanged, with the client's name exactly as written.
7. Before finishing, **compare every piece of visible text on the site against the Appendix** and report any difference. (`npm run check:copy` does this for the `/data` files.)

---

## PART B — CHANGES TO WHAT IS ALREADY BUILT

The Home page has been built. Pere's client said two things: **it looks like AI made it**, and **her wording was changed**. Fix both.

**Wording fixes:** remove all text written earlier that is not in the Appendix, including:
- The service card summaries (for example "Inbox, calendar and day-to-day admin…")
- The results card labels ("Customer support", "Through influencer coordination", "Operations support") and the results card titles
- Headings such as "What I can take off your plate", "Support that shows up in the results", "Choose how we can work", "What clients say", "Kind words", "Have work that needs handling? Let's talk."
- The status pill "Open to new clients · Remote · International"
- The "Who I help" chips that shortened her list (for example "SMEs") — use her exact Ideal Clients list
- Card text such as "A dedicated block of support each month", "Scope and timeline agreed up front", "Pricing: Tailored quote after a discovery call"
- The footer line "Based in Lagos · Working with clients worldwide"
- The hero subheading and the "Hi, I'm Pere!" photo caption
- The professional title "Executive Virtual Assistant & Operations Support" — use her title exactly: **Operations Manager | Business Operations & Executive Support**

**Design fixes:** see Part C. The earlier page read as AI-generated because:
1. Almost every section is a grid of identical rounded cards with the same shadow.
2. Every section has a small capitals label, then a heading, then a hand-drawn underline.
3. Every service card has an icon in a square.
4. Sparkles, floral pattern, tape on buttons, underlines and handwritten names are used everywhere.
5. The same centred three-column grid repeats down the page.
6. Pill chips are used for everything.
7. Her portrait is small, in a polaroid frame.

---

## PART C — STACK, DESIGN SYSTEM AND MOTION

### Stack
- Next.js (App Router) + TypeScript + Tailwind CSS, statically exported for Vercel or Netlify.
- Content in typed data files (`/data/site.ts`, `/data/services.ts`, `/data/experience.ts`, `/data/testimonials.ts`, `/data/faq.ts`), copied exactly from the Appendix, so Pere can edit text without touching layout code.
- Fonts via `next/font`. Images via `next/image` as `.webp`/`.avif`.
- No database. The contact form posts to Formspree (or similar), endpoint in `.env`.
- No Calendly or booking widget anywhere.

### Reference sites
Take inspiration from layout, restraint and motion only. **Do not copy their code, text, images, icons or illustrations.**

- **https://crossmakele.vercel.app — main reference.** Copy its restraint: big left-aligned type, thin dividing lines, full-width work rows, numbered lists, very few boxes, and its scroll reveal motion. Its contact section is the model for Pere's Contact page.
- **https://www.oyin.design** — colour (deep burgundy `#5e1a17`) and premium editorial feel.
- **https://www.rashedatjinadu.com** — tape on a photo and a hand-drawn underline, used **once each** only.
- **https://wasilah.online** — the live local-time clock in the header, and the idea of client engagements opening like folders.

### Colours
| Token | Value | Use |
|---|---|---|
| `--ink` | `#2a1412` | Body text |
| `--brand` | `#5e1a17` | Buttons, links, status dot, one full stop in big headlines |
| `--brand-soft` | `#8a3a33` | Hover |
| `--cream` | `#fbf6f1` | Page background |
| `--surface` | `#f5ece6` | Contact cards and form panel |
| `--line` | `#e6d9d2` | 1px dividers and borders |
| `--muted` | `#7a6a66` | Secondary text |
| `--marker` | `#e8b04a` | The single hero underline and the tape |

Optional light/dark toggle in the header: dark mode uses a near-black background, cream text, burgundy lightened slightly for contrast.

### Design rules
- **Typography carries the design:** one serif for display headings, one sans for body, and a mono for tiny labels and numbers only. H1 `clamp(2.25rem, 5.4vw, 5.25rem)`, H2 `clamp(1.75rem, 3.2vw, 3rem)`, left-aligned.
- **Lines, not boxes:** separate sections and list items with 1px borders. Cards only for things that are clickable objects (case-study rows, contact link cards, the form panel).
- **Uneven layouts:** text in 5 columns with image in 7, heading left with list right, and so on. Not the same grid in every section.
- **Remove:** sparkles, icon tiles, handwritten names, tape on buttons, small capitals labels above every heading, pill chips for lists.
- **Keep once each:** tape on the hero portrait, a hand-drawn underline under one word of the hero headline, the live clock in the header. Floral texture: remove, or keep very faint behind the hero only.
- **Her portrait is large.**
- Fully responsive (test at 375, 768, 1280px), mobile menu as a full-screen overlay, skip-to-content link, visible focus states, AA contrast, alt text.

### Scroll motion
A small system: `data-reveal` attributes, an IntersectionObserver that adds a class when an element enters the viewport, and CSS transitions. No GSAP.

| `data-reveal` | Start | End | Timing |
|---|---|---|---|
| `words` (headings) | Split into word spans inside an `overflow:hidden` line; each word `opacity:0; translateY(~0.6em)` | `opacity:1; translateY(0)` | 1s, `cubic-bezier(0.16,1,0.3,1)`, each word 45ms after the previous |
| `text` (paragraphs) | `opacity:0; translateY(20px)` | normal | 0.8s same easing; stagger with a `--d` CSS variable (150ms, 270ms…) |
| `ui` (labels, buttons, small items) | `opacity:0; translateY(10px)` | normal | 0.5s same easing |
| `media` (photos) | `opacity:0; clip-path: inset(10% 8% 0% round 14px)`; inner image `scale(1.08)` | `clip-path: inset(0 round 14px)`; image `scale(1)` | clip 1.4s `cubic-bezier(0.65,0,0.35,1)`; image 1.6s `cubic-bezier(0.16,1,0.3,1)` |
| `card` | `opacity:0; translateY(44px)` | normal | 0.9s, 80ms stagger |
| `section` (big blocks) | `opacity:0; translateY(56px) scale(0.985)` | normal | 1s |

- Trigger when about 15% is visible (`rootMargin: "0px 0px -10% 0px"`), animate once, then stop observing.
- Hero animates on page load in order: status line → headline words → paragraph → buttons → portrait clip reveal.
- Hover on case-study images: inner image `scale(1.03)` over 1.4s. Text links get an underline that grows from left to right.
- Optional desktop-only cursor label on case-study rows ("View").
- A `js` class on `<html>` (tiny inline script) so content stays visible if JavaScript fails.
- With `prefers-reduced-motion: reduce`, show everything immediately.

---

## PART D — PAGES

Nav: **Home · About · Services · Experience · How I Work · Contact**, plus a filled button linking to Contact. Header shows her name, the live clock, and an optional theme toggle.

All text below is pulled from the Appendix exactly.

### Home
1. **Hero:** small line with a burgundy dot: her Professional Name and Professional Title exactly. H1: her Tagline exactly. Paragraph: the second paragraph of her bio exactly. Buttons: "Let's work together" (to Contact) and "View My Work". Large portrait with one piece of tape, `media` reveal.
2. **About strip:** left, in large serif: "I’m an Executive Virtual Assistant." Right: her bio paragraphs about the two brands, exactly. Link to About.
3. **Experience and Credibility:** count `(02)`. Two full-width rows: index, client name (EsteBare / Karr), her one-line summary exactly, and her workstream headings as small tags. Each row links to the case study. If there is no photo, use a typographic burgundy panel with the client name.
4. **Services:** count `(06)`. Numbered list with thin dividers: number, service name exactly, the first sentence of her paragraph exactly (Workflow and Systems Organisation has no paragraph, so show its bullet points instead), link to Services. No icons, no cards.
5. **How I Work:** her intro line exactly, then the 5 steps (title and description exactly) as a numbered row on desktop, vertical on mobile, with dividing lines.
6. **Testimonials:** one at a time, large serif quote, name below. Esther's full quote exactly; for Estelle, one or more complete sentences exactly. Simple arrows or fade to switch.
7. **Contact block:** the Contact page layout, condensed.

### About
Large portrait. Full Professional Bio exactly. **Core Skills** (her 9 items exactly) as a simple list in columns. **Ideal Clients** (her 7 items exactly). **Tools and Platforms** (her sentence exactly; show only the tools Pere confirms). Availability text exactly.

### Services
Each of the six service sections, in her order: heading exactly, bullet list exactly, paragraph exactly. Tech & Tool Support keeps "(Basic Level)". Layout: heading and paragraph left, tasks right, divided by lines.

### Experience (Experience and Portfolio)
Index with two rows (EsteBare, Karr) that open the case studies, using the folder idea subtly.
Case study pages `/experience/estebare` and `/experience/karr`: client name, her summary line, each workstream with its bullets and RESULT exactly, then the testimonial exactly (Esther under EsteBare, Estelle's full quote under Karr). Button to request the portfolio, linking to Contact.

### How I Work
Intro line, 5 steps, Availability text, and the 9 FAQs as an accordion, all exactly as written.

### Contact (modelled on the Cross Makele contact section)
Two columns on desktop (about 45% / 55%), stacked on mobile.

**Left column**
1. Small label `● Contact`.
2. Big headline with a burgundy full stop: **`TODO_PERE: contact page headline`**. Pere will provide this; do not write one.
3. Contact link cards (rounded, 1px border, `--surface` background, `↗` top-right, whole card clickable):
   - Large card: label `EMAIL`, value `perearilda@gmail.com`, small envelope icon in a tinted square, `mailto:` link.
   - Large card: label `WHATSAPP`, value `+234 815 415 9539`, link `https://wa.me/2348154159539`.
   - Two small cards side by side: `LinkedIn` and `Phone` (`tel:+2348154159539`).
4. Small label `● Availability`, then her Availability text exactly.

**Right column: form panel** (large rounded panel, 1px border)
- Row: Name | Email
- Row: Service needed (her six service names exactly, plus "Not sure yet") | Engagement type (Monthly retainer, Project, Not sure yet)
- Timeline (As soon as possible, Within 2 weeks, Within a month, Flexible)
- Message (textarea)
- Full-width pill button "Send message ↗", burgundy with cream text
- Pill-shaped inputs, bold labels above, muted placeholders, burgundy focus ring
- Short success and error messages inline after sending
- No budget field, no Calendly

Motion: headline `words`, contact cards `card` with stagger, form panel `section`.

### Footer
Name, title exactly, nav links, LinkedIn / email / WhatsApp icons, Privacy Policy link, © year.

### Privacy Policy
Simple page covering what the form collects, how it is used, and how to ask for deletion. Mark it as a template for Pere to review.

---

## PART E — DETAILS, SEO, BUILD ORDER, OPEN ITEMS

### Confirmed details (`/data/site.ts`)
- Email: perearilda@gmail.com
- Phone / WhatsApp: +234 815 415 9539 (local format 08154159539)
- LinkedIn: https://www.linkedin.com/in/pere-arilda
- No Calendly
- EsteBare and Karr may be named publicly

Section 6 of the brief was written before the contact details were confirmed. Use the confirmed details above for the email, phone, WhatsApp and LinkedIn links.

### SEO
Page titles built from her name and title, e.g. "Pere Arilda | Operations Manager". Meta descriptions use her own sentences exactly. Open Graph image 1200×630 in the brand colours with her name in the serif font. `sitemap.xml`, `robots.txt`, favicon with her initials "PA".

### Build order
1. Replace `content/brief.md` with the Appendix. Rebuild the `/data` files from it exactly.
2. Update design tokens and build the reveal system.
3. Rebuild Home and Contact. Screenshot both at 375, 768 and 1280px, plus screenshots mid-reveal to show the motion. **Stop for review.**
4. Build About, Services, Experience (with both case studies), How I Work, Privacy Policy.
5. Run a text check against the Appendix, a responsive and accessibility pass, and Lighthouse (aim for 90+).
6. Write `README.md` explaining how Pere edits text in `/data` and swaps images in `/public/images`.

### Open items to list in the report
- `TODO_PERE` contact page headline
- Domain name and Formspree endpoint (leave in `.env.example`)
- Final list of tools she can confidently demonstrate
- Her location for the header clock (currently assumed Lagos, WAT, from her Nigerian phone number — confirm)
- Whether Estelle Agyeman's testimonial should show "Karr" under her name
- Any photos for the EsteBare and Karr rows

@AGENTS.md
