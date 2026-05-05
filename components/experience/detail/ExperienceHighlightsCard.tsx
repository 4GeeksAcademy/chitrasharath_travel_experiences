interface ExperienceHighlightsCardProps {
  highlights: string[];
}

const ExperienceHighlightsCard = ({ highlights }: ExperienceHighlightsCardProps) => {
  return (
    <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
      <h3 className="font-heading text-3xl uppercase">Highlights</h3>
      <ol className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
        {highlights.map((highlight, index) => (
          <li key={highlight} className="flex gap-3">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceHighlightsCard;
