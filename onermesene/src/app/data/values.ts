import { ShieldCheckIcon, UserGroupIcon, NewspaperIcon, HeartIcon } from '@heroicons/react/24/outline';

export interface Value {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const values: Value[] = [
  {
    name: 'Şeffaflık',
    description: 'Tüm deneyimler ve yorumlar şeffaf bir şekilde paylaşılır. Hiçbir içerik sansürlenmez veya gizlenmez.',
    icon: NewspaperIcon,
  },
  {
    name: 'Güvenilirlik',
    description: 'Paylaşılan tüm deneyimler moderasyon ekibimiz tarafından kontrol edilir ve doğruluğu teyit edilir.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Topluluk',
    description: 'Kullanıcılarımız birbirlerinin deneyimlerinden faydalanarak daha bilinçli tercihler yapar.',
    icon: UserGroupIcon,
  },
  {
    name: 'Sosyal Fayda',
    description: 'Amacımız toplumu bilinçlendirmek ve kötü hizmet veren işletmelerin kendilerini geliştirmesini sağlamaktır.',
    icon: HeartIcon,
  },
]; 