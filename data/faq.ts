/**
 * Ways to work together (Home) and the FAQ (How I Work).
 * Strings starting with "TODO_BRIEF" are placeholders for Pere's own wording.
 */

export type WayToWork = {
  name: string;
  bestFor: string;
  points: string[];
  pricing: string;
  cta: string;
};

export const waysToWork: WayToWork[] = [
  {
    name: "Monthly Retainer",
    bestFor: "Ongoing support, month to month",
    points: [
      "A dedicated block of support each month",
      "TODO_BRIEF: retainer details from the FAQ",
    ],
    pricing: "Tailored quote after a discovery call",
    cta: "Enquire about a retainer",
  },
  {
    name: "Project-Based Support",
    bestFor: "A defined piece of work with a clear finish line",
    points: [
      "Scope and timeline agreed up front",
      "TODO_BRIEF: project details from the FAQ",
    ],
    pricing: "Tailored quote after a discovery call",
    cta: "Enquire about a project",
  },
];

export type FaqItem = { question: string; answer: string };

// TODO_BRIEF: all nine questions and answers from content/brief.md.
export const faq: FaqItem[] = [];
