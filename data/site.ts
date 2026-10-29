/**
 * Site-wide details. Edit the values in quotes to update them everywhere.
 *
 * Anything starting with "TODO_" is a placeholder still waiting on Pere.
 * Search the project for "TODO_" to find them all.
 */

export const site = {
  name: "Pere Arilda",
  initials: "PA",
  // OPEN QUESTION: the brief says "Operations Manager | Business Operations &
  // Executive Support" but the bio says "Executive Virtual Assistant".
  // Using this combined title until Pere confirms.
  title: "Executive Virtual Assistant & Operations Support",
  tagline: "Making Your Day Easier With Structured Support",
  // TODO_BRIEF: replace with the first lines of Pere's bio from content/brief.md.
  intro:
    "I bring structure, coordination and follow-through to the operations of founders and growing businesses.",
  description:
    "Pere Arilda is an Executive Virtual Assistant who brings structure, coordination and follow-through to founders' and growing businesses' operations.",

  // TODO_DOMAIN: set NEXT_PUBLIC_SITE_URL (e.g. https://perearilda.com) when the domain is ready.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://TODO-DOMAIN.example",

  location: {
    city: "Lagos",
    zoneLabel: "WAT",
    timeZone: "Africa/Lagos", // UTC+1
  },

  status: ["Open to new clients", "Remote", "International"],

  contact: {
    email: "perearilda@gmail.com",
    phoneDisplay: "+234 815 415 9539",
    phoneLocal: "08154159539",
    phoneHref: "tel:+2348154159539",
    whatsappHref: "https://wa.me/2348154159539",
    linkedin: "https://www.linkedin.com/in/pere-arilda",
  },

  // Optional extra profiles. Leave as "" to hide the icon.
  socials: {
    instagram: "",
    x: "",
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

/** Who Pere works with — shown as chips on Home and Services. */
export const idealClients = [
  "Founders",
  "SMEs",
  "Healthcare & pharma",
  "Skincare & wellness",
  "Marketing, PR & events",
  "International businesses",
] as const;
