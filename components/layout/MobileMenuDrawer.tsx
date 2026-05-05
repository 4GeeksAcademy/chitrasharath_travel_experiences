import Link from "next/link";

import CtaButton from "@/components/ui/CtaButton";
import { headerContact, primaryNavLinks } from "@/data/site_content";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuDrawer = ({ isOpen, onClose }: MobileMenuDrawerProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/55 md:hidden" onClick={onClose} aria-hidden="true">
      <div
        className="absolute right-0 top-0 h-dvh w-[85%] max-w-sm bg-[var(--color-paper)] p-5 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between">
          <p className="font-display text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Menu
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]"
          >
            Close
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <CtaButton href={headerContact.enquireHref} label="Enquire now" fullWidth />
          <nav className="space-y-2">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="block rounded-xl border border-[var(--color-border)] px-4 py-3 font-heading text-2xl text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={headerContact.phoneHref} className="block text-sm text-[var(--color-muted)]">
            {headerContact.phoneLabel}
          </a>
          <Link
            href={headerContact.accountHref}
            onClick={onClose}
            className="block text-sm text-[var(--color-muted)]"
          >
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;
