import Link from "next/link";
import { engagements } from "@/data/experience";
import { ClientPanel } from "./ClientPanel";
import { pad } from "./Layout";
import { reveal } from "./Reveal";

/** Full-width rows, one per client, each opening its case study. */
export function ExperienceList({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="border-t border-line">
      {engagements.map((e, i) => (
        <li key={e.slug} className="border-b border-line" {...reveal("card", i * 80)}>
          <Link href={`/experience/${e.slug}/`} className="group grid gap-6 py-8 sm:py-10 md:grid-cols-12 md:gap-8">
            <span className="font-mono text-sm text-muted md:col-span-1 md:pt-3">{pad(i + 1)}</span>
            <div className="md:col-span-6 md:self-center">
              <H className="font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-none text-ink">
                <span className="link-grow">{e.client}</span>
              </H>
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
            <ClientPanel engagement={e} className="md:col-span-5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
