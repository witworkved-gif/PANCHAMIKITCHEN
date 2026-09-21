import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface AboutSectionProps {
  onDiscoverMenu: () => void;
}

export default function AboutSection({ onDiscoverMenu }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid Showcase with real restaurant photos */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-4/3 relative group">
                  <img
                    src="/images/panchmi-exterior-sign.jpg"
                    alt="Panchami Kitchen Idli Street restaurant signage in Solapur"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-stone-900/70 backdrop-blur-xs p-2 text-center text-white text-[11px] font-semibold">
                    Restaurant Facade & Signage
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-3/4 relative group">
                  <img
                    src="/images/sheera.jpg"
                    alt="Ghee Pineapple Sheera served fresh at Panchami Kitchen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-stone-900/70 backdrop-blur-xs p-2 text-center text-white text-[11px] font-semibold">
                    Ghee Pineapple Sheera
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-3/4 relative group">
                  <img
                    src="/images/panchmi-interior.jpg"
                    alt="Panchami Kitchen Idli Street clean dining room interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-stone-900/70 backdrop-blur-xs p-2 text-center text-white text-[11px] font-semibold">
                    Clean & Cheerful Dining Space
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-4/3 relative group">
                  <img
                    src="/images/owner.jpg"
                    alt="Founder and dedication to authentic cuisine at Panchami Kitchen"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-stone-900/70 backdrop-blur-xs p-2 text-center text-white text-[11px] font-semibold">
                    Warm Hospitality & Care
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-4 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              OUR STORY & PHILOSOPHY
            </div>

            <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 tracking-tight leading-tight mb-6">
              A TASTE OF HOME, <br className="hidden sm:inline" />
              <span className="text-amber-800">ROOTED IN TRADITION.</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-6 font-normal">
              At Panchami Kitchen Idli Street, we celebrate the comforting flavours of South India through simple, authentic and satisfying vegetarian food. From soft idlis and crispy dosas to Andhra and Telangana-inspired regional favourites, our menu brings familiar flavours to the table in a warm and welcoming setting.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
              Every recipe is prepared with high standards of cleanliness, freshly ground masalas, pure ghee, and wholesome ingredients. Located at Kamatam Vasahat in New Paccha Peth, Solapur, we take pride in being a favorite local destination for family breakfasts, hearty afternoon meals, and wholesome evening dinners.
            </p>

            {/* Three Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>AUTHENTIC FLAVOURS</span>
                </div>
                <p className="text-xs text-stone-600">
                  Regional South Indian, Andhra and Telangana recipes made with traditional balance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>PURE VEGETARIAN</span>
                </div>
                <p className="text-xs text-stone-600">
                  Strictly 100% vegetarian preparation with fresh daily ingredients.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80">
                <div className="flex items-center gap-2 text-orange-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-orange-700 flex-shrink-0" />
                  <span>HOME-STYLE FOOD</span>
                </div>
                <p className="text-xs text-stone-600">
                  Pappu buvva, charu buvva, and nourishing comfort food that feels like home.
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onDiscoverMenu}
              id="about-discover-menu-btn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
            >
              <span>DISCOVER OUR MENU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
