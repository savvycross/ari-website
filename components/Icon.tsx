/**
 * Small original line icons (24×24, stroke-based) so the site needs no
 * third-party icon set.
 */

const paths = {
  inbox: (
    <>
      <path d="M3.5 13.5 6 5.5h12l2.5 8v5h-17Z" />
      <path d="M3.5 13.5H8l1.5 2.5h5l1.5-2.5h4.5" />
    </>
  ),
  laptop: (
    <>
      <rect x="4.5" y="5" width="15" height="10" rx="1.5" />
      <path d="M2.5 18.5h19M10 8.5l-2 2 2 2M14 8.5l2 2-2 2" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3.5" width="6" height="5" rx="1.2" />
      <rect x="15" y="9.5" width="6" height="5" rx="1.2" />
      <rect x="3" y="15.5" width="6" height="5" rx="1.2" />
      <path d="M9 6h3.5a1.5 1.5 0 0 1 1.5 1.5V12h1M9 18h3.5a1.5 1.5 0 0 0 1.5-1.5V12" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5h11a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 15 14.5H9l-3.5 3v-3H4A1.5 1.5 0 0 1 2.5 13V7A1.5 1.5 0 0 1 4 5.5Z" />
      <path d="M19 9h1a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 20 17h-1v2.5L16 17h-4" />
    </>
  ),
  headset: (
    <>
      <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 1.5-1.5 2.5-4 2.5h-2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4M6 6l2.6 2.6M15.4 15.4 18 18M18 6l-2.6 2.6M8.6 15.4 6 18" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6.5L20.5 7" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20.5 5.3 16A8.5 8.5 0 1 1 8.4 19Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1a4 4 0 0 1-2.4-2.4l1-1-1-2Z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.2v.1M11.5 17v-6.5M11.5 13.2c0-1.6 1.2-2.7 2.6-2.7s2.4 1 2.4 2.7V17" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "h-5 w-5",
  label,
}: {
  name: IconName;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {paths[name]}
    </svg>
  );
}
