import { experiences, type Experience } from "@/data/experiences";

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

export interface ExperienceDetailContent {
  summary: string;
  sections: Array<{
    heading: string;
    body: string;
    imageUrl: string;
    imagePosition: "left" | "right";
  }>;
  gallery: string[];
  accommodation: AccommodationCardContent;
  relatedRegionCta: RelatedRegionCtaContent;
}

const getRegionName = (experience: Experience) => {
  if (["Norway", "Iceland", "Faroe Islands", "Finland", "Greenland", "Svalbard"].includes(experience.country)) {
    return "Northern Horizons";
  }
  if (["Japan", "Thailand", "Laos", "Indonesia", "Bhutan", "Nepal", "India", "Cambodia"].includes(experience.country)) {
    return "Asia Collection";
  }
  if (["Argentina", "Chile", "Peru", "Colombia", "Guatemala", "Costa Rica", "Panama"].includes(experience.country)) {
    return "Latin America Collection";
  }
  if (["Kenya", "Tanzania", "Botswana", "Rwanda", "South Africa", "Morocco", "Egypt"].includes(experience.country)) {
    return "Africa Collection";
  }
  return "Global Collection";
};

export const experienceDetailContentById: Record<string, ExperienceDetailContent> =
  Object.fromEntries(
    experiences.map((experience, index) => {
      const regionName = getRegionName(experience);
      const baseSeed = `${experience.slug}-detail`;
      return [
        experience.id,
        {
          summary: `${experience.description} I usually recommend balancing standout highlights with unstructured time so this experience in ${experience.destination} still feels personal, not over-planned.`,
          sections: [
            {
              heading: "Route design",
              body: `I like to start with an easy arrival flow, local orientation, and timing around ${experience.seasonLabel} so the experience feels natural from day one.`,
              imageUrl: `https://picsum.photos/seed/${baseSeed}-route/1400/900`,
              imagePosition: "left",
            },
            {
              heading: "Immersive access",
              body: `I mix host-led moments, independent windows, and practical logistics to make each day in ${experience.city} feel intentional.`,
              imageUrl: `https://picsum.photos/seed/${baseSeed}-access/1400/900`,
              imagePosition: "right",
            },
            {
              heading: "Recovery rhythm",
              body: `I always build in downtime with restorative stays, scenic transfers, and flexible blocks based on travel style.`,
              imageUrl: `https://picsum.photos/seed/${baseSeed}-rhythm/1400/900`,
              imagePosition: index % 2 === 0 ? "left" : "right",
            },
          ],
          gallery: [
            `https://picsum.photos/seed/${baseSeed}-gallery-1/1600/1000`,
            `https://picsum.photos/seed/${baseSeed}-gallery-2/1600/1000`,
            `https://picsum.photos/seed/${baseSeed}-gallery-3/1600/1000`,
            `https://picsum.photos/seed/${baseSeed}-gallery-4/1600/1000`,
          ],
          accommodation: {
            name: `${experience.city} Atelier Lodge`,
            href: "/experiences",
            secondaryLabel: `Recommended base for ${experience.durationDays} nights`,
            imageUrl: `https://picsum.photos/seed/${baseSeed}-stay/1400/900`,
          },
          relatedRegionCta: {
            regionName,
            body: `Continue through our ${regionName.toLowerCase()} with matched pacing, transport logic, and standout local hosts.`,
            primaryLabel: "Explore related experiences",
            primaryHref: `/experiences?destination=${encodeURIComponent(experience.destination)}`,
            secondaryLabel: "Save this journey",
            secondaryHref: "/favorites",
            phoneLabel: "+1 (212) 555-0172",
            phoneHref: "tel:+12125550172",
          },
        },
      ];
    }),
  );

export const getExperienceDetailContent = (experienceId: string) =>
  experienceDetailContentById[experienceId];
