import type { ProfileTab } from "@/types/user_profile";

interface ProfileTabsSectionProps {
  tabs: ProfileTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const ProfileTabsSection = ({ tabs, activeTab, onTabChange }: ProfileTabsSectionProps) => {
  return (
    <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] ${
              tab.id === activeTab
                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                : "border-[var(--color-border)] text-[var(--color-muted)]"
            }`}
          >
            {tab.label} ({tab.itemCount})
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-[var(--color-muted)]">
        Viewing {tabs.find((tab) => tab.id === activeTab)?.label}.
      </p>
    </section>
  );
};

export default ProfileTabsSection;
