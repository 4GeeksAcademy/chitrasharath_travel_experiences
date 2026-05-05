"use client";

interface FilterPanelProps {
  categories: string[];
  destinations: string[];
  selectedCategory: string;
  selectedDestination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

const FilterSelect = ({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const FilterPanel = ({
  categories,
  destinations,
  selectedCategory,
  selectedDestination,
  onCategoryChange,
  onDestinationChange,
}: FilterPanelProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FilterSelect
        id="filter-category"
        label="Category"
        value={selectedCategory}
        options={categories}
        onChange={onCategoryChange}
      />
      <FilterSelect
        id="filter-destination"
        label="Destination"
        value={selectedDestination}
        options={destinations}
        onChange={onDestinationChange}
      />
    </div>
  );
};

export default FilterPanel;
