"use client";

interface ResultsPagerProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function ResultsPager({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: ResultsPagerProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-white p-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={currentPage <= 1}
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-35"
      >
        Prev
      </button>
      <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Page {currentPage} of {totalPages}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={currentPage >= totalPages}
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-35"
      >
        Next
      </button>
    </div>
  );
}
