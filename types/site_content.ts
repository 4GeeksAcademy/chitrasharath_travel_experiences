export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface AppLink {
  label: string;
  href: string;
}

export interface PressLogoItem {
  name: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
  backgroundImageUrl: string;
}

export interface HomeTile {
  title: string;
  imageUrl: string;
  href: string;
}

export interface IconFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SeasonalSlide {
  title: string;
  description: string;
  imageUrl: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface StoryCollageContent {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrls: string[];
}

export interface NewsletterContent {
  heading: string;
  placeholder: string;
  submitLabel: string;
  blurb: string;
}

export interface HeroMedia {
  videoUrl?: string;
  posterImageUrl: string;
  alt: string;
}
