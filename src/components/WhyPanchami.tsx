import { ShieldCheck, Flame, MapPin, Heart, Users } from 'lucide-react';

export default function WhyPanchami() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: '100% VEGETARIAN',
      description: 'A completely pure vegetarian kitchen dedicated to wholesome, clean ingredients and hygienic culinary practices.',
      accent: 'border-emerald-200 bg-emerald-50/50 text-emerald-800'
    },
    {
      icon: Flame,
      title: 'AUTHENTIC SOUTH INDIAN FLAVOURS',
      description: 'Slow-fermented rice & lentil batters, freshly prepared coconut chutneys, and traditionally tempered sambar.',
      accent: 'border-amber-200 bg-amber-50/50 text-amber-800'
    },
    {
      icon: MapPin,
      title: 'ANDHRA & TELANGANA SPECIALTIES',
      description: 'Distinct regional dishes like Pesarattu, Pappu Buvva, and Charu Buvva, honoring genuine regional spice balances.',
      accent: 'border-orange-200 bg-orange-50/50 text-orange-800'
    },
    {
      icon: Heart,
      title: 'HOME-STYLE COOKING',
      description: 'Comforting, balanced recipes reminiscent of home-cooked meals, with gentle seasonings and pure cow ghee.',
      accent: 'border-yellow-200 bg-yellow-50/50 text-yellow-800'
    },
    {
      icon: Users,
      title: 'FAMILY-FRIENDLY ATMOSPHERE',
      description: 'A clean, welcoming, and relaxed dining environment suitable for families, students, and morning commuters alike.',
      accent: 'border-stone-200 bg-stone-50/80 text-stone-800'
    }
  ];

  return (
    <section id="whypanchami" className="py-16 sm:py-20 bg-stone-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            OUR COMMITMENT
          </span>
          <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 mt-3 tracking-tight">
            WHY PEOPLE COME TO PANCHAMI
          </h2>
          <p className="text-stone-600 mt-3 text-base">
            What makes our kitchen at New Paccha Peth a beloved daily stop for vegetarian food lovers in Solapur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-heading font-extrabold text-lg text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {reasons.slice(3, 5).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-heading font-extrabold text-lg text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
