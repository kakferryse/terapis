import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, MessageCircle, User } from 'lucide-react';
import {
  GALLERY_ITEMS,
  GalleryItem,
  TESTIMONIAL_SLOTS,
} from '../data/businessData';
import { SafeImage } from './SafeImage';

interface GalleryAndTestimonialsProps {
  onOpenWhatsApp: (message?: string, title?: string) => void;
}

type GalleryCategory =
  | 'Semua'
  | 'Dokumentasi Pelayanan'
  | 'Aktivitas Terapi'
  | 'Pijat dan Relaksasi'
  | 'Fasilitas dan Peralatan';

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Semua',
  'Dokumentasi Pelayanan',
  'Aktivitas Terapi',
  'Pijat dan Relaksasi',
  'Fasilitas dan Peralatan',
];

export function GalleryAndTestimonials({
  onOpenWhatsApp,
}: GalleryAndTestimonialsProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery =
    selectedCategory === 'Semua'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredGallery.length) % filteredGallery.length
    );
  }, [filteredGallery.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredGallery.length
    );
  }, [filteredGallery.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeItem: GalleryItem | null =
    lightboxIndex !== null ? filteredGallery[lightboxIndex] ?? null : null;

  return (
    <>
      {/* Section 8: Galeri Foto */}
      <section id="galeri" className="py-16 sm:py-20 bg-[#F5F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#087D43]">
                Dokumentasi &amp; Visual Layanan
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#26332C] text-balance">
                Galeri Aktivitas dan Pelayanan Kami
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#26332C]/75">
                Menampilkan materi resmi usaha serta ilustrasi suasana layanan.
                Klik gambar untuk melihat ukuran penuh.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Filter kategori galeri"
              className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#26332C]/10 self-start lg:self-auto"
            >
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setLightboxIndex(null);
                    }}
                    className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#087D43] text-white'
                        : 'text-[#26332C]/75 hover:text-[#26332C] hover:bg-[#F5F7F5]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <figure
                key={item.id}
                className="group rounded-2xl bg-white border border-[#26332C]/10 overflow-hidden flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Perbesar gambar: ${item.title}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F7F5] text-left cursor-pointer"
                >
                  <SafeImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    fallbackTitle={item.title}
                  />
                  <div className="absolute inset-0 bg-[#26332C]/0 group-hover:bg-[#26332C]/25 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-[#26332C] text-xs font-medium shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Lihat Lebih Besar</span>
                    </span>
                  </div>
                </button>
                <figcaption className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#087D43]">
                      {item.sourceLabel} · {item.category}
                    </p>
                    <h3 className="mt-1.5 text-base font-bold text-[#26332C]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#26332C]/75 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#26332C]/90 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[#26332C]/10">
              <div>
                <p className="text-xs font-medium text-[#087D43]">
                  {activeItem.sourceLabel} · {activeItem.category}
                </p>
                <h3 className="text-base font-bold text-[#26332C]">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Tutup pratinjau gambar"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-[#26332C]/70 hover:text-[#26332C] hover:bg-[#F5F7F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#26332C]/5 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <SafeImage
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                loading="eager"
              />
              {filteredGallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Gambar sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-white/90 hover:bg-white text-[#26332C] shadow-md flex items-center justify-center cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Gambar berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-white/90 hover:bg-white text-[#26332C] shadow-md flex items-center justify-center cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-5 py-3.5 bg-[#F5F7F5] text-sm text-[#26332C]/80">
              {activeItem.caption}
            </div>
          </div>
        </div>
      )}

      {/* Section 9: Testimoni Pelanggan (Honest Structured Placeholder) */}
      <section id="testimoni" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#087D43]">
                Ulasan Terverifikasi
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#26332C] text-balance">
                Apa Kata Pelanggan Kami?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#26332C]/75">
                Kami hanya menampilkan ulasan asli dengan persetujuan langsung
                dari pelanggan. Bagian ini disiapkan untuk diperbarui oleh
                pengelola seiring masuknya umpan balik pelanggan.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenWhatsApp(
                  'Halo Sport Terapi Center Lubuklinggau, saya ingin membagikan ulasan atau pengalaman setelah menggunakan layanan terapi.',
                  'Kirim Ulasan Pelanggan'
                )
              }
              className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#087D43] text-[#087D43] hover:bg-[#F5F7F5] text-sm font-semibold whitespace-nowrap self-start md:self-auto transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Bagikan Pengalaman Anda</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIAL_SLOTS.map((slot) => (
              <div
                key={slot.id}
                className="p-6 rounded-2xl border border-dashed border-[#26332C]/20 bg-[#F5F7F5]/50 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-[#087D43]">
                    {slot.serviceName}
                  </p>
                  <p className="mt-3 text-sm text-[#26332C]/75 leading-relaxed">
                    “{slot.reviewText}”
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#26332C]/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#26332C]/12 flex items-center justify-center text-[#26332C]/45 shrink-0">
                    <User className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#26332C]">
                      {slot.customerName}
                    </p>
                    <p className="text-xs text-[#26332C]/60">
                      {slot.sessionDate}
                      {slot.hasPhotoSlot ? ' · Foto opsional tersedia' : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
