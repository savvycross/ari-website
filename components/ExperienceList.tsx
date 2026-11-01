import Link from "next/link";
import { engagements } from "@/data/experience";
import { TextLink } from "./Button";
import { ClientPanel } from "./ClientPanel";
import { pad } from "./Layout";
import { reveal } from "./Reveal";

/**
 * One block per client: name, summary and brand panel on the left; every
 * workstream with its RESULT listed on the right, one per line.
 */
export function ExperienceList({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="border-t border-line">
      {engagements.map((e, i) => {
        const href = `/experience/${e.slug}/`;
        return (
          <li key={e.slug} className="grid gap-10 border-b border-line py-12 sm:py-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5" {...reveal("card")}>
              <div className="lg:sticky lg:top-28">
                <span className="font-mono text-sm text-muted">{pad(i + 1)}</span>
                <H className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-none text-ink">
                  <Link href={href} className="link-grow">
                    {e.client}
                  </Link>
                </H>
                <p className="mt-4 max-w-md text-lg text-muted">{e.summary}</p>
                <Link href={href} className="group mt-8 block max-w-md" tabIndex={-1} aria-hidden="true">
                  <ClientPanel engagement={e} />
                </Link>
                <div className="mt-6">
                  <TextLink href={href}>View case study</TextLink>
                </div>
              </div>
            </div>

            <ol className="border-t border-line lg:col-span-7">
              {e.workstreams.map((w, j) => (
                <li
                  key={w.title}
                  className="grid grid-cols-[2.75rem_1fr] border-b border-line py-6"
                  {...reveal("text", j * 60)}
                >
                  <span className="pt-0.5 font-mono text-xs text-brand">{pad(j + 1)}</span>
                  <div>
                    <p className="font-serif text-[1.45rem] leading-snug text-ink sm:text-2xl">{w.title}</p>
                    <p className="mt-3 font-mono text-[0.68rem] tracking-[0.18em] text-muted">RESULT</p>
                    <p className="mt-1 leading-relaxed text-muted">{w.result}</p>
                  </div>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ul>
  );
}
