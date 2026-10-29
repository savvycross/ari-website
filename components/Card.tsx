import type { ReactNode } from "react";

/** Rounded card with a thin muted border and soft shadow. */
export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={`relative rounded-[18px] border border-line bg-white/80 p-7 shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </Tag>
  );
}

/** The large "01 / 02 / 03" numeral used on numbered cards. */
export function CardNumber({ n, className = "" }: { n: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-serif text-5xl leading-none font-light text-brand/25 italic ${className}`}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}
