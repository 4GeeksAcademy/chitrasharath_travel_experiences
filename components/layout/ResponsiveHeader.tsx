"use client";

import Link from "next/link";
import { useState } from "react";

import CtaButton from "@/components/ui/CtaButton";
import { headerContact, primaryNavLinks } from "@/data/site_content";

const MobileMenuDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/55 md:hidden"
      onClick={onClose}
      aria-hidden="true"
    >
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

const ResponsiveHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-paper)]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between md:hidden">
          <Link href="/" className="font-heading text-xl uppercase tracking-[0.12em] text-[var(--color-ink)]">
            Wanderlust
          </Link>
          <div className="flex items-center gap-2">
            <div className="max-[420px]:hidden">
              <CtaButton href={headerContact.enquireHref} label="Enquire" variant="secondary" />
            </div>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-lg leading-none text-[var(--color-ink)]"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>

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
            <Link href={headerContact.accountHref} className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Account
            </Link>
            <CtaButton href={headerContact.enquireHref} label="Enquire now" variant="secondary" />
          </div>
        </div>
      </div>

      <MobileMenuDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
};

export default ResponsiveHeader;
