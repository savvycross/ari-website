/**
 * Site-wide details and Pere's About text.
 *
 * Every sentence here is copied exactly from content/brief.md.
 * Do not reword it — if something needs changing, Pere changes it here.
 *
 * Anything starting with "TODO_" is still waiting on Pere.
 * Search the project for "TODO_" to find them all.
 */

export const site = {
  name: "Pere Arilda",
  initials: "PA",
  title: "Operations Manager | Business Operations & Executive Support",
  tagline: "Making Your Day Easier With Structured Support",

  // TODO_DOMAIN: set NEXT_PUBLIC_SITE_URL (e.g. https://perearilda.com) once the domain is chosen.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://TODO-DOMAIN.example",

  // Header clock. Assumed from her Nigerian phone number — confirm with Pere.
  location: {
    city: "Lagos",
    zoneLabel: "WAT",
    timeZone: "Africa/Lagos",
  },

  contact: {
    email: "perearilda@gmail.com",
    phoneDisplay: "+234 815 415 9539",
    phoneHref: "tel:+2348154159539",
    whatsappHref: "https://wa.me/2348154159539",
    linkedin: "https://www.linkedin.com/in/pere-arilda",
  },

  // TODO_FORM_ENDPOINT: set NEXT_PUBLIC_FORM_ENDPOINT to the Formspree (or similar) URL.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Experience", href: "/experience/" },
  { label: "How I Work", href: "/how-i-work/" },
  { label: "Contact", href: "/contact/" },
] as const;

/** Professional Bio, one entry per paragraph. */
export const bio = [
  "I’m an Executive Virtual Assistant.",
  "I support founders, business owners, and professionals by bringing structure, coordination, and follow-through to their operations. My approach is proactive and detail-oriented, with a focus on understanding each business’s unique needs and providing tailored support that keeps daily operations running smoothly.",
  "I’ve had the opportunity to work behind the scenes with different brands, contributing to their operations and growth in different ways.",
  "With one startup brand, my contributions supported its growth to over 400 customers within three months. Through influencer coordination and operational support, I also contributed to increasing the brand’s visibility, helping it gain recognition and win awards at major beauty shows in its country.",
  "With another brand, I supported business operations by managing client contracts and overseeing intern training. This helped create better coordination across client engagements, strengthen internal processes.",
  "With me by your side, you can enjoy more productive, stress-free days, stay on top of your priorities, and make meaningful progress towards your goals with ease.",
] as const;

export const coreSkills = [
  "Attention to detail",
  "Problem Solving",
  "Proactive Thinking",
  "Resourcefulness",
  "Emotional Intelligence",
  "Strong Communication",
  "Time Management",
  "Confidentiality and integrity",
  "Fast Learning",
] as const;

export const idealClients = [
  "Founders and entrepreneurs.",
  "Small and medium-sized businesses.",
  "Growing companies that need stronger operational organisation.",
  "Healthcare and pharmaceutical businesses.",
  "Aesthetic, skincare, and wellness businesses.",
  "Marketing, PR, influencer, and event-related businesses.",
  "International businesses seeking remote operational and administrative support.",
] as const;

export const tools = {
  // TODO_PERE: confirm which tools she can confidently demonstrate before launch.
  sentence: "Google Workspace, Canva, ClickUp, Notion, Airtable, Slack, Calendly, and Zapier.",
} as const;

export const availability = {
  label: "Availability",
  text: "Remote engagements, with working hours and availability agreed upon with each client, available to travel when necessary and convenient for both parties.",
} as const;

export const contactPage = {
  // TODO_PERE: Pere will write the Contact page headline. Do not invent one.
  headline: "TODO_PERE: contact page headline",
} as const;
