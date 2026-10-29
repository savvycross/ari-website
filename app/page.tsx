import Image from "next/image";
import { ArrowLink, Button } from "@/components/Button";
import { Card, CardNumber } from "@/components/Card";
import { Copy } from "@/components/Copy";
import { CtaBand } from "@/components/CtaBand";
import { FloralBackdrop, MarkerStroke, Sparkle, Tape } from "@/components/Doodles";
import { Icon } from "@/components/Icon";
import { Container, Section, SectionHeading } from "@/components/Section";
import { TestimonialNote } from "@/components/TestimonialNote";
import { resultHighlights } from "@/data/experience";
import { waysToWork } from "@/data/faq";
import { services } from "@/data/services";
import { idealClients, site } from "@/data/site";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoIHelp />
      <Results />
      <ServicesPreview />
      <WaysToWork />
      <Testimonials />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-gradient-to-b from-blush/70 via-blush/30 to-cream">
      <FloralBackdrop />
      <Container className="relative grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pt-24 lg:pb-28">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-brand/15 bg-cream/80 px-4 py-2 text-[0.8rem] font-medium text-brand shadow-sm backdrop-blur sm:text-sm">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
            <span>{site.status.join(" · ")}</span>
          </p>

          <h1
            id="hero-heading"
            className="rise mt-7 font-serif text-[2.75rem] leading-[1.02] font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl"
            style={{ ["--delay" as string]: "80ms" }}
          >
            Making your day{" "}
            <span className="relative inline-block italic text-brand">
              easier
              <MarkerStroke className="absolute -bottom-2 left-0 h-4 w-full" />
            </span>{" "}
            with structured support
          </h1>

          <p
            className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ ["--delay" as string]: "160ms" }}
          >
            <Copy text={site.intro} />
          </p>

          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ ["--delay" as string]: "240ms" }}
          >
            <span className="relative inline-flex">
              <Tape className="-top-3 -left-5 h-5 w-16 -rotate-[28deg]" />
              <Button href="/contact/" arrow className="w-full sm:w-auto">
                Let&rsquo;s Work Together
              </Button>
            </span>
            <Button href="/experience/" variant="secondary">
              View My Work
            </Button>
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-[22rem] lg:max-w-[25rem]" style={{ ["--delay" as string]: "200ms" }}>
          <figure className="relative rotate-[2.5deg] rounded-[6px] bg-white p-3 pb-14 shadow-[var(--shadow-lift)]">
            <Tape className="-top-4 left-1/2 -translate-x-1/2 -rotate-[4deg]" />
            <Image
              src="/images/pere-portrait.webp"
              alt="Portrait of Pere Arilda wearing glasses and a white shirt"
              width={840}
              height={1050}
              priority
              sizes="(min-width: 1024px) 400px, 90vw"
              className="aspect-[4/5] w-full rounded-[3px] object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-3 text-center font-hand text-2xl text-brand">
              Hi, I&rsquo;m Pere!
            </figcaption>
          </figure>
          <Sparkle className="absolute -top-6 -left-6 h-9 w-9" />
          <Sparkle className="absolute -right-3 bottom-24 h-5 w-5" />
        </div>
      </Container>
    </section>
  );
}

function WhoIHelp() {
  return (
    <section aria-labelledby="who-heading" className="border-y border-line bg-cream py-10">
      <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
        <h2 id="who-heading" className="shrink-0 font-serif text-2xl text-ink">
          Who I help
        </h2>
        <ul className="flex flex-wrap gap-2.5">
          {idealClients.map((client) => (
            <li
              key={client}
              className="rounded-full border border-brand/15 bg-blush/60 px-4 py-2 text-sm font-medium text-brand"
            >
              {client}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Results() {
  return (
    <Section labelledBy="results-heading">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          id="results-heading"
          eyebrow="Results snapshot"
          title="Support that shows up in the results"
        />
        <div className="-mt-4 mb-12 shrink-0 md:mt-0">
          <ArrowLink href="/experience/">Explore my experience</ArrowLink>
        </div>
      </div>
      <ol className="grid gap-6 md:grid-cols-3">
        {resultHighlights.map((r, i) => (
          <Card key={r.headline} as="li" className="flex flex-col">
            <div className="flex items-start justify-between">
              <CardNumber n={i + 1} />
              <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold tracking-wide text-brand">
                {r.client}
              </span>
            </div>
            <p className="mt-8 font-serif text-2xl leading-snug text-ink">{r.headline}</p>
            <p className="mt-3 text-muted">{r.detail}</p>
          </Card>
        ))}
      </ol>
    </Section>
  );
}

function ServicesPreview() {
  return (
    <Section tone="blush" labelledBy="services-heading">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="What I can take off your plate"
        />
        <div className="-mt-4 mb-12 shrink-0 md:mt-0">
          <ArrowLink href="/services/">See all services</ArrowLink>
        </div>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.slug} as="li" className="group bg-cream/90 transition-shadow hover:shadow-[var(--shadow-lift)]">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blush text-brand transition-colors group-hover:bg-brand group-hover:text-cream">
              <Icon name={s.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-xl text-ink">
              {s.title}
              {s.note && (
                <span className="ml-2 inline-block translate-y-[-2px] rounded-full border border-line px-2 py-0.5 align-middle font-sans text-[0.7rem] font-semibold text-muted">
                  {s.note}
                </span>
              )}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{s.summary}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}

function WaysToWork() {
  return (
    <Section labelledBy="ways-heading">
      <SectionHeading
        id="ways-heading"
        eyebrow="Ways to work together"
        title="Choose how we can work"
        intro="Ongoing support or a focused project: pick the arrangement that fits where your business is right now."
        align="center"
      />
      <ol className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {waysToWork.map((w, i) => (
          <Card key={w.name} as="li" className="flex flex-col pt-10">
            <Tape className={`-top-3 left-8 ${i % 2 ? "rotate-[6deg]" : "-rotate-[6deg]"}`} />
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-3xl text-ink">{w.name}</h3>
              <CardNumber n={i + 1} className="text-4xl" />
            </div>
            <p className="mt-2 text-muted">{w.bestFor}</p>
            <ul className="mt-7 flex-1 space-y-3">
              {w.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blush text-brand">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <Copy text={p} />
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl bg-cream px-4 py-3 text-sm text-ink">
              <span className="font-semibold text-brand">Pricing:</span> {w.pricing}
            </p>
            <Button href="/contact/" arrow className="mt-5 w-full">
              {w.cta}
            </Button>
          </Card>
        ))}
      </ol>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-[18px] border border-dashed border-brand/30 bg-blush/40 px-7 py-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-serif text-xl text-ink">Not sure which fits?</p>
          <p className="text-muted">Tell me what you need and I&rsquo;ll suggest the right setup.</p>
        </div>
        <ArrowLink href="/contact/">Tell me what you need</ArrowLink>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section tone="blush" labelledBy="testimonials-heading" className="overflow-hidden">
      <SectionHeading id="testimonials-heading" eyebrow="Kind words" title="What clients say" />
      <div
        role="region"
        aria-label="Client testimonials (scrolls sideways)"
        tabIndex={0}
        className="scroll-row -mx-5 flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pt-6 pb-10 sm:-mx-8 sm:px-8"
      >
        {testimonials.map((t, i) => (
          <div key={t.id} className="w-[85%] shrink-0 snap-start sm:w-[26rem]">
            <TestimonialNote t={t} index={i} />
          </div>
        ))}
      </div>
    </Section>
  );
}
