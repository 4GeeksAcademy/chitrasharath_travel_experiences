"use client";

import { useEffect, useState } from "react";

import CtaButton from "@/components/ui/CtaButton";
import HomeHeroMedia from "@/components/home/HomeHeroMedia";
import { homeHeroMediaItems } from "@/data/site_content";

const HomeHeroSection = () => {
  const [heroMediaIndex, setHeroMediaIndex] = useState(0);
  const [failedHeroVideos, setFailedHeroVideos] = useState<string[]>([]);

  const advanceHeroMedia = () => {
    if (homeHeroMediaItems.length <= 1) return;
    setHeroMediaIndex((current) => (current + 1) % homeHeroMediaItems.length);
  };

  useEffect(() => {
    if (homeHeroMediaItems.length <= 1) return;
    const intervalId = window.setInterval(advanceHeroMedia, 8000);
    return () => window.clearInterval(intervalId);
  }, []);

  const handleVideoError = (videoUrl: string, mediaIndex: number) => {
    setFailedHeroVideos((current) => (current.includes(videoUrl) ? current : [...current, videoUrl]));
    if (mediaIndex === heroMediaIndex) advanceHeroMedia();
  };

  return (
    <section className="relative isolate overflow-hidden">
      <HomeHeroMedia
        mediaItems={homeHeroMediaItems}
        activeIndex={heroMediaIndex}
        failedVideos={failedHeroVideos}
        onVideoError={handleVideoError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-12">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-white/85">Curated experiences from our community</p>
        <h1 className="mt-2 max-w-3xl font-heading text-5xl uppercase leading-[0.95] text-white md:text-7xl">Travel beyond the obvious</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">High-detail routes, dramatic landscapes, and thoughtful pacing across the world&apos;s most compelling destinations.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton label="Browse experiences" href="/experiences" variant="secondary" />
          <CtaButton label="Featured destinations" href="/experiences?featured=true" variant="secondary" />
          <CtaButton label="My favorites" href="/favorites" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
