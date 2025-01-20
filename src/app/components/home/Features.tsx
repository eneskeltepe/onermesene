import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  MapPinIcon, 
  PhotoIcon, 
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Güvenilir İçerik',
    description: 'Tüm deneyimler moderasyon ekibimiz tarafından incelenir ve doğrulanır.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Topluluk Gücü',
    description: 'Binlerce kullanıcının deneyimlerinden faydalanın, bilinçli tercihler yapın.',
    icon: UserGroupIcon,
  },
  {
    name: 'Markdown Desteği',
    description: 'Deneyimlerinizi zengin metin formatında paylaşın, daha etkili anlatın.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Şehir Bazlı Filtreleme',
    description: 'Size yakın işletmeler hakkındaki deneyimleri kolayca bulun.',
    icon: MapPinIcon,
  },
  {
    name: 'Görsel Paylaşımı',
    description: 'Deneyimlerinizi fotoğraflarla destekleyin, daha ikna edici olun.',
    icon: PhotoIcon,
  },
  {
    name: 'Etkileşim',
    description: 'Deneyimlere yorum yapın, destek verin, tartışmalara katılın.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white/50 backdrop-blur-sm py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Daha Bilinçli Tercihler</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Neden Önermesene?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Önermesene, kötü hizmet deneyimlerini paylaşmanın ve bilinçli tercihler yapmanın en etkili yolu.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 