"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/site";
import { Icon } from "./Icon";
import { LocalClock } from "./LocalClock";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    overlay.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      // Keep keyboard focus inside the open menu.
      if (e.key === "Tab" && overlay.current) {
        const items = overlay.current.querySelectorAll<HTMLElement>("a, button");
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <div className="flex min-w-0 items-center gap-5">
          <Link href="/" className="flex items-center gap-2.5 font-medium text-ink">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
            {site.name}
          </Link>
          <span className="hidden border-l border-line pl-5 md:block">
            <LocalClock />
          </span>
        </div>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[0.95rem] transition-colors ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    <span className={active ? "border-b border-ink pb-0.5" : "link-grow"}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact/"
            className="hidden min-h-11 items-center rounded-full bg-button px-5 text-[0.95rem] font-medium text-on-button transition-colors hover:bg-button-hover sm:inline-flex"
          >
            Let&rsquo;s talk
          </Link>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink lg:hidden"
          >
            <Icon name="menu" className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-cream px-5 pt-4 pb-10 sm:px-8 lg:hidden"
        >
          <div className="flex h-10 items-center justify-between">
            <LocalClock />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                menuButton.current?.focus();
              }}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink"
            >
              <Icon name="close" className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-10 flex-1">
            <ul className="border-t border-line">
              {nav.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-baseline justify-between py-4 font-serif text-[2.6rem] leading-none ${
                        active ? "text-brand" : "text-ink"
                      }`}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            href="/contact/"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-button font-medium text-on-button"
          >
            Let&rsquo;s talk
          </Link>
        </div>
      )}
    </header>
  );
}
