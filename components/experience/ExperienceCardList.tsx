import ExperienceCard from "@/components/experience/ExperienceCard";
import type { Experience } from "@/types";

interface ExperienceCardListProps {
  items: Experience[];
  emptyMessage: string;
}

const ExperienceCardList = ({
  items,
  emptyMessage,
}: ExperienceCardListProps) => {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-white p-12 text-center">
        <p className="font-heading text-3xl uppercase text-[var(--color-ink)]">No results found</p>
        <p className="mt-3 text-sm text-[var(--color-muted)]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceCardList;
