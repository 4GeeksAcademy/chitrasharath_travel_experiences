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

export const primaryNavLinks: NavLink[] = [
  { label: "Favorites", href: "/favorites" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
];

export const headerContact = {
  phoneLabel: "+1 (212) 555-0172",
  phoneHref: "tel:+12125550172",
  accountHref: "/profile",
  enquireHref: "/contact",
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Experiences", href: "/experiences" },
      { label: "Featured trips", href: "/experiences?featured=true" },
      { label: "Favorites", href: "/favorites" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Wanderlust", href: "/about" },
      { label: "Travel journal", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Privacy", href: "/" },
      { label: "Terms", href: "/" },
      { label: "Accessibility", href: "/" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

export const appLinks: AppLink[] = [
  { label: "iOS App", href: "/" },
  { label: "Android App", href: "/" },
];

export const newsletterContent: NewsletterContent = {
  heading: "Get monthly route ideas from our planners",
  placeholder: "Email address",
  submitLabel: "Subscribe",
  blurb:
    "A concise dispatch of uncommon places, seasonal windows, and practical planning tips.",
};

export const homeHeroMedia: HeroMedia = {
  videoUrl: "/hero/3842549-hd_1280_720_30fps.mp4",
  posterImageUrl: "https://picsum.photos/seed/wanderlust-hero/2200/1300",
  alt: "Wanderlust cinematic travel hero",
};

export const homeHeroMediaItems: HeroMedia[] = [
  {
    videoUrl: "/hero/3842549-hd_1280_720_30fps.mp4",
    posterImageUrl: "https://picsum.photos/seed/wanderlust-hero-local-two/2200/1300",
    alt: "Wanderlust local hero motion media two",
  },
  {
    videoUrl: "/hero/13140248_1280_720_30fps.mp4",
    posterImageUrl: "https://picsum.photos/seed/wanderlust-hero-local-three/2200/1300",
    alt: "Wanderlust local hero motion media three",
  },
];

export const homeIntro = {
  heading: "Travel that feels deeply considered",
  body: "Wanderlust shares cinematic landscapes, slow-living stays, and high-detail experiences posted by our traveler community.",
  ctaLabel: "Explore all experiences",
  ctaHref: "/experiences",
};

export const pressLogos: PressLogoItem[] = [
  { name: "Condé Nast Traveler" },
  { name: "Travel + Leisure" },
  { name: "National Geographic" },
  { name: "Monocle" },
  { name: "Departure" },
];

export const audienceTiles: HomeTile[] = [
  {
    title: "Private escapes for couples",
    imageUrl: "https://picsum.photos/seed/wanderlust-couples/1400/900",
    href: "/experiences?category=Wellness",
  },
  {
    title: "Family experiences with room to roam",
    imageUrl: "https://picsum.photos/seed/wanderlust-family/1400/900",
    href: "/experiences?category=Nature",
  },
  {
    title: "Expeditions for bold experiences",
    imageUrl: "https://picsum.photos/seed/wanderlust-expedition/1400/900",
    href: "/experiences?category=Adventure",
  },
];

export const whyUsItems: IconFeature[] = [
  {
    icon: "Compass",
    title: "Real traveler perspective",
    description: "Experiences are shared by people who have actually gone, with practical local context.",
  },
  {
    icon: "Shield",
    title: "Trusted community insights",
    description: "Helpful details are reinforced by recurring feedback from the Wanderlust community.",
  },
  {
    icon: "Sparkles",
    title: "Memorable user picks",
    description: "Standout moments are highlighted by travelers who saved and revisited them.",
  },
  {
    icon: "Clock3",
    title: "Fresh, evolving recommendations",
    description: "New posts and favorites keep the collection current with seasonal, real-world updates.",
  },
];

export const seasonalSlides: SeasonalSlide[] = [
  {
    title: "Autumn Fjord Routes",
    description: "Cool light, calmer waters, and shoreline lodges in Northern Europe.",
    imageUrl: "https://picsum.photos/seed/wanderlust-fjords/1800/1100",
    ctaLabel: "View northern escapes",
    ctaHref: "/experiences?destination=Bergen,%20Norway",
  },
  {
    title: "Desert Winter Warmth",
    description: "Golden-hour drives, private camps, and clear night skies.",
    imageUrl: "https://picsum.photos/seed/wanderlust-desert/1800/1100",
    ctaLabel: "View desert experiences",
    ctaHref: "/experiences?category=Culture",
  },
  {
    title: "Rainforest Shoulder Season",
    description: "Lower crowds, dramatic foliage, and immersive wildlife windows.",
    imageUrl: "https://picsum.photos/seed/wanderlust-rainforest/1800/1100",
    ctaLabel: "View tropical routes",
    ctaHref: "/experiences?category=Nature",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I booked this after reading other users' notes, and every tip was spot on. The sunrise viewpoint and local cafe recommendation made the whole experience unforgettable.",
    attribution: "M. Alvarez, Lisbon experience",
    backgroundImageUrl: "https://picsum.photos/seed/wanderlust-testimonial-1/1600/900",
  },
  {
    quote:
      "What I love most is that these are real stories from real travelers. I found a family-friendly route in Kyoto that actually worked for us without stress.",
    attribution: "N. Shah, Kyoto experience",
    backgroundImageUrl: "https://picsum.photos/seed/wanderlust-testimonial-2/1600/900",
  },
];

export const expertiseTiles: HomeTile[] = [
  {
    title: "Expedition logistics",
    imageUrl: "https://picsum.photos/seed/wanderlust-expertise-1/1200/900",
    href: "/experiences?category=Adventure",
  },
  {
    title: "Culture and heritage",
    imageUrl: "https://picsum.photos/seed/wanderlust-expertise-2/1200/900",
    href: "/experiences?category=Culture",
  },
  {
    title: "Food-led exploration",
    imageUrl: "https://picsum.photos/seed/wanderlust-expertise-3/1200/900",
    href: "/experiences?category=Food",
  },
];

export const editorialQuote = {
  quote:
    "The best shared experiences do not just move you through destinations. They help you feel connected to them.",
  source: "Wanderlust Editorial Desk",
};

export const storyCollage: StoryCollageContent = {
  heading: "Stories from the edge of familiar",
  body: "Field notes, route diaries, and destination essays from our planners and returning travelers.",
  ctaLabel: "Read travel stories",
  ctaHref: "/",
  imageUrls: [
    "https://picsum.photos/seed/wanderlust-collage-1/1000/800",
    "https://picsum.photos/seed/wanderlust-collage-2/1000/800",
    "https://picsum.photos/seed/wanderlust-collage-3/1000/800",
    "https://picsum.photos/seed/wanderlust-collage-4/1000/800",
  ],
};

export const copyrightLabel = `© ${new Date().getFullYear()} Wanderlust Travel Co.`;
