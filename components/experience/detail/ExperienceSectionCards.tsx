import type { ExperienceDetailSection } from "@/types/experience_enrichment";

interface ExperienceSectionCardsProps {
  sections: ExperienceDetailSection[];
}

const ExperienceSectionCards = ({ sections }: ExperienceSectionCardsProps) => {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.heading}
          className="grid gap-5 rounded-3xl border border-[var(--color-border)] bg-white p-5 md:grid-cols-2"
        >
          <img
            src={section.imageUrl}
            alt={section.heading}
            className={`h-72 w-full rounded-2xl object-cover ${section.imagePosition === "right" ? "md:order-2" : ""}`}
          />
          <div className="flex items-center">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Experience note
              </p>
              <h3 className="mt-2 font-heading text-4xl uppercase leading-[0.95]">
                {section.heading}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-muted)]">{section.body}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ExperienceSectionCards;
