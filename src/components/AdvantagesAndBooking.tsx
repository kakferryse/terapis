import { MessageCircle, Home, MapPin } from 'lucide-react';
import { ADVANTAGES, BOOKING_STEPS } from '../data/businessData';

interface AdvantagesAndBookingProps {
  onOpenWhatsApp: (message?: string, title?: string) => void;
}

export function AdvantagesAndBooking({
  onOpenWhatsApp,
}: AdvantagesAndBookingProps) {
  return (
    <>
      {/* Section 5: Keunggulan Kami */}
      <section id="keunggulan" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#087D43]">
              Komitmen Pelayanan
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#26332C] text-balance">
              Mengapa Memilih Sport Terapi Center Lubuklinggau?
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.number}
                className="p-6 rounded-2xl border border-[#26332C]/10 bg-[#F5F7F5]/60"
              >
                <span className="text-sm font-semibold text-[#087D43] tabular-nums">
                  {adv.number}.
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#26332C]">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm text-[#26332C]/75 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Alur Pemesanan */}
      <section
        id="cara-booking"
        className="py-16 sm:py-20 bg-[#F5F7F5] border-t border-b border-[#26332C]/8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#087D43]">
                Alur Reservasi
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#26332C] text-balance">
                Booking Layanan dengan Mudah
              </h2>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenWhatsApp(
                  'Halo Sport Terapi Center Lubuklinggau, saya ingin melakukan booking jadwal terapi. Mohon info slot yang tersedia.',
                  'Booking Sekarang via WhatsApp'
                )
              }
              className="min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#087D43] hover:bg-[#066335] text-white text-sm font-semibold whitespace-nowrap self-start md:self-auto transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Booking Sekarang via WhatsApp</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOOKING_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-white border border-[#26332C]/10 flex flex-col"
              >
                <span className="text-2xl font-bold text-[#087D43] tabular-nums">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-[#26332C]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#26332C]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Layanan Panggilan ke Rumah */}
      <section id="panggilan-rumah" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#087D43] via-[#0B6D3B] to-[#06522C] text-white p-8 sm:p-12 lg:p-14">
            {/* Subtle botanical line ornament */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 text-[#91C83E]/15"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M180 20C110 25 45 75 20 180C115 160 175 100 180 20Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M20 180C75 125 125 75 180 20"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>

            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[#91C83E]">
                <Home className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Layanan Panggilan Lubuklinggau &amp; Sekitarnya</span>
              </div>

              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
                Lebih Nyaman Terapi dari Rumah?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
                Tidak sempat datang langsung? Hubungi kami untuk menanyakan
                ketersediaan layanan panggilan ke rumah di wilayah Lubuklinggau
                dan sekitarnya.
              </p>

              <p className="mt-3 flex items-start gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#91C83E]" aria-hidden="true" />
                <span>
                  Ketersediaan layanan panggilan ke rumah disesuaikan dengan
                  konfirmasi lokasi alamat serta jadwal terapis terlebih dahulu.
                </span>
              </p>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() =>
                    onOpenWhatsApp(
                      'Halo Sport Terapi Center Lubuklinggau, saya ingin menanyakan ketersediaan layanan panggilan ke rumah. Lokasi saya di area Lubuklinggau.',
                      'Tanyakan Layanan Panggilan ke Rumah'
                    )
                  }
                  className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white hover:bg-[#F5F7F5] text-[#087D43] text-sm sm:text-base font-semibold whitespace-nowrap transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Tanyakan Layanan Panggilan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
