"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "./Icon";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = () => document.documentElement.getAttribute("data-theme") ?? "light";

/** Light/dark switch. The choice is remembered on this device. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.setAttribute("data-theme", next);
        try {
          localStorage.setItem("theme", next);
        } catch {}
      }}
      className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} className="h-[1.1rem] w-[1.1rem]" />
      <span className="sr-only">{theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}</span>
    </button>
  );
}
