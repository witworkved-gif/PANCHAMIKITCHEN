import { useState } from 'react';
import { Search, Sparkles, MessageSquareQuote, ShieldCheck, Flame } from 'lucide-react';
import { FULL_MENU } from '../data/restaurantData';
import { MenuCategoryType, MenuItem } from '../types';

interface MenuSectionProps {
  selectedCategory: MenuCategoryType;
  onSelectCategory: (cat: MenuCategoryType) => void;
  onDishEnquire: (dishName: string) => void;
}

const CATEGORIES: MenuCategoryType[] = [
  'BREAKFAST',
  'IDLI & VADA',
  'DOSA',
  'UPMA & SPECIALS',
  'ANDHRA',
  'TELANGANA',
  'MEALS / THALI',
  'BEVERAGES'
];

export default function MenuSection({
  selectedCategory,
  onSelectCategory,
  onDishEnquire
}: MenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items
  const filteredMenu = FULL_MENU.filter((item: MenuItem) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cuisine.toLowerCase().includes(searchQuery.toLowerCase());

    if (searchQuery.trim() !== '') {
      return matchesSearch;
    }

    if (selectedCategory === 'BREAKFAST') {
      return item.category === 'BREAKFAST' || item.isBreakfastSpecial || item.category === 'IDLI & VADA';
    }

    return item.category === selectedCategory;
  });

  return (
    <section id="menu" className="py-16 sm:py-20 bg-stone-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            FRESH HOMESTYLE PREPARATION
          </div>
          <h2 className="font-serif-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            OUR COMPLETE MENU
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Pure vegetarian South Indian, Andhra and Telangana specialties. All prices and availability are indicative and may vary with seasonal availability.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Idli, Pesarattu, Coffee, Sheera)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none justify-start md:justify-center">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat && !searchQuery;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSearchQuery('');
                  onSelectCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'bg-amber-800 text-amber-50 shadow-md scale-102'
                    : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredMenu.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 max-w-md mx-auto">
            <p className="text-stone-500 text-sm font-medium">No dishes found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-bold text-amber-800 underline"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredMenu.map((dish: MenuItem) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start gap-4">
                  {/* Dish Thumbnail */}
                  {dish.image && (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-200">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 ring-2 ring-emerald-300 flex-shrink-0" title="100% Pure Vegetarian"></span>
                          <h3 className="font-serif-heading font-extrabold text-base sm:text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                            {dish.name}
                          </h3>
                        </div>
                        {dish.regionalName && (
                          <span className="text-[11px] text-stone-500 font-medium ml-4 block">
                            {dish.regionalName}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-bold text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded flex-shrink-0">
                        {dish.cuisine}
                      </span>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider block">
                      Pricing:
                    </span>
                    <span className="text-xs font-bold text-stone-900">
                      {dish.priceNote}
                    </span>
                  </div>

                  <button
                    onClick={() => onDishEnquire(dish.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 transition-colors cursor-pointer"
                  >
                    <MessageSquareQuote className="w-3.5 h-3.5 text-amber-700" />
                    <span>ENQUIRE</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing Policy Disclaimer */}
        <div className="mt-10 text-center text-xs text-stone-500 max-w-xl mx-auto">
          * Typical dining budget: ₹1 – ₹200 per person. Breakfast combos start around ₹99. Taxes and takeaway packing charges may apply where applicable.
        </div>
      </div>
    </section>
  );
}
