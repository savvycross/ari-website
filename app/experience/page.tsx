import type { Metadata } from "next";
import { ExperienceList } from "@/components/ExperienceList";
import { Heading, Wrap } from "@/components/Layout";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { engagements } from "@/data/experience";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Experience",
  description: engagements[1].summary,
};

export default function ExperiencePage() {
  return (
    <>
      <section aria-labelledby="experience-heading">
        <Wrap className="pt-14 pb-24 sm:pt-20">
          <Heading
            as="h1"
            id="experience-heading"
            text="Experience and Portfolio"
            count={engagements.length}
            className="h1 text-ink"
          />
          <div className="mt-14">
            <ExperienceList headingLevel="h2" />
          </div>
        </Wrap>
      </section>
      <section
        aria-labelledby="testimonials-heading"
        className="border-t border-line bg-surface"
      >
        <Wrap className="py-20 sm:py-28">
          <Heading
            id="testimonials-heading"
            text="Client Testimonials"
            count={testimonials.length}
          />
          <div className="mt-12">
            <TestimonialGrid />
          </div>
        </Wrap>
      </section>
    </>
  );
}
