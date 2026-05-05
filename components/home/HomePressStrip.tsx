import { pressLogos } from "@/data/site_content";

const HomePressStrip = () => {
  return (
    <section className="border-y border-[var(--color-border)] bg-white px-4 py-5 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {pressLogos.map((logo) => (
          <span
            key={logo.name}
            className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]"
          >
            {logo.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default HomePressStrip;
