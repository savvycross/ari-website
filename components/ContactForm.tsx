"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error";

const engagementTypes = ["Monthly retainer", "Project", "Not sure yet"];
const timelines = ["As soon as possible", "Within 2 weeks", "Within a month", "Flexible"];

const base =
  "w-full border border-line bg-cream px-5 py-3.5 text-ink placeholder:text-muted outline-none transition-[border-color,box-shadow] focus:border-brand focus:ring-2 focus:ring-brand/30";
const field = `${base} rounded-full`;
const label = "mb-2 block text-sm font-semibold text-ink";

function Select({ id, name, placeholder, options }: { id: string; name: string; placeholder: string; options: string[] }) {
  return (
    <div className="relative">
      <select id={id} name={name} defaultValue="" required className={`${field} appearance-none pr-12`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 text-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

/** Enquiry form. Posts to the Formspree (or similar) endpoint in NEXT_PUBLIC_FORM_ENDPOINT. */
export function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const id = (name: string) => `${idPrefix}-${name}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.formEndpoint) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={label}>Name</label>
          <input id={id("name")} name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor={id("email")} className={label}>Email</label>
          <input id={id("email")} name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={id("service")} className={label}>Service needed</label>
          <Select id={id("service")} name="service" placeholder="Select a service" options={[...services.map((s) => s.title), "Not sure yet"]} />
        </div>
        <div>
          <label htmlFor={id("engagement")} className={label}>Engagement type</label>
          <Select id={id("engagement")} name="engagement" placeholder="Select a type" options={engagementTypes} />
        </div>
      </div>
      <div>
        <label htmlFor={id("timeline")} className={label}>Timeline</label>
        <Select id={id("timeline")} name="timeline" placeholder="Select a timeline" options={timelines} />
      </div>
      <div>
        <label htmlFor={id("message")} className={label}>Message</label>
        <textarea id={id("message")} name="message" required rows={6} placeholder="Tell me what you need help with…" className={`${base} resize-y rounded-[22px]`} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-button text-[1.05rem] font-medium text-on-button transition-colors hover:bg-button-hover disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <Icon name="arrowUpRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      <p role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === "sent" && <span className="text-ink">Thank you, your message has been sent.</span>}
        {status === "error" && (
          <span className="text-brand">
            Sorry, the message could not be sent. Please email{" "}
            <a href={`mailto:${site.contact.email}`} className="underline underline-offset-2">
              {site.contact.email}
            </a>
            .
          </span>
        )}
      </p>
    </form>
  );
}
