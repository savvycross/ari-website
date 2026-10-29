/**
 * Wording check: every piece of Pere's copy must appear in content/brief.md
 * exactly as she wrote it.
 *
 *   npm run check:copy        (checks /data, and /out if the site is built)
 *
 * 1. Every string in /data is looked up in the brief, character for character.
 * 2. Every visible text fragment in the built pages (/out) must either be in
 *    the brief or be one of the short functional labels listed below
 *    (navigation, buttons, form fields, page furniture).
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const brief = readFileSync(join(root, "content/brief.md"), "utf8");
const norm = (s) => s.replace(/\s+/g, " ").trim();
const briefN = norm(brief);
const inBrief = (s) => briefN.includes(norm(s));

// Keys whose values are links, IDs or settings rather than visible copy.
const SKIP_KEYS = new Set([
  "slug", "id", "href", "url", "email", "phoneDisplay", "phoneHref", "whatsappHref",
  "linkedin", "formEndpoint", "location", "initials", "image", "company", "testimonialId",
]);

const problems = [];

function walk(value, path) {
  if (typeof value === "string") {
    if (value.startsWith("TODO_")) return;
    if (!inBrief(value)) problems.push(`${path}: not found in brief → "${value}"`);
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${path}[${i}]`));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) if (!SKIP_KEYS.has(k)) walk(v, `${path}.${k}`);
  }
}

const files = ["site", "services", "experience", "testimonials", "faq"];
for (const f of files) {
  const mod = await import(join(root, "data", `${f}.ts`));
  for (const [name, value] of Object.entries(mod)) {
    if (name === "nav") continue; // navigation labels are functional
    walk(value, `data/${f}.ts → ${name}`);
  }
}

// Excerpts and summaries must be whole sentences from their source.
const { services } = await import(join(root, "data/services.ts"));
for (const s of services) {
  if (s.summary && !(s.paragraph ?? "").startsWith(s.summary))
    problems.push(`services → ${s.title}: summary is not the opening sentence(s) of the paragraph`);
}
const { testimonials } = await import(join(root, "data/testimonials.ts"));
for (const t of testimonials) {
  if (!t.paragraphs.join(" ").includes(t.excerpt))
    problems.push(`testimonials → ${t.name}: excerpt is not taken word for word from the quote`);
}

// ---------------------------------------------------------------------------
// Built pages
// ---------------------------------------------------------------------------

// Short functional labels written for the site (allowed by the wording rule).
const FUNCTIONAL = new Set([
  // navigation, header & footer
  "Home", "About", "Services", "Experience", "How I Work", "Contact", "Privacy Policy",
  "Skip to content", "Open menu", "Close menu", "Menu", "Let's talk", "Let's work together",
  "View My Work", "Read more", "View", "View case study", "Switch to dark theme", "Switch to light theme",
  "Lagos", "WAT", "·", "|", "—", "/", "↗", "→", "←", "(Pere's local time)", "All rights reserved.",
  "LinkedIn", "Email", "WhatsApp", "Phone", "EMAIL", "WHATSAPP", "Previous testimonial",
  "Next testimonial", "Testimonials", "of", "Main", "Mobile", "Footer",
  "Portrait of Pere Arilda", "perearilda@gmail.com", "+234 815 415 9539",
  // form
  "Name", "Service needed", "Engagement type", "Timeline", "Message", "Your name",
  "you@company.com", "Select a service", "Select a type", "Select a timeline", "Not sure yet",
  "Monthly retainer", "Project", "As soon as possible", "Within 2 weeks", "Within a month",
  "Flexible", "Send message", "Sending…", "Tell me what you need help with…",
]);

const outDir = join(root, "out");
if (existsSync(outDir)) {
  const pages = [];
  const collect = (dir) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) {
        if (name !== "_next") collect(p);
      } else if (name.endsWith(".html") && !p.includes("privacy-policy") && !p.includes("/404") && !p.includes("_not-found")) {
        pages.push(p);
      }
    }
  };
  collect(outDir);

  const decode = (s) =>
    s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
      .replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));

  for (const page of pages) {
    const html = readFileSync(page, "utf8")
      .replace(/<script[\s\S]*?<\/script>/g, "")
      .replace(/<style[\s\S]*?<\/style>/g, "")
      .replace(/<svg[\s\S]*?<\/svg>/g, "");
    const fragments = new Set();
    // Visible text between tags
    for (const m of html.split(/<[^>]+>/)) {
      const t = norm(decode(m));
      if (t) fragments.add(t);
    }
    // Text that screen readers / browsers show: aria-label, alt, placeholder, title, meta description
    for (const m of html.matchAll(/\s(?:aria-label|alt|placeholder|title)="([^"]*)"/g)) fragments.add(norm(decode(m[1])));
    for (const m of html.matchAll(/<meta name="description" content="([^"]*)"/g)) fragments.add(norm(decode(m[1])));
    const rel = page.replace(outDir, "out");
    for (const t of fragments) {
      if (!t || /^[\d\s().:/·|-]+$/.test(t)) continue; // numbers, times, counts
      if (t.startsWith("TODO_") || t.startsWith("©")) continue;
      const ok = (x) => FUNCTIONAL.has(x) || FUNCTIONAL.has(x.replace(/’/g, "'")) || inBrief(x);
      if (ok(t)) continue;
      // Page titles like "Contact | Pere Arilda" are built from allowed parts.
      if (t.includes(" | ") && t.split(" | ").every(ok)) continue;
      problems.push(`${rel}: "${t}"`);
    }
  }
}

if (problems.length) {
  console.log(`✗ ${problems.length} piece(s) of text are not in content/brief.md:\n`);
  for (const p of problems) console.log("  - " + p);
  process.exit(1);
}
console.log("✓ All copy matches content/brief.md");
