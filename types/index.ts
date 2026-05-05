export type {
  Experience,
  ExperienceCategory,
  ExperienceSeed,
  TravelerType,
  SourceSite,
} from "@/types/experiences";

export type {
  UserProfile,
  ProfileAction,
  ProfileQuickLink,
  ProfileStat,
  ProfileTab,
  PassportMapCard,
} from "@/types/user_profile";

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
  HeroMedia,
} from "@/types/site_content";

export type {
  ExperienceDetailContent,
  ExperienceDetailSection,
  AccommodationCardContent,
  RelatedRegionCtaContent,
} from "@/types/experience_enrichment";

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
