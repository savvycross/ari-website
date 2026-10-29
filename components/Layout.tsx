import type { ElementType, ReactNode } from "react";
import { reveal, RevealWords } from "./Reveal";

export const pad = (n: number) => String(n).padStart(2, "0");

export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

/** Section heading in her words, with an optional (02)-style count. */
export function Heading({
  id,
  text,
  count,
  as,
  className = "h2 text-ink",
}: {
  id: string;
  text: string;
  count?: number;
  as?: ElementType;
  className?: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <RevealWords as={as} id={id} text={text} className={className} />
      {count !== undefined && (
        <span className="font-mono text-sm text-muted" {...reveal("ui", 300)}>
          ({pad(count)})
        </span>
      )}
    </div>
  );
}

/** Small mono label with a burgundy dot, e.g. "● RESULT". */
export function DotLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] text-muted uppercase ${className}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </p>
  );
}
