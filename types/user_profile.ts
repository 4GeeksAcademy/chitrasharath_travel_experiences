export interface ProfileAction {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon: string;
}

export interface ProfileQuickLink {
  id: string;
  label: string;
  href: string;
}

export interface ProfileStat {
  id: string;
  label: string;
  value: number | string;
}

export interface ProfileTab {
  id: string;
  label: string;
  itemCount: number;
}

export interface PassportMapCard {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  mapImageUrl: string;
}

export interface UserProfile {
  id: string;
  displayName: string;
  username: string;
  joinedYear: number;
  location: string;
  bio: string;
  avatarImageUrl: string;
  avatarMonogram: string;
  backgroundPatternUrl: string;
  favoriteExperienceIds: string[];
  savedFavoritesCount: number;
  actions: ProfileAction[];
  quickLinks: ProfileQuickLink[];
  stats: ProfileStat[];
  tabs: ProfileTab[];
  passportMapCard: PassportMapCard;
}
