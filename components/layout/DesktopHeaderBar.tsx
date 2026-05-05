import Link from "next/link";

import CtaButton from "@/components/ui/CtaButton";
import { headerContact, primaryNavLinks } from "@/data/site_content";
import userProfile from "@/data/user_profile";

const DesktopHeaderBar = () => {
  return (
    <div className="hidden items-center justify-between md:flex">
      <Link href="/" className="font-heading text-xl uppercase tracking-[0.18em] text-[var(--color-ink)]">
        Wanderlust
      </Link>

      <nav className="flex items-center gap-7">
        {primaryNavLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a href={headerContact.phoneHref} className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
          {headerContact.phoneLabel}
        </a>
        <Link
          href={headerContact.accountHref}
          aria-label="Account"
          className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border)]"
        >
          <img
            src={userProfile.avatarImageUrl}
            alt={userProfile.displayName}
            className="h-full w-full object-cover"
          />
        </Link>
        <CtaButton href={headerContact.enquireHref} label="Enquire now" variant="secondary" />
      </div>
    </div>
  );
};

export default DesktopHeaderBar;
