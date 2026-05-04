export type {
  Experience,
  ExperienceCategory,
  TravelerType,
  SourceSite,
} from "@/data/experiences";

export type {
  UserProfile,
  ProfileAction,
  ProfileQuickLink,
  ProfileStat,
  ProfileTab,
  PassportMapCard,
} from "@/data/user_profile";

export type {
  NavLink,
  FooterLink,
  FooterLinkGroup,
  SocialLink,
  AppLink,
  PressLogoItem,
  Testimonial,
  HomeTile,
  IconFeature,
  SeasonalSlide,
  StoryCollageContent,
  NewsletterContent,
} from "@/data/site_content";

export type {
  ExperienceDetailContent,
  AccommodationCardContent,
  RelatedRegionCtaContent,
} from "@/data/experience_enrichment";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface FilterState {
  search: string;
  category: string;
  destination: string;
  featured: boolean;
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
}

export type CtaVariant = "primary" | "secondary" | "ghost";
