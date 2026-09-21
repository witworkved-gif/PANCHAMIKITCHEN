import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export default function InstagramSection() {
  const instaPosts = [
    {
      img: '/images/pesarattu-dosa.jpg',
      caption: 'Hot crisp Pesarattu Upma Dosa fresh on the griddle! 🟢 Authentic Andhra breakfast staple in Solapur.',
      likes: '142',
      isReal: true
    },
    {
      img: '/images/sheera.jpg',
      caption: 'Ghee Pineapple Sheera cooked with rich golden desi ghee and dry fruits. Sweet comfort! 🍍',
      likes: '189',
      isReal: true
    },
    {
      img: '/images/panchmi-interior.jpg',
      caption: 'Bright tables ready for your morning breakfast rush! Open from 7:30 AM every morning. ☀️',
      likes: '115',
      isReal: true
    },
    {
      img: '/images/filter-coffee.jpg',
      caption: 'Frothy, aromatic South Indian degree filter coffee in classic brass davarah. The perfect wake-up! ☕',
      likes: '204',
      isReal: false
    }
  ];

  return (
    <section id="instagram" className="py-16 sm:py-20 bg-[#FDFBF7] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              SOCIAL COMMUNITY
            </span>
            <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 mt-2 tracking-tight">
              FOLLOW OUR FOOD JOURNEY
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Curated glimpses inspired by our daily dishes & community updates in Solapur.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-btn"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 via-red-600 to-amber-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW @PANCHAMI_KITCHEN_SOLAPUR</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4-Item Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post, idx) => (
            <a
              key={idx}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={post.img}
                  alt="Panchami Kitchen Instagram highlight"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                  <span className="flex items-center gap-1 text-xs font-bold">
                    <Heart className="w-4 h-4 fill-white" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold">
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/50 backdrop-blur-xs text-white">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-700 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <span className="text-[11px] font-bold text-amber-800 mt-2 block group-hover:underline">
                  View on Instagram →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-stone-500">
          Connect with us on Instagram to view regular morning specials and festival schedules.
        </div>
      </div>
    </section>
  );
}
