import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "outline";

const styles: Record<Variant, string> = {
  primary: "bg-button text-on-button hover:bg-button-hover",
  outline: "border border-line text-ink hover:border-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <Icon
          name="arrowUpRight"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}

/** Plain text link with an underline that grows on hover. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 font-medium text-brand">
      <span className="link-grow">{children}</span>
      <Icon
        name="arrowRight"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
