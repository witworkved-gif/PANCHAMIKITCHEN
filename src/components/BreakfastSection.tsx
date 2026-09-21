import { Clock, Coffee, Sparkles, ArrowRight, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface BreakfastSectionProps {
  onExploreBreakfast: () => void;
}

export default function BreakfastSection({ onExploreBreakfast }: BreakfastSectionProps) {
  const breakfastItems = [
    {
      name: 'Ghee Podi Idli',
      desc: 'Soft idlis tossed in pure desi ghee and fiery karam podi gunpowder.',
      img: '/images/podi-idli.jpg',
      tag: 'Customer Favorite'
    },
    {
      name: 'Medu Vada',
      desc: 'Fluffy inside, deep golden crisp outside with coconut chutney & hot sambar.',
      img: '/images/medu-vada.jpg',
      tag: 'Fresh Batches'
    },
    {
      name: 'Crispy Dosas',
      desc: 'Cast iron griddle roasted plain, masala, butter and ghee dosas.',
      img: '/images/dosa-crispy.jpg',
      tag: 'Crisp & Hot'
    },
    {
      name: 'Pesarattu Upma Dosa',
      desc: 'Whole green moong dal crepe wrapped around comforting upma.',
      img: '/images/pesarattu-dosa.jpg',
      tag: 'Andhra Special'
    },
    {
      name: 'Rava Upma',
      desc: 'Fluffy roasted semolina with mustard, ginger, green chillies & cashews.',
      img: '/images/upma.jpg',
      tag: 'Comfort Morning'
    },
    {
      name: 'Ghee Pineapple Sheera',
      desc: 'Rich sweet halwa with golden ghee, saffron and fresh pineapple chunks.',
      img: '/images/sheera.jpg',
      tag: 'Sweet Delight'
    },
    {
      name: 'South Indian Filter Coffee',
      desc: 'Traditional degree decoction coffee served steaming in a brass dabara.',
      img: '/images/filter-coffee.jpg',
      tag: 'Must-Have Finish'
    }
  ];

  return (
    <section id="breakfast" className="py-16 sm:py-20 bg-gradient-to-b from-amber-50/70 to-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200/80 text-amber-950 border border-amber-300 mb-3">
              <Clock className="w-3.5 h-3.5 text-amber-800" />
              BREAKFAST HOURS: 7:30 AM – 12:00 PM
            </div>
            <h2 className="font-serif-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
              START YOUR DAY THE <span className="text-amber-800">SOUTH INDIAN WAY.</span>
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mt-3">
              Nothing beats the aroma of freshly steamed idlis, crackling hot vadas, and chicory-brewed filter coffee to kickstart a productive morning in Solapur.
            </p>
          </div>

          <button
            onClick={onExploreBreakfast}
            id="breakfast-explore-btn"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
          >
            <span>EXPLORE BREAKFAST</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Highlight Grid & Featured Combo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Breakfast Combo Banner Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 rounded-3xl p-6 sm:p-8 text-amber-50 shadow-xl border-2 border-amber-700/50 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-amber-500/20 blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-stone-950 uppercase tracking-wider">
                  Special Value
                </span>
                <Coffee className="w-6 h-6 text-amber-300" />
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                BREAKFAST COMBOS
              </h3>
              
              <div className="my-4 pb-4 border-b border-amber-700/60">
                <span className="text-xs uppercase text-amber-300 font-semibold block tracking-wider">
                  Starting around
                </span>
                <span className="text-4xl sm:text-5xl font-black text-amber-200">
                  ₹99
                </span>
                <span className="text-xs text-amber-200/80 block mt-1">
                  Availability and pricing may vary.
                </span>
              </div>

              <p className="text-sm text-amber-100/90 leading-relaxed mb-6">
                Wholesome combinations featuring warm steamed idlis, a crispy medu vada, fresh coconut chutney, authentic drumstick sambar, and an aromatic cup of filter coffee.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-100">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>2 Steamed Idlis + 1 Crisp Medu Vada</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-100">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Fresh daily coconut & tomato chutneys</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-100">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Piping hot aromatic vegetable sambar</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-100">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pairable with our piping Degree Coffee</span>
                </div>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-sm text-center transition-all shadow-md active:scale-95 block"
            >
              ORDER BREAKFAST: {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Breakfast Dish Showcase Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {breakfastItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative h-36 overflow-hidden bg-stone-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-black/65 text-white backdrop-blur-xs">
                    {item.tag}
                  </span>
                </div>
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif-heading font-extrabold text-base text-stone-900 group-hover:text-amber-800 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      100% PURE VEG
                    </span>
                    <span className="text-xs font-semibold text-amber-800">Fresh Today</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
