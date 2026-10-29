import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ClientPanel } from "@/components/ClientPanel";
import { Icon } from "@/components/Icon";
import { DotLabel, pad, Wrap } from "@/components/Layout";
import { reveal, RevealWords } from "@/components/Reveal";
import { TestimonialAuthor } from "@/components/TestimonialAuthor";
import { engagementBySlug, engagements } from "@/data/experience";
import { testimonialById } from "@/data/testimonials";

export const dynamicParams = false;

export function generateStaticParams() {
  return engagements.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/experience/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const e = engagementBySlug(slug);
  return e ? { title: e.client, description: e.summary } : {};
}

export default async function CaseStudyPage({ params }: PageProps<"/experience/[slug]">) {
  const { slug } = await params;
  const e = engagementBySlug(slug);
  if (!e) notFound();

  const index = engagements.indexOf(e);
  const next = engagements[(index + 1) % engagements.length];
  const testimonial = testimonialById(e.testimonialId);

  return (
    <>
      <section aria-labelledby="case-heading">
        <Wrap className="grid gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-24">
          <div className="lg:col-span-7">
            <Link href="/experience/" className="group inline-flex items-center gap-2 text-muted hover:text-ink" {...reveal("ui")}>
              <Icon name="arrowLeft" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="link-grow">Experience</span>
            </Link>
            <p className="mt-10 font-mono text-sm text-muted" {...reveal("ui", 60)}>
              {pad(index + 1)} / {pad(engagements.length)}
            </p>
            <RevealWords as="h1" id="case-heading" text={e.client} className="h1 mt-4 text-ink" delayMs={100} />
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted" {...reveal("text", 300)}>
              {e.summary}
            </p>
          </div>
          <a
            href={e.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group block self-end lg:col-span-5"
            aria-label={`${e.client} website (opens in a new tab)`}
            {...reveal("card", 400)}
          >
            <ClientPanel engagement={e} />
          </a>
        </Wrap>
      </section>

      <section aria-label={e.client} className="border-t border-line">
        <Wrap>
          <ol>
            {e.workstreams.map((w, i) => (
              <li key={w.title} className="grid gap-8 border-b border-line py-14 sm:py-16 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <span className="font-mono text-sm text-brand" {...reveal("ui")}>
                    {pad(i + 1)}
                  </span>
                  <h2 className="mt-4 font-serif text-[clamp(1.75rem,2.8vw,2.6rem)] leading-[1.08] text-ink" {...reveal("text", 80)}>
                    {w.title}
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <ul className="border-t border-line">
                    {w.items.map((item, j) => (
                      <li key={item} className="flex gap-4 border-b border-line py-4" {...reveal("text", 100 + j * 60)}>
                        <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span className="text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-l-2 border-marker pl-6" {...reveal("text", 200)}>
                    <DotLabel>RESULT</DotLabel>
                    <p className="mt-3 font-serif text-[1.6rem] leading-snug text-ink">{w.result}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      {testimonial && (
        <section aria-label="Testimonials" className="bg-surface">
          <Wrap className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
            <figure className="lg:col-span-10 lg:col-start-2" {...reveal("section")}>
              <blockquote className="space-y-6 font-serif text-[clamp(1.45rem,2.6vw,2.3rem)] leading-[1.25] text-ink">
                {testimonial.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </blockquote>
              <div className="mt-10">
                <TestimonialAuthor t={testimonial} size={64} />
              </div>
            </figure>
          </Wrap>
        </section>
      )}

      <section aria-label="Next" className="border-t border-line">
        <Wrap className="flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center">
          <Button href="/contact/" arrow>
            Request portfolio
          </Button>
          <Link href={`/experience/${next.slug}/`} className="group text-right">
            <span className="block font-mono text-xs tracking-[0.18em] text-muted uppercase">Next</span>
            <span className="link-grow mt-1 inline-block font-serif text-4xl text-ink sm:text-5xl">{next.client}</span>
          </Link>
        </Wrap>
      </section>
    </>
  );
}
