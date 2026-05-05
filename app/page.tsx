"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import ExperienceCard from "@/components/experience/ExperienceCard";
import CtaButton from "@/components/ui/CtaButton";
import { experiences } from "@/data/experiences";
import {
  audienceTiles,
  editorialQuote,
  expertiseTiles,
  homeHeroMediaItems,
  homeIntro,
  pressLogos,
  seasonalSlides,
  storyCollage,
  testimonials,
  whyUsItems,
} from "@/data/site_content";

const Home = () => {
  const featured = useMemo(
    () => experiences.filter((experience) => experience.featured).slice(0, 6),
    [],
  );
  const [seasonalIndex, setSeasonalIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [heroMediaIndex, setHeroMediaIndex] = useState(0);
  const [failedHeroVideos, setFailedHeroVideos] = useState<string[]>([]);

  const seasonalItem = seasonalSlides[seasonalIndex];
  const testimonial = testimonials[testimonialIndex];
  const activeHeroMedia = homeHeroMediaItems[heroMediaIndex % homeHeroMediaItems.length];
  const playableHeroMedia = homeHeroMediaItems.filter(
    (mediaItem) =>
      Boolean(mediaItem.videoUrl) &&
      !failedHeroVideos.includes(mediaItem.videoUrl as string),
  );

  const advanceHeroMedia = () => {
    if (homeHeroMediaItems.length <= 1) return;

    setHeroMediaIndex((current) => (current + 1) % homeHeroMediaItems.length);
  };

  useEffect(() => {
    if (homeHeroMediaItems.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setHeroMediaIndex((current) => (current + 1) % homeHeroMediaItems.length);
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        {playableHeroMedia.length > 0 ? (
          <div className="relative h-[68vh] w-full overflow-hidden">
            {homeHeroMediaItems.map((mediaItem, mediaIndex) => {
              const videoUrl = mediaItem.videoUrl;
              if (!videoUrl || failedHeroVideos.includes(videoUrl)) return null;

              const isActive = mediaIndex === heroMediaIndex;
              return (
                <video
                  key={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  onError={() => {
                    setFailedHeroVideos((current) =>
                      current.includes(videoUrl) ? current : [...current, videoUrl],
                    );
                    if (mediaIndex === heroMediaIndex) {
                      advanceHeroMedia();
                    }
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              );
            })}
          </div>
        ) : (
          <img
            src={activeHeroMedia.posterImageUrl}
            alt={activeHeroMedia.alt}
            className="h-[68vh] w-full object-cover object-center hero-poster-motion"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-12">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/85">
            Curated experiences from our community
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-5xl uppercase leading-[0.95] text-white md:text-7xl">
            Travel beyond the obvious
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">
            High-detail routes, dramatic landscapes, and thoughtful pacing across the world&apos;s most compelling destinations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton label="Browse experiences" href="/experiences" variant="secondary" />
            <CtaButton
              label="Featured destinations"
              href="/experiences?featured=true"
              variant="secondary"
            />
            <CtaButton label="My favorites" href="/favorites" variant="secondary" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-12">
        <h2 className="font-heading text-4xl uppercase text-[var(--color-ink)] md:text-5xl">
          {homeIntro.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-muted)]">
          {homeIntro.body}
        </p>
        <div className="mt-7">
          <CtaButton label={homeIntro.ctaLabel} href={homeIntro.ctaHref} variant="secondary" />
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white px-4 py-5 sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {pressLogos.map((logo) => (
            <span
              key={logo.name}
              className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {audienceTiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group relative block overflow-hidden rounded-3xl"
            >
              <img
                src={tile.imageUrl}
                alt={tile.title}
                className="h-[22rem] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              <p className="absolute inset-x-0 bottom-0 p-5 font-heading text-2xl uppercase leading-tight text-white">
                {tile.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white px-4 py-14 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
          {whyUsItems.map((item) => (
            <article key={item.title} className="space-y-3">
              <p className="font-display text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {item.icon}
              </p>
              <h3 className="font-heading text-2xl uppercase">{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12">
        <div className="grid gap-6 rounded-3xl bg-[var(--color-ink)] p-5 text-white md:grid-cols-[1.2fr_1fr] md:p-8">
          <img
            src={seasonalItem.imageUrl}
            alt={seasonalItem.title}
            className="h-72 w-full rounded-2xl object-cover md:h-full"
          />
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="font-display text-xs uppercase tracking-[0.24em] text-white/70">
                Seasonal feature
              </p>
              <h3 className="font-heading text-4xl uppercase leading-[0.95]">
                {seasonalItem.title}
              </h3>
              <p className="text-sm text-white/85">{seasonalItem.description}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CtaButton
                label={seasonalItem.ctaLabel}
                href={seasonalItem.ctaHref}
                variant="secondary"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-full border border-white/35 px-3 py-2 text-xs uppercase tracking-[0.18em]"
                  onClick={() =>
                    setSeasonalIndex((current) =>
                      current === 0 ? seasonalSlides.length - 1 : current - 1,
                    )
                  }
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/35 px-3 py-2 text-xs uppercase tracking-[0.18em]"
                  onClick={() =>
                    setSeasonalIndex((current) =>
                      current === seasonalSlides.length - 1 ? 0 : current + 1,
                    )
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-12">
        <img
          src={testimonial.backgroundImageUrl}
          alt="Client testimonial background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-3xl rounded-3xl bg-white/92 p-8 text-center">
          <p className="font-heading text-3xl uppercase leading-tight text-[var(--color-ink)]">
            “{testimonial.quote}”
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.15em] text-[var(--color-muted)]">
            {testimonial.attribution}
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() =>
                setTestimonialIndex((current) =>
                  current === 0 ? testimonials.length - 1 : current - 1,
                )
              }
              className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.18em]"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() =>
                setTestimonialIndex((current) =>
                  current === testimonials.length - 1 ? 0 : current + 1,
                )
              }
              className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.18em]"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12">
        <h2 className="font-heading text-4xl uppercase md:text-5xl">Featured experiences</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {expertiseTiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img src={tile.imageUrl} alt={tile.title} className="h-56 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-4 font-heading text-2xl uppercase text-white">
                {tile.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-12">
        <p className="font-heading text-4xl uppercase leading-tight md:text-5xl">
          “{editorialQuote.quote}”
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {editorialQuote.source}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-12">
        <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
          <div className="grid grid-cols-2 gap-4">
            {storyCollage.imageUrls.map((imageUrl) => (
              <img
                key={imageUrl}
                src={imageUrl}
                alt="Travel collage"
                className="h-40 w-full rounded-2xl object-cover md:h-52"
              />
            ))}
          </div>
          <div className="space-y-4 rounded-3xl border border-[var(--color-border)] bg-white p-6">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Field notes
            </p>
            <h2 className="font-heading text-4xl uppercase leading-[0.95]">
              {storyCollage.heading}
            </h2>
            <p className="text-sm text-[var(--color-muted)]">{storyCollage.body}</p>
            <CtaButton label={storyCollage.ctaLabel} href={storyCollage.ctaHref} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;