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
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-14 sm:px-8 md:grid-cols-12 lg:px-12">
        <div className="md:col-span-6">
          <p className="font-serif text-4xl text-ink sm:text-5xl">{site.name}</p>
          <p className="mt-3 max-w-md text-muted">{site.title}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-grow text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-2 md:col-span-3 md:justify-end">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <Icon name={s.icon} className="h-[1.1rem] w-[1.1rem]" />
                <span className="sr-only">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-2 px-5 py-6 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <Link href="/privacy-policy/" className="link-grow">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
