import { useEffect } from 'react';
import { X, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import {
  WHATSAPP_CONTACTS,
  BUSINESS_INFO,
  buildWhatsAppUrl,
} from '../data/businessData';

interface WhatsAppModalProps {
  isOpen: boolean;
  message: string;
  contextTitle?: string;
  onClose: () => void;
}

export function WhatsAppModal({
  isOpen,
  message,
  contextTitle,
  onClose,
}: WhatsAppModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#26332C]/50 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-xl border border-[#087D43]/15 p-6 transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#26332C]/10">
          <div>
            <p className="text-xs font-medium text-[#087D43]">
              {BUSINESS_INFO.shortName} · {BUSINESS_INFO.owner}
            </p>
            <h3
              id="wa-modal-title"
              className="mt-1 text-lg font-semibold text-[#26332C]"
            >
              {contextTitle || 'Pilih Nomor WhatsApp Terapis'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pilihan kontak WhatsApp"
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-[#26332C]/70 hover:text-[#26332C] hover:bg-[#F5F7F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-[#26332C]/65 mb-2">
            Pesan otomatis yang akan dikirim:
          </p>
          <div className="rounded-xl bg-[#F5F7F5] border border-[#26332C]/10 p-3.5 text-sm text-[#26332C] leading-relaxed">
            “{message}”
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {WHATSAPP_CONTACTS.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-[#26332C]/12 p-3.5 hover:border-[#087D43]/40 transition-colors"
            >
              <div>
                <p className="text-xs text-[#26332C]/65">{contact.label}</p>
                <p className="text-base font-semibold text-[#26332C] tabular-nums">
                  {contact.display}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={contact.telHref}
                  aria-label={`Telepon ${contact.display}`}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-[#26332C]/15 text-[#26332C] hover:bg-[#F5F7F5] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={buildWhatsAppUrl(contact.intl, message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#087D43] hover:bg-[#066335] text-white text-sm font-medium whitespace-nowrap transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Chat WA</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-[#26332C]/60 leading-relaxed">
          Anda akan diarahkan ke aplikasi WhatsApp resmi. Mohon konfirmasi
          ketersediaan jadwal dan area layanan bersama terapis.
        </p>
      </div>
    </div>
  );
}
