import { Utensils, Flame, Sparkles, ArrowUpRight } from 'lucide-react';

interface CuisineSectionProps {
  onSelectCategory: (category: string) => void;
}

export default function CuisineSection({ onSelectCategory }: CuisineSectionProps) {
  const cuisines = [
    {
      id: 'south-indian',
      name: 'SOUTH INDIAN',
      tagline: 'Classic Morning & All-Day Staples',
      description: 'Classic South Indian favourites prepared with familiar flavours and traditional combinations.',
      dishes: ['Pillowy Steamed Idlis', 'Crispy Medu Vada', 'Ghee Podi Idli', 'Golden Dosas', 'Degree Filter Coffee'],
      image: '/images/idli-vada.jpg',
      badge: 'Classic Heritage',
      categoryTab: 'IDLI & VADA'
    },
    {
      id: 'andhra',
      name: 'ANDHRA',
      tagline: 'Bold, Aromatic & Regional Favourites',
      description: 'Bold, comforting Andhra-inspired flavours with regional favourites.',
      dishes: ['Pesarattu Upma Dosa', 'Plain & Onion Pesarattu', 'Spicy Ginger Allam Pachadi', 'Charu Buvva', 'Andhra Meals'],
      image: '/images/pesarattu-dosa.jpg',
      badge: 'Regional Andhra',
      categoryTab: 'ANDHRA'
    },
    {
      id: 'telangana',
      name: 'TELANGANA',
      tagline: 'Soulful Homestyle Comfort',
      description: 'Traditional Telangana-inspired dishes that celebrate homestyle cooking.',
      dishes: ['Pappu Buvva (Dal Rice with Ghee)', 'Homestyle Rasam Rice', 'Regional Dal Specials', 'Authentic Thali Combos'],
      image: '/images/south-indian-thali.jpg',
      badge: 'Homestyle Telangana',
      categoryTab: 'TELANGANA'
    }
  ];

  return (
    <section id="cuisines" className="py-16 sm:py-20 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200">
            CULINARY TRADITIONS
          </span>
          <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 mt-3 tracking-tight">
            FROM SOUTH INDIA TO SOLAPUR
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg">
            A harmonious trio of culinary heritages brought under one roof with uncompromised authenticity and pure vegetarian ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cuisines.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} cuisine at Panchami Kitchen Idli Street`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
                
                <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-800 text-amber-50 shadow-xs">
                  {item.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif-heading text-2xl font-black text-white tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-amber-200 font-semibold mt-0.5">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-stone-700 text-sm leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>

                  <div className="border-t border-stone-100 pt-4 mb-5">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2.5">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {item.dishes.map((dish, dIdx) => (
                        <li key={dIdx} className="text-xs text-stone-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0"></span>
                          <span>{dish}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onSelectCategory(item.categoryTab)}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-amber-100/70 text-stone-800 hover:text-amber-900 font-bold text-xs uppercase tracking-wider border border-stone-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore {item.name} Menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
