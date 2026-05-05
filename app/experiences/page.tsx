import { Suspense } from "react";

import ExperiencesBrowser from "@/components/experience/ExperiencesBrowser";
import { experiences } from "@/data/experiences";

const ExperiencesPage = () => {
  return (
    <Suspense fallback={<div className="p-8 text-sm text-[var(--color-muted)]">Loading experiences...</div>}>
      <ExperiencesBrowser
        items={experiences}
        title="Explore curated experiences"
        subtitle="Search, filter, and save your next route."
        eyebrow="Experiences"
        heroImage="https://picsum.photos/seed/wanderlust-explorer-hero/2100/1200"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experiences" }]}
        emptyMessage="Try adjusting search terms or clearing one of the filters."
        enableFeatured
      />
    </Suspense>
  );
};

export default ExperiencesPage;
