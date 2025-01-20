import Gradient from '@/app/components/shared/Gradient';
import Values from '@/app/components/about/Values';
import Contact from '@/app/components/about/Contact';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef2f2] via-[#fef2f2] to-[#fff5f5] overflow-hidden">
      <div className="relative isolate">
        <Gradient position="top" />
        <Gradient position="middle" className="top-1/3" />

        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hakkımızda
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Önermesene, tüketicilerin kötü hizmet deneyimlerini paylaşarak toplumu bilinçlendirdiği
              bir platformdur. Amacımız, insanların daha bilinçli tercihler yapmasını sağlamak ve
              işletmelerin hizmet kalitesini artırmaya teşvik etmektir.
            </p>
          </div>
        </div>

        <Values />
        <Contact />

        <Gradient position="bottom" />
      </div>
    </div>
  );
}