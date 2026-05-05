"use client";

import ExperienceCardList from "@/components/experience/ExperienceCardList";
import ExperiencesFiltersCard from "@/components/experience/ExperiencesFiltersCard";
import ExperiencesPlanningCta from "@/components/experience/ExperiencesPlanningCta";
import { useExperiencesBrowserState } from "@/components/experience/useExperiencesBrowserState";
import HeroBanner from "@/components/ui/HeroBanner";
import ResultsPager from "@/components/ui/ResultsPager";
import type { Experience } from "@/types";

interface ExperiencesBrowserProps {
  items: Experience[];
  title: string;
  subtitle: string;
  eyebrow: string;
  heroImage: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  emptyMessage: string;
  enableFeatured?: boolean;
}

const ExperiencesBrowser = ({
  items,
  title,
  subtitle,
  eyebrow,
  heroImage,
  breadcrumbs,
  emptyMessage,
  enableFeatured = false,
}: ExperiencesBrowserProps) => {
  const {
    search,
    category,
    destination,
    featuredOnly,
    categories,
    destinations,
    pagedItems,
    normalizedPage,
    totalPages,
    writeQuery,
  } = useExperiencesBrowserState(items);

  return (
    <div>
      <HeroBanner
        image={heroImage}
        title={title}
        subtitle={subtitle}
        eyebrow={eyebrow}
        breadcrumbs={breadcrumbs}
      />

      <section className="mx-auto max-w-6xl space-y-7 px-4 py-12 sm:px-6 lg:px-12">
        <ExperiencesFiltersCard
          search={search}
          category={category}
          destination={destination}
          categories={categories}
          destinations={destinations}
          featuredOnly={featuredOnly}
          enableFeatured={enableFeatured}
          onSearchChange={(value) => writeQuery({ search: value, page: 1 })}
          onSearchSubmit={() => writeQuery({ search, page: 1 })}
          onCategoryChange={(value) => writeQuery({ category: value, page: 1 })}
          onDestinationChange={(value) => writeQuery({ destination: value, page: 1 })}
          onFeaturedChange={(value) => writeQuery({ featured: value, page: 1 })}
        />

        <ExperienceCardList items={pagedItems} emptyMessage={emptyMessage} />

        <ResultsPager
          currentPage={normalizedPage}
          totalPages={totalPages}
          onPrev={() => {
            const nextPage = Math.max(1, normalizedPage - 1);
            writeQuery({ page: nextPage });
          }}
          onNext={() => {
            const nextPage = Math.min(totalPages, normalizedPage + 1);
            writeQuery({ page: nextPage });
          }}
        />
        <ExperiencesPlanningCta />
      </section>
    </div>
  );
};

export default ExperiencesBrowser;
