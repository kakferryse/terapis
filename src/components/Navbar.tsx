import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { SafeImage } from './SafeImage';

interface NavbarProps {
  onOpenWhatsApp: (message?: string, title?: string) => void;
}

const NAV_LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#tentang-kami', label: 'Tentang Kami' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontak', label: 'Kontak' },
];

export function Navbar({ onOpenWhatsApp }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#087D43]/12 shadow-xs'
          : 'bg-white/90 backdrop-blur-xs border-b border-[#26332C]/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Brand lockup (single-line, no subtitle or badge clutter) */}
        <a
          href="#beranda"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:rounded-lg"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#087D43]/15 bg-white shrink-0">
            <SafeImage
              src={BUSINESS_INFO.logoUrl}
              alt="Logo Rumah Terapi Sehat Syariah dan Sport Terapi Center Lubuklinggau"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <span className="font-semibold text-base sm:text-lg tracking-tight text-[#26332C] whitespace-nowrap shrink-0">
            {BUSINESS_INFO.shortName}
          </span>
        </a>

        {/* Zone 2: Clean single-line text links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#26332C]/80"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#087D43] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-[#087D43] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() =>
              onOpenWhatsApp(
                'Halo Sport Terapi Center Lubuklinggau, saya ingin konsultasi dan menanyakan jadwal layanan terapi.',
                'Konsultasi via WhatsApp'
              )
            }
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#087D43] hover:bg-[#066335] text-white text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Konsultasi via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="lg:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg border border-[#26332C]/12 text-[#26332C] hover:bg-[#F5F7F5] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-[#26332C]/10 bg-white px-4 py-4 space-y-1 shadow-lg"
        >
          <nav aria-label="Navigasi Seluler" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="min-h-[44px] flex items-center px-3 rounded-lg text-sm font-medium text-[#26332C] hover:bg-[#F5F7F5] hover:text-[#087D43] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#26332C]/10">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenWhatsApp(
                  'Halo Sport Terapi Center Lubuklinggau, saya ingin konsultasi dan menanyakan jadwal layanan terapi.',
                  'Konsultasi via WhatsApp'
                );
              }}
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#087D43] hover:bg-[#066335] text-white text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Konsultasi via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
