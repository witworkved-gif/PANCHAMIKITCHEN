import { ShieldCheck, Flame, HeartHandshake, Home, Utensils } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: '100% Vegetarian',
      subtitle: 'Pure vegetarian kitchen',
      color: 'text-emerald-700 bg-emerald-100'
    },
    {
      icon: Flame,
      title: 'Authentic South Indian',
      subtitle: 'Traditional time-tested recipes',
      color: 'text-amber-800 bg-amber-100'
    },
    {
      icon: HeartHandshake,
      title: 'Andhra & Telangana',
      subtitle: 'Signature regional specialties',
      color: 'text-orange-700 bg-orange-100'
    },
    {
      icon: Home,
      title: 'Home-Style Cooking',
      subtitle: 'Wholesome & comforting flavours',
      color: 'text-yellow-800 bg-yellow-100'
    },
    {
      icon: Utensils,
      title: 'Dine-In • Takeaway • Pickup',
      subtitle: 'Convenient dining options',
      color: 'text-stone-800 bg-stone-100'
    }
  ];

  return (
    <section id="trust-bar" className="bg-white border-y border-stone-200 py-6 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/70 border border-stone-150 hover:bg-amber-50/60 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-0.5 font-medium leading-tight">
                    {item.subtitle}
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
