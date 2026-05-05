import FavoriteToggleButton from "@/components/experience/FavoriteToggleButton";
import type { Experience } from "@/types/experiences";

interface ExperienceSummaryCardProps {
  experience: Experience;
  summary: string;
}

const ExperienceSummaryCard = ({ experience, summary }: ExperienceSummaryCardProps) => {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Trip facts
          </p>
          <h2 className="font-heading text-4xl uppercase">Summary</h2>
        </div>
        <FavoriteToggleButton experienceId={experience.id} />
      </div>
      <p className="mt-4 max-w-3xl text-[var(--color-muted)]">{summary}</p>
      <div className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] md:grid-cols-3">
        <div className="rounded-2xl bg-[var(--color-sand)] p-4">
          <p className="font-display text-[11px] uppercase tracking-[0.2em]">Best months</p>
          <p className="mt-2 text-base text-[var(--color-ink)]">{experience.seasonLabel}</p>
        </div>
        <div className="rounded-2xl bg-[var(--color-sand)] p-4">
          <p className="font-display text-[11px] uppercase tracking-[0.2em]">Ideal length</p>
          <p className="mt-2 text-base text-[var(--color-ink)]">{experience.durationDays} days</p>
        </div>
        <div className="rounded-2xl bg-[var(--color-sand)] p-4">
          <p className="font-display text-[11px] uppercase tracking-[0.2em]">Rating</p>
          <p className="mt-2 text-base text-[var(--color-ink)]">{experience.rating.toFixed(1)} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSummaryCard;
