"use client";

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}

export default function SearchBar({
  value,
  placeholder = "Search destinations or titles",
  onChange,
  onSubmit,
}: SearchBarProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
      className="w-full"
    >
      <label className="sr-only" htmlFor="search-experiences">
        Search experiences
      </label>
      <input
        id="search-experiences"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />
    </form>
  );
}
