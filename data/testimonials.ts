/**
 * Testimonials, copied exactly from content/brief.md — including the
 * quotation marks each client's quote was written with.
 *
 * `excerpt` (shown on the Home page) must be one or more complete sentences
 * from the quote, unchanged.
 * `role` is the caption under the name, as confirmed by Pere.
 * `photo` lives in /public/images/testimonials.
 */

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  photo: string;
  paragraphs: string[];
  excerpt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "esther-uzodinma",
    name: "Esther Uzodinma",
    role: "EsteBare",
    // TODO_PERE: replace with a larger photo of Esther (current one is cropped from a screenshot).
    photo: "/images/testimonials/esther-uzodinma.webp",
    paragraphs: [
      "\"Pere has been dedicated to support me and my brand, she's always available to take on tasks.\"",
    ],
    excerpt:
      "\"Pere has been dedicated to support me and my brand, she's always available to take on tasks.\"",
  },
  {
    id: "estelle-agyeman",
    name: "Estelle Agyeman",
    role: "Founder of Karr",
    photo: "/images/testimonials/estelle-agyeman.webp",
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

export const testimonialById = (id: string) => testimonials.find((t) => t.id === id);
