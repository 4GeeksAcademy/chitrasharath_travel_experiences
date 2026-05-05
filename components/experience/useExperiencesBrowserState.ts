"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { Experience } from "@/types";

const PAGE_SIZE = 9;

interface UseExperiencesBrowserStateResult {
  search: string;
  category: string;
  destination: string;
  featuredOnly: boolean;
  categories: string[];
  destinations: string[];
  pagedItems: Experience[];
  normalizedPage: number;
  totalPages: number;
  writeQuery: (nextState: {
    search?: string;
    category?: string;
    destination?: string;
    page?: number;
    featured?: boolean;
  }) => void;
}

export const useExperiencesBrowserState = (
  items: Experience[],
): UseExperiencesBrowserStateResult => {
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
      return matchesSearch && matchesCategory && matchesDestination && matchesFeatured;
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

  return {
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
  };
};
