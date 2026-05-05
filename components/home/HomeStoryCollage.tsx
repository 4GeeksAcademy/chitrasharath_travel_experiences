import CtaButton from "@/components/ui/CtaButton";
import { storyCollage } from "@/data/site_content";

const HomeStoryCollage = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-12">
      <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
        <div className="grid grid-cols-2 gap-4">
          {storyCollage.imageUrls.map((imageUrl) => (
            <img key={imageUrl} src={imageUrl} alt="Travel collage" className="h-40 w-full rounded-2xl object-cover md:h-52" />
          ))}
        </div>
        <div className="space-y-4 rounded-3xl border border-[var(--color-border)] bg-white p-6">
          <p className="font-display text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Field notes</p>
          <h2 className="font-heading text-4xl uppercase leading-[0.95]">{storyCollage.heading}</h2>
          <p className="text-sm text-[var(--color-muted)]">{storyCollage.body}</p>
          <CtaButton label={storyCollage.ctaLabel} href={storyCollage.ctaHref} />
        </div>
      </div>
    </section>
  );
};

export default HomeStoryCollage;
