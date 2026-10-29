"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: site.location.timeZone,
});

/** Live "Lagos · WAT · 14:32" clock showing Pere's local time. */
export function LocalClock({ className = "" }: { className?: string }) {
  // Rendered as "--:--" at build time, then filled in on the visitor's device.
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className={`inline-flex items-center gap-2 text-xs font-medium tracking-wide text-muted ${className}`}>
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
      </span>
      <span>
        {site.location.city} · {site.location.zoneLabel} ·{" "}
        <time className="tabular-nums text-ink" suppressHydrationWarning>
          {time ?? "--:--"}
        </time>
      </span>
      <span className="sr-only">(Pere&rsquo;s local time)</span>
    </p>
  );
}
