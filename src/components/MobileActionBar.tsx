import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export default function MobileActionBar() {
  return (
    <div
      id="mobile-sticky-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 sm:hidden shadow-lg"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          id="mobile-bar-call"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-800 text-white active:bg-amber-900 transition-colors shadow-xs"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-wider uppercase">CALL NOW</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-whatsapp"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 text-white active:bg-emerald-800 transition-colors shadow-xs"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-wider uppercase">WHATSAPP</span>
        </a>

        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-directions"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-100 text-stone-900 border border-stone-300 active:bg-stone-200 transition-colors shadow-xs"
        >
          <Navigation className="w-4 h-4 text-amber-800 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-wider uppercase">DIRECTIONS</span>
        </a>
      </div>
    </div>
  );
}
