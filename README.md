# Pere Arilda — website

Next.js (App Router) + TypeScript + Tailwind CSS, exported as a static site.

## Preview it

**On your own computer (localhost)**, with [Node.js](https://nodejs.org) 20 or newer installed:

```bash
git clone https://github.com/savvycross/ari-website.git
cd ari-website
git checkout claude/new-session-40dsu0
npm install
npm run dev
```

Then open http://localhost:3000. Changes to files show up straight away.

`npm run preview` builds the real static site and serves it at http://localhost:3000. That is exactly what will go live.

**As a shareable link (Vercel):** in Vercel choose *Add New → Project*, import `savvycross/ari-website`, and click *Deploy* (no settings needed). Every push to any branch then gets its own preview URL that can be sent to Pere.

## Editing text

All of Pere's wording lives in `/data`, copied exactly from `content/brief.md`:

| File | What's in it |
|---|---|
| `data/site.ts` | Name, title, tagline, bio, core skills, ideal clients, tools, availability, contact details |
| `data/services.ts` | The six services: tasks, paragraph, and the sentence shown on the Home page |
| `data/experience.ts` | EsteBare and Karr: summaries, workstreams and results |
| `data/testimonials.ts` | Esther's and Estelle's quotes |
| `data/faq.ts` | How I Work steps and the nine FAQs |

After changing any text, run `npm run check:copy`. It confirms every sentence on the site still matches `content/brief.md` word for word. If Pere rewrites something, update `content/brief.md` too.

Anything starting with `TODO_` is still waiting on Pere. Search the project for `TODO_` to find them all.

## Images

Photos live in `/public/images`. To swap the portrait, replace `public/images/pere-portrait.webp` with a new `.webp` of the same name (portrait shape, about 1100×1375px).

After changing Pere's name or title, run `node scripts/generate-og.mjs` to refresh the social-sharing image.

## Settings

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL`: the live domain, once chosen
- `NEXT_PUBLIC_FORM_ENDPOINT`: the Formspree form URL. Until this is set, the contact form shows an error asking people to email instead.

On Vercel, add the same two values under *Project → Settings → Environment Variables*.
