import Link from "next/link";
import type { ReactNode } from "react";

import type { CtaVariant } from "@/types";

interface CtaButtonProps {
  label: string;
  href: string;
  variant?: CtaVariant;
  fullWidth?: boolean;
  children?: ReactNode;
}

const classesByVariant: Record<CtaVariant, string> = {
  primary:
    "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-black focus-visible:outline-[var(--color-ink)]",
  secondary:
    "bg-[var(--color-accent)] text-[var(--color-paper)] hover:bg-[var(--color-accent-strong)] focus-visible:outline-[var(--color-accent)]",
  ghost:
    "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] focus-visible:outline-[var(--color-ink)]",
};

const CtaButton = ({
  label,
  href,
  variant = "primary",
  fullWidth = false,
  children,
}: CtaButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${classesByVariant[variant]} ${fullWidth ? "w-full" : "w-auto"}`}
    >
      {children}
      {label}
    </Link>
  );
};

export default CtaButton;
