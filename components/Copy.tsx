/**
 * Renders a piece of copy from /data. Placeholder strings that start with
 * "TODO_" are shown as a dashed, highlighted box so they are impossible to
 * miss before launch.
 */
export function isPlaceholder(text: string | undefined) {
  return !text || text.startsWith("TODO_");
}

export function Copy({ text, className = "" }: { text: string; className?: string }) {
  if (isPlaceholder(text)) {
    return (
      <span
        className={`rounded-md border border-dashed border-brand-soft/60 bg-marker/15 px-1.5 py-0.5 font-mono text-[0.8em] text-brand ${className}`}
      >
        {text}
      </span>
    );
  }
  return <span className={className}>{text}</span>;
}
