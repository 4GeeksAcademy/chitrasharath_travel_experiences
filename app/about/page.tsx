import CtaButton from "@/components/ui/CtaButton";
import HeroBanner from "@/components/ui/HeroBanner";

const AboutPage = () => {
  return (
    <div>
      <HeroBanner
        image="https://picsum.photos/seed/wanderlust-about-hero/2200/1300"
        title="About Wanderlust"
        subtitle="Wanderlust is a community-powered space where travelers share memorable experiences, practical tips, and local gems worth saving."
        eyebrow="Our story"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6 lg:px-12">
        <div className="rounded-3xl border border-[var(--color-border)] bg-white p-7">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            What we believe
          </p>
          <h2 className="mt-2 font-heading text-4xl uppercase leading-[0.95] text-[var(--color-ink)]">
            Great trips are shared, not hidden
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-[var(--color-muted)] md:text-base">
            Unlike traditional luxury operators, Wanderlust puts real traveler voices at
            the center. Each experience in our collection is inspired by people who have
            been there and wanted to pass along what made it meaningful.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
            <h3 className="font-heading text-2xl uppercase">Community-curated</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Discover places through firsthand stories, favorite moments, and local
              recommendations shared by travelers.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
            <h3 className="font-heading text-2xl uppercase">Practical and personal</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              We combine visual inspiration with practical details so planning feels
              easier and more personal.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
            <h3 className="font-heading text-2xl uppercase">Built for explorers</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Save favorites, compare options, and build your next travel shortlist in one
              place.
            </p>
          </article>
        </div>

        <div className="rounded-3xl bg-[var(--color-ink)] p-7 text-white">
          <h2 className="font-heading text-4xl uppercase">Start exploring</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/85">
            Browse experiences shared by our community and save the ones that match your
            style.
          </p>
          <div className="mt-5">
            <CtaButton href="/experiences" label="Explore experiences" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
