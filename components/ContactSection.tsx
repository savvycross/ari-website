import type { ReactNode } from "react";
import { availability, contactPage, site } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { isPlaceholder } from "./Copy";
import { Icon, type IconName } from "./Icon";
import { reveal, RevealWords } from "./Reveal";

function Dot() {
  return <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />;
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] text-muted uppercase">
      <Dot />
      {children}
    </p>
  );
}

function LinkCard({
  href,
  label,
  value,
  icon,
  delay,
}: {
  href: string;
  label: string;
  value?: string;
  icon?: IconName;
  delay: number;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex items-center gap-4 rounded-[18px] border border-line bg-surface p-5 transition-colors hover:border-ink sm:p-6"
      {...reveal("card", delay)}
    >
      {icon && (
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
          <Icon name={icon} className="h-5 w-5" />
        </span>
      )}
      <span className="min-w-0">
        {value ? (
          <>
            <span className="block font-mono text-[0.7rem] tracking-[0.22em] text-muted">{label}</span>
            <span className="mt-1 block truncate text-lg font-medium text-ink sm:text-xl">{value}</span>
          </>
        ) : (
          <span className="block text-lg font-medium text-ink">{label}</span>
        )}
      </span>
      <Icon
        name="arrowUpRight"
        className="absolute top-5 right-5 h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
      />
    </a>
  );
}

/**
 * Contact block: links on the left, enquiry form on the right.
 * Used as the Contact page (h1) and, condensed, at the end of the Home page (h2).
 */
export function ContactSection({ asPage = false }: { asPage?: boolean }) {
  const headline = contactPage.headline;
  const headingId = asPage ? "contact-heading" : "home-contact-heading";

  return (
    <section
      aria-labelledby={headingId}
      className={`mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 ${asPage ? "pt-14 pb-24 sm:pt-20" : "border-t border-line py-20 sm:py-28"}`}
    >
      <div className="grid gap-14 lg:grid-cols-[45fr_55fr] lg:gap-16">
        <div>
          <div {...reveal("ui")}>
            <Label>Contact</Label>
          </div>
          {isPlaceholder(headline) ? (
            <h2
              id={headingId}
              className="mt-6 rounded-xl border border-dashed border-brand/60 bg-marker/10 px-4 py-6 font-mono text-sm text-brand"
              {...reveal("text")}
            >
              {headline}
            </h2>
          ) : (
            <RevealWords
              as={asPage ? "h1" : "h2"}
              id={headingId}
              text={headline}
              accentLastFullStop
              className={`mt-6 ${asPage ? "h1" : "h2"}`}
            />
          )}

          <div className="mt-10 grid gap-3">
            <LinkCard href={`mailto:${site.contact.email}`} label="EMAIL" value={site.contact.email} icon="mail" delay={0} />
            <LinkCard href={site.contact.whatsappHref} label="WHATSAPP" value={site.contact.phoneDisplay} icon="whatsapp" delay={80} />
            <div className="grid grid-cols-2 gap-3">
              <LinkCard href={site.contact.linkedin} label="LinkedIn" delay={160} />
              <LinkCard href={site.contact.phoneHref} label="Phone" delay={240} />
            </div>
          </div>

          <div className="mt-12" {...reveal("text")}>
            <Label>{availability.label}</Label>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink">{availability.text}</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-line bg-surface p-6 sm:p-10" {...reveal("section")}>
          <ContactForm idPrefix={asPage ? "contact" : "home-contact"} />
        </div>
      </div>
    </section>
  );
}
