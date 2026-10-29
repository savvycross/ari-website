/**
 * Client engagements. Each one becomes a folder on the Experience page and a
 * case study at /experience/<slug>.
 *
 * `highlights` feed the numbered "Results snapshot" cards on Home.
 * Strings starting with "TODO_BRIEF" are placeholders for Pere's own wording.
 */

export type Workstream = {
  title: string;
  whatIDid: string[];
  result: string;
};

export type Highlight = {
  headline: string;
  detail: string;
};

export type Engagement = {
  slug: string;
  client: string;
  summary: string;
  highlights: Highlight[];
  workstreams: Workstream[];
  testimonialId?: string;
};

export const engagements: Engagement[] = [
  {
    slug: "estebare",
    client: "EsteBare",
    summary: "TODO_BRIEF: one-line summary of the EsteBare engagement.",
    highlights: [
      {
        headline: "400+ customers supported",
        detail: "Customer support",
      },
      {
        headline: "Award-winning brand visibility",
        detail: "Through influencer coordination",
      },
    ],
    workstreams: [],
    testimonialId: "esther-uzodinma",
  },
  {
    slug: "karr",
    client: "Karr",
    summary: "TODO_BRIEF: one-line summary of the Karr engagement.",
    highlights: [
      {
        headline: "Client contracts & intern team coordination",
        detail: "Operations support",
      },
    ],
    workstreams: [],
  },
];

/** Flattened list of highlights, in order, for the Home page. */
export const resultHighlights = engagements.flatMap((e) =>
  e.highlights.map((h) => ({ ...h, client: e.client, slug: e.slug })),
);
