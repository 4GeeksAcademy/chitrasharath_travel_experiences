"use client";

import { useFavorites } from "@/components/state/favorites-context";

interface FavoriteToggleButtonProps {
  experienceId: string;
}

const FavoriteToggleButton = ({
  experienceId,
}: FavoriteToggleButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(experienceId);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      onClick={() => toggleFavorite(experienceId)}
      className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.2em] transition ${
        active
          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-paper)]"
          : "border-white/70 bg-black/25 text-white"
      }`}
    >
      {active ? "Saved" : "Save"}
    </button>
  );
};

export default FavoriteToggleButton;
