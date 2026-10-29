/**
 * Experience and Credibility. Copied exactly from content/brief.md.
 * Each engagement becomes a row on the Experience page and a case study at
 * /experience/<slug>.
 */

export type Workstream = {
  title: string;
  items: string[];
  result: string;
};

export type Engagement = {
  slug: string;
  client: string;
  summary: string;
  workstreams: Workstream[];
  testimonialId: string;
  website: string;
  /**
   * Brand logo in /public/images/brands (SVG or PNG with a transparent
   * background). Until one is added, the client name is shown instead.
   */
  logo?: string;
};

export const engagements: Engagement[] = [
  {
    slug: "estebare",
    client: "EsteBare",
    summary: "Contributed to brand growth and operations",
    testimonialId: "esther-uzodinma",
    website: "https://www.estebare.com",
    // TODO_PERE: add the EsteBare logo, e.g. logo: "/images/brands/estebare.svg"
    workstreams: [
      {
        title: "Social Media & Brand Presence",
        items: [
          "Managed Facebook page with consistent, engaging content",
          "Actively engaged in community spaces to boost visibility",
        ],
        result: "Increased brand visibility and awareness within target communities.",
      },
      {
        title: "Customer Support & Customer Experience",
        items: [
          "Handled inquiries, orders, complaints, and payments",
          "Attended to 400+ customers professionally and promptly",
          "Conducted post-purchase follow-ups and maintained records",
        ],
        result:
          "Improved customer satisfaction and response time, increased repeat customers and referrals, and strengthened brand reputation.",
      },
      {
        title: "Operations, Systems & Reporting",
        items: ["Created and organized payment and transaction reports"],
        result: "Improved financial clarity and reporting for the founder.",
      },
      {
        title: "Communications & External Relations",
        items: [
          "Managed communication with logistics partners",
          "Handled payment and banking platform communications",
        ],
        result:
          "Reduced communication gaps, strengthened partnerships, and improved operational reliability.",
      },
      {
        title: "Influencer, UGC & Team Coordination",
        items: [
          "Managed influencers, collaborators, and UGC creators",
          "Handled onboarding, contracts, and content delivery",
          "Coordinated and onboarded an additional team member",
        ],
        result: "Improved collaboration workflows, accountability, and timely campaign delivery.",
      },
      {
        title: "Research & Creative Support",
        items: [
          "Outfit and styling research for the founder",
          "Location scouting for campaign shoots",
          "Campaign ideation and creative direction support",
          "Brand and market research",
        ],
        result:
          "Maintained a cohesive visual identity and delivered higher-quality campaigns with stronger brand positioning.",
      },
    ],
  },
  {
    slug: "karr",
    client: "Karr",
    summary:
      "Contributed to team coordination, client contract management, and business operations.",
    testimonialId: "estelle-agyeman",
    website: "https://karrcompany.co.uk",
    // TODO_PERE: add the Karr logo, e.g. logo: "/images/brands/karr.svg"
    workstreams: [
      {
        title: "Client Contracts & Administrative Coordination",
        items: [
          "Assisted with the handling and coordination of client contracts.",
          "Supported contract-related communication and documentation.",
          "Helped keep client engagements and associated administrative processes organised.",
        ],
        result:
          "Supported smoother client engagement processes, improved documentation and follow-through, and helped the business maintain a more organised approach to client commitments.",
      },
      {
        title: "Meetings & Business Coordination",
        items: [
          "Participated in business meetings and discussions.",
          "Supported communication and coordination around ongoing activities.",
          "Helped track updates and follow up on relevant action points.",
        ],
        result:
          "Supported team alignment, improved information flow, and helped keep tasks and business priorities moving forward.",
      },
      {
        title: "Reporting & Documentation",
        items: [
          "Prepared and submitted operational reports.",
          "Organised updates and information to support business activities.",
          "Communicated relevant progress and task updates.",
        ],
        result:
          "Improved visibility into ongoing activities, supported informed decision-making, and helped maintain accountability across tasks and responsibilities.",
      },
      {
        title: "Intern Management & Team Coordination",
        items: [
          "Oversaw and supported interns in their assigned responsibilities.",
          "Helped coordinate tasks and maintain accountability.",
          "Supported communication and follow-through on ongoing work.",
        ],
        result:
          "Supported better task coordination, clearer responsibilities, and a more organised workflow, helping the team manage its workload more effectively.",
      },
    ],
  },
];

export const engagementBySlug = (slug: string) => engagements.find((e) => e.slug === slug);
