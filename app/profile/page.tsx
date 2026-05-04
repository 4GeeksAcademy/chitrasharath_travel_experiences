"use client";

import Link from "next/link";
import { useState } from "react";

import CtaButton from "@/components/ui/CtaButton";
import HeroBanner from "@/components/ui/HeroBanner";
import { useFavorites } from "@/components/state/favorites-context";
import userProfile from "@/data/user_profile";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(userProfile.tabs[0]?.id ?? "been");
  const { favoritesCount } = useFavorites();

  return (
    <div>
      <HeroBanner
        image={userProfile.backgroundPatternUrl}
        title={userProfile.displayName}
        subtitle={userProfile.bio}
        eyebrow="Traveler profile"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Profile" }]}
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-12">
        <div className="grid gap-3 md:grid-cols-2">
          {userProfile.actions.map((action) => (
            <CtaButton
              key={action.id}
              label={action.label}
              href={action.href}
              variant={action.variant}
              fullWidth
            />
          ))}
        </div>

        <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
          <div className="grid gap-6 md:grid-cols-[auto_1fr]">
            <img
              src={userProfile.avatarImageUrl}
              alt={userProfile.displayName}
              className="h-24 w-24 rounded-full object-cover"
            />
            <div>
              <p className="font-heading text-4xl uppercase leading-none">{userProfile.displayName}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">@{userProfile.username}</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{userProfile.location}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                {userProfile.quickLinks.map((link) => (
                  <Link key={link.id} href={link.href} className="rounded-full border border-[var(--color-border)] px-3 py-2 hover:bg-[var(--color-sand)]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="font-heading text-3xl uppercase">Profile stats</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {userProfile.stats.map((stat) => {
              const value =
                stat.id === "saved-favorites" ? favoritesCount : stat.value;
              return (
                <div key={stat.id} className="rounded-2xl bg-[var(--color-sand)] p-4">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-heading text-3xl uppercase">{value}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
          <div className="flex flex-wrap gap-2">
            {userProfile.tabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] ${
                  tab.id === activeTab
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                    : "border-[var(--color-border)] text-[var(--color-muted)]"
                }`}
              >
                {tab.label} ({tab.itemCount})
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Viewing {userProfile.tabs.find((tab) => tab.id === activeTab)?.label}.
          </p>
        </section>

        <section className="grid gap-5 rounded-3xl border border-[var(--color-border)] bg-white p-5 md:grid-cols-[1.1fr_1fr]">
          <img
            src={userProfile.passportMapCard.mapImageUrl}
            alt={userProfile.passportMapCard.title}
            className="h-72 w-full rounded-2xl object-cover"
          />
          <div className="space-y-4">
            <h3 className="font-heading text-4xl uppercase leading-[0.95]">
              {userProfile.passportMapCard.title}
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              {userProfile.passportMapCard.body}
            </p>
            <CtaButton
              label={userProfile.passportMapCard.ctaLabel}
              href={userProfile.passportMapCard.ctaHref}
              variant="secondary"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
