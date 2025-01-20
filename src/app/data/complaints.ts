export interface Complaint {
  id: number;
  title: string;
  business: string;
  content: string;
  author: string;
  date: string;
  city: string;
  category: string;
  likes: number;
  comments: number;
}

export const recentComplaints: Complaint[] = [
  {
    id: 1,
    title: "Kalitesiz Mobilya ve Kötü Müşteri Hizmeti",
    business: "Mega Mobilya - Ankara",
    content: "Geçen ay aldığım koltuk takımı 2 hafta içinde deforme olmaya başladı. Mağazaya gittiğimde ilgilenmediler bile. Kesinlikle tavsiye etmiyorum.",
    author: "Mehmet Y.",
    date: "2 saat önce",
    city: "Ankara",
    category: "Mobilya",
    likes: 124,
    comments: 45
  },
  {
    id: 2,
    title: "Yemek Geç ve Soğuk Geldi",
    business: "Hızlı Lokanta - İstanbul",
    content: "2 saat beklediğim yemek soğuk geldi. Üstelik sipariş ettiğim içecek hiç gelmedi. Parayı iade etmediler.",
    author: "Ayşe K.",
    date: "5 saat önce",
    city: "İstanbul",
    category: "Restoran",
    likes: 89,
    comments: 23
  },
  {
    id: 3,
    title: "Berbat Teslimat Deneyimi",
    business: "Süper Kargo - İzmir",
    content: "Kargom 5 gün gecikmeli geldi ve paket hasarlıydı. Müşteri hizmetleri tamamen ilgisiz. Bir daha asla bu kargo firmasını kullanmayacağım.",
    author: "Ali R.",
    date: "12 saat önce",
    city: "İzmir",
    category: "Kargo",
    likes: 256,
    comments: 78
  },
  {
    id: 4,
    title: "Aldatıcı Fiyatlandırma",
    business: "Teknoloji Plus - Bursa",
    content: "İnternette gördüğüm fiyatın çok üstünde bir rakam çıkardılar. Kampanya bitti dediler ama site hala aynı fiyatı gösteriyor. Tamamen müşteri kandırmaca.",
    author: "Zeynep M.",
    date: "1 gün önce",
    city: "Bursa",
    category: "Elektronik",
    likes: 167,
    comments: 34
  }
]; 