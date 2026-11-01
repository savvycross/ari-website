import { testimonials } from "@/data/testimonials";
import { TextLink } from "./Button";
import { reveal } from "./Reveal";
import { TestimonialAuthor } from "./TestimonialAuthor";

const caseStudyFor: Record<string, string> = {
  "esther-uzodinma": "/experience/estebare/",
  "estelle-agyeman": "/experience/karr/",
};

/** Both testimonials side by side (stacked on phones), each with photo and caption. */
export function TestimonialGrid() {
  return (
    <ul className="grid border-t border-line md:grid-cols-2">
      {testimonials.map((t, i) => {
        const isFull = t.excerpt === t.paragraphs.join(" ");
        return (
          <li
            key={t.id}
            className="flex flex-col justify-between gap-10 border-b border-line py-10 md:border-b-0 md:py-12 md:odd:pr-10 md:even:border-l md:even:pl-10"
            {...reveal("card", i * 80)}
          >
            <figure className="flex flex-col gap-8">
              <blockquote className="font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.2] text-ink">
                <p>{t.excerpt}</p>
              </blockquote>
              <TestimonialAuthor t={t} size={60} />
            </figure>
            {!isFull && (
              <div>
                <TextLink href={caseStudyFor[t.id]}>Read more</TextLink>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
