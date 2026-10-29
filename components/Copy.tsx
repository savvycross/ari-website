/**
 * Renders copy from /data. Placeholders starting with "TODO_" are shown in a
 * dashed box so they cannot be missed before launch.
 */
export function isPlaceholder(text: string | undefined) {
  return !text || text.startsWith("TODO_");
}

export function Copy({ text }: { text: string }) {
  if (isPlaceholder(text)) {
    return (
      <span className="rounded-md border border-dashed border-brand/60 bg-marker/15 px-2 py-0.5 font-mono text-[0.45em] tracking-normal text-brand align-middle">
        {text}
      </span>
    );
  }
  return <>{text}</>;
}
