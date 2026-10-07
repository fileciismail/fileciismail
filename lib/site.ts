export const site = {
  name: "Fileci İsmail",
  legalName: "Fileci İsmail Güvenlik Ağları",
  tagline: "Kahramanmaraş'ta güvenlik filesi üretim ve montajı",
  description:
    "Kahramanmaraş'ta balkon filesi, kuş filesi, halı saha filesi, inşaat filesi ve merdiven boşluğu filesi üretim ve montajı. Ücretsiz fiyat teklifi, sağlam malzeme, hızlı ve temiz işçilik.",
  url: "https://fileciismail.com.tr",
  city: "Kahramanmaraş",
  region: "Kahramanmaraş ve çevre iller",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE ?? "444 0 582",
  googleAdsId: "AW-18450916440",
  googleAdsPhoneConversion:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION ?? "AW-18450916440",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Yavuz Selim Mahallesi Küçük Sanayi Sitesi 23/1. Cadde No:9/A Dulkadiroğlu Kahramanmaraş 46040",
    ),
  mapsEmbed:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(
      "Yavuz Selim Mahallesi Küçük Sanayi Sitesi 23/1. Cadde No:9/A Dulkadiroğlu Kahramanmaraş 46040",
    ) +
    "&z=17&output=embed",
  address: {
    street: "Yavuz Selim Mahallesi, Küçük Sanayi Sitesi 23/1. Cadde No:9/A",
    postalCode: "46040",
    district: "Dulkadiroğlu",
    city: "Kahramanmaraş",
    country: "TR",
  },
  get addressDisplay() {
    return `${this.address.street}, ${this.address.postalCode} ${this.address.district}/${this.address.city}`;
  },
};

export function phoneDigits() {
  return site.phoneDisplay.replace(/\D/g, "");
}

export function whatsappLink(message?: string) {
  if (!site.whatsapp) return telLink();
  const text = encodeURIComponent(
    message ??
      "Merhaba, güvenlik filesi için fiyat teklifi almak istiyorum.",
  );
  return `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${text}`;
}

export function telLink() {
  const digits = phoneDigits();
  if (!digits) return "/iletisim";
  if (digits.startsWith("444")) return `tel:${digits}`;
  return `tel:+90${digits.replace(/^0/, "")}`;
}

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  accent: string;
  image?: string;
  points: string[];
  body: string[];
};

export const services: Service[] = [
  {
    slug: "balkon-filesi",
    title: "Balkon Güvenlik Filesi",
    short: "Çocuk, evcil hayvan ve eşya düşmesine karşı balkon koruması.",
    summary:
      "Kahramanmaraş'taki daire ve villalarda balkon korkuluklarına UV dayanımlı güvenlik filesi üretim ve montajı.",
    accent: "#c9a227",
    image: "/images/balkon-filesi.webp",
    points: [
      "Çocuk ve kedi güvenliği",
      "Şeffaf görünüm, manzarayı kapatmaz",
      "Paslanmaz bağlantı elemanları",
      "Villalar, siteler ve apartmanlar",
    ],
    body: [
      "Balkon filesi, düşme riskini kesmeden manzarayı ve ışığı koruyan en pratik çözümdür. Kahramanmaraş'ta özellikle yüksek katlı sitelerde, çocuklu ailelerde ve evcil hayvanı olan evlerde en çok tercih edilen uygulamamızdır.",
      "Fileyi kendi üretimimizden seçiyoruz. Ölçü yerinde alınır, file gergin ve düzgün gerilir, kenarlar korkuluğa veya beton kenarına sağlam bağlantılarla sabitlenir. Kullanılan file UV katkılıdır; yaz güneşi ve kış soğuğunda çabuk yıpranmaz.",
      "Onikişubat, Dulkadiroğlu ve çevre ilçelerde yerinde ölçü alıp fiyat teklifi veriyor, kısa sürede montaj yapıyoruz.",
    ],
  },
  {
    slug: "kus-filesi",
    title: "Kuş Filesi",
    short: "Balkon, teras ve avluya güvercin ve serçe girişini keser.",
    summary:
      "Kuş pisliği, tüy ve yuva sorununu durduran ince gözlü kuş filesi üretimi ve uygulaması.",
    accent: "#4f9d7a",
    image: "/images/kus-filesi.jpg",
    points: [
      "Güvercin ve serçe engeli",
      "İnce göz, görünmez duruş",
      "Teras, balkon, otopark saçağı",
      "Temizlik ve hijyen koruması",
    ],
    body: [
      "Kuş filesi, balkon ve teraslara yuva yapan güvercinleri uzak tutmak için tasarlanır. Göz aralığı kuş filesinde daha incedir; güvenlik filesinden farklı bir üründür.",
      "Kahramanmaraş'ta özellikle açık balkonlarda, iş yeri saçaklarında ve avlularda kuş pisliği hem sağlık hem görünüm sorunu yaratır. File doğru gerilmezse kuş yine içeri girer; bu yüzden ölçü ve gerginlik işin kendisidir.",
      "Yerinde kuşun giriş yönünü, rüzgârı ve mevcut korkuluk yapısını inceliyor; fileyi boşluksuz kapatıyoruz.",
    ],
  },
  {
    slug: "halisaha-filesi",
    title: "Halı Saha Filesi",
    short: "Topun sahadan çıkmasını önleyen yüksek dayanımlı spor filesi.",
    summary:
      "Halı saha, tenis kortu ve spor tesisi çevre filesi; üretim, direk, gerdirme ve montajla.",
    accent: "#2f6b4f",
    image: "/images/halisaha-filesi.jpg",
    points: [
      "Yüksek darbe dayanımı",
      "UV ve hava koşullarına uygun",
      "Direk ve gerdirme sistemi",
      "Saha çevresi ve kale arkası",
    ],
    body: [
      "Halı saha filesi, topun sahadan komşu parsele veya yola kaçmasını önler. Standart balkon filesinden daha kalın ip ve daha geniş gözle üretilir; darbe ve sürtünmeye göre seçilir.",
      "Kahramanmaraş ve çevresindeki halı sahalar, okul bahçeleri ve site spor alanlarında çevre filesi, kale arkası filesi ve tribün üstü uygulamaları yapıyoruz.",
      "Mevcut direkler sağlamsa file yenilenir; değilse direk, halat ve gerdirme elemanlarıyla komple sistem kurulur.",
    ],
  },
  {
    slug: "insaat-filesi",
    title: "İnşaat Filesi",
    short: "Şantiye çevre güvenliği, moloz ve malzeme düşme koruması.",
    summary:
      "İnşaat filesi ve moloz filesi ile şantiye cephesi, iskele ve çevre emniyeti.",
    accent: "#c45c26",
    image: "/images/insaat-filesi.webp",
    points: [
      "Moloz ve malzeme düşme önlemi",
      "İskele ve cephe kapatma",
      "Şantiye çevre emniyeti",
      "Kısa süreli veya proje bazlı iş",
    ],
    body: [
      "İnşaat filesi hem iş güvenliği hem çevre düzeni içindir. Yoldan geçenleri, alt katları ve komşu parseli düşen malzemeden korur; şantiyeyi de toz ve moloz dağılmasından kısmen sarar.",
      "Kahramanmaraş'taki konut, villa ve ticari inşaatlarda iskele filesi, cephe filesi ve çevre filesi üretip uyguluyoruz. File rengi ve göz aralığı proje ihtiyacına göre seçilir.",
      "Müteehhit ve şantiye şefleriyle ölçü, metraj ve montaj takvimini birlikte netleştiriyoruz.",
    ],
  },
  {
    slug: "merdiven-filesi",
    title: "Merdiven Boşluğu Filesi",
    short: "Apartman merdiven boşluğunda düşme ve eşya kaybını önler.",
    summary:
      "Site ve apartman merdiven kovasına yatay veya düşey güvenlik filesi.",
    accent: "#6b7c8a",
    image: "/images/merdiven-filesi.jpg",
    points: [
      "Merdiven kovası kapatma",
      "Çocuk güvenliği",
      "Yatay veya düşey uygulama",
      "Site yönetimi onayına uygun işçilik",
    ],
    body: [
      "Merdiven boşluğu filesi, apartman kovasına düşme riskini kapatır. Özellikle çocuklu binalarda ve yüksek katlı sitelerde yönetimlerin en sık talep ettiği uygulamadır.",
      "Boşluğun genişliği, kat yüksekliği ve mevcut demir doğramaya göre yatay kat filesi veya düşey kapatma tercih edilir. Bağlantılar duvar dübeli veya demir konstrüksiyonla yapılır.",
      "Kahramanmaraş'taki sitelerde ücretsiz fiyat teklifi hazırlayıp, yönetim ve kat maliklerine net teklif bırakıyoruz.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export const reasons = [
  {
    title: "Üretim ve montaj",
    text: "Fileyi Kahramanmaraş'ta üretiyor, aynı ekiple yerinde takıyoruz. Aracı yok, ölçü ile ürün uyumlu çıkar.",
  },
  {
    title: "Ücretsiz fiyat teklifi",
    text: "Kahramanmaraş içi fiyat teklifi ücretsizdir. Ölçü, malzeme ve montaj yöntemi yerinde netleşir; tahminle fiyat vermeyiz.",
  },
  {
    title: "Doğru file, doğru gergi",
    text: "Balkon, kuş, saha ve inşaat filesi aynı ürün değildir. İşi ihtiyaca göre seçiyor, boşluksuz geriyoruz.",
  },
  {
    title: "Yerel ekip",
    text: "Kahramanmaraş merkezli çalışıyoruz. Servis, ek file veya sök-tak gerektiğinde uzakta bir firma aramazsınız.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Ölçü ve fiyat teklifi",
    text: "444 0 582'yi arayın. Adres ve fotoğraf yeterli; çoğu işte yerinde bakıp teklif veriyoruz.",
  },
  {
    n: "02",
    title: "Net teklif",
    text: "File tipi, metrekaresi, bağlantı şekli ve işçilik yazılı teklifte durur. Sürpriz kalem yok.",
  },
  {
    n: "03",
    title: "Üretim ve montaj",
    text: "File ölçüye göre üretilir. Randevu günü ekip gelir, fileyi gerer, kenarları sabitler.",
  },
  {
    n: "04",
    title: "Teslim",
    text: "Gerginlik ve bağlantılar birlikte kontrol edilir. Bakım ve kullanım kısaca anlatılır.",
  },
];

export const districts = [
  "Onikişubat",
  "Dulkadiroğlu",
  "Türkoğlu",
  "Pazarcık",
  "Afşin",
  "Elbistan",
  "Göksun",
  "Andırın",
  "Çağlayancerit",
  "Ekinözü",
  "Nurhak",
];

export const faqs = [
  {
    q: "Fiyat teklifi ücretli mi?",
    a: "Kahramanmaraş merkez ve yakın ilçelerde fiyat teklifi ücretsizdir. Uzak ilçe veya çevre il işlerinde yol durumu görüşmede konuşulur.",
  },
  {
    q: "Balkon filesi manzarayı kapatır mı?",
    a: "Hayır. Güvenlik filesi ince ip ve geniş gözlüdür; ışığı ve manzarayı büyük ölçüde açık bırakır. Asıl işi düşmeyi önlemektir.",
  },
  {
    q: "Kuş filesi ile balkon filesi aynı mı?",
    a: "Değildir. Kuş filesinin gözü daha incedir; güvercin ve serçeyi keser. Balkon güvenlik filesi düşme koruması içindir. Teklifte hangisinin gerektiğine birlikte karar veririz.",
  },
  {
    q: "File ne kadar dayanır?",
    a: "UV katkılı file doğru gerilip kenarları sağlam bağlanırsa yıllarca durur. Kahramanmaraş'ın yaz güneşi ve kış rüzgârı malzeme seçiminde dikkate alınır.",
  },
  {
    q: "Çocuk ve kedi için uygun mu?",
    a: "Evet. Balkon ve merdiven boşluğu filesi tam da bu risk için takılır. Göz aralığı ve gerginlik evdeki ihtiyaca göre ayarlanır.",
  },
  {
    q: "Halı saha ve inşaat işi de yapıyor musunuz?",
    a: "Evet. Spor tesisi çevre filesi, kale arkası, şantiye cephe ve moloz filesi proje bazlı üretilir ve uygulanır.",
  },
];
