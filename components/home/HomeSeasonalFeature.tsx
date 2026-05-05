"use client";

import { useState } from "react";

import CtaButton from "@/components/ui/CtaButton";
import { seasonalSlides } from "@/data/site_content";

const HomeSeasonalFeature = () => {
  const [seasonalIndex, setSeasonalIndex] = useState(0);
  const seasonalItem = seasonalSlides[seasonalIndex];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12">
      <div className="grid gap-6 rounded-3xl bg-[var(--color-ink)] p-5 text-white md:grid-cols-[1.2fr_1fr] md:p-8">
        <img src={seasonalItem.imageUrl} alt={seasonalItem.title} className="h-72 w-full rounded-2xl object-cover md:h-full" />
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-white/70">Seasonal feature</p>
            <h3 className="font-heading text-4xl uppercase leading-[0.95]">{seasonalItem.title}</h3>
            <p className="text-sm text-white/85">{seasonalItem.description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <CtaButton label={seasonalItem.ctaLabel} href={seasonalItem.ctaHref} variant="secondary" />
            <div className="flex gap-2">
              <button type="button" className="rounded-full border border-white/35 px-3 py-2 text-xs uppercase tracking-[0.18em]" onClick={() => setSeasonalIndex((i) => (i === 0 ? seasonalSlides.length - 1 : i - 1))}>Prev</button>
              <button type="button" className="rounded-full border border-white/35 px-3 py-2 text-xs uppercase tracking-[0.18em]" onClick={() => setSeasonalIndex((i) => (i === seasonalSlides.length - 1 ? 0 : i + 1))}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeasonalFeature;
