import type { Metadata } from "next";
import { ExperienceList } from "@/components/ExperienceList";
import { Heading, Wrap } from "@/components/Layout";
import { engagements } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: engagements[1].summary,
};

export default function ExperiencePage() {
  return (
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
  );
}
