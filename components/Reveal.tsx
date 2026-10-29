import type { CSSProperties, ElementType, ReactNode } from "react";

export type RevealKind = "words" | "text" | "ui" | "media" | "card" | "section";

/** Shorthand for the `data-reveal` attribute plus an optional delay. */
export function reveal(kind: RevealKind, delayMs = 0) {
  return {
    "data-reveal": kind,
    style: delayMs ? ({ "--d": `${delayMs}ms` } as CSSProperties) : undefined,
  };
}

/**
 * A heading whose words rise into place one after another.
 * Screen readers get the full text from aria-label; the word spans are hidden.
 *
 * `mark` wraps one word (matched exactly) in the hand-drawn marker underline.
 */
export function RevealWords({
  as: Tag = "h2",
  text,
  className = "",
  delayMs = 0,
  id,
  mark,
  accentLastFullStop = false,
}: {
  as?: ElementType;
  text: string;
  className?: string;
  delayMs?: number;
  id?: string;
  mark?: string;
  accentLastFullStop?: boolean;
}) {
  const words = text.split(" ");
  return (
    <Tag id={id} aria-label={text} className={className} {...reveal("words", delayMs)}>
      {words.map((word, i) => {
        let content: ReactNode = word;
        if (accentLastFullStop && i === words.length - 1 && word.endsWith(".")) {
          content = (
            <>
              {word.slice(0, -1)}
              <span className="text-brand">.</span>
            </>
          );
        }
        if (mark && word === mark) {
          content = <MarkedWord>{content}</MarkedWord>;
        }
        return (
          <span key={i} aria-hidden="true">
            <span className="w">
              <span style={{ "--i": i } as CSSProperties}>{content}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </Tag>
  );
}

/** The one hand-drawn marker underline on the site (hero headline). */
function MarkedWord({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 220 18"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-[0.02em] left-[-2%] h-[0.22em] w-[104%] text-marker"
      >
        <path
          d="M3 11.5c21-4.6 46-6.4 71-5.8 18 .4 30 2.2 49 1.6 25-.8 52-4.5 94-2.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Generic wrapper when a component needs a reveal on a custom tag. */
export function Reveal({
  as: Tag = "div",
  kind,
  delayMs = 0,
  className = "",
  children,
}: {
  as?: ElementType;
  kind: RevealKind;
  delayMs?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={className} {...reveal(kind, delayMs)}>
      {children}
    </Tag>
  );
}
