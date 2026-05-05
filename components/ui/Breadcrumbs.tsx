import Link from "next/link";

import type { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/80">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-white" : ""}>{item.label}</span>
            )}
            {!isLast ? <span aria-hidden>•</span> : null}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
