import { Star, ExternalLink, CheckCircle2, ThumbsUp, Coffee, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export default function ReviewsSection() {
  const verifiedThemes = [
    {
      icon: Coffee,
      title: 'Famous For Degree Filter Coffee',
      highlight: 'Celebrated by local patrons for its rich, authentic chicory aroma and frothy presentation.'
    },
    {
      icon: Heart,
      title: 'Authentic South Indian & Telugu Taste',
      highlight: 'Patrons appreciate the traditional green moong Pesarattu, Pappu Buvva, and soft idlis.'
    },
    {
      icon: CheckCircle2,
      title: 'Clean Environment & Pure Veg Prep',
      highlight: 'A reliable pure vegetarian kitchen prioritizing cleanliness, quick table turnover, and polite service.'
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            LOCAL PATRON FEEDBACK
          </span>
          <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 mt-3 tracking-tight">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-stone-600 text-base mt-2">
            Discover what our customers are saying across verified local platforms.
          </p>
        </div>

        {/* Source-specific Rating Highlight Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 mb-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pb-6 border-b border-stone-150">
            <div>
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="font-serif-heading font-black text-4xl text-stone-900">
                5.0 <span className="text-base font-normal text-stone-500">/ 5.0</span>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-1">
                Source-Specific Verified Rating
              </span>
              <h3 className="font-bold text-stone-800 text-lg">
                5.0 on Justdial — 308 ratings
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Consistently praised for South Indian breakfast items, snacks, and signature filter coffee.
              </p>
            </div>
          </div>

          {/* Action Buttons to View Live Reviews */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.justdial.com/Solapur/Panchmi-Kitchen-Idli-Street-Near-Shrikrishna-Mangal-Karyalaya-New-Paccha-Peth/9999PX217-X217-250516231742-G3U8_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              id="reviews-justdial-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95"
            >
              <span>VIEW JUSTDIAL REVIEWS (308)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="reviews-google-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs uppercase tracking-wider border border-stone-300 transition-colors"
            >
              <span>VIEW GOOGLE REVIEWS</span>
              <ExternalLink className="w-4 h-4 text-stone-600" />
            </a>
          </div>
        </div>

        {/* 3 Common Feedback Themes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {verifiedThemes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif-heading font-bold text-base text-stone-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {item.highlight}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
