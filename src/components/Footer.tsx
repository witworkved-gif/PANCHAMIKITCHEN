import { Phone, MapPin, Clock, Instagram, Facebook, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500 p-0.5 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-stone-900 flex items-center justify-center text-amber-400 font-serif font-black text-xs">
                  IDLI
                </div>
              </div>
              <div>
                <h3 className="font-serif-heading font-black text-xl text-white tracking-tight">
                  PANCHAMI KITCHEN
                </h3>
                <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Idli Street • Solapur
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed mb-6 font-normal">
              Authentic South Indian, Andhra and Telangana vegetarian cuisine in Solapur. Serving piping hot breakfast, wholesome regional thalis, and filter coffee.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                aria-label="Direct Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Menu', id: 'menu' },
                { name: 'Specialties', id: 'specialties' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Reviews', id: 'reviews' },
                { name: 'Visit Us', id: 'visitus' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-stone-400 hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cuisine Specials */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Cuisines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>South Indian Classics</li>
              <li>Andhra Specialties</li>
              <li>Telangana Homestyle</li>
              <li>100% Pure Vegetarian</li>
              <li>Degree Filter Coffee</li>
              <li>Ghee Pineapple Sheera</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-serif-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contact & Address
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p>
                  33, 1/5, Kamatam Vasahat, Geeta Nagar, New Paccha Peth, Sakhar Peth, Solapur, Maharashtra 413006
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-amber-400 font-semibold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-800">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300 font-semibold">Hours of Operation:</p>
                  <p>Breakfast: 7:30 AM – 12:00 PM</p>
                  <p>Lunch: 12:30 PM – 4:00 PM</p>
                  <p>Dinner: 7:00 PM – 10:00 PM</p>
                  <p className="text-amber-400/80">Wednesday after 12:00 PM: Weekly Holiday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Panchami Kitchen Idli Street. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-amber-500 fill-amber-500" /> for authentic South Indian food lovers in Solapur
          </p>
        </div>
      </div>
    </footer>
  );
}
