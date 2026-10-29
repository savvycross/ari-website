import type { FaqItem } from "@/data/faq";
import { pad } from "./Layout";
import { reveal } from "./Reveal";

/** FAQ accordion built on <details>, so it works without JavaScript. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <details key={item.question} className="group border-b border-line" {...reveal("text", i * 40)}>
          <summary className="flex cursor-pointer list-none items-baseline gap-5 py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-mono text-xs text-muted">{pad(i + 1)}</span>
            <span className="flex-1 font-serif text-[1.45rem] leading-snug text-ink sm:text-2xl">{item.question}</span>
            <span
              aria-hidden="true"
              className="relative h-4 w-4 shrink-0 self-center before:absolute before:top-1/2 before:left-0 before:h-px before:w-4 before:bg-ink after:absolute after:top-0 after:left-1/2 after:h-4 after:w-px after:bg-ink after:transition-transform after:duration-300 group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-3xl pb-7 pl-9 text-lg leading-relaxed text-muted sm:pl-10">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
