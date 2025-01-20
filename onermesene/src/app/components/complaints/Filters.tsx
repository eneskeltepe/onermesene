import { categories, cities, sortOptions } from '@/app/data/categories';

interface FiltersProps {
  onCategoryChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export default function Filters({ onCategoryChange, onCityChange, onSortChange }: FiltersProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          className="rounded-lg border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Kategori Seçin</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          className="rounded-lg border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500"
          onChange={(e) => onCityChange(e.target.value)}
        >
          <option value="">Şehir Seçin</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <select
        className="rounded-lg border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500"
        onChange={(e) => onSortChange(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
} 