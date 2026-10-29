import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { DotLabel, Heading, pad, Wrap } from "@/components/Layout";
import { reveal, RevealWords } from "@/components/Reveal";
import { availability, bio, coreSkills, idealClients, site, tools } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: bio[1].split(". ")[0] + ".",
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading">
        <Wrap className="grid gap-12 pt-10 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:pt-20 lg:pb-28">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[14px] lg:sticky lg:top-28" {...reveal("media", 300)}>
              <Image
                src="/images/pere-portrait.webp"
                alt="Portrait of Pere Arilda"
                width={1100}
                height={1375}
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.95rem] text-muted" {...reveal("ui")}>
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              <span className="font-medium text-ink">{site.name}</span>
              <span aria-hidden="true" className="hidden text-line sm:inline">—</span>
              <span className="basis-full pl-5 sm:basis-auto sm:pl-0">{site.title}</span>
            </p>
            <RevealWords as="h1" id="about-heading" text="About Me" className="h1 mt-8 text-ink" delayMs={100} />

            <div className="mt-12 border-t border-line pt-10">
              <h2 className="font-serif text-[clamp(1.9rem,3.4vw,3.1rem)] leading-[1.05] text-ink" {...reveal("text", 200)}>
                {bio[0]}
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
                {bio.slice(1, -1).map((p, i) => (
                  <p key={i} {...reveal("text", 250 + i * 100)}>
                    {p}
                  </p>
                ))}
                <p className="font-serif text-[1.65rem] leading-snug text-ink" {...reveal("text")}>
                  {bio[bio.length - 1]}
                </p>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      <section aria-labelledby="skills-heading" className="border-t border-line">
        <Wrap className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Heading id="skills-heading" text="Core Skills" count={coreSkills.length} />
          </div>
          <ol className="grid border-t border-line sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {coreSkills.map((skill, i) => (
              <li key={skill} className="flex items-baseline gap-4 border-b border-line py-5 pr-4" {...reveal("text", i * 50)}>
                <span className="font-mono text-xs text-muted">{pad(i + 1)}</span>
                <span className="text-lg text-ink">{skill}</span>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      <section aria-labelledby="clients-heading" className="border-t border-line bg-surface">
        <Wrap className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Heading id="clients-heading" text="Ideal Clients" count={idealClients.length} />
          </div>
          <ol className="border-t border-line lg:col-span-8">
            {idealClients.map((c, i) => (
              <li key={c} className="grid grid-cols-[3rem_1fr] border-b border-line py-5" {...reveal("text", i * 50)}>
                <span className="font-mono text-xs text-muted pt-1.5">{pad(i + 1)}</span>
                <span className="font-serif text-2xl leading-snug text-ink">{c}</span>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      <section aria-labelledby="tools-heading" className="border-t border-line">
        <Wrap className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Heading id="tools-heading" text="Tools and Platforms" />
          </div>
          <div className="lg:col-span-8">
            <p className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-tight text-ink" {...reveal("text", 150)}>
              {tools.sentence}
            </p>
            <div className="mt-14 border-t border-line pt-8" {...reveal("text")}>
              <DotLabel>{availability.label}</DotLabel>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{availability.text}</p>
            </div>
            <div className="mt-10" {...reveal("ui")}>
              <Button href="/contact/" arrow>
                Let&rsquo;s work together
              </Button>
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
