import { whyUsItems } from "@/data/site_content";

const HomeWhyUsSection = () => {
  return (
    <section className="border-y border-[var(--color-border)] bg-white px-4 py-14 sm:px-6 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        {whyUsItems.map((item) => (
          <article key={item.title} className="space-y-3">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
              {item.icon}
            </p>
            <h3 className="font-heading text-2xl uppercase">{item.title}</h3>
            <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeWhyUsSection;
