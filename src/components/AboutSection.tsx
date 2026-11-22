import { MessageCircle, UserCheck, HeartHandshake, Home, PhoneCall, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { SafeImage } from './SafeImage';

interface AboutSectionProps {
  onOpenWhatsApp: (message?: string, title?: string) => void;
}

const ABOUT_PILLARS = [
  {
    icon: HeartHandshake,
    title: 'Pelayanan yang Ramah',
    text: 'Pendekatan komunikasi yang sopan, terbuka, dan menghargai kenyamanan setiap pelanggan.',
  },
  {
    icon: UserCheck,
    title: 'Pendekatan Personal',
    text: 'Keluhan pegal, kelelahan, maupun kebutuhan relaksasi didengarkan sebelum memilih terapi yang sesuai.',
  },
  {
    icon: Layers,
    title: 'Pilihan Layanan Beragam',
    text: 'Tersedia pijat tubuh, refleksi, kerokan, totok wajah, bekam, akupuntur, guasha, hingga pijat otot olahraga.',
  },
  {
    icon: PhoneCall,
    title: 'Kemudahan Menghubungi Terapis',
    text: 'Konsultasi awal maupun penjadwalan dapat dilakukan langsung lewat dua nomor WhatsApp resmi.',
  },
  {
    icon: Home,
    title: 'Layanan Panggilan Sesuai Kesepakatan',
    text: 'Tersedia opsi kunjungan ke rumah di Kota Lubuklinggau dan sekitarnya setelah konfirmasi lokasi dan jadwal.',
  },
];

export function AboutSection({ onOpenWhatsApp }: AboutSectionProps) {
  return (
    <section id="tentang-kami" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Visual Column: Authentic Official Brochure & Owner Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl overflow-hidden border border-[#26332C]/10 bg-[#F5F7F5]">
              <div className="aspect-[4/5] w-full overflow-hidden bg-white">
                <SafeImage
                  src={BUSINESS_INFO.brochureFrontUrl}
                  alt="Materi identitas resmi Rumah Terapi Sehat Syariah dan Sport Terapi Center Lubuklinggau"
                  className="w-full h-full object-contain bg-white"
                  fallbackTitle="Materi Resmi Sport Terapi Center Lubuklinggau"
                />
              </div>
              <div className="p-5 border-t border-[#26332C]/10 bg-[#F5F7F5]">
                <p className="text-xs font-medium text-[#087D43]">
                  Dokumentasi Resmi Usaha
                </p>
                <p className="mt-1 text-sm font-semibold text-[#26332C]">
                  Pengelola &amp; Terapis: {BUSINESS_INFO.owner}
                </p>
                <p className="mt-1 text-xs text-[#26332C]/65 leading-relaxed">
                  Area foto profil pribadi Bapak Sulaeman dapat ditambahkan pada bagian ini
                  ketika foto dokumentasi terbaru sudah tersedia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#087D43]">
              Tentang Kami
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#26332C] text-balance">
              Kenali {BUSINESS_INFO.fullName}
            </h2>

            <div className="mt-5 space-y-4 text-base text-[#26332C]/80 leading-relaxed">
              <p>
                {BUSINESS_INFO.fullName} merupakan usaha jasa perawatan tubuh
                dan relaksasi lokal di Kota Lubuklinggau yang dikelola oleh{' '}
                <strong className="font-semibold text-[#26332C]">
                  {BUSINESS_INFO.owner}
                </strong>
                . Kami menyediakan layanan pijat, relaksasi, dan terapi
                tradisional dengan mengutamakan ketenangan, kebersihan, serta
                kenyamanan pelanggan.
              </p>
              <p>
                Baik bagi pekerja kantoran, pekerja lapangan, pegiat olahraga,
                maupun masyarakat dewasa yang ingin meredakan ketegangan otot
                setelah beraktivitas, setiap sesi diawali dengan komunikasi
                personal agar layanan yang dipilih selaras dengan kebutuhan
                kondisi tubuh Anda.
              </p>
            </div>

            {/* Clean hairline list of core service principles */}
            <div className="mt-8 divide-y divide-[#26332C]/10 border-t border-b border-[#26332C]/10">
              {ABOUT_PILLARS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="py-4 flex items-start gap-4"
                  >
                    <Icon
                      className="w-5 h-5 text-[#087D43] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-[#26332C]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-[#26332C]/75 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    'Halo Bapak Sulaeman (Sport Terapi Center Lubuklinggau), saya ingin bertanya mengenai layanan terapi yang sesuai dengan kebutuhan saya.',
                    'Diskusi Kebutuhan Terapi'
                  )
                }
                className="min-h-[46px] inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#087D43] hover:bg-[#066335] text-white text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Konsultasikan Kebutuhan Anda</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
