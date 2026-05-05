import CtaButton from "@/components/ui/CtaButton";
import type { RelatedRegionCtaContent } from "@/types/experience_enrichment";

interface ExperienceRegionCtaCardProps {
  relatedRegionCta: RelatedRegionCtaContent;
}

const ExperienceRegionCtaCard = ({ relatedRegionCta }: ExperienceRegionCtaCardProps) => {
  return (
    <section className="rounded-3xl bg-[var(--color-ink)] p-7 text-white">
      <p className="font-display text-xs uppercase tracking-[0.22em] text-white/70">
        {relatedRegionCta.regionName}
      </p>
      <h3 className="mt-2 font-heading text-4xl uppercase">Keep exploring</h3>
      <p className="mt-3 max-w-2xl text-sm text-white/85">{relatedRegionCta.body}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CtaButton href={relatedRegionCta.primaryHref} label={relatedRegionCta.primaryLabel} variant="secondary" />
        <CtaButton href={relatedRegionCta.secondaryHref} label={relatedRegionCta.secondaryLabel} variant="ghost" />
        <a href={relatedRegionCta.phoneHref} className="text-xs uppercase tracking-[0.18em] text-white/80">
          {relatedRegionCta.phoneLabel}
        </a>
      </div>
    </section>
  );
};

export default ExperienceRegionCtaCard;
