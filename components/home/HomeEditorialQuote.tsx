import { editorialQuote } from "@/data/site_content";

const HomeEditorialQuote = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-12">
      <p className="font-heading text-4xl uppercase leading-tight md:text-5xl">
        “{editorialQuote.quote}”
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {editorialQuote.source}
      </p>
    </section>
  );
};

export default HomeEditorialQuote;
