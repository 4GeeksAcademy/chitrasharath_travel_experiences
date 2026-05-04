import CtaButton from "@/components/ui/CtaButton";
import HeroBanner from "@/components/ui/HeroBanner";

export default function ContactPage() {
  return (
    <div>
      <HeroBanner
        image="https://picsum.photos/seed/wanderlust-contact-hero/2200/1300"
        title="Contact us"
        subtitle="Tell us your timeline, budget range, and travel style. We will craft a route that fits your pace."
        eyebrow="Plan with us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact us" }]}
      />

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6 lg:px-12">
        <div className="rounded-3xl border border-[var(--color-border)] bg-white p-7">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Start your enquiry
          </p>
          <h2 className="mt-2 font-heading text-4xl uppercase leading-[0.95] text-[var(--color-ink)]">
            Speak with the Wanderlust team
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-[var(--color-muted)] md:text-base">
            Email us at hello@wanderlust.example or call +1 (212) 555-0172. Share your dates,
            destination ideas, and who is traveling so we can send a tailored shortlist.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href="mailto:hello@wanderlust.example" label="Email us" variant="secondary" />
            <CtaButton href="tel:+12125550172" label="Call us" variant="ghost" />
          </div>
        </div>

        <div className="rounded-3xl bg-[var(--color-ink)] p-7 text-white">
          <h3 className="font-heading text-3xl uppercase">Prefer to explore first?</h3>
          <p className="mt-3 max-w-2xl text-sm text-white/85">
            Browse our curated experiences and save your favorites before reaching out.
          </p>
          <div className="mt-5">
            <CtaButton href="/experiences" label="Explore experiences" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
}
