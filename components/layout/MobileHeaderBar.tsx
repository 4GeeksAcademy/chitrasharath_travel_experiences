import Link from "next/link";

import CtaButton from "@/components/ui/CtaButton";
import { headerContact } from "@/data/site_content";

interface MobileHeaderBarProps {
  onOpenMenu: () => void;
}

const MobileHeaderBar = ({ onOpenMenu }: MobileHeaderBarProps) => {
  return (
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
          onClick={onOpenMenu}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-lg leading-none text-[var(--color-ink)]"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default MobileHeaderBar;
