import Link from "next/link";

/**
 * A desktop-style folder that opens a case study. The front flap tilts open
 * on hover/focus to hint at the "file" inside.
 */
export function Folder({
  href,
  label,
  caption,
}: {
  href: string;
  label: string;
  caption?: string;
}) {
  return (
    <Link href={href} className="group block w-full max-w-[17rem] rounded-2xl p-3 text-center">
      <div className="relative mx-auto aspect-[5/4] w-full [perspective:800px]">
        {/* back of folder with tab */}
        <svg aria-hidden="true" viewBox="0 0 200 160" className="absolute inset-0 h-full w-full">
          <path
            d="M10 28a10 10 0 0 1 10-10h52l14 14h94a10 10 0 0 1 10 10v100a10 10 0 0 1-10 10H20a10 10 0 0 1-10-10Z"
            fill="#4a1411"
          />
        </svg>
        {/* paper peeking out */}
        <div className="absolute inset-x-[14%] top-[20%] bottom-[20%] rounded-md border border-line bg-cream shadow-sm transition-transform duration-300 group-hover:-translate-y-3 group-focus-visible:-translate-y-3 motion-reduce:transition-none">
          <div className="mx-4 mt-4 space-y-2" aria-hidden="true">
            <div className="h-1.5 w-2/3 rounded bg-blush" />
            <div className="h-1.5 w-1/2 rounded bg-blush" />
            <div className="h-1.5 w-3/5 rounded bg-blush" />
          </div>
        </div>
        {/* front flap */}
        <div className="absolute inset-x-[5%] bottom-[5%] h-[64%] origin-bottom rounded-[14px] bg-brand shadow-[var(--shadow-lift)] transition-transform duration-300 group-hover:[transform:rotateX(-18deg)] group-focus-visible:[transform:rotateX(-18deg)] motion-reduce:transition-none">
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-serif text-2xl text-cream">
            {label}
          </span>
        </div>
      </div>
      {caption && <p className="mt-3 text-sm text-muted">{caption}</p>}
    </Link>
  );
}
