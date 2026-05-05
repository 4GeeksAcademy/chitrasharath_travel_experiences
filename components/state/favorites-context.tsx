"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

interface FavoritesContextValue {
  favoriteIds: string[];
  favoriteIdSet: Set<string>;
  favoritesCount: number;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

interface FavoritesProviderProps extends PropsWithChildren {
  initialFavorites: string[];
}

export const FavoritesProvider = ({
  initialFavorites,
  children,
}: FavoritesProviderProps) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(
    Array.from(new Set(initialFavorites)),
  );

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    );
  }, []);

  const favoriteIdSet = useMemo(() => new Set(favoriteIds), [favoriteIds]);

  const value = useMemo(
    () => ({
      favoriteIds,
      favoriteIdSet,
      favoritesCount: favoriteIds.length,
      isFavorite: (id: string) => favoriteIdSet.has(id),
      toggleFavorite,
    }),
    [favoriteIds, favoriteIdSet, toggleFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
};

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
