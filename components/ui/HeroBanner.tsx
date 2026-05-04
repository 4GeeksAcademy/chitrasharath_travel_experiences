import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaButton from "@/components/ui/CtaButton";
import type { BreadcrumbItem } from "@/types";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  cta?: {
    label: string;
    href: string;
  };
}

export default function HeroBanner({
  image,
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  cta,
}: HeroBannerProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt={title} className="h-[52vh] w-full object-cover object-center md:h-[62vh]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-12">
        <div className="max-w-3xl space-y-4 text-[var(--color-paper)]">
          {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
          {eyebrow ? (
            <p className="font-display text-xs uppercase tracking-[0.28em] text-white/80">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-heading text-4xl leading-[0.95] uppercase md:text-6xl">{title}</h1>
          {subtitle ? <p className="max-w-2xl text-sm text-white/90 md:text-base">{subtitle}</p> : null}
          {cta ? <CtaButton label={cta.label} href={cta.href} variant="secondary" /> : null}
        </div>
      </div>
    </section>
  );
}
