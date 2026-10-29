import type { ReactNode } from "react";
import { MarkerStroke } from "./Doodles";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  tone = "cream",
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  id?: string;
  tone?: "cream" | "blush";
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-20 sm:py-28 ${tone === "blush" ? "bg-blush/60" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Eyebrow + serif heading with a hand-drawn marker stroke underneath. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-serif text-4xl leading-[1.08] font-medium tracking-tight text-ink sm:text-5xl"
      >
        {title}
      </h2>
      <MarkerStroke className={`mt-3 h-3.5 w-36 ${centered ? "mx-auto" : ""}`} />
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
