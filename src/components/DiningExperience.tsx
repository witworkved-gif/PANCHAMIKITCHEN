import { Utensils, ShoppingBag, Car, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface DiningExperienceProps {
  onPlanVisit: () => void;
}

export default function DiningExperience({ onPlanVisit }: DiningExperienceProps) {
  const experiences = [
    {
      icon: Utensils,
      title: 'Dine-In Comfort',
      desc: 'Bright, clean tables in a friendly, casual atmosphere. Perfect for hearty family breakfasts, quick business lunches, or relaxed evening dinners with hot filter coffee.',
      feature: 'Fast, warm table service'
    },
    {
      icon: ShoppingBag,
      title: 'Fresh Takeaway',
      desc: 'Piping hot idlis, crispy dosas, and fresh chutneys carefully packed in hygienic containers to enjoy at home or at the office.',
      feature: 'Carefully sealed & spill-proof packaging'
    },
    {
      icon: Car,
      title: 'Curbside Pickup',
      desc: 'On the go? Simply call our counter at 9423330177 beforehand, and pick up your order without parking delays.',
      feature: 'Call-ahead quick collection'
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              HOSPITALITY & CONVENIENCE
            </span>
            <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 mt-3 tracking-tight">
              A SIMPLE, WARM DINING EXPERIENCE
            </h2>
            <p className="text-stone-700 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Panchami Kitchen Idli Street is intentionally designed for casual, family-friendly dining. Whether you sit down for a leisurely meal or drop by for a rapid takeaway, our team strives to make every visit comforting and delicious.
            </p>

            <div className="space-y-4 mt-8">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif-heading font-bold text-base text-stone-900">
                        {exp.title}
                      </h3>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                        {exp.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 mt-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        {exp.feature}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onPlanVisit}
                id="dining-plan-visit-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>PLAN YOUR VISIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-stone-700 hover:text-amber-800 text-sm font-bold underline"
              >
                Call to pre-order takeaway: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Restaurant photo showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/images/panchmi-interior.jpg"
                alt="Inside Panchami Kitchen Idli Street dining area"
                className="w-full h-96 sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-stone-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Dining Room</span>
                  <span className="text-sm font-semibold">Bright, clean seating with warm hospitality</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-800 text-amber-50 text-xs font-bold">
                  Solapur
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
