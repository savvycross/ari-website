import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { availability } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: availability.text,
};

export default function ContactPage() {
  return <ContactSection asPage />;
}
