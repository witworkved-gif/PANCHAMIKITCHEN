import { useState } from 'react';
import { Sparkles, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'FOOD' | 'RESTAURANT' | 'SPECIALS'>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-stone-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              VISUAL GLIMPSE
            </div>
            <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
              RESTAURANT & FOOD GALLERY
            </h2>
            <p className="text-stone-600 text-base max-w-xl mt-2">
              Explore authentic photographs of our dining room, signage, and beloved pure vegetarian dishes in Solapur.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {(['ALL', 'FOOD', 'RESTAURANT', 'SPECIALS'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat === 'ALL' ? 'All Photos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-stone-200 cursor-pointer group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-stone-900 shadow-md">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {item.isRealPhoto && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-900/90 text-amber-50 backdrop-blur-xs">
                    Real Photo
                  </span>
                )}
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-stone-900/70 text-stone-100 backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-heading font-extrabold text-base text-stone-900 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          id="gallery-lightbox-overlay"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
              {filteredItems[lightboxIndex].isRealPhoto && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-stone-950">
                  Verified Photo
                </span>
              )}
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Display */}
          <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:-left-12 p-3 rounded-full bg-stone-900/80 hover:bg-amber-700 text-white transition-colors z-10 cursor-pointer shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] max-w-full rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border border-stone-800 flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 sm:-right-12 p-3 rounded-full bg-stone-900/80 hover:bg-amber-700 text-white transition-colors z-10 cursor-pointer shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption */}
          <div className="text-center max-w-2xl mx-auto text-stone-300" onClick={(e) => e.stopPropagation()}>
            <h4 className="font-serif-heading text-lg font-bold text-white">
              {filteredItems[lightboxIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              {filteredItems[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
