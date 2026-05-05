"use client";

import { useState } from "react";

import DesktopHeaderBar from "@/components/layout/DesktopHeaderBar";
import MobileHeaderBar from "@/components/layout/MobileHeaderBar";
import MobileMenuDrawer from "@/components/layout/MobileMenuDrawer";

const ResponsiveHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-paper)]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-12">
        <MobileHeaderBar onOpenMenu={() => setIsDrawerOpen(true)} />
        <DesktopHeaderBar />
      </div>

      <MobileMenuDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
};

export default ResponsiveHeader;
