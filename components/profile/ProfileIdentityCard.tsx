import Link from "next/link";

import type { UserProfile } from "@/types/user_profile";

interface ProfileIdentityCardProps {
  profile: UserProfile;
}

const ProfileIdentityCard = ({ profile }: ProfileIdentityCardProps) => {
  return (
    <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
      <div className="grid gap-6 md:grid-cols-[auto_1fr]">
        <img src={profile.avatarImageUrl} alt={profile.displayName} className="h-24 w-24 rounded-full object-cover" />
        <div>
          <p className="font-heading text-4xl uppercase leading-none">{profile.displayName}</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">@{profile.username}</p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">{profile.location}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {profile.quickLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="rounded-full border border-[var(--color-border)] px-3 py-2 hover:bg-[var(--color-sand)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileIdentityCard;
