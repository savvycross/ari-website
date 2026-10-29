import Image from "next/image";
import type { Engagement } from "@/data/experience";
import { Icon } from "./Icon";

/**
 * A client's brand panel, shaped like a folder (a nod to the "open the
 * folder" idea). Shows the brand logo when one is set in /data/experience.ts,
 * otherwise the client name in the display serif. A sheet of paper lifts out
 * of the folder on hover.
 */
export function ClientPanel({ engagement, className = "" }: { engagement: Engagement; className?: string }) {
  return (
    <div className={`relative pt-4 ${className}`}>
      {/* folder tab */}
      <span aria-hidden="true" className="absolute top-0 left-0 h-6 w-[38%] rounded-t-[12px] bg-panel" />
      {/* paper inside the folder */}
      <span
        aria-hidden="true"
        className="absolute inset-x-[7%] top-6 h-12 rounded-t-md bg-cream shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4"
      />
      <div className="relative overflow-hidden rounded-[14px] rounded-tl-none">
        <div className="zoom-inner flex aspect-[16/10] flex-col justify-between bg-panel p-6 text-on-panel sm:p-7">
          <span className="font-mono text-[0.7rem] tracking-[0.2em] text-on-panel/60 uppercase">
            {engagement.website.replace(/^https?:\/\/(www\.)?/i, "")}
          </span>
          <div className="flex items-end justify-between gap-4">
            {engagement.logo ? (
              <Image
                src={engagement.logo}
                alt={`${engagement.client} logo`}
                width={320}
                height={120}
                className="h-14 w-auto max-w-[70%] object-contain object-left brightness-0 invert sm:h-16"
              />
            ) : (
              <span className="font-serif text-4xl leading-none sm:text-5xl">{engagement.client}</span>
            )}
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-on-panel/30 transition-colors group-hover:bg-on-panel group-hover:text-panel">
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
