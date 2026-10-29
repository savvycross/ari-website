import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

/** Photo, name and caption shown under a testimonial. */
export function TestimonialAuthor({ t, size = 56 }: { t: Testimonial; size?: number }) {
  return (
    <figcaption className="flex items-center gap-4">
      <Image
        src={t.photo}
        alt={`Photo of ${t.name}`}
        width={size}
        height={size}
        className="shrink-0 rounded-full object-cover"
        style={{ width: size, height: size }}
      />
      <span>
        <span className="block font-medium text-ink">{t.name}</span>
        <span className="block text-sm text-muted">{t.role}</span>
      </span>
    </figcaption>
  );
}
