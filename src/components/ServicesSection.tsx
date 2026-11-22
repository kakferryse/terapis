import { useState } from 'react';
import {
  Sparkles,
  Hand,
  Flame,
  Smile,
  Activity,
  Feather,
  Target,
  ShieldCheck,
  Heart,
  Compass,
  MessageCircle,
  Info,
} from 'lucide-react';
import {
  THERAPY_SERVICES,
  TherapyService,
  getServiceInquiryMessage,
} from '../data/businessData';
import { SafeImage } from './SafeImage';

interface ServicesSectionProps {
  onOpenWhatsApp: (message?: string, title?: string) => void;
}

type CategoryFilter =
  | 'Semua'
  | 'Pijat & Relaksasi'
  | 'Terapi Tradisional'
  | 'Kebugaran & Otot';

const CATEGORIES: CategoryFilter[] = [
  'Semua',
  'Pijat & Relaksasi',
  'Terapi Tradisional',
  'Kebugaran & Otot',
];

function ServiceIcon({ iconKey }: { iconKey: TherapyService['iconKey'] }) {
  const cls = 'w-5 h-5 text-[#087D43] shrink-0';
  switch (iconKey) {
    case 'sparkles':
      return <Sparkles className={cls} aria-hidden="true" />;
    case 'hand':
      return <Hand className={cls} aria-hidden="true" />;
    case 'flame':
      return <Flame className={cls} aria-hidden="true" />;
    case 'smile':
      return <Smile className={cls} aria-hidden="true" />;
    case 'activity':
      return <Activity className={cls} aria-hidden="true" />;
    case 'feather':
      return <Feather className={cls} aria-hidden="true" />;
    case 'target':
      return <Target className={cls} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={cls} aria-hidden="true" />;
    case 'heart':
      return <Heart className={cls} aria-hidden="true" />;
    case 'compass':
      return <Compass className={cls} aria-hidden="true" />;
  }
}

export function ServicesSection({ onOpenWhatsApp }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Semua');

  const filteredServices =
    activeCategory === 'Semua'
      ? THERAPY_SERVICES
      : THERAPY_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="layanan" className="py-16 sm:py-20 bg-[#F5F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#087D43]">
              Layanan Terapi Lubuklinggau
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#26332C] text-balance">
              Pilihan Layanan Kami
            </h2>
            <p className="mt-3 text-base text-[#26332C]/75">
              Temukan layanan perawatan dan terapi yang sesuai dengan kebutuhan
              Anda.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter kategori layanan"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#26332C]/10 self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#087D43] text-white'
                      : 'text-[#26332C]/75 hover:text-[#26332C] hover:bg-[#F5F7F5]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl bg-white border border-[#26332C]/10 overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F7F5] relative">
                <SafeImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                  fallbackTitle={service.name}
                />
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <p className="text-xs font-medium text-[#4E963F]">
                  {service.category} · Ilustrasi Layanan
                </p>

                <div className="mt-2 flex items-start gap-2.5">
                  <div className="mt-0.5">
                    <ServiceIcon iconKey={service.iconKey} />
                  </div>
                  <h3 className="text-lg font-bold text-[#26332C] leading-snug">
                    {service.name}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-[#26332C]/80 leading-relaxed flex-1">
                  {service.description}
                </p>

                {service.note && (
                  <div className="mt-4 pt-3 border-t border-[#26332C]/8 flex items-start gap-2 text-xs text-[#26332C]/70 leading-relaxed">
                    <Info
                      className="w-4 h-4 text-[#087D43] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{service.note}</span>
                  </div>
                )}

                <div className="mt-5 pt-4 border-t border-[#26332C]/8">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenWhatsApp(
                        getServiceInquiryMessage(service.name),
                        `Tanyakan ${service.name}`
                      )
                    }
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#087D43] hover:bg-[#066335] text-white text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Tanyakan Layanan Ini</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Responsible Health Notice */}
        <p className="mt-8 text-xs sm:text-sm text-[#26332C]/70 text-center max-w-3xl mx-auto leading-relaxed">
          Informasi tarif, durasi sesi, dan kecocokan terapi dengan kondisi
          kesehatan Anda akan dijelaskan langsung oleh terapis sebelum sesi
          dimulai.
        </p>
      </div>
    </section>
  );
}
