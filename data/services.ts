/**
 * The six service categories.
 *
 * `summary` is the one-liner on the Home page cards.
 * `description` and `tasks` appear on the Services page.
 * Strings starting with "TODO_BRIEF" are placeholders for Pere's own wording.
 */

export type ServiceIcon = "inbox" | "laptop" | "flow" | "chat" | "headset" | "spark";

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIcon;
  summary: string;
  description: string;
  tasks: string[];
  note?: string;
};

export const services: Service[] = [
  {
    slug: "administrative-support",
    title: "Administrative Support",
    icon: "inbox",
    summary: "Inbox, calendar and day-to-day admin, kept organised and on schedule.",
    description: "TODO_BRIEF: Administrative Support description paragraph.",
    tasks: ["TODO_BRIEF: task list"],
  },
  {
    slug: "tech-tool-support",
    title: "Tech & Tool Support",
    icon: "laptop",
    summary: "Basic-level help setting up and maintaining the tools your team uses.",
    description: "TODO_BRIEF: Tech & Tool Support description paragraph.",
    tasks: ["TODO_BRIEF: task list"],
    note: "Basic-level support",
  },
  {
    slug: "workflow-systems",
    title: "Workflow & Systems",
    icon: "flow",
    summary: "Simple, repeatable processes so work moves without constant follow-up.",
    description: "TODO_BRIEF: Workflow & Systems description paragraph.",
    tasks: ["TODO_BRIEF: task list"],
  },
  {
    slug: "communication-client-relations",
    title: "Communication & Client Relations",
    icon: "chat",
    summary: "Clear, timely communication with your clients, partners and team.",
    description: "TODO_BRIEF: Communication & Client Relations description paragraph.",
    tasks: ["TODO_BRIEF: task list"],
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    icon: "headset",
    summary: "Responsive, friendly support that keeps your customers looked after.",
    description: "TODO_BRIEF: Customer Support description paragraph.",
    tasks: ["TODO_BRIEF: task list"],
  },
  {
    slug: "custom-services",
    title: "Custom Services",
    icon: "spark",
    summary: "Something specific in mind? Support shaped around what you need.",
    description: "TODO_BRIEF: Custom Services description paragraph.",
    tasks: ["TODO_BRIEF: task list"],
  },
];
