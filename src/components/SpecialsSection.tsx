import { Sparkles, MessageSquareQuote, ArrowRight, Star } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';

interface SpecialsSectionProps {
  onEnquire: (dishName: string) => void;
  onExploreMenu: () => void;
}

export default function SpecialsSection({ onEnquire, onExploreMenu }: SpecialsSectionProps) {
  const heroSpecial = SIGNATURE_DISHES[0]; // Pesarattu Upma Dosa
  const secondarySpecial = SIGNATURE_DISHES[1]; // Ghee Pineapple Sheera
  const thirdSpecial = SIGNATURE_DISHES[2]; // Ghee Podi Idli
  const fourthSpecial = SIGNATURE_DISHES[5]; // South Indian Filter Coffee

  return (
    <section id="specials" className="py-16 sm:py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            CHEF'S SIGNATURE CREATIONS
          </div>
          <h2 className="font-serif-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            PANCHAMI SPECIALS
          </h2>
          <p className="text-stone-600 text-base mt-2">
            An editorial showcase of our crowd-pleasing specialties made with time-honored techniques.
          </p>
        </div>

        {/* Editorial Layout: Large Hero Box + Supporting Trio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Hero Special: Pesarattu Upma Dosa */}
          <div className="lg:col-span-7 bg-stone-900 rounded-3xl overflow-hidden shadow-xl border border-stone-800 flex flex-col justify-between group relative text-white">
            <div className="relative h-72 sm:h-96 overflow-hidden">
              <img
                src={heroSpecial.image || '/images/pesarattu-dosa.jpg'}
                alt={heroSpecial.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-amber-500 text-stone-950 shadow-md">
                  ★ FEATURED SIGNATURE
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-600 text-white shadow-md">
                  100% VEGETARIAN
                </span>
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Andhra Heritage Recipe
                </span>
                <h3 className="font-serif-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
                  {heroSpecial.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-stone-950">
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {heroSpecial.description} Crafted on heavy hot cast iron with pure whole green moong dal, ginger and cumin, then rolled with comforting savoury rava upma.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-800">
                <div>
                  <span className="text-xs text-stone-400 block uppercase tracking-wider">Indicative Pricing</span>
                  <span className="text-lg font-bold text-amber-300">{heroSpecial.priceNote}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onEnquire(heroSpecial.name)}
                    className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <MessageSquareQuote className="w-4 h-4" />
                    <span>ENQUIRE DISH</span>
                  </button>
                  <button
                    onClick={onExploreMenu}
                    className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs tracking-wider transition-colors cursor-pointer"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stack: Sheera, Podi Idli, Filter Coffee */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Ghee Pineapple Sheera Card */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-all flex gap-4 items-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 relative">
                <img
                  src={secondarySpecial.image || '/images/sheera.jpg'}
                  alt={secondarySpecial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute bottom-1 right-1 text-[9px] bg-black/70 text-white px-1.5 py-0.5 rounded font-bold">
                  Real Photo
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">VEG</span>
                  <span className="text-xs font-bold text-amber-800">{secondarySpecial.priceNote}</span>
                </div>
                <h4 className="font-serif-heading font-extrabold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                  {secondarySpecial.name}
                </h4>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                  Semolina roasted in pure desi ghee with real pineapple bits and cardamom.
                </p>
                <button
                  onClick={() => onEnquire(secondarySpecial.name)}
                  className="mt-2 text-xs font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire dish</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Ghee Podi Idli Card */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-all flex gap-4 items-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                <img
                  src={thirdSpecial.image || '/images/podi-idli.jpg'}
                  alt={thirdSpecial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">VEG</span>
                  <span className="text-xs font-bold text-amber-800">{thirdSpecial.priceNote}</span>
                </div>
                <h4 className="font-serif-heading font-extrabold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                  {thirdSpecial.name}
                </h4>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                  Steamed idlis tossed with rich warm desi ghee and authentic spicy gunpowder.
                </p>
                <button
                  onClick={() => onEnquire(thirdSpecial.name)}
                  className="mt-2 text-xs font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire dish</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* South Indian Filter Coffee Card */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-all flex gap-4 items-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                <img
                  src={fourthSpecial.image || '/images/filter-coffee.jpg'}
                  alt={fourthSpecial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">DEGREE BREW</span>
                  <span className="text-xs font-bold text-stone-800">{fourthSpecial.priceNote}</span>
                </div>
                <h4 className="font-serif-heading font-extrabold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                  {fourthSpecial.name}
                </h4>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                  Authentic chicory-infused decoction frothed with hot creamy milk in brass dabara.
                </p>
                <button
                  onClick={() => onEnquire(fourthSpecial.name)}
                  className="mt-2 text-xs font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire beverage</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
