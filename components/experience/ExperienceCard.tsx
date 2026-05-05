import Link from "next/link";

import FavoriteToggleButton from "@/components/experience/FavoriteToggleButton";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm">
      <div className="relative h-64 overflow-hidden">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute right-3 top-3">
          <FavoriteToggleButton experienceId={experience.id} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-white/80">
            {experience.destination}
          </p>
          <h3 className="mt-1 font-heading text-2xl leading-tight">{experience.title}</h3>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <p className="line-clamp-2 text-sm text-[var(--color-muted)]">{experience.description}</p>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3 text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
          <span>{experience.seasonLabel}</span>
          <span>From {priceFormatter.format(experience.price)}</span>
        </div>
        <Link
          href={`/experiences/${experience.id}`}
          className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]"
        >
          View experience
        </Link>
      </div>
    </article>
  );
};

export default ExperienceCard;
