import { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin, Clock, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'menu', 'specialties', 'gallery', 'reviews', 'visitus', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visitus' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-md py-2.5 border-b border-amber-900/10'
            : 'bg-[#FDFBF7] py-4 border-b border-amber-900/5'
        }`}
      >
        {/* Top Mini Banner */}
        <div className="hidden lg:block bg-amber-900 text-amber-50 text-xs py-1 px-4 text-center font-medium tracking-wide">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Pure Vegetarian South Indian, Andhra & Telangana Cuisine in Solapur
            </span>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                Breakfast from 7:30 AM • Lunch • Dinner
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1 hover:text-amber-200 transition-colors font-semibold"
              >
                <Phone className="w-3 h-3 text-amber-300" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group text-left"
            id="nav-logo-link"
          >
            {/* Chef Mascot / Brand mark badge */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 p-0.5 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 overflow-hidden">
                <div className="text-center font-bold text-amber-900 text-sm leading-tight">
                  <span className="text-[10px] uppercase text-amber-700 block tracking-tighter">Panchami</span>
                  <span className="text-xs text-amber-900 block font-serif font-black">IDLI</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-heading font-extrabold text-xl sm:text-2xl text-stone-900 tracking-tight leading-none group-hover:text-amber-800 transition-colors">
                  PANCHAMI KITCHEN
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  PURE VEG
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-amber-700 tracking-wider uppercase flex items-center gap-1.5 mt-0.5">
                <span>Idli Street</span>
                <span className="text-stone-300">•</span>
                <span className="text-stone-600 font-normal">Solapur</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-amber-900 bg-amber-100/80 shadow-xs'
                      : 'text-stone-700 hover:text-amber-900 hover:bg-stone-100/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="nav-phone-call-btn"
              className="flex items-center gap-2 text-stone-800 hover:text-amber-800 font-bold text-sm px-3 py-2 rounded-lg border border-stone-200 hover:border-amber-400 bg-white shadow-xs transition-colors"
              title="Call Panchami Kitchen"
            >
              <Phone className="w-4 h-4 text-amber-700 fill-amber-700" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenEnquiry}
              id="nav-order-enquire-btn"
              className="bg-amber-800 hover:bg-amber-900 text-amber-50 text-sm font-bold px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all active:scale-95 flex items-center gap-2"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>ORDER / ENQUIRE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="mobile-nav-quick-call"
              className="p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200"
              aria-label="Call restaurant"
            >
              <Phone className="w-5 h-5 text-amber-700" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-hamburger-btn"
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-700"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-content"
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FDFBF7] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-amber-900/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div>
                  <span className="font-serif-heading font-extrabold text-stone-900 text-lg block">
                    PANCHAMI KITCHEN
                  </span>
                  <span className="text-xs font-semibold text-amber-700 uppercase">Idli Street • Solapur</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-stone-500 hover:text-stone-900"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-md text-xs font-bold border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                100% PURE VEGETARIAN
              </div>

              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:text-amber-800 hover:bg-amber-100/60 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Mobile Action Buttons */}
            <div className="pt-6 border-t border-stone-200 flex flex-col gap-2.5 mt-6">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="mobile-drawer-call-btn"
                className="w-full py-3 px-4 rounded-xl bg-amber-800 text-amber-50 font-bold text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW ({BUSINESS_INFO.phone})</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-whatsapp-btn"
                className="w-full py-3 px-4 rounded-xl bg-emerald-700 text-white font-bold text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <span>WHATSAPP</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-directions-btn"
                className="w-full py-2.5 px-4 rounded-xl bg-stone-100 text-stone-800 font-bold text-center flex items-center justify-center gap-2 border border-stone-300"
              >
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
