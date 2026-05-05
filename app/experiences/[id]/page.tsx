import Link from "next/link";
import { notFound } from "next/navigation";

import FavoriteToggleButton from "@/components/experience/FavoriteToggleButton";
import HeroBanner from "@/components/ui/HeroBanner";
import CtaButton from "@/components/ui/CtaButton";
import { experiences } from "@/data/experiences";
import { getExperienceDetailContent } from "@/data/experience_enrichment";

const ExperienceDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) notFound();

  const detailContent = getExperienceDetailContent(experience.id);
  if (!detailContent) notFound();

  return (
    <div>
      <HeroBanner
        image={experience.heroImageUrl}
        title={experience.title}
        subtitle={experience.description}
        eyebrow={experience.destination}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experiences", href: "/experiences" },
          { label: experience.city },
        ]}
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-12">
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
          <p className="mt-4 max-w-3xl text-[var(--color-muted)]">{detailContent.summary}</p>
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

        <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
          <h3 className="font-heading text-3xl uppercase">Highlights</h3>
          <ol className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            {experience.highlights.map((highlight, index) => (
              <li key={highlight} className="flex gap-3">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ol>
        </section>

        {detailContent.sections.map((section) => (
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

        <section className="space-y-4 rounded-3xl border border-[var(--color-border)] bg-white p-5">
          <img
            src={detailContent.gallery[0]}
            alt={`${experience.title} gallery`}
            className="h-[28rem] w-full rounded-2xl object-cover"
          />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {detailContent.gallery.map((imageUrl) => (
              <img
                key={imageUrl}
                src={imageUrl}
                alt="Experience gallery thumbnail"
                className="h-24 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </section>

        <section className="grid gap-5 rounded-3xl border border-[var(--color-border)] bg-white p-5 md:grid-cols-[1.1fr_1fr]">
          <img
            src={detailContent.accommodation.imageUrl}
            alt={detailContent.accommodation.name}
            className="h-72 w-full rounded-2xl object-cover"
          />
          <div className="space-y-4">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Where to stay
            </p>
            <h3 className="font-heading text-4xl uppercase leading-[0.95]">
              {detailContent.accommodation.name}
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              {detailContent.accommodation.secondaryLabel}
            </p>
            <Link
              href={detailContent.accommodation.href}
              className="inline-flex text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]"
            >
              View accommodation options
            </Link>
          </div>
        </section>

        <section className="rounded-3xl bg-[var(--color-ink)] p-7 text-white">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-white/70">
            {detailContent.relatedRegionCta.regionName}
          </p>
          <h3 className="mt-2 font-heading text-4xl uppercase">Keep exploring</h3>
          <p className="mt-3 max-w-2xl text-sm text-white/85">
            {detailContent.relatedRegionCta.body}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CtaButton
              href={detailContent.relatedRegionCta.primaryHref}
              label={detailContent.relatedRegionCta.primaryLabel}
              variant="secondary"
            />
            <CtaButton
              href={detailContent.relatedRegionCta.secondaryHref}
              label={detailContent.relatedRegionCta.secondaryLabel}
              variant="ghost"
            />
            <a
              href={detailContent.relatedRegionCta.phoneHref}
              className="text-xs uppercase tracking-[0.18em] text-white/80"
            >
              {detailContent.relatedRegionCta.phoneLabel}
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ExperienceDetailPage;
