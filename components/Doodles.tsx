/**
 * Original hand-drawn accents: the marker stroke under headings and the
 * strips of tape that "pin" photos, notes and buttons to the page.
 */

type Props = { className?: string };

export function MarkerStroke({ className = "" }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 18"
      preserveAspectRatio="none"
      className={`pointer-events-none text-marker ${className}`}
    >
      <path
        d="M3 11.5c21-4.6 46-6.4 71-5.8 18 .4 30 2.2 49 1.6 25-.8 52-4.5 94-2.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M30 14.6c28-2.3 61-2.7 92-1.7 23 .8 41 .3 61-1.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  );
}

/** A strip of semi-transparent masking tape with torn ends. */
export function Tape({ className = "" }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 34"
      className={`pointer-events-none absolute z-10 h-7 w-24 text-marker drop-shadow-sm ${className}`}
    >
      <path
        d="M4 4 9 2l4 3 5-3 5 2 4-2 88 1 2 3-2 3 3 3-2 4 3 3-2 4 2 3-3 3-94 1-4-2-5 2-4-3-5 2-3-3 2-4-3-3 2-4-2-3 2-4-2-3Z"
        fill="currentColor"
        opacity=".72"
      />
      <path d="M12 9h92M12 25h88" stroke="#fff" strokeOpacity=".28" strokeWidth="1.2" />
    </svg>
  );
}

/** Small hand-drawn star/sparkle used as a decorative flourish. */
export function Sparkle({ className = "" }: Props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`text-marker ${className}`}>
      <path
        d="M12 2.5c.6 4.4 2.4 7.2 7.8 8.6-5.2 1.3-7 4-7.8 9.6-.9-5.6-2.8-8.3-8-9.6 5.3-1.4 7.4-4.2 8-8.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Soft blush floral texture for behind the hero. */
export function FloralBackdrop({ className = "" }: Props) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <g id="petal-flower">
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse
              key={r}
              cx="0"
              cy="-9"
              rx="5.5"
              ry="9.5"
              transform={`rotate(${r})`}
              fill="#e9c3b8"
              fillOpacity=".55"
            />
          ))}
          <circle r="3.2" fill="#e8b04a" fillOpacity=".45" />
        </g>
        <g id="leaf-sprig" fill="none" stroke="#d9a99c" strokeOpacity=".55" strokeWidth="1.4" strokeLinecap="round">
          <path d="M0 20C2 8 8 0 18-6" />
          <path d="M5 8c-5-1-8-5-8-9 5 0 8 3 8 9ZM10 1c0-5 3-8 7-9 1 4-2 8-7 9Z" fill="#ecc9be" fillOpacity=".5" stroke="none" />
        </g>
        <pattern id="floral" width="180" height="180" patternUnits="userSpaceOnUse">
          <use href="#petal-flower" x="30" y="36" />
          <use href="#leaf-sprig" x="120" y="40" />
          <use href="#petal-flower" transform="translate(126 128) scale(.7) rotate(18)" />
          <use href="#leaf-sprig" transform="translate(40 130) rotate(140) scale(.9)" />
          <circle cx="92" cy="92" r="2" fill="#e2b3a6" fillOpacity=".7" />
          <circle cx="160" cy="88" r="1.5" fill="#e2b3a6" fillOpacity=".7" />
          <circle cx="72" cy="164" r="1.5" fill="#e2b3a6" fillOpacity=".7" />
        </pattern>
        <radialGradient id="floral-fade" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="floral-mask">
          <rect width="100%" height="100%" fill="url(#floral-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#floral)" mask="url(#floral-mask)" />
    </svg>
  );
}
