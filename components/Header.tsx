"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/site";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { LocalClock } from "./LocalClock";

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
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-full bg-brand font-serif text-sm font-semibold text-cream"
          >
            {site.initials}
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-medium text-ink">{site.name}</span>
            <span className="hidden sm:block lg:hidden xl:block">
              <LocalClock />
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-3 py-2 text-[0.92rem] font-medium transition-colors ${
                      active ? "text-brand" : "text-ink/80 hover:text-brand"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-marker"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Button href="/contact/" className="!min-h-10 !px-5 !py-2">
              Let&rsquo;s Talk
            </Button>
          </span>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-brand lg:hidden"
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
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-cream px-6 pt-5 pb-10 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <LocalClock />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                menuButton.current?.focus();
              }}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-brand"
            >
              <Icon name="close" className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-10 flex-1">
            <ul className="space-y-1">
              {nav.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="rise" style={{ ["--delay" as string]: `${i * 40}ms` }}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-baseline gap-4 border-b border-line py-4 font-serif text-4xl ${
                        active ? "text-brand" : "text-ink"
                      }`}
                    >
                      <span className="font-sans text-xs tabular-nums text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-10 space-y-4">
            <Button href="/contact/" arrow className="w-full">
              Let&rsquo;s Talk
            </Button>
            <a
              href={`mailto:${site.contact.email}`}
              className="block text-center text-sm font-medium text-muted underline underline-offset-4"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
