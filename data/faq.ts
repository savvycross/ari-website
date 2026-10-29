/**
 * How I Work and Frequently Asked Questions, copied exactly from
 * content/brief.md.
 */

export const howIWork = {
  intro: "My approach is structured, practical, and focused on execution.",
  steps: [
    {
      title: "Understand the Business",
      text: "Identify the client’s needs, current challenges, priorities, and the responsibilities requiring support.",
    },
    {
      title: "Define the Scope",
      text: "Agree on the tasks, deliverables, timelines, communication arrangements, and measures of success.",
    },
    {
      title: "Organise and Coordinate",
      text: "Put the necessary tasks, documentation, workflows, and communication processes in place.",
    },
    {
      title: "Execute and Follow Through",
      text: "Manage agreed responsibilities, monitor progress, track outstanding tasks, and maintain communication.",
    },
    {
      title: "Review and Improve",
      text: "Review completed work, identify operational gaps, and recommend practical adjustments where appropriate.",
    },
  ],
} as const;

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "I work with founders, business owners, entrepreneurs, and professionals across different industries who need reliable support with their daily operations, coordination, and administrative responsibilities. I’m open to working with both growing businesses and established teams.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! I work with international clients and am open to collaborating with businesses across different countries and time zones. I’m happy to agree on a working schedule that accommodates the needs of each client.",
  },
  {
    question: "Are you available to travel for work?",
    answer:
      "Yes, I’m open to work-related travel when it’s necessary for the engagement, mutually convenient, and sponsored by the client or brand. Travel arrangements and expectations can be discussed in advance.",
  },
  {
    question: "Can you support a specific project rather than an ongoing engagement?",
    answer:
      "Absolutely. I offer support for both specific projects and ongoing business needs. Whether you need help coordinating a project, organising operations, or managing a defined set of tasks, we can agree on the scope, deliverables, and timeline before getting started.",
  },
  {
    question: "Do you offer monthly retainers?",
    answer:
      "Yes. I offer monthly retainer arrangements for clients who need consistent, ongoing support. The retainer can be tailored to the level of support required, the responsibilities involved, and the expected workload.",
  },
  {
    question: "What tools do you use?",
    answer:
      "I work with digital tools that help keep communication, tasks, projects, and business information organised. These include Google Workspace, ClickUp, Notion, Airtable, Slack, Canva, Calendly, and Zapier. The tools used for each engagement depend on the client’s existing systems and operational needs.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "We begin with a conversation about your business, current challenges, and the kind of support you need. From there, we define the scope of work, responsibilities, priorities, communication channels, and expectations. Once everything is agreed upon, I familiarise myself with the relevant tools and workflows so we can begin working together effectively.",
  },
  {
    question: "How do you determine your fees?",
    answer:
      "My fees depend on the scope of work, complexity of the tasks, level of responsibility, expected workload, and duration of the engagement. After understanding your needs, I’ll provide a tailored quote that reflects the support required and the agreed deliverables.",
  },
  {
    question: "Can I review your portfolio before engaging your services?",
    answer:
      "Yes! I’m happy to share my portfolio so you can explore examples of my experience, responsibilities, and contributions to previous projects and businesses. This will help you understand my approach and determine whether my support aligns with your needs.",
  },
];
