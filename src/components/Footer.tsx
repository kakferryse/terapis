import { BUSINESS_INFO, WHATSAPP_CONTACTS, buildWhatsAppUrl } from '../data/businessData';
import { SafeImage } from './SafeImage';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#26332C] text-white/85 pt-14 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shrink-0">
                <SafeImage
                  src={BUSINESS_INFO.logoUrl}
                  alt="Logo Rumah Terapi Sehat Syariah Lubuklinggau"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-base font-bold text-white leading-snug">
                  {BUSINESS_INFO.fullName}
                </p>
                <p className="text-xs font-medium text-[#91C83E]">
                  “{BUSINESS_INFO.tagline}”
                </p>
              </div>
            </div>

            <p className="text-sm text-white/75 leading-relaxed max-w-md">
              Menyediakan layanan pijat relaksasi, full body massage, refleksi,
              pijat tradisional, bekam, akupuntur, guasha, totok wajah, dan
              perawatan otot olahraga di Kota Lubuklinggau dengan pelayanan ramah
              dan personal.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">Navigasi</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Layanan Terapi
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">
                  Kontak &amp; Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="md:col-span-4 space-y-3 text-sm">
            <p className="font-semibold text-white">Alamat &amp; Kontak</p>
            <p className="text-white/75 leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
            <div className="space-y-1.5 pt-1">
              {WHATSAPP_CONTACTS.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <span className="text-white/60 text-xs">WA / Telp:</span>
                  <a
                    href={buildWhatsAppUrl(
                      c.intl,
                      'Halo Sport Terapi Center Lubuklinggau, saya ingin bertanya mengenai jadwal layanan.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-[#91C83E] tabular-nums transition-colors"
                  >
                    {c.display}
                  </a>
                </div>
              ))}
            </div>
            <div className="pt-2 space-y-1 text-xs text-white/70">
              <p>
                Instagram:{' '}
                <a
                  href={BUSINESS_INFO.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#91C83E] underline"
                >
                  {BUSINESS_INFO.social.instagramHandle}
                </a>
              </p>
              <p>TikTok: {BUSINESS_INFO.social.tiktokName}</p>
              <p>Facebook: {BUSINESS_INFO.social.facebookName}</p>
            </div>
          </div>
        </div>

        {/* Mandatory Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-white/65 leading-relaxed">
          <p className="p-4 rounded-xl bg-white/5 border border-white/10 text-white/80">
            <strong className="text-white">Catatan Layanan:</strong>{' '}
            {BUSINESS_INFO.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p>
              &copy; {currentYear} {BUSINESS_INFO.fullName}. Seluruh hak cipta
              dilindungi.
            </p>
            <p>Kota Lubuklinggau, Sumatera Selatan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
