"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import ExperienceCardList from "@/components/experience/ExperienceCardList";
import FilterPanel from "@/components/forms/FilterPanel";
import SearchBar from "@/components/forms/SearchBar";
import HeroBanner from "@/components/ui/HeroBanner";
import ResultsPager from "@/components/ui/ResultsPager";
import CtaButton from "@/components/ui/CtaButton";
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

const PAGE_SIZE = 9;

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";
  const page = Number(searchParams.get("page") ?? "1") || 1;
  const featuredOnly = searchParams.get("featured") === "true";

  const categories = useMemo(
    () => Array.from(new Set(items.map((item) => item.category))).sort(),
    [items],
  );
  const destinations = useMemo(
    () => Array.from(new Set(items.map((item) => item.destination))).sort(),
    [items],
  );

  const filtered = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return items.filter((item) => {
      const matchesSearch =
        !normalizedSearch ||
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.destination.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch);
      const matchesCategory = !category || item.category === category;
      const matchesDestination = !destination || item.destination === destination;
      const matchesFeatured = !featuredOnly || item.featured;
      return (
        matchesSearch &&
        matchesCategory &&
        matchesDestination &&
        matchesFeatured
      );
    });
  }, [items, search, category, destination, featuredOnly]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const normalizedPage = Math.min(page, totalPages);

  const pagedItems = useMemo(() => {
    const start = (normalizedPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, normalizedPage]);

  const writeQuery = (nextState: {
    search?: string;
    category?: string;
    destination?: string;
    page?: number;
    featured?: boolean;
  }) => {
    const params = new URLSearchParams(searchParams.toString());

    const nextSearch = nextState.search ?? search;
    const nextCategory = nextState.category ?? category;
    const nextDestination = nextState.destination ?? destination;
    const nextPage = nextState.page ?? page;
    const nextFeatured =
      typeof nextState.featured === "boolean" ? nextState.featured : featuredOnly;

    if (nextSearch) params.set("search", nextSearch);
    else params.delete("search");

    if (nextCategory) params.set("category", nextCategory);
    else params.delete("category");

    if (nextDestination) params.set("destination", nextDestination);
    else params.delete("destination");

    if (nextPage > 1) params.set("page", String(nextPage));
    else params.delete("page");

    if (nextFeatured) params.set("featured", "true");
    else params.delete("featured");

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

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
        <div className="rounded-3xl border border-[var(--color-border)] bg-white p-5 md:p-7">
          <p className="mx-auto max-w-3xl text-center text-sm text-[var(--color-muted)] md:text-base">
            Explore our collection with live filters and destination search.
          </p>
          <div className="mt-6 grid gap-4">
            <SearchBar
              value={search}
              onChange={(value) => {
                writeQuery({ search: value, page: 1 });
              }}
              onSubmit={() => writeQuery({ search, page: 1 })}
            />
            <FilterPanel
              categories={categories}
              destinations={destinations}
              selectedCategory={category}
              selectedDestination={destination}
              onCategoryChange={(value) => {
                writeQuery({ category: value, page: 1 });
              }}
              onDestinationChange={(value) => {
                writeQuery({ destination: value, page: 1 });
              }}
            />
            {enableFeatured ? (
              <label className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
                <input
                  type="checkbox"
                  checked={featuredOnly}
                  onChange={(event) => {
                    const nextValue = event.target.checked;
                    writeQuery({ featured: nextValue, page: 1 });
                  }}
                  className="h-4 w-4 rounded border-[var(--color-border)]"
                />
                Featured only
              </label>
            ) : null}
          </div>
        </div>

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

        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-sand)] p-8 text-center">
          <h2 className="font-heading text-4xl uppercase">Need help planning?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-muted)]">
            Share your timing, travel style, and priorities. We will shape a route around them.
          </p>
          <div className="mt-6">
            <CtaButton href="/profile" label="Talk to a planner" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesBrowser;
