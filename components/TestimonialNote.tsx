import type { Testimonial } from "@/data/testimonials";
import { Copy } from "./Copy";
import { Tape } from "./Doodles";

const tilts = ["-rotate-[1.5deg]", "rotate-[1.2deg]", "-rotate-[0.6deg]", "rotate-[1.8deg]"];
const tints = ["bg-[#fdf1d6]", "bg-[#f9e4dc]", "bg-[#fbeee6]", "bg-[#f6e7cf]"];

/** A testimonial styled as a sticky note taped to the page. */
export function TestimonialNote({ t, index = 0 }: { t: Testimonial; index?: number }) {
  const byline = [t.role, t.company].filter(Boolean).join(", ");
  return (
    <figure
      className={`relative flex h-full flex-col justify-between rounded-[6px] p-8 pt-10 shadow-[var(--shadow-lift)] ${tints[index % tints.length]} ${tilts[index % tilts.length]} transition-transform duration-300 hover:rotate-0 motion-reduce:transition-none`}
    >
      <Tape className="-top-3 -left-4 -rotate-[24deg]" />
      <Tape className="-top-3 -right-4 rotate-[22deg]" />
      <span aria-hidden="true" className="font-serif text-6xl leading-none text-brand/30">
        &ldquo;
      </span>
      <blockquote className="-mt-4 text-lg leading-relaxed text-ink">
        <p>
          <Copy text={t.quote} />
        </p>
      </blockquote>
      <figcaption className="mt-8 border-t border-brand/15 pt-4">
        <span className="block font-hand text-3xl leading-none text-brand">{t.name}</span>
        {byline && <span className="mt-1 block text-sm text-muted">{byline}</span>}
      </figcaption>
    </figure>
  );
}
