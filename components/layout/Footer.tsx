"use client";

import Link from "next/link";

import {
  appLinks,
  copyrightLabel,
  footerLinkGroups,
  socialLinks,
} from "@/data/site_content";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-white/70">
              Wanderlust
            </p>
            <h3 className="font-heading text-2xl">Sharing experiences worth remembering.</h3>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          {footerLinkGroups.map((group) => (
            <div key={group.title} className="hidden md:block">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{group.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3 md:hidden">
          {footerLinkGroups.map((group) => (
            <details key={group.title} className="rounded-xl border border-white/20 px-4 py-3">
              <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.2em] text-white/80">
                {group.title}
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/20 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>{copyrightLabel}</span>
          <div className="flex flex-wrap gap-4">
            {appLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
