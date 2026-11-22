import { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { AdvantagesAndBooking } from './components/AdvantagesAndBooking';
import { GalleryAndTestimonials } from './components/GalleryAndTestimonials';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { WHATSAPP_CONTACTS } from './data/businessData';

const DEFAULT_WA_MESSAGE =
  'Halo Sport Terapi Center Lubuklinggau, saya ingin bertanya mengenai layanan dan jadwal terapi.';

export default function App() {
  const [waModalOpen, setWaModalOpen] = useState(false);
  const [waMessage, setWaMessage] = useState(DEFAULT_WA_MESSAGE);
  const [waTitle, setWaTitle] = useState('Pilih Nomor WhatsApp Terapis');

  const handleOpenWhatsApp = (message?: string, title?: string) => {
    setWaMessage(message || DEFAULT_WA_MESSAGE);
    setWaTitle(title || 'Pilih Nomor WhatsApp Terapis');
    setWaModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#26332C]">
      <Navbar onOpenWhatsApp={handleOpenWhatsApp} />

      <main className="flex-1">
        <Hero onOpenWhatsApp={handleOpenWhatsApp} />
        <AboutSection onOpenWhatsApp={handleOpenWhatsApp} />
        <ServicesSection onOpenWhatsApp={handleOpenWhatsApp} />
        <AdvantagesAndBooking onOpenWhatsApp={handleOpenWhatsApp} />
        <GalleryAndTestimonials onOpenWhatsApp={handleOpenWhatsApp} />
        <FaqAndContact onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      <Footer />

      {/* Desktop Floating WhatsApp Button (bottom-right) */}
      <button
        type="button"
        onClick={() =>
          handleOpenWhatsApp(
            DEFAULT_WA_MESSAGE,
            'Konsultasi via WhatsApp'
          )
        }
        aria-label="Konsultasi via WhatsApp"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#087D43] hover:bg-[#066335] text-white text-sm font-semibold shadow-lg transition-transform duration-150 hover:scale-[1.02] cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span>WhatsApp Terapis</span>
      </button>

      {/* Mobile Sticky Bottom CTA Bar (compact <= 64px, under 15% mobile viewport cap) */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#26332C]/12 px-3 py-2 flex items-center gap-2 shadow-lg"
        role="region"
        aria-label="Aksi Cepat Kontak"
      >
        <button
          type="button"
          onClick={() =>
            handleOpenWhatsApp(
              DEFAULT_WA_MESSAGE,
              'Konsultasi via WhatsApp'
            )
          }
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#087D43] hover:bg-[#066335] text-white text-sm font-semibold whitespace-nowrap cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Chat WhatsApp</span>
        </button>

        <a
          href={WHATSAPP_CONTACTS[0].telHref}
          aria-label={`Telepon ${WHATSAPP_CONTACTS[0].display}`}
          className="min-h-[44px] px-4 py-2 inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#26332C]/20 bg-white text-[#26332C] text-sm font-medium whitespace-nowrap"
        >
          <Phone className="w-4 h-4 shrink-0 text-[#087D43]" aria-hidden="true" />
          <span>Telepon</span>
        </a>
      </div>

      <WhatsAppModal
        isOpen={waModalOpen}
        message={waMessage}
        contextTitle={waTitle}
        onClose={() => setWaModalOpen(false)}
      />
    </div>
  );
}
