import { Phone, MapPin, ArrowRight, UtensilsCrossed, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export default function Hero({ onExploreMenu, onVisitUs }: HeroProps) {
  return (
    <section id="home" className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#FAF6F0]">
      {/* Background visual atmosphere with subtle warm overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-kolam-pattern"></div>
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                100% VEGETARIAN
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                SOUTH INDIAN • ANDHRA • TELANGANA
              </span>
            </div>

            {/* Supporting eyebrow heading */}
            <p className="text-amber-800 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-amber-700 inline-block"></span>
              From Idli Street to your table.
            </p>

            {/* Main Heading */}
            <h1 className="font-serif-heading font-black text-3xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.1] tracking-tight mb-5">
              AUTHENTIC SOUTH INDIAN FLAVOURS,{' '}
              <span className="text-amber-800 block sm:inline">SERVED WITH HEART.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed max-w-2xl mb-8">
              Experience authentic South Indian, Andhra and Telangana home-style cuisine in the heart of Solapur. Steaming soft idlis, crispy dosas, spiced pesarattu, and aromatic filter coffee prepared with pure tradition.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={onExploreMenu}
                id="hero-explore-menu-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-amber-50 font-bold text-base shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
              >
                <UtensilsCrossed className="w-5 h-5" />
                <span>EXPLORE OUR MENU</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onVisitUs}
                id="hero-visit-us-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-900 font-bold text-base border-2 border-stone-300 hover:border-amber-800 transition-all cursor-pointer shadow-xs"
              >
                <MapPin className="w-5 h-5 text-amber-800" />
                <span>VISIT US</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="hero-call-now-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-sm border border-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-800" />
                <span>CALL {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Supporting Micro Info */}
            <div className="pt-4 border-t border-stone-300/70 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-stone-600">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                Breakfast • Lunch • Dinner
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Dine-In • Takeaway • Curbside Pickup
              </span>
              <span className="flex items-center gap-1.5 text-stone-800">
                <MapPin className="w-3.5 h-3.5 text-amber-800" />
                Solapur, Maharashtra
              </span>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Food Feature Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/pesarattu-dosa.jpg"
                  alt="Fresh Pesarattu Dosa with Chutneys and Sambar at Panchami Kitchen Idli Street"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/90 text-stone-950 mb-1">
                    Authentic House Specialty
                  </span>
                  <h3 className="font-serif-heading text-xl font-bold text-white">Pesarattu Upma Dosa</h3>
                  <p className="text-xs text-stone-200 mt-0.5">Whole green moong dal crepe with spicy allam chutney & fresh coconut dips</p>
                </div>
              </div>

              {/* Floating Dessert Badge Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-3 shadow-xl border border-stone-200 max-w-[200px] flex items-center gap-3">
                <img
                  src="/images/sheera.jpg"
                  alt="Ghee Pineapple Sheera at Panchami Kitchen"
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">Real Photo</span>
                  <span className="text-xs font-extrabold text-stone-900 block leading-tight">Ghee Pineapple Sheera</span>
                </div>
              </div>

              {/* Rating Stamp */}
              <div className="absolute -top-4 -right-4 bg-amber-900 text-amber-50 rounded-xl px-4 py-2.5 shadow-lg border-2 border-amber-200 text-center">
                <div className="text-lg font-black leading-none text-amber-300">★ 5.0</div>
                <div className="text-[10px] font-semibold text-amber-100 uppercase tracking-wider mt-0.5">Justdial Rating</div>
                <div className="text-[9px] text-amber-200/80">308 Verified Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
