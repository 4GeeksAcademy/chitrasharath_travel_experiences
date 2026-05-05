export type ExperienceCategory =
  | "Adventure"
  | "Culture"
  | "Food"
  | "Wellness"
  | "Nature";

export type SourceSite = "Pelorus" | "Black Tomato" | "Sidetracked";

export type TravelerType = "Couples" | "Family" | "Group" | "Solo";

export interface Experience {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  city: string;
  country: string;
  price: number;
  priceCurrency: "USD";
  rating: number;
  imageUrl: string;
  heroImageUrl: string;
  seasonLabel: string;
  durationDays: number;
  sourceSite: SourceSite;
  sourceSiteUrl: string;
  travelerTypes: TravelerType[];
  highlights: string[];
  featured: boolean;
}

export type ExperienceSeed = {
  city: string;
  country: string;
  category: ExperienceCategory;
  sourceSite: SourceSite;
  focus: string;
  seasonLabel: string;
  price: number;
  rating: number;
};
