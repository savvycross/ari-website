import { site } from "@/data/site";
import { Button } from "./Button";
import { Sparkle, Tape } from "./Doodles";
import { Container } from "./Section";

/** Closing call-to-action shown just above the footer. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[22px] bg-[#4a1411] px-7 py-14 text-center text-cream sm:px-14 sm:py-20">
          <Tape className="-top-1 left-1/2 -translate-x-1/2 rotate-[3deg]" />
          <Sparkle className="absolute top-10 left-[12%] h-6 w-6 opacity-70" />
          <Sparkle className="absolute right-[10%] bottom-12 h-4 w-4 opacity-60" />
          <h2 id="cta-heading" className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
            Have work that needs handling?{" "}
            <span className="italic text-marker">Let&rsquo;s talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/80">
            Tell me what&rsquo;s on your plate and I&rsquo;ll get back to you with how I can help.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact/" variant="light" arrow>
              Let&rsquo;s Work Together
            </Button>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="on-dark inline-flex min-h-12 items-center rounded-full border border-cream/30 px-6 font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
