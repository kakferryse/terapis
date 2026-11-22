export interface WhatsAppContact {
  id: string;
  label: string;
  display: string;
  intl: string;
  telHref: string;
}

export interface TherapyService {
  id: string;
  name: string;
  category: 'Pijat & Relaksasi' | 'Terapi Tradisional' | 'Kebugaran & Otot';
  description: string;
  note?: string;
  image: string;
  imageAlt: string;
  isIllustration: boolean;
  iconKey:
    | 'sparkles'
    | 'hand'
    | 'flame'
    | 'smile'
    | 'activity'
    | 'feather'
    | 'target'
    | 'shield'
    | 'heart'
    | 'compass';
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'Aktivitas Terapi'
    | 'Pijat dan Relaksasi'
    | 'Fasilitas dan Peralatan'
    | 'Dokumentasi Pelayanan';
  src: string;
  alt: string;
  sourceLabel: 'Dokumentasi Resmi Usaha' | 'Ilustrasi Layanan';
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialSlot {
  id: string;
  customerName: string;
  sessionDate: string;
  serviceName: string;
  reviewText: string;
  hasPhotoSlot: boolean;
}

export const BUSINESS_INFO = {
  fullName: 'Rumah Terapi Sehat Syariah & Sport Terapi Center Lubuklinggau',
  shortName: 'Sport Terapi Center',
  owner: 'Bapak Sulaeman',
  tagline: 'Kesehatan Anda Prioritas Kami',
  address:
    'Jl. Amula Rahayu, Lorong PNPM, Kelurahan Marga Rahayu, RT 07 No. 65, Kecamatan Lubuklinggau Selatan II, Kota Lubuklinggau, Sumatera Selatan.',
  shortAddress:
    'Kel. Marga Rahayu, Kec. Lubuklinggau Selatan II, Kota Lubuklinggau',
  googleMapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Jl.+Amula+Rahayu+Kelurahan+Marga+Rahayu+Lubuklinggau+Selatan+II+Kota+Lubuklinggau',
  logoUrl: '/images/logo-sport-terapi-center-lubuklinggau.webp',
  brochureFrontUrl: '/assets/aistudio/brosur-sport-terapi-center_1dac3576.jpeg',
  brochureServiceUrl: '/assets/aistudio/layanan-sport-terapi-center_f85f8280.jpeg',
  heroImageUrl: '/images/sport-terapi-center-lubuklinggau.webp',
  social: {
    instagramHandle: '@sportterapycenterlubuklinggau',
    instagramUrl: 'https://www.instagram.com/sportterapycenterlubuklinggau/',
    tiktokName: 'Sport Terapi Center LLG',
    facebookName: 'Sport Terapi Center Lubuklinggau',
  },
  disclaimer:
    'Layanan terapi dan perawatan ditujukan untuk menunjang relaksasi dan kebugaran. Layanan bukan pengganti diagnosis maupun penanganan medis profesional. Konsultasikan kondisi kesehatan Anda sebelum memilih terapi.',
};

export const WHATSAPP_CONTACTS: WhatsAppContact[] = [
  {
    id: 'wa-1',
    label: 'WhatsApp Utama (Nomor 1)',
    display: '0898 0612 345',
    intl: '628980612345',
    telHref: 'tel:+628980612345',
  },
  {
    id: 'wa-2',
    label: 'WhatsApp Alternatif (Nomor 2)',
    display: '0817 7954 3215',
    intl: '6281779543215',
    telHref: 'tel:+6281779543215',
  },
];

export function buildWhatsAppUrl(intlPhone: string, message: string): string {
  return `https://wa.me/${intlPhone}?text=${encodeURIComponent(message)}`;
}

export function getServiceInquiryMessage(serviceName: string): string {
  return `Halo Sport Terapi Center Lubuklinggau, saya ingin bertanya mengenai layanan ${serviceName}. Mohon informasi jadwal dan tarifnya.`;
}

export const THERAPY_SERVICES: TherapyService[] = [
  {
    id: 'full-body-massage',
    name: 'Full Body Massage',
    category: 'Pijat & Relaksasi',
    description:
      'Pijat seluruh tubuh untuk membantu memberikan relaksasi dan mengurangi rasa pegal setelah menjalani aktivitas sehari-hari.',
    image: '/images/full-body-massage-lubuklinggau.webp',
    imageAlt: 'Ilustrasi layanan Full Body Massage di Sport Terapi Center Lubuklinggau',
    isIllustration: true,
    iconKey: 'hand',
  },
  {
    id: 'full-body-massage-refleksi',
    name: 'Full Body Massage & Refleksi',
    category: 'Pijat & Relaksasi',
    description:
      'Kombinasi pijat tubuh dan refleksi untuk memberikan pengalaman relaksasi yang lebih menyeluruh.',
    image: '/images/guasha-refleksi-lubuklinggau.webp',
    imageAlt: 'Ilustrasi layanan Full Body Massage dan Refleksi di Lubuklinggau',
    isIllustration: true,
    iconKey: 'sparkles',
  },
  {
    id: 'full-body-massage-kerokan',
    name: 'Full Body Massage & Kerokan',
    category: 'Pijat & Relaksasi',
    description:
      'Layanan pijat tubuh yang dikombinasikan dengan kerokan sesuai kebutuhan dan kenyamanan pelanggan.',
    image: '/images/full-body-massage-lubuklinggau.webp',
    imageAlt: 'Ilustrasi layanan Full Body Massage dan Kerokan Lubuklinggau',
    isIllustration: true,
    iconKey: 'flame',
  },
  {
    id: 'full-body-massage-totok-wajah',
    name: 'Full Body Massage & Totok Wajah',
    category: 'Pijat & Relaksasi',
    description:
      'Kombinasi pijat tubuh dan perawatan totok wajah untuk memberikan pengalaman relaksasi.',
    image: '/images/sport-terapi-center-lubuklinggau.webp',
    imageAlt: 'Ilustrasi layanan Full Body Massage dan Totok Wajah di Lubuklinggau',
    isIllustration: true,
    iconKey: 'smile',
  },
  {
    id: 'pijat-cedera-olahraga',
    name: 'Pijat Cedera Olahraga',
    category: 'Kebugaran & Otot',
    description:
      'Layanan pijat yang ditujukan untuk membantu perawatan otot setelah aktivitas olahraga.',
    note: 'Didahului penilaian kondisi pelanggan. Layanan ini bukan pengganti pemeriksaan medis dan tidak mengklaim menyembuhkan cedera.',
    image: '/images/pijat-cedera-olahraga-lubuklinggau.webp',
    imageAlt: 'Ilustrasi layanan Pijat Cedera Olahraga di Sport Terapi Center Lubuklinggau',
    isIllustration: true,
    iconKey: 'activity',
  },
  {
    id: 'totok-wajah',
    name: 'Totok Wajah',
    category: 'Pijat & Relaksasi',
    description:
      'Layanan pijat atau stimulasi pada area wajah untuk membantu memberikan rasa rileks dan nyaman.',
    image: '/images/sport-terapi-center-lubuklinggau.webp',
    imageAlt: 'Ilustrasi perawatan Totok Wajah di Lubuklinggau',
    isIllustration: true,
    iconKey: 'feather',
  },
  {
    id: 'akupuntur',
    name: 'Akupuntur',
    category: 'Terapi Tradisional',
    description:
      'Layanan akupuntur tradisional dengan penjelasan terbuka mengenai prosedur, aspek keamanan, serta kesesuaian kondisi sebelum sesi berlangsung.',
    note: 'Informasi detail prosedur, kesiapan kondisi tubuh, dan keterangan praktisi dijelaskan langsung sebelum layanan.',
    image: '/images/guasha-refleksi-lubuklinggau.webp',
    imageAlt: 'Ilustrasi layanan Akupuntur tradisional di Lubuklinggau',
    isIllustration: true,
    iconKey: 'target',
  },
  {
    id: 'guasha',
    name: 'Gua Sha / Guasha',
    category: 'Terapi Tradisional',
    description:
      'Teknik perawatan tradisional menggunakan alat khusus pada permukaan kulit sesuai kenyamanan pelanggan.',
    image: '/images/guasha-refleksi-lubuklinggau.webp',
    imageAlt: 'Ilustrasi peralatan Gua Sha di Sport Terapi Center Lubuklinggau',
    isIllustration: true,
    iconKey: 'compass',
  },
  {
    id: 'bekam-cupping',
    name: 'Bekam / Cupping',
    category: 'Terapi Tradisional',
    description:
      'Layanan terapi bekam dengan perhatian khusus pada kebersihan, penggunaan perlengkapan steril, serta skrining kondisi pelanggan sebelum tindakan.',
    note: 'Prosedur, kebersihan alat steril, dan kesiapan kondisi kesehatan dijelaskan serta dikonfirmasi sebelum terapi dimulai.',
    image: '/images/bekam-lubuklinggau.webp',
    imageAlt: 'Ilustrasi perlengkapan steril layanan Bekam Cupping Lubuklinggau',
    isIllustration: true,
    iconKey: 'shield',
  },
  {
    id: 'pijat-tradisional',
    name: 'Pijat Tradisional',
    category: 'Terapi Tradisional',
    description:
      'Pijat tradisional untuk membantu relaksasi dan mengurangi ketegangan otot setelah beraktivitas.',
    image: '/images/full-body-massage-lubuklinggau.webp',
    imageAlt: 'Ilustrasi layanan Pijat Tradisional Lubuklinggau',
    isIllustration: true,
    iconKey: 'heart',
  },
  {
    id: 'reposisi-tulang-sendi',
    name: 'Reposisi Tulang dan Sendi',
    category: 'Kebugaran & Otot',
    description:
      'Layanan perawatan tubuh yang dilakukan secara hati-hati setelah komunikasi awal mengenai keluhan dan riwayat kondisi fisik pelanggan.',
    note: 'Tidak ditujukan untuk menyembuhkan dislokasi, patah tulang, atau kondisi ortopedi. Untuk dugaan cedera tulang atau sendi, disarankan memeriksakan diri ke tenaga medis terlebih dahulu.',
    image: '/images/pijat-cedera-olahraga-lubuklinggau.webp',
    imageAlt: 'Ilustrasi layanan kebugaran otot dan sendi di Lubuklinggau',
    isIllustration: true,
    iconKey: 'activity',
  },
];

export const ADVANTAGES = [
  {
    number: '01',
    title: 'Pilihan Layanan Beragam',
    description:
      'Pelanggan dapat memilih berbagai layanan pijat dan terapi sesuai kebutuhan tubuh dan kenyamanan masing-masing.',
  },
  {
    number: '02',
    title: 'Pelayanan Personal',
    description:
      'Setiap pelanggan dapat menyampaikan kebutuhan dan keluhan secara terbuka sebelum menentukan layanan.',
  },
  {
    number: '03',
    title: 'Melayani Panggilan ke Rumah',
    description:
      'Pelanggan dapat menanyakan ketersediaan layanan panggilan ke rumah sesuai lokasi dan jadwal yang disepakati.',
  },
  {
    number: '04',
    title: 'Lokasi Jelas',
    description:
      'Berada di Jl. Amula Rahayu, Kelurahan Marga Rahayu, Kecamatan Lubuklinggau Selatan II, Kota Lubuklinggau.',
  },
  {
    number: '05',
    title: 'Mudah Dihubungi',
    description:
      'Pemesanan, konsultasi awal, dan informasi jadwal layanan dapat dilakukan langsung melalui dua nomor WhatsApp resmi.',
  },
  {
    number: '06',
    title: 'Mengutamakan Kenyamanan',
    description:
      'Mengutamakan komunikasi yang ramah, kenyamanan ruang atau sesi, serta kebersihan selama pelayanan berlangsung.',
  },
];

export const BOOKING_STEPS = [
  {
    step: '01',
    title: 'Pilih Layanan yang Diinginkan',
    description:
      'Telusuri daftar layanan pijat dan terapi yang sesuai dengan kebutuhan relaksasi atau kebugaran Anda.',
  },
  {
    step: '02',
    title: 'Hubungi Kami via WhatsApp',
    description:
      'Klik tombol WhatsApp pada layanan pilihan atau pilih salah satu dari dua nomor resmi kami.',
  },
  {
    step: '03',
    title: 'Sampaikan Kebutuhan & Lokasi',
    description:
      'Informasikan kondisi singkat, pilihan datang langsung atau panggilan ke rumah, serta waktu yang diinginkan.',
  },
  {
    step: '04',
    title: 'Konfirmasi Jadwal Bersama Terapis',
    description:
      'Bapak Sulaeman akan mengonfirmasi ketersediaan jadwal, area layanan, dan detail persiapan sebelum sesi.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-brosur-layanan',
    title: 'Daftar Layanan Resmi Sport Terapi Center',
    category: 'Dokumentasi Pelayanan',
    src: '/assets/aistudio/layanan-sport-terapi-center_f85f8280.jpeg',
    alt: 'Brosur layanan resmi Rumah Terapi Sehat Syariah dan Sport Terapi Center Lubuklinggau',
    sourceLabel: 'Dokumentasi Resmi Usaha',
    caption: 'Materi informasi resmi daftar layanan dan kontak WhatsApp Sport Terapi Center Lubuklinggau.',
  },
  {
    id: 'gal-brosur-identitas',
    title: 'Identitas Brand & Ringkasan Terapi',
    category: 'Dokumentasi Pelayanan',
    src: '/assets/aistudio/brosur-sport-terapi-center_1dac3576.jpeg',
    alt: 'Identitas visual dan brosur Rumah Terapi Sehat Syariah Lubuklinggau',
    sourceLabel: 'Dokumentasi Resmi Usaha',
    caption: 'Identitas visual resmi Rumah Terapi Sehat Syariah & Sport Terapi Center Lubuklinggau.',
  },
  {
    id: 'gal-ruang-terapi',
    title: 'Suasana Ruang Terapi yang Tenang & Bersih',
    category: 'Fasilitas dan Peralatan',
    src: '/images/sport-terapi-center-lubuklinggau.webp',
    alt: 'Ilustrasi suasana ruang terapi yang bersih dan nyaman bernuansa alami',
    sourceLabel: 'Ilustrasi Layanan',
    caption: 'Ilustrasi konsep ruangan terapi yang bersih, tenang, dan mengutamakan privasi pelanggan.',
  },
  {
    id: 'gal-massage-relaksasi',
    title: 'Sesi Pijat Relaksasi Seluruh Tubuh',
    category: 'Pijat dan Relaksasi',
    src: '/images/full-body-massage-lubuklinggau.webp',
    alt: 'Ilustrasi sesi pijat relaksasi punggung dan bahu yang nyaman',
    sourceLabel: 'Ilustrasi Layanan',
    caption: 'Ilustrasi layanan pijat tubuh untuk membantu mengurangi rasa pegal dan ketegangan otot.',
  },
  {
    id: 'gal-bekam-steril',
    title: 'Persiapan Peralatan Bekam yang Higienis',
    category: 'Fasilitas dan Peralatan',
    src: '/images/bekam-lubuklinggau.webp',
    alt: 'Ilustrasi perlengkapan bekam higienis di atas baki kayu bersih',
    sourceLabel: 'Ilustrasi Layanan',
    caption: 'Ilustrasi penataan perlengkapan bekam bersih dengan perhatian pada standar higienitas.',
  },
  {
    id: 'gal-guasha-refleksi',
    title: 'Alat Gua Sha, Refleksi & Minyak Herbal',
    category: 'Fasilitas dan Peralatan',
    src: '/images/guasha-refleksi-lubuklinggau.webp',
    alt: 'Ilustrasi alat gua sha batu giok, stik refleksi kayu, dan minyak pijat herbal',
    sourceLabel: 'Ilustrasi Layanan',
    caption: 'Ilustrasi perlengkapan tradisional untuk layanan gua sha dan pijat refleksi.',
  },
  {
    id: 'gal-sport-massage',
    title: 'Perawatan Otot Setelah Aktivitas Olahraga',
    category: 'Aktivitas Terapi',
    src: '/images/pijat-cedera-olahraga-lubuklinggau.webp',
    alt: 'Ilustrasi perawatan pijat otot kaki untuk kebugaran pasca olahraga',
    sourceLabel: 'Ilustrasi Layanan',
    caption: 'Ilustrasi sesi pijat kebugaran otot bagi pegiat olahraga dan pekerja aktivitas fisik tinggi.',
  },
];

export const TESTIMONIAL_SLOTS: TestimonialSlot[] = [
  {
    id: 'slot-1',
    customerName: 'Slot Ulasan Pelanggan #1',
    sessionDate: 'Menunggu ulasan terverifikasi',
    serviceName: 'Contoh: Full Body Massage / Pijat Tradisional',
    reviewText:
      'Ruang ini disiapkan untuk menampilkan pengalaman nyata pelanggan setelah sesi terapi beserta izin publikasi dari pelanggan.',
    hasPhotoSlot: true,
  },
  {
    id: 'slot-2',
    customerName: 'Slot Ulasan Pelanggan #2',
    sessionDate: 'Menunggu ulasan terverifikasi',
    serviceName: 'Contoh: Bekam / Cupping atau Refleksi',
    reviewText:
      'Kami berkomitmen tidak menampilkan ulasan rekayasa. Testimoni asli pelanggan di Lubuklinggau akan ditampilkan di sini setelah dikonfirmasi.',
    hasPhotoSlot: true,
  },
  {
    id: 'slot-3',
    customerName: 'Slot Ulasan Pelanggan #3',
    sessionDate: 'Menunggu ulasan terverifikasi',
    serviceName: 'Contoh: Layanan Panggilan ke Rumah',
    reviewText:
      'Pelanggan yang telah menjalani layanan dapat mengirimkan kesan dan masukan melalui WhatsApp untuk ditampilkan di halaman ini.',
    hasPhotoSlot: false,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Di mana lokasi Rumah Terapi Sehat Syariah & Sport Terapi Center?',
    answer:
      'Berlokasi di Jl. Amula Rahayu, Lorong PNPM, Kelurahan Marga Rahayu, RT 07 No. 65, Kecamatan Lubuklinggau Selatan II, Kota Lubuklinggau.',
  },
  {
    id: 'faq-2',
    question: 'Apakah melayani panggilan ke rumah?',
    answer:
      'Ya, pelanggan dapat menghubungi kami untuk menanyakan ketersediaan layanan panggilan ke rumah dan konfirmasi wilayah pelayanan.',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana cara melakukan pemesanan?',
    answer:
      'Hubungi WhatsApp kami, sampaikan layanan yang diinginkan, lalu konfirmasikan jadwal.',
  },
  {
    id: 'faq-4',
    question: 'Apa saja layanan yang tersedia?',
    answer:
      'Kami menyediakan berbagai pilihan pijat dan terapi, antara lain full body massage, refleksi, pijat tradisional, bekam, akupuntur, guasha, totok wajah, dan layanan lainnya.',
  },
  {
    id: 'faq-5',
    question: 'Apakah harus melakukan reservasi terlebih dahulu?',
    answer:
      'Disarankan menghubungi kami terlebih dahulu untuk memastikan ketersediaan jadwal.',
  },
  {
    id: 'faq-6',
    question: 'Apakah semua orang dapat menjalani terapi?',
    answer:
      'Tidak semua jenis terapi sesuai untuk setiap orang. Sampaikan kondisi kesehatan dan riwayat cedera sebelum menjalani layanan. Beberapa kondisi memerlukan pemeriksaan dan persetujuan tenaga medis terlebih dahulu.',
  },
  {
    id: 'faq-7',
    question: 'Berapa harga setiap layanan?',
    answer:
      'Silakan hubungi WhatsApp kami untuk mendapatkan informasi harga dan detail layanan.',
  },
];
