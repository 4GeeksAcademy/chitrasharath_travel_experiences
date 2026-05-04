"use client";

import ExperiencesBrowser from "@/components/experience/ExperiencesBrowser";
import HeroBanner from "@/components/ui/HeroBanner";
import CtaButton from "@/components/ui/CtaButton";
import { useFavorites } from "@/components/state/favorites-context";
import { experiences } from "@/data/experiences";

export default function FavoritesPageContent() {
  const { favoriteIdSet } = useFavorites();
  const favorites = experiences.filter((experience) => favoriteIdSet.has(experience.id));

  if (favorites.length === 0) {
    return (
      <div>
        <HeroBanner
          image="https://picsum.photos/seed/wanderlust-favorites-hero/2100/1200"
          title="Saved experiences"
          subtitle="Keep track of places you want to experience next."
          eyebrow="Favorites"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Favorites" }]}
        />
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-12">
          <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-white p-12 text-center">
            <h2 className="font-heading text-4xl uppercase">No saved experiences yet</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-muted)]">
              Browse the explorer and tap save on any card to build your personal list.
            </p>
            <div className="mt-6">
              <CtaButton href="/experiences" label="Explore experiences" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <ExperiencesBrowser
      items={favorites}
      title="Your favorite experiences"
      subtitle="Filter your saved places and compare options side by side."
      eyebrow="Favorites"
      heroImage="https://picsum.photos/seed/wanderlust-favorites-hero/2100/1200"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Favorites" }]}
      emptyMessage="No saved journey matches the active search or filters."
    />
  );
}
