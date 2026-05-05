import CtaButton from "@/components/ui/CtaButton";
import type { PassportMapCard } from "@/types/user_profile";

interface ProfilePassportCardProps {
  passportMapCard: PassportMapCard;
}

const ProfilePassportCard = ({ passportMapCard }: ProfilePassportCardProps) => {
  return (
    <section className="grid gap-5 rounded-3xl border border-[var(--color-border)] bg-white p-5 md:grid-cols-[1.1fr_1fr]">
      <img src={passportMapCard.mapImageUrl} alt={passportMapCard.title} className="h-72 w-full rounded-2xl object-cover" />
      <div className="space-y-4">
        <h3 className="font-heading text-4xl uppercase leading-[0.95]">{passportMapCard.title}</h3>
        <p className="text-sm text-[var(--color-muted)]">{passportMapCard.body}</p>
        <CtaButton label={passportMapCard.ctaLabel} href={passportMapCard.ctaHref} variant="secondary" />
      </div>
    </section>
  );
};

export default ProfilePassportCard;
