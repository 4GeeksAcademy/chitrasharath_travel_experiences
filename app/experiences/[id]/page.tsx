import { notFound } from "next/navigation";

import ExperienceAccommodationCard from "@/components/experience/detail/ExperienceAccommodationCard";
import ExperienceGalleryCard from "@/components/experience/detail/ExperienceGalleryCard";
import ExperienceHighlightsCard from "@/components/experience/detail/ExperienceHighlightsCard";
import ExperienceRegionCtaCard from "@/components/experience/detail/ExperienceRegionCtaCard";
import ExperienceSectionCards from "@/components/experience/detail/ExperienceSectionCards";
import ExperienceSummaryCard from "@/components/experience/detail/ExperienceSummaryCard";
import HeroBanner from "@/components/ui/HeroBanner";
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
        <ExperienceSummaryCard experience={experience} summary={detailContent.summary} />
        <ExperienceHighlightsCard highlights={experience.highlights} />
        <ExperienceSectionCards sections={detailContent.sections} />
        <ExperienceGalleryCard title={experience.title} gallery={detailContent.gallery} />
        <ExperienceAccommodationCard accommodation={detailContent.accommodation} />
        <ExperienceRegionCtaCard relatedRegionCta={detailContent.relatedRegionCta} />
      </section>
    </div>
  );
};

export default ExperienceDetailPage;
