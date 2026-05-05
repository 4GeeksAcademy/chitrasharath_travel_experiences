import Link from "next/link";

import type { AccommodationCardContent } from "@/types/experience_enrichment";

interface ExperienceAccommodationCardProps {
  accommodation: AccommodationCardContent;
}

const ExperienceAccommodationCard = ({ accommodation }: ExperienceAccommodationCardProps) => {
  return (
    <section className="grid gap-5 rounded-3xl border border-[var(--color-border)] bg-white p-5 md:grid-cols-[1.1fr_1fr]">
      <img
        src={accommodation.imageUrl}
        alt={accommodation.name}
        className="h-72 w-full rounded-2xl object-cover"
      />
      <div className="space-y-4">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Where to stay
        </p>
        <h3 className="font-heading text-4xl uppercase leading-[0.95]">{accommodation.name}</h3>
        <p className="text-sm text-[var(--color-muted)]">{accommodation.secondaryLabel}</p>
        <Link
          href={accommodation.href}
          className="inline-flex text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]"
        >
          View accommodation options
        </Link>
      </div>
    </section>
  );
};

export default ExperienceAccommodationCard;
