import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FaqList } from "@/components/FaqList";
import { DotLabel, Heading, pad, Wrap } from "@/components/Layout";
import { reveal } from "@/components/Reveal";
import { faq, howIWork } from "@/data/faq";
import { availability } from "@/data/site";

export const metadata: Metadata = {
  title: "How I Work",
  description: howIWork.intro,
};

export default function HowIWorkPage() {
  return (
    <>
      <section aria-labelledby="process-heading">
        <Wrap className="grid gap-10 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Heading as="h1" id="process-heading" text="How I Work" className="h1 text-ink" />
          </div>
          <p className="text-xl leading-relaxed text-ink sm:text-2xl lg:col-span-5 lg:col-start-8 lg:self-end" {...reveal("text", 300)}>
            {howIWork.intro}
          </p>
        </Wrap>
        <Wrap>
          <ol className="border-t border-line">
            {howIWork.steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[3.5rem_1fr] gap-y-3 border-b border-line py-8 sm:py-10 lg:grid-cols-12 lg:gap-8"
                {...reveal("text", i * 80)}
              >
                <span className="font-mono text-sm text-brand lg:col-span-1 lg:pt-2">{pad(i + 1)}</span>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-tight text-ink lg:col-span-5">
                  {step.title}
                </h2>
                <p className="col-start-2 max-w-xl text-lg leading-relaxed text-muted lg:col-span-5 lg:col-start-8 lg:pt-2">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="grid gap-8 py-16 lg:grid-cols-12 lg:gap-8" {...reveal("text")}>
            <div className="lg:col-span-5 lg:col-start-8">
              <DotLabel>{availability.label}</DotLabel>
              <p className="mt-4 text-lg leading-relaxed text-ink">{availability.text}</p>
            </div>
          </div>
        </Wrap>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-line bg-surface">
        <Wrap className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Heading id="faq-heading" text="Frequently Asked Questions" count={faq.length} />
              <div className="mt-8" {...reveal("ui")}>
                <Button href="/contact/" arrow>
                  Let&rsquo;s work together
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faq} />
          </div>
        </Wrap>
      </section>
    </>
  );
}
