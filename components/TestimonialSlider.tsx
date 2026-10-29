"use client";

import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";
import { Icon } from "./Icon";
import { TestimonialAuthor } from "./TestimonialAuthor";

/** One testimonial at a time, large serif quote, arrows to switch. */
export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const go = (step: number) => setIndex((i) => (i + step + items.length) % items.length);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div>
      <div className="grid">
        {items.map((t, i) => (
          <figure
            key={t.id}
            aria-hidden={i !== index}
            className={`col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === index ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            <blockquote className="font-serif text-[clamp(1.6rem,3.4vw,3.1rem)] leading-[1.15] text-ink">
              <p>{t.excerpt}</p>
            </blockquote>
            <div className="mt-8">
              <TestimonialAuthor t={t} />
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
        >
          <Icon name="arrowLeft" className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
        >
          <Icon name="arrowRight" className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </button>
        <p className="font-mono text-xs text-muted" aria-live="polite">
          {pad(index + 1)} / {pad(items.length)}
        </p>
      </div>
    </div>
  );
}
