import { MapPinIcon, HandThumbDownIcon, ChatBubbleBottomCenterTextIcon, FunnelIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Örnek kategoriler
const categories = [
  "Tümü",
  "Restoran",
  "Kargo",
  "Elektronik",
  "Mobilya",
  "Market",
  "Giyim",
  "Sağlık",
  "Eğitim",
];

// Örnek şehirler
const cities = [
  "Tümü",
  "İstanbul",
  "Ankara",
  "İzmir",
  "Bursa",
  "Antalya",
];

// Örnek sıralama seçenekleri
const sortOptions = [
  { name: "En Yeni", value: "newest" },
  { name: "En Çok Desteklenen", value: "most_supported" },
  { name: "En Çok Yorumlanan", value: "most_commented" },
];

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef2f2] via-[#fef2f2] to-[#fff5f5]">
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef4444] to-[#b91c1c] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="absolute inset-x-0 top-1/3 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef4444] to-[#b91c1c] opacity-20 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="rounded-lg border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500">
                <option>Tüm Kategoriler</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select className="rounded-lg border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500">
                <option>Tüm Şehirler</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <select className="rounded-lg border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500">
              <option>En Yeni</option>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <Link 
                href={`/sikayetler/${index + 1}`}
                key={index}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-primary-100/20"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Kötü Hizmet Deneyimi #{index + 1}
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {index + 1} saat önce
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4" />
                  <span>Örnek İşletme - {cities[index % cities.length]}</span>
                  <span className="text-gray-300">|</span>
                  <span>{categories[index % categories.length]}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <HandThumbDownIcon className="h-4 w-4" />
                      <span>{(index + 1) * 45}</span>
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                      <span>{(index + 1) * 12}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">Kullanıcı {index + 1}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-600">{cities[index % cities.length]}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 top-2/3 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef4444] to-[#b91c1c] opacity-20 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ef4444] to-[#b91c1c] opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  );
} 