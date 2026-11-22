import { MessageCircle, ArrowDown, Check, MapPin, Home, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenWhatsApp: (message?: string, title?: string) => void;
}

export function Hero({ onOpenWhatsApp }: HeroProps) {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F7F5] via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20"
    >
      {/* Subtle botanical arch ornament in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91C83E]/8 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column desktop split with equal height stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-medium text-[#087D43] tracking-wide">
              {BUSINESS_INFO.tagline} · Kota Lubuklinggau
            </p>

            <h1 className="mt-3 text-[clamp(2rem,3.6vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-[#26332C] text-balance">
              Rawat Tubuh, Pulihkan Kebugaran, Nikmati Hidup Lebih Nyaman.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#26332C]/80 leading-relaxed max-w-2xl">
              {BUSINESS_INFO.fullName} hadir menyediakan berbagai layanan pijat
              dan terapi tradisional untuk membantu Anda menjaga kebugaran,
              merawat tubuh, dan mendapatkan relaksasi dengan pelayanan yang
              ramah dan personal.
            </p>

            {/* Three factual key points */}
            <ul className="mt-6 space-y-2.5 text-sm sm:text-base text-[#26332C]/90">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#087D43] shrink-0" aria-hidden="true" />
                <span>Beragam pilihan layanan terapi.</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#087D43] shrink-0" aria-hidden="true" />
                <span>Melayani panggilan ke rumah.</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#087D43] shrink-0" aria-hidden="true" />
                <span>Lokasi layanan di Kota Lubuklinggau.</span>
              </li>
            </ul>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    'Halo Sport Terapi Center Lubuklinggau, saya ingin menghubungi terapis untuk konsultasi dan pemesanan jadwal layanan.',
                    'Hubungi Terapis Sekarang'
                  )
                }
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#087D43] hover:bg-[#066335] text-white text-sm sm:text-base font-semibold whitespace-nowrap transition-colors cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Hubungi Terapis Sekarang</span>
              </button>

              <a
                href="#layanan"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#26332C]/20 bg-white hover:bg-[#F5F7F5] text-[#26332C] text-sm sm:text-base font-medium whitespace-nowrap transition-colors"
              >
                <span>Lihat Layanan Kami</span>
                <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Serene Therapy Room Photo */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#087D43]/12 bg-[#F5F7F5]">
              <SafeImage
                src={BUSINESS_INFO.heroImageUrl}
                alt="Ilustrasi suasana ruang terapi yang bersih dan nyaman di Rumah Terapi Sehat Syariah Lubuklinggau"
                className="w-full h-full object-cover"
                fallbackTitle="Ruang Terapi Nyaman & Alami"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#26332C]/80 via-[#26332C]/35 to-transparent p-5 sm:p-6">
                <p className="text-xs font-medium text-white/85">
                  Ilustrasi Suasana Perawatan · Pendekatan Syariah &amp; Kenyamanan Personal
                </p>
                <p className="mt-1 text-sm sm:text-base font-medium text-white">
                  Ditangani langsung dengan komunikasi ramah oleh {BUSINESS_INFO.owner}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Factual Trust Strip directly below the 2-column split */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#26332C]/10 rounded-2xl border border-[#26332C]/10 bg-[#F5F7F5]/75">
          <div className="p-5 flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-[#087D43] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#26332C]">
                Lokasi Jelas di Lubuklinggau Selatan II
              </p>
              <p className="mt-0.5 text-sm text-[#26332C]/70">
                Kelurahan Marga Rahayu, Jl. Amula Rahayu, Lorong PNPM RT 07 No. 65.
              </p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-3.5">
            <Home className="w-5 h-5 text-[#087D43] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#26332C]">
                Opsi Datang Langsung &amp; Panggilan
              </p>
              <p className="mt-0.5 text-sm text-[#26332C]/70">
                Konfirmasi wilayah panggilan rumah di Kota Lubuklinggau &amp; sekitarnya via WhatsApp.
              </p>
            </div>
          </div>

          <div className="p-5 flex items-start gap-3.5">
            <Sparkles className="w-5 h-5 text-[#087D43] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#26332C]">
                11 Pilihan Pijat &amp; Terapi Tradisional
              </p>
              <p className="mt-0.5 text-sm text-[#26332C]/70">
                Full body massage, refleksi, bekam, akupuntur, guasha, hingga pijat otot olahraga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
