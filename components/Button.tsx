import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-cream shadow-[var(--shadow-soft)] hover:bg-brand-soft",
  secondary:
    "border border-brand/30 bg-cream/70 text-brand backdrop-blur hover:border-brand hover:bg-blush",
  light: "bg-cream text-brand hover:bg-blush on-dark",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200 ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Text link with an arrow, e.g. "See all services →". */
export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-semibold text-brand underline decoration-marker decoration-2 underline-offset-[6px] hover:text-brand-soft"
    >
      {children}
      <Icon
        name="arrow"
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
      />
    </Link>
  );
}
