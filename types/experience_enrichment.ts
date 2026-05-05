export interface AccommodationCardContent {
  name: string;
  href: string;
  secondaryLabel: string;
  imageUrl: string;
}

export interface RelatedRegionCtaContent {
  regionName: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  phoneLabel: string;
  phoneHref: string;
}

export interface ExperienceDetailSection {
  heading: string;
  body: string;
  imageUrl: string;
  imagePosition: "left" | "right";
}

export interface ExperienceDetailContent {
  summary: string;
  sections: ExperienceDetailSection[];
  gallery: string[];
  accommodation: AccommodationCardContent;
  relatedRegionCta: RelatedRegionCtaContent;
}
