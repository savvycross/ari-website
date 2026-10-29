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
export function LocalClock() {
  // Shown as "--:--" in the static HTML, then filled in on the visitor's device.
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="font-mono text-xs tracking-wide text-muted">
      {site.location.city} · {site.location.zoneLabel} ·{" "}
      <time className="tabular-nums text-ink">{time ?? "--:--"}</time>
      <span className="sr-only"> (Pere&rsquo;s local time)</span>
    </p>
  );
}
