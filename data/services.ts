/**
 * The six services, in Pere's order. Copied exactly from content/brief.md.
 *
 * `summary` is shown on the Home page. It must be one or more complete
 * sentences taken word for word from `paragraph`.
 */

export type Service = {
  slug: string;
  title: string;
  note?: string;
  tasks: string[];
  paragraph?: string;
  summary?: string;
};

export const services: Service[] = [
  {
    slug: "administrative-support",
    title: "Administrative Support",
    tasks: [
      "Email Management",
      "Calendar Management",
      "Appointment Scheduling",
      "Data Entry and Database Management",
      "Document Preparation and Formatting",
      "CRM Updates and Maintenance",
      "File Organization",
      "Newsletter Management",
      "Basic Social Media Support",
    ],
    paragraph:
      "As an Operations Manager, I offer a wide range of administrative support services to help you stay organized and focused on your core business activities. Let's work together to streamline your operations and enhance your productivity.",
    summary:
      "As an Operations Manager, I offer a wide range of administrative support services to help you stay organized and focused on your core business activities.",
  },
  {
    slug: "tech-tool-support",
    title: "Tech & Tool Support",
    note: "(Basic Level)",
    tasks: [
      "Setting up Forms & Automations",
      "Calendar Integrations",
      "Creating & Managing Basic Workflows",
      "Data Entry and Database Management",
    ],
    paragraph:
      "As an Operations Manager, I provide hands-on support with the digital tools and systems you rely on daily. From setup to troubleshooting, I help you stay efficient and tech-savvy, so you can focus on what truly matters. Let’s simplify your workflow with the right tech solutions.",
    summary:
      "As an Operations Manager, I provide hands-on support with the digital tools and systems you rely on daily.",
  },
  {
    slug: "workflow-systems-organisation",
    title: "Workflow and Systems Organisation",
    // No paragraph in the brief — the Home page shows these points instead.
    tasks: [
      "Organising business workflows using digital tools.",
      "Setting up and maintaining task-management systems.",
      "Documenting repeatable processes and procedures.",
      "Improving how information, tasks, and responsibilities are organised.",
      "Supporting the use of systems that improve visibility and accountability.",
    ],
  },
  {
    slug: "communication-client-relations",
    title: "Communication & Client Relations",
    tasks: [
      "Client Onboarding & Offboarding Process",
      "Community Management",
      "Communications between brand collaborators",
      "Communications between business partners",
    ],
    paragraph:
      "As an Operations Manager, I specialize in managing client communications and fostering strong relationships. From onboarding to engagement, I help ensure smooth interactions that build trust and boost client satisfaction. Let’s work together to keep your communication clear, consistent, and professional.",
    summary:
      "As an Operations Manager, I specialize in managing client communications and fostering strong relationships.",
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    tasks: ["Order Processing", "General Customer Support Services", "Customer Retention"],
    paragraph:
      "I help businesses maintain excellent customer service by providing timely and professional support across various channels. Let's ensure your clients feel heard, valued, and satisfied at every touchpoint.",
    summary:
      "I help businesses maintain excellent customer service by providing timely and professional support across various channels.",
  },
  {
    slug: "custom-services",
    title: "Custom Services",
    tasks: ["Tailored Solutions for Unique Needs", "Flexible Support Based on Your Workflow"],
    paragraph:
      "Need something specific that doesn’t fit into the usual categories? I offer flexible, made-to-fit services designed around your unique operations. Let’s collaborate to bring your vision to life exactly the way you want it.",
    summary:
      "Need something specific that doesn’t fit into the usual categories? I offer flexible, made-to-fit services designed around your unique operations.",
  },
];
