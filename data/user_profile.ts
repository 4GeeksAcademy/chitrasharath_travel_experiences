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

const favoriteExperienceIds = [
  "exp-001",
  "exp-004",
  "exp-014",
  "exp-029",
  "exp-043",
  "exp-071",
];

export const userProfile: UserProfile = {
  id: "user-001",
  displayName: "Chitra Sharath Chandra",
  username: "chitrasharathchandra",
  joinedYear: 2026,
  location: "New York, United States",
  bio: "Collecting cinematic landscapes, quiet stays, and shared travel experiences across mountain, coast, and desert destinations.",
  avatarImageUrl: "https://picsum.photos/seed/wanderlust-user-avatar/600/600",
  avatarMonogram: "CS",
  backgroundPatternUrl:
    "https://picsum.photos/seed/wanderlust-profile-pattern/1200/800",
  favoriteExperienceIds,
  savedFavoritesCount: favoriteExperienceIds.length,
  actions: [
    {
      id: "nearby",
      label: "Experiences near me",
      href: "/experiences?destination=United%20States",
      variant: "primary",
      icon: "map-pin",
    },
    {
      id: "surprise",
      label: "Random place",
      href: "/experiences?featured=true",
      variant: "secondary",
      icon: "shuffle",
    },
  ],
  quickLinks: [
    { id: "edit-profile", label: "Edit Profile", href: "/profile/edit" },
    { id: "email-settings", label: "Email Settings", href: "/profile/email" },
    { id: "my-lists", label: "My Lists", href: "/favorites" },
    {
      id: "feedback",
      label: "Feedback & Ideas",
      href: "/profile/feedback",
    },
  ],
  stats: [
    { id: "joined", label: "Joined Wanderlust", value: 2026 },
    { id: "states-visited", label: "US States Visited", value: 9 },
    { id: "countries-visited", label: "Countries Visited", value: 14 },
    { id: "places-been", label: "Places I've Been", value: 28 },
    { id: "places-want-to-go", label: "Places I Want To Go", value: 46 },
    { id: "places-added", label: "Places Added", value: 12 },
    { id: "places-published", label: "Places Published", value: 3 },
    { id: "places-edited", label: "Places Edited", value: 7 },
    { id: "saved-favorites", label: "Saved Favorites", value: favoriteExperienceIds.length },
  ],
  tabs: [
    { id: "been", label: "Been", itemCount: 28 },
    { id: "want-to-go", label: "Want to go", itemCount: 46 },
    { id: "us-states", label: "US States", itemCount: 9 },
  ],
  passportMapCard: {
    title: "Track the places you've been",
    body: "Use your saved lists and visited destinations to build a visual travel footprint across cities, countries, and future wish-list routes.",
    ctaLabel: "Explore saved places",
    ctaHref: "/favorites",
    mapImageUrl: "https://picsum.photos/seed/wanderlust-passport-map/1200/900",
  },
};

export default userProfile;
