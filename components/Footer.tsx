import Link from "next/link";
import { nav, site } from "@/data/site";
import { Icon, type IconName } from "./Icon";

export function Footer() {
  const socials: { label: string; href: string; icon: IconName }[] = [
    { label: "LinkedIn", href: site.contact.linkedin, icon: "linkedin" },
    { label: "Email", href: `mailto:${site.contact.email}`, icon: "mail" },
    { label: "WhatsApp", href: site.contact.whatsappHref, icon: "whatsapp" },
  ];

  return (
    <footer className="bg-brand text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl">{site.name}</p>
          <p className="mt-2 max-w-xs text-cream/75">{site.title}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-cream/75">
            <Icon name="pin" className="h-4 w-4" />
            Based in {site.location.city} · Working with clients worldwide
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-marker">Explore</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/85 hover:text-cream hover:underline on-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-marker">Connect</p>
          <ul className="flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-brand on-dark"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                  <span className="sr-only">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-5 block text-cream/85 hover:text-cream hover:underline on-dark"
          >
            {site.contact.email}
          </a>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-cream/70 sm:flex-row sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy/" className="hover:text-cream hover:underline on-dark">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
