"use client";

import type { PropsWithChildren } from "react";

import Footer from "@/components/layout/Footer";
import NewsletterSignup from "@/components/layout/NewsletterSignup";
import ResponsiveHeader from "@/components/layout/ResponsiveHeader";
import { FavoritesProvider } from "@/components/state/favorites-context";
import userProfile from "@/data/user_profile";

const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <FavoritesProvider initialFavorites={userProfile.favoriteExperienceIds}>
      <ResponsiveHeader />
      <main className="min-h-[55vh] flex-1">{children}</main>
      <NewsletterSignup />
      <Footer />
    </FavoritesProvider>
  );
};

export default AppShell;
