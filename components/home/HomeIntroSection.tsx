import CtaButton from "@/components/ui/CtaButton";
import { homeIntro } from "@/data/site_content";

const HomeIntroSection = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-12">
      <h2 className="font-heading text-4xl uppercase text-[var(--color-ink)] md:text-5xl">
        {homeIntro.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-muted)]">{homeIntro.body}</p>
      <div className="mt-7">
        <CtaButton label={homeIntro.ctaLabel} href={homeIntro.ctaHref} variant="secondary" />
      </div>
    </section>
  );
};

export default HomeIntroSection;
