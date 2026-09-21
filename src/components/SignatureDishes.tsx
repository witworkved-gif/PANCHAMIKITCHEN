import { useState } from 'react';
import { Leaf, ArrowRight, MessageSquareQuote, Sparkles } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { MenuItem } from '../types';

interface SignatureDishesProps {
  onViewMenu: () => void;
  onDishEnquire: (dishName: string) => void;
}

export default function SignatureDishes({ onViewMenu, onDishEnquire }: SignatureDishesProps) {
  const [filterCuisine, setFilterCuisine] = useState<string>('All');

  const filteredDishes = filterCuisine === 'All'
    ? SIGNATURE_DISHES
    : SIGNATURE_DISHES.filter((d) => d.cuisine === filterCuisine);

  return (
    <section id="specialties" className="py-16 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              SIGNATURE SPECIALTIES
            </div>
            <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
              WHAT TO TRY
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mt-2">
              Our most celebrated pure-vegetarian recipes. Prepared fresh to order with traditional stone-ground batters, pure cow ghee, and fragrant spices.
            </p>
          </div>

          {/* Quick Cuisine Filter Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {['All', 'South Indian', 'Andhra', 'Telangana'].map((c) => (
              <button
                key={c}
                onClick={() => setFilterCuisine(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  filterCuisine === c
                    ? 'bg-amber-800 text-amber-50 shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {c === 'All' ? 'All Dishes' : c}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDishes.map((dish: MenuItem) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-stone-200 flex flex-col group"
            >
              {/* Image container */}
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src={dish.image || '/images/idli-vada.jpg'}
                  alt={`${dish.name} - Panchami Kitchen Idli Street`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Pure Veg Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-extrabold text-emerald-800 shadow-xs border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 ring-2 ring-emerald-300"></span>
                  PURE VEG
                </div>

                {/* Regional tag */}
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-900/90 text-amber-50 backdrop-blur-xs">
                  {dish.cuisine}
                </span>

                {dish.regionalName && (
                  <div className="absolute bottom-2 left-3 px-2 py-0.5 rounded bg-black/60 text-white text-[11px] font-medium backdrop-blur-xs">
                    {dish.regionalName}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif-heading font-extrabold text-lg sm:text-xl text-stone-900 group-hover:text-amber-800 transition-colors">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {dish.description}
                  </p>

                  {dish.servingInfo && (
                    <div className="text-[11px] text-amber-900/80 bg-amber-50/80 px-2.5 py-1 rounded-md mb-4 border border-amber-200/50">
                      💡 {dish.servingInfo}
                    </div>
                  )}
                </div>

                <div>
                  {/* Price note */}
                  <div className="flex items-center justify-between py-2 border-t border-stone-150 mb-3">
                    <span className="text-xs font-semibold text-stone-500">Price details:</span>
                    <span className="text-xs font-bold text-amber-900 bg-amber-100/60 px-2 py-0.5 rounded">
                      {dish.priceNote}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={onViewMenu}
                      className="w-full py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs text-center transition-colors cursor-pointer flex items-center justify-center gap-1"
                    >
                      <span>VIEW MENU</span>
                      <ArrowRight className="w-3 h-3 text-stone-600" />
                    </button>

                    <button
                      onClick={() => onDishEnquire(dish.name)}
                      className="w-full py-2 px-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs text-center transition-colors shadow-xs active:scale-95 cursor-pointer flex items-center justify-center gap-1"
                    >
                      <MessageSquareQuote className="w-3 h-3" />
                      <span>ENQUIRE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-4 rounded-xl bg-amber-50 border border-amber-200 text-center max-w-2xl mx-auto text-xs text-amber-900 font-medium">
          Note: Authentic ingredients are sourced fresh daily. Prices and seasonal availability may vary slightly. Please feel free to enquire with our counter staff.
        </div>
      </div>
    </section>
  );
}
