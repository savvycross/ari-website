import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Heading, pad, Wrap } from "@/components/Layout";
import { reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { idealClients } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: services[0].summary,
};

export default function ServicesPage() {
  return (
    <>
      <section aria-labelledby="services-heading">
        <Wrap className="pt-14 pb-12 sm:pt-20">
          <Heading as="h1" id="services-heading" text="Services" count={services.length} className="h1 text-ink" />
        </Wrap>
      </section>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-heading`} className="border-t border-line">
          <Wrap className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <span className="font-mono text-sm text-brand" {...reveal("ui")}>
                {pad(i + 1)}
              </span>
              <h2 id={`${s.slug}-heading`} className="h2 mt-4 text-ink" {...reveal("text", 80)}>
                {s.title}
              </h2>
              {s.note && (
                <p className="mt-2 text-muted" {...reveal("ui", 120)}>
                  {s.note}
                </p>
              )}
              {s.paragraph && (
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted" {...reveal("text", 160)}>
                  {s.paragraph}
                </p>
              )}
            </div>
            <ul className="border-t border-line lg:col-span-5 lg:col-start-8">
              {s.tasks.map((t, j) => (
                <li key={t} className="flex gap-4 border-b border-line py-4" {...reveal("text", 120 + j * 50)}>
                  <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-ink">{t}</span>
                </li>
              ))}
            </ul>
          </Wrap>
        </section>
      ))}

      <section aria-labelledby="clients-heading" className="border-t border-line bg-surface">
        <Wrap className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Heading id="clients-heading" text="Ideal Clients" count={idealClients.length} />
            <div className="mt-8" {...reveal("ui")}>
              <Button href="/contact/" arrow>
                Let&rsquo;s work together
              </Button>
            </div>
          </div>
          <ol className="border-t border-line lg:col-span-7">
            {idealClients.map((c, i) => (
              <li key={c} className="grid grid-cols-[3rem_1fr] border-b border-line py-4" {...reveal("text", i * 50)}>
                <span className="font-mono text-xs text-muted pt-1">{pad(i + 1)}</span>
                <span className="text-lg text-ink">{c}</span>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>
    </>
  );
}
