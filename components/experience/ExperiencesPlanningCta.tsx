import CtaButton from "@/components/ui/CtaButton";

const ExperiencesPlanningCta = () => {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-sand)] p-8 text-center">
      <h2 className="font-heading text-4xl uppercase">Need help planning?</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-muted)]">
        Share your timing, travel style, and priorities. We will shape a route around them.
      </p>
      <div className="mt-6">
        <CtaButton href="/profile" label="Talk to a planner" variant="secondary" />
      </div>
    </div>
  );
};

export default ExperiencesPlanningCta;
