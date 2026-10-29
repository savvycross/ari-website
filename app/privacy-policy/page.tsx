import type { Metadata } from "next";
import { Wrap } from "@/components/Layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} uses the information sent through this website.`,
};

// TEMPLATE — Pere should review this page (and ideally have it checked)
// before launch. It is the only page not written from her brief.
export default function PrivacyPolicyPage() {
  const updated = "29 October 2026";
  return (
    <Wrap className="pt-14 pb-24 sm:pt-20">
      <div className="max-w-3xl">
        <p className="rounded-xl border border-dashed border-brand/60 bg-marker/10 px-4 py-3 font-mono text-xs text-brand">
          TODO_PERE: template, please review before launch
        </p>
        <h1 className="h1 mt-10 text-ink">Privacy Policy</h1>
        <p className="mt-4 font-mono text-xs text-muted">Last updated: {updated}</p>

        <div className="mt-12 space-y-10 text-lg leading-relaxed text-muted [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-ink [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          <section>
            <h2>Who I am</h2>
            <p>
              This website belongs to {site.name}. If you have any questions about this policy, email{" "}
              <a href={`mailto:${site.contact.email}`} className="text-brand underline underline-offset-2">
                {site.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2>What the contact form collects</h2>
            <p>When you send an enquiry, the form collects:</p>
            <ul>
              <li>your name and email address</li>
              <li>the service you are interested in, the type of engagement and your timeline</li>
              <li>your message</li>
            </ul>
            <p>The site does not use analytics or advertising cookies.</p>
          </section>

          <section>
            <h2>How it is used</h2>
            <p>
              Your details are used only to reply to your enquiry and, if we work together, to manage that work.
              They are never sold or shared for marketing.
            </p>
            <p>
              Form submissions are delivered by Formspree, a third-party form service, which stores them on my
              behalf. Messages sent by email or WhatsApp are handled by those services.
            </p>
          </section>

          <section>
            <h2>How long it is kept</h2>
            <p>Enquiries are kept only as long as needed to respond and for any work that follows.</p>
          </section>

          <section>
            <h2>Your rights and deletion</h2>
            <p>
              You can ask to see the information held about you, correct it, or have it deleted at any time.
              Email{" "}
              <a href={`mailto:${site.contact.email}`} className="text-brand underline underline-offset-2">
                {site.contact.email}
              </a>{" "}
              and it will be removed.
            </p>
          </section>
        </div>
      </div>
    </Wrap>
  );
}
