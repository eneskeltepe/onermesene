interface Category {
  id: string;
  name: string;
}

interface City {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'mobilya', name: 'Mobilya' },
  { id: 'elektronik', name: 'Elektronik' },
  { id: 'giyim', name: 'Giyim' },
  { id: 'market', name: 'Market' },
  { id: 'restoran', name: 'Restoran' },
  { id: 'saglik', name: 'Sağlık' },
  { id: 'egitim', name: 'Eğitim' },
  { id: 'otomotiv', name: 'Otomotiv' },
  { id: 'diger', name: 'Diğer' },
];

export const cities: City[] = [
  { id: 'istanbul', name: 'İstanbul' },
  { id: 'ankara', name: 'Ankara' },
  { id: 'izmir', name: 'İzmir' },
  { id: 'bursa', name: 'Bursa' },
  { id: 'antalya', name: 'Antalya' },
  { id: 'adana', name: 'Adana' },
  { id: 'konya', name: 'Konya' },
  { id: 'gaziantep', name: 'Gaziantep' },
  { id: 'mersin', name: 'Mersin' },
  { id: 'diyarbakir', name: 'Diyarbakır' },
];

export const sortOptions = [
  { id: 'newest', name: 'En Yeni' },
  { id: 'oldest', name: 'En Eski' },
  { id: 'most-liked', name: 'En Çok Beğenilen' },
  { id: 'most-commented', name: 'En Çok Yorumlanan' },
]; 