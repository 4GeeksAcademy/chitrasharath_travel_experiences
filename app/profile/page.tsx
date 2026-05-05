"use client";

import { useState } from "react";

import ProfileActionsSection from "@/components/profile/ProfileActionsSection";
import ProfileIdentityCard from "@/components/profile/ProfileIdentityCard";
import ProfilePassportCard from "@/components/profile/ProfilePassportCard";
import ProfileStatsSection from "@/components/profile/ProfileStatsSection";
import ProfileTabsSection from "@/components/profile/ProfileTabsSection";
import HeroBanner from "@/components/ui/HeroBanner";
import { useFavorites } from "@/components/state/favorites-context";
import userProfile from "@/data/user_profile";

const ProfilePage = () => {
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
        <ProfileActionsSection actions={userProfile.actions} />
        <ProfileIdentityCard profile={userProfile} />
        <ProfileStatsSection stats={userProfile.stats} favoritesCount={favoritesCount} />
        <ProfileTabsSection
          tabs={userProfile.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <ProfilePassportCard passportMapCard={userProfile.passportMapCard} />
      </section>
    </div>
  );
};

export default ProfilePage;
