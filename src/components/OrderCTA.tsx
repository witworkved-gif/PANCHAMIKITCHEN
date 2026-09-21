import { Phone, MapPin, UtensilsCrossed, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface OrderCTAProps {
  onViewMenu: () => void;
  onOpenEnquiry: () => void;
}

export default function OrderCTA({ onViewMenu, onOpenEnquiry }: OrderCTAProps) {
  return (
    <section id="order-cta" className="relative py-16 sm:py-20 bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-kolam-pattern pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-400 text-stone-950 mb-4 shadow-sm">
          Pure Vegetarian • Fresh Daily
        </span>

        <h2 className="font-serif-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
          GOOD FOOD IS JUST A VISIT AWAY.
        </h2>

        <p className="text-amber-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Craving authentic South Indian breakfast, spicy Andhra Pesarattu, or comforting Telangana Pappu Buvva? Walk in anytime or call ahead for quick takeaway.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="cta-call-now-btn"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-stone-950" />
            <span>CALL NOW ({BUSINESS_INFO.phone})</span>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-get-directions-btn"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-stone-900 font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-800" />
            <span>GET DIRECTIONS</span>
          </a>

          <button
            onClick={onViewMenu}
            id="cta-view-menu-btn"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 text-amber-100 font-bold text-sm uppercase tracking-wider border border-amber-400/40 transition-all cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-300" />
            <span>VIEW MENU</span>
          </button>
        </div>

        <p className="text-xs text-amber-200/70 mt-6 font-medium">
          Dine-In • Takeaway • Curbside Pickup available. Home delivery is not supported.
        </p>
      </div>
    </section>
  );
}
