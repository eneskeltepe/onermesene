import { categories, cities } from '@/app/data/categories';

interface BusinessInfoProps {
  onBusinessNameChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onAddressChange: (value: string) => void;
}

export default function BusinessInfo({
  onBusinessNameChange,
  onCategoryChange,
  onCityChange,
  onAddressChange,
}: BusinessInfoProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">İşletme Bilgileri</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
            İşletme Adı
          </label>
          <input
            type="text"
            name="business-name"
            id="business-name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            placeholder="Örn: Acme Ltd. Şti."
            onChange={(e) => onBusinessNameChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Kategori
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">Seçiniz</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Şehir
          </label>
          <select
            id="city"
            name="city"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            onChange={(e) => onCityChange(e.target.value)}
          >
            <option value="">Seçiniz</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Adres
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            placeholder="İşletmenin tam adresi"
            onChange={(e) => onAddressChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
} 