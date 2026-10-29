/**
 * Testimonials, copied exactly from content/brief.md — including the
 * quotation marks each client's quote was written with.
 *
 * `excerpt` (shown on the Home page) must be one or more complete sentences
 * from the quote, unchanged.
 */

export type Testimonial = {
  id: string;
  name: string;
  paragraphs: string[];
  excerpt: string;
  // TODO_PERE: confirm whether to show a company under the name (e.g. "Karr" for Estelle).
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "esther-uzodinma",
    name: "Esther Uzodinma",
    paragraphs: [
      "\"Pere has been dedicated to support me and my brand, she's always available to take on tasks.\"",
    ],
    excerpt:
      "\"Pere has been dedicated to support me and my brand, she's always available to take on tasks.\"",
  },
  {
    id: "estelle-agyeman",
    name: "Estelle Agyeman",
    paragraphs: [
      "“Pere is a superb virtual assistant who works closely with you to understand and meet your individual needs. She thrives in versatile environments and adapts quickly to different situations.",
      "She is a fast learner, works efficiently and always completes tasks in a timely manner. Having her on board genuinely makes you feel like there are two of you!",
      "Pere handles a range of tasks, including managing emails and bookings, completing standardised forms, and following up on emails. She is reliable, adaptable and a great support to have as part of your team.",
      "I would highly recommend Pere to any entrepreneur, founder or busy professional looking for a dependable virtual assistant who can quickly become an extension of their team. She takes a genuine weight off your shoulders, allowing you to focus on the bigger picture with confidence that the day-to-day tasks are being handled.”",
    ],
    excerpt:
      "She is a fast learner, works efficiently and always completes tasks in a timely manner. Having her on board genuinely makes you feel like there are two of you!",
  },
];
