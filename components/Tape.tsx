import { reveal } from "./Reveal";

/** The one piece of tape on the site, holding a portrait to the page. */
export function Tape({ delayMs = 0 }: { delayMs?: number }) {
  return (
    <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2" {...reveal("ui", delayMs)}>
      <svg aria-hidden="true" viewBox="0 0 120 34" className="h-9 w-32 -rotate-3 text-marker">
        <path
          d="M4 4 9 2l4 3 5-3 5 2 4-2 88 1 2 3-2 3 3 3-2 4 3 3-2 4 2 3-3 3-94 1-4-2-5 2-4-3-5 2-3-3 2-4-3-3 2-4-2-3 2-4-2-3Z"
          fill="currentColor"
          opacity=".8"
        />
      </svg>
    </div>
  );
}
