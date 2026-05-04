import { Suspense } from "react";

import FavoritesPageContent from "@/components/experience/FavoritesPageContent";

export default function FavoritesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-sm text-[var(--color-muted)]">Loading favorites...</div>}>
      <FavoritesPageContent />
    </Suspense>
  );
}
