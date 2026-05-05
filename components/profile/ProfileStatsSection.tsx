import type { ProfileStat } from "@/types/user_profile";

interface ProfileStatsSectionProps {
  stats: ProfileStat[];
  favoritesCount: number;
}

const ProfileStatsSection = ({ stats, favoritesCount }: ProfileStatsSectionProps) => {
  return (
    <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
      <h2 className="font-heading text-3xl uppercase">Profile stats</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {stats.map((stat) => {
          const value = stat.id === "saved-favorites" ? favoritesCount : stat.value;
          return (
            <div key={stat.id} className="rounded-2xl bg-[var(--color-sand)] p-4">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {stat.label}
              </p>
              <p className="mt-1 font-heading text-3xl uppercase">{value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileStatsSection;
