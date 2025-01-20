import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12 lg:py-20">
        {/* Sol Taraf - Metin İçeriği */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
            Kötü Deneyimleri Paylaşın, <span className="text-primary-600">Toplumu Bilinçlendirin</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            Önermesene ile kötü hizmet deneyimlerinizi paylaşın, başkalarının deneyimlerinden faydalanın ve bilinçli tercihler yapın.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/deneyim-paylas"
              className="rounded-md bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all"
            >
              Deneyimini Paylaş
            </Link>
            <Link 
              href="/deneyimler" 
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors flex items-center"
            >
              Deneyimleri Görüntüle <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Sağ Taraf - Hero Görseli */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full max-w-2xl mx-auto">
            <Image
              src="/hero-image.svg"
              alt="Platform arayüzü"
              width={800}
              height={420}
              className="w-full h-auto rounded-lg shadow-xl ring-1 ring-gray-200"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 