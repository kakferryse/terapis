import { useState, FormEvent } from 'react';
import {
  ChevronDown,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import {
  FAQ_ITEMS,
  BUSINESS_INFO,
  WHATSAPP_CONTACTS,
  THERAPY_SERVICES,
  buildWhatsAppUrl,
} from '../data/businessData';

interface FaqAndContactProps {
  onOpenWhatsApp: (message?: string, title?: string) => void;
}

export function FaqAndContact({ onOpenWhatsApp }: FaqAndContactProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Question form state
  const [customerName, setCustomerName] = useState('');
  const [selectedService, setSelectedService] = useState(
    THERAPY_SERVICES[0].name
  );
  const [visitType, setVisitType] = useState<'Datang ke Tempat' | 'Tanya Panggilan ke Rumah'>(
    'Datang ke Tempat'
  );
  const [messageText, setMessageText] = useState('');
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyText = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // Clipboard API unavailable in restricted context
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = customerName.trim();
    if (!trimmedName) {
      setFormError('Mohon isi nama Anda terlebih dahulu.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);

    const extraNote = messageText.trim()
      ? `\nCatatan singkat: ${messageText.trim()}`
      : '';

    const fullMsg = `Halo Sport Terapi Center Lubuklinggau, saya ${trimmedName}. Saya tertarik dengan layanan ${selectedService} (${visitType}). Mohon informasi jadwal dan detail layanan.${extraNote}`;

    onOpenWhatsApp(fullMsg, 'Kirim Pertanyaan via WhatsApp');
  };

  return (
    <>
      {/* Section 10: FAQ */}
      <section
        id="faq"
        className="py-16 sm:py-20 bg-[#F5F7F5] border-t border-[#26332C]/8"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-[#087D43]">
              Informasi Pelanggan
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#26332C] text-balance">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white border border-[#26332C]/10 overflow-hidden"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-panel`}
                      onClick={() =>
                        setOpenFaqId((prev) => (prev === item.id ? null : item.id))
                      }
                      className="w-full min-h-[56px] px-6 py-4 flex items-center justify-between gap-4 text-left font-semibold text-base text-[#26332C] hover:bg-[#F5F7F5]/60 transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#087D43] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={`${item.id}-panel`}
                      className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#26332C]/80 leading-relaxed border-t border-[#26332C]/8"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 11: Lokasi, Kontak & Formulir Pertanyaan */}
      <section id="kontak" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#087D43]">
              Lokasi &amp; Reservasi
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#26332C] text-balance">
              Kunjungi atau Hubungi Kami
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Business Address, Contacts, Socials, Map Link */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F7F5] border border-[#26332C]/10 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#26332C]">
                    {BUSINESS_INFO.fullName}
                  </h3>
                  <p className="mt-1 text-sm text-[#26332C]/70">
                    Pengelola &amp; Terapis: {BUSINESS_INFO.owner}
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-5 h-5 text-[#087D43] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#26332C]">
                      Alamat Lengkap
                    </p>
                    <p className="mt-1 text-sm text-[#26332C]/80 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#087D43] hover:underline"
                    >
                      <span>Cari Lokasi di Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <p className="mt-1 text-xs text-[#26332C]/60">
                      Tautan menuju pencarian alamat jalan. Peta sematan (embed)
                      dengan titik koordinat tepat dapat ditambahkan pengelola.
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Click-to-Call */}
                <div className="pt-4 border-t border-[#26332C]/10 space-y-3">
                  <p className="text-sm font-semibold text-[#26332C]">
                    Kontak WhatsApp &amp; Telepon Resmi
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {WHATSAPP_CONTACTS.map((contact) => (
                      <div
                        key={contact.id}
                        className="p-4 rounded-xl bg-white border border-[#26332C]/10 flex flex-col justify-between gap-3"
                      >
                        <div>
                          <p className="text-xs text-[#26332C]/65">
                            {contact.label}
                          </p>
                          <p className="mt-0.5 text-base font-bold text-[#26332C] tabular-nums">
                            {contact.display}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={buildWhatsAppUrl(
                              contact.intl,
                              'Halo Sport Terapi Center Lubuklinggau, saya ingin bertanya tentang layanan dan jadwal.'
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#087D43] hover:bg-[#066335] text-white text-xs font-semibold whitespace-nowrap transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>WhatsApp</span>
                          </a>
                          <a
                            href={contact.telHref}
                            aria-label={`Telepon ${contact.display}`}
                            className="min-h-[40px] px-3 py-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#26332C]/15 text-[#26332C] hover:bg-[#F5F7F5] text-xs font-medium whitespace-nowrap transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Telepon</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operational Hours Placeholder */}
                <div className="pt-4 border-t border-[#26332C]/10 flex items-start gap-3.5">
                  <Clock
                    className="w-5 h-5 text-[#087D43] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#26332C]">
                      Jam Operasional
                    </p>
                    <p className="mt-1 text-sm text-[#26332C]/75">
                      Jadwal operasional belum ditetapkan secara tetap. Silakan
                      hubungi WhatsApp kami terlebih dahulu untuk konfirmasi
                      jadwal kunjungan atau panggilan.
                    </p>
                  </div>
                </div>

                {/* Social Profiles (only real URLs linked; TikTok & FB safely copyable) */}
                <div className="pt-4 border-t border-[#26332C]/10 space-y-2.5">
                  <p className="text-sm font-semibold text-[#26332C]">
                    Media Sosial Resmi
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#26332C]/75">Instagram:</span>
                      <a
                        href={BUSINESS_INFO.social.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-[#087D43] hover:underline"
                      >
                        <span>{BUSINESS_INFO.social.instagramHandle}</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#26332C]/75">TikTok:</span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyText('tiktok', BUSINESS_INFO.social.tiktokName)
                        }
                        className="inline-flex items-center gap-1.5 font-medium text-[#26332C] hover:text-[#087D43] cursor-pointer"
                        title="Salin nama akun TikTok"
                      >
                        <span>{BUSINESS_INFO.social.tiktokName}</span>
                        {copiedKey === 'tiktok' ? (
                          <Check className="w-3.5 h-3.5 text-[#087D43]" aria-hidden="true" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-[#26332C]/45" aria-hidden="true" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#26332C]/75">Facebook:</span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyText('fb', BUSINESS_INFO.social.facebookName)
                        }
                        className="inline-flex items-center gap-1.5 font-medium text-[#26332C] hover:text-[#087D43] cursor-pointer"
                        title="Salin nama halaman Facebook"
                      >
                        <span>{BUSINESS_INFO.social.facebookName}</span>
                        {copiedKey === 'fb' ? (
                          <Check className="w-3.5 h-3.5 text-[#087D43]" aria-hidden="true" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-[#26332C]/45" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Optional WhatsApp Question Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleFormSubmit}
                noValidate
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#26332C]/12 space-y-5"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#26332C]">
                    Formulir Pertanyaan Singkat
                  </h3>
                  <p className="mt-1 text-sm text-[#26332C]/75">
                    Isi formulir ini untuk menyusun pesan pertanyaan otomatis ke
                    WhatsApp terapis kami.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#26332C]"
                  >
                    Nama Anda
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (formError) setFormError('');
                    }}
                    placeholder="Contoh: Budi Santoso"
                    className="mt-1.5 w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#26332C]/20 bg-white text-sm text-[#26332C] placeholder:text-[#26332C]/45 focus:border-[#087D43] focus:outline-none"
                  />
                  {formError && (
                    <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                      {formError}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-[#26332C]"
                  >
                    Layanan yang Diminati
                  </label>
                  <select
                    id="contact-service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="mt-1.5 w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#26332C]/20 bg-white text-sm text-[#26332C] focus:border-[#087D43] focus:outline-none"
                  >
                    <option value="Konsultasi Umum Layanan Terapi">
                      Konsultasi Umum Layanan Terapi
                    </option>
                    {THERAPY_SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.name}>
                        {svc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-sm font-medium text-[#26332C]">
                    Pilihan Kunjungan
                  </span>
                  <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(
                      ['Datang ke Tempat', 'Tanya Panggilan ke Rumah'] as const
                    ).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setVisitType(option)}
                        className={`min-h-[44px] px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors cursor-pointer ${
                          visitType === option
                            ? 'border-[#087D43] bg-[#087D43]/8 text-[#087D43]'
                            : 'border-[#26332C]/15 bg-white text-[#26332C]/75 hover:bg-[#F5F7F5]'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#26332C]"
                  >
                    Pesan atau Pertanyaan (Opsional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Contoh: Ingin tanya jadwal hari Sabtu sore atau area panggilan di sekitar Lubuklinggau Selatan II."
                    className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-[#26332C]/20 bg-white text-sm text-[#26332C] placeholder:text-[#26332C]/45 focus:border-[#087D43] focus:outline-none resize-y"
                  />
                  <p className="mt-1.5 text-xs text-[#26332C]/60">
                    Demi privasi Anda, cukup sampaikan kebutuhan jadwal atau
                    pertanyaan umum tanpa menuliskan detail rekam medis sensitif.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#087D43] hover:bg-[#066335] text-white text-sm sm:text-base font-semibold whitespace-nowrap transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Kirim Pertanyaan via WhatsApp</span>
                </button>

                {formSubmitted && !formError && (
                  <p className="text-xs font-medium text-[#087D43]">
                    Pesan Anda telah disiapkan. Silakan pilih nomor WhatsApp tujuan
                    pada jendela yang terbuka.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
