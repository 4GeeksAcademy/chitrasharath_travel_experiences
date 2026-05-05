"use client";

import FilterPanel from "@/components/forms/FilterPanel";
import SearchBar from "@/components/forms/SearchBar";

interface ExperiencesFiltersCardProps {
  search: string;
  category: string;
  destination: string;
  categories: string[];
  destinations: string[];
  featuredOnly: boolean;
  enableFeatured: boolean;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onFeaturedChange: (value: boolean) => void;
}

const ExperiencesFiltersCard = ({
  search,
  category,
  destination,
  categories,
  destinations,
  featuredOnly,
  enableFeatured,
  onSearchChange,
  onSearchSubmit,
  onCategoryChange,
  onDestinationChange,
  onFeaturedChange,
}: ExperiencesFiltersCardProps) => {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-5 md:p-7">
      <p className="mx-auto max-w-3xl text-center text-sm text-[var(--color-muted)] md:text-base">
        Explore our collection with live filters and destination search.
      </p>
      <div className="mt-6 grid gap-4">
        <SearchBar value={search} onChange={onSearchChange} onSubmit={onSearchSubmit} />
        <FilterPanel
          categories={categories}
          destinations={destinations}
          selectedCategory={category}
          selectedDestination={destination}
          onCategoryChange={onCategoryChange}
          onDestinationChange={onDestinationChange}
        />
        {enableFeatured ? (
          <label className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(event) => onFeaturedChange(event.target.checked)}
              className="h-4 w-4 rounded border-[var(--color-border)]"
            />
            Featured only
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default ExperiencesFiltersCard;
