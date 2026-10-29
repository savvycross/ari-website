import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button, TextLink } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { reveal, RevealWords } from "@/components/Reveal";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { engagements } from "@/data/experience";
import { howIWork } from "@/data/faq";
import { services } from "@/data/services";
import { bio, site } from "@/data/site";
import { testimonials } from "@/data/testimonials";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <ExperienceRows />
      <ServicesList />
      <Process />
      <Testimonials />
      <ContactSection />
    </>
  );
}

function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

/** Section heading in her words, with an optional (02)-style count. */
function Heading({ id, text, count }: { id: string; text: string; count?: number }) {
  return (
    <div className="flex items-baseline gap-4">
      <RevealWords id={id} text={text} className="h2 text-ink" />
      {count !== undefined && (
        <span className="font-mono text-sm text-muted" {...reveal("ui", 300)}>
          ({pad(count)})
        </span>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <Wrap className="grid gap-12 pt-10 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-28">
        <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.95rem] text-muted" {...reveal("ui")}>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
            <span className="font-medium text-ink">{site.name}</span>
            <span aria-hidden="true" className="hidden text-line sm:inline">—</span>
            <span className="basis-full pl-5 sm:basis-auto sm:pl-0">{site.title}</span>
          </p>

          <RevealWords
            as="h1"
            id="hero-heading"
            text={site.tagline}
            mark="Easier"
            delayMs={120}
            className="h1 mt-8 text-ink"
          />

          <p className="mt-8 max-w-[38rem] text-lg leading-relaxed text-muted sm:text-xl" {...reveal("text", 450)}>
            {bio[1]}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row" {...reveal("ui", 650)}>
            <Button href="/contact/" arrow>
              Let&rsquo;s work together
            </Button>
            <Button href="/experience/" variant="outline">
              View My Work
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          {/* The one piece of tape on the site, holding the portrait. */}
          <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2" {...reveal("ui", 1500)}>
            <svg aria-hidden="true" viewBox="0 0 120 34" className="h-9 w-32 -rotate-3 text-marker">
              <path
                d="M4 4 9 2l4 3 5-3 5 2 4-2 88 1 2 3-2 3 3 3-2 4 3 3-2 4 2 3-3 3-94 1-4-2-5 2-4-3-5 2-3-3 2-4-3-3 2-4-2-3 2-4-2-3Z"
                fill="currentColor"
                opacity=".8"
              />
            </svg>
          </div>
          <div className="overflow-hidden rounded-[14px]" {...reveal("media", 750)}>
            <Image
              src="/images/pere-portrait.webp"
              alt="Portrait of Pere Arilda"
              width={1100}
              height={1375}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </Wrap>
    </section>
  );
}

function AboutStrip() {
  return (
    <section aria-labelledby="about-heading" className="border-t border-line">
      <Wrap className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
        <RevealWords
          id="about-heading"
          text={bio[0]}
          className="font-serif text-[clamp(2rem,4.2vw,4rem)] leading-[1.02] text-ink lg:col-span-5"
        />
        <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
          {bio.slice(2, 5).map((p, i) => (
            <p key={i} {...reveal("text", 150 + i * 120)}>
              {p}
            </p>
          ))}
          <div className="pt-2" {...reveal("ui", 500)}>
            <TextLink href="/about/">Read more</TextLink>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

function ExperienceRows() {
  return (
    <section aria-labelledby="experience-heading" className="border-t border-line">
      <Wrap className="py-20 sm:py-28">
        <Heading id="experience-heading" text="Experience and Credibility" count={engagements.length} />
        <ul className="mt-12 border-t border-line">
          {engagements.map((e, i) => (
            <li key={e.slug} className="border-b border-line" {...reveal("card", i * 80)}>
              <Link
                href={`/experience/${e.slug}/`}
                className="group grid gap-6 py-8 sm:py-10 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-sm text-muted md:col-span-1 md:pt-3">{pad(i + 1)}</span>
                <div className="md:col-span-6 md:self-center">
                  <h3 className="font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-none text-ink">
                    <span className="link-grow">{e.client}</span>
                  </h3>
                  <p className="mt-4 max-w-xl text-lg text-muted">{e.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[0.72rem] leading-relaxed text-muted">
                    {e.workstreams.map((w, j) => (
                      <li key={w.title} className="flex gap-2">
                        {j > 0 && <span aria-hidden="true" className="text-line">/</span>}
                        {w.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-[14px] md:col-span-5">
                  <div className="zoom-inner flex aspect-[16/10] items-end justify-between bg-panel p-6 text-on-panel">
                    <span className="font-serif text-4xl sm:text-5xl">{e.client}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-on-panel/30 transition-colors group-hover:bg-on-panel group-hover:text-panel">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}

function ServicesList() {
  return (
    <section aria-labelledby="services-heading" className="border-t border-line">
      <Wrap className="py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading id="services-heading" text="Services" count={services.length} />
          <div {...reveal("ui", 200)}>
            <TextLink href="/services/">Read more</TextLink>
          </div>
        </div>
        <ol className="mt-12 border-t border-line">
          {services.map((s, i) => (
            <li
              key={s.slug}
              className="grid gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-8 md:py-9"
              {...reveal("text", i * 60)}
            >
              <span className="font-mono text-sm text-muted md:col-span-1 md:pt-2">{pad(i + 1)}</span>
              <h3 className="font-serif text-[1.75rem] leading-tight text-ink sm:text-3xl md:col-span-4">
                <Link href={`/services/#${s.slug}`} className="link-grow">
                  {s.title}
                </Link>
                {s.note && <span className="mt-1 block font-sans text-sm text-muted">{s.note}</span>}
              </h3>
              <div className="text-muted md:col-span-7 md:pt-2">
                {s.summary ? (
                  <p className="max-w-2xl leading-relaxed">{s.summary}</p>
                ) : (
                  <ul className="max-w-2xl space-y-1.5 leading-relaxed">
                    {s.tasks.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}

function Process() {
  return (
    <section aria-labelledby="process-heading" className="border-t border-line bg-surface">
      <Wrap className="py-20 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Heading id="process-heading" text="How I Work" />
          </div>
          <p className="text-xl leading-relaxed text-ink lg:col-span-6 lg:col-start-7 lg:pt-3" {...reveal("text", 150)}>
            {howIWork.intro}
          </p>
        </div>
        <ol className="mt-14 grid border-t border-line md:grid-cols-5">
          {howIWork.steps.map((step, i) => (
            <li
              key={step.title}
              className="border-b border-line py-7 md:border-b-0 md:border-l md:px-6 md:py-8 md:first:border-l-0 md:first:pl-0"
              {...reveal("text", i * 90)}
            >
              <span className="font-mono text-sm text-brand">{pad(i + 1)}</span>
              <h3 className="mt-5 font-serif text-2xl leading-tight text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}

function Testimonials() {
  return (
    <section aria-label="Testimonials" className="border-t border-line">
      <Wrap className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-10 lg:col-start-2" {...reveal("section")}>
          <TestimonialSlider items={testimonials} />
        </div>
      </Wrap>
    </section>
  );
}
