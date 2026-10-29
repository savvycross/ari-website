/**
 * Client testimonials, shown as taped sticky notes.
 * Strings starting with "TODO_BRIEF" are placeholders for the real quotes.
 */

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "esther-uzodinma",
    name: "Esther Uzodinma",
    company: "EsteBare", // TODO_BRIEF: confirm role/company to display
    quote: "TODO_BRIEF: Esther Uzodinma's testimonial from content/brief.md.",
  },
  {
    id: "estelle-agyeman",
    name: "Estelle Agyeman",
    // OPEN QUESTION: confirm which company this relates to and her role.
    quote: "TODO_BRIEF: Estelle Agyeman's testimonial from content/brief.md.",
  },
];
