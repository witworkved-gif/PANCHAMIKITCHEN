import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import AboutSection from './components/AboutSection';
import CuisineSection from './components/CuisineSection';
import SignatureDishes from './components/SignatureDishes';
import BreakfastSection from './components/BreakfastSection';
import MenuSection from './components/MenuSection';
import SpecialsSection from './components/SpecialsSection';
import WhyPanchami from './components/WhyPanchami';
import DiningExperience from './components/DiningExperience';
import GallerySection from './components/GallerySection';
import InstagramSection from './components/InstagramSection';
import ReviewsSection from './components/ReviewsSection';
import LocationHoursSection from './components/LocationHoursSection';
import OrderCTA from './components/OrderCTA';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import BackToTop from './components/BackToTop';
import EnquiryModal from './components/EnquiryModal';
import { MenuCategoryType } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType>('BREAKFAST');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryDish, setEnquiryDish] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCuisineCategory = (category: string) => {
    setSelectedCategory(category as MenuCategoryType);
    scrollToSection('menu');
  };

  const handleDishEnquire = (dishName: string) => {
    setEnquiryDish(dishName);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Sticky Navigation */}
      <Navbar
        onOpenEnquiry={() => {
          setEnquiryDish('');
          setIsEnquiryModalOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onVisitUs={() => scrollToSection('visitus')}
        />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. About Section */}
        <AboutSection
          onDiscoverMenu={() => scrollToSection('menu')}
        />

        {/* 4. Culinary Heritage / Cuisines (South Indian, Andhra, Telangana) */}
        <CuisineSection
          onSelectCategory={handleSelectCuisineCategory}
        />

        {/* 5. Signature Dishes Showcase */}
        <SignatureDishes
          onViewMenu={() => scrollToSection('menu')}
          onDishEnquire={handleDishEnquire}
        />

        {/* 6. Dedicated Breakfast Showcase & Combo Card */}
        <BreakfastSection
          onExploreBreakfast={() => {
            setSelectedCategory('BREAKFAST');
            scrollToSection('menu');
          }}
        />

        {/* 7. Full Interactive Menu Section */}
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onDishEnquire={handleDishEnquire}
        />

        {/* 8. Editorial Specials Showcase */}
        <SpecialsSection
          onEnquire={handleDishEnquire}
          onExploreMenu={() => scrollToSection('menu')}
        />

        {/* 9. Why Panchami - 5 Core Pillars */}
        <WhyPanchami />

        {/* 10. Dining Experience (Dine-in, Takeaway, Curbside Pickup) */}
        <DiningExperience
          onPlanVisit={() => scrollToSection('visitus')}
        />

        {/* 11. Restaurant & Food Photo Gallery with Lightbox */}
        <GallerySection />

        {/* 12. Social & Instagram Highlights */}
        <InstagramSection />

        {/* 13. Customer Reviews & 5.0 Justdial Rating */}
        <ReviewsSection />

        {/* 14. Location & Live Hours Schedule */}
        <LocationHoursSection />

        {/* 15. Action Banner CTA */}
        <OrderCTA
          onViewMenu={() => scrollToSection('menu')}
          onOpenEnquiry={() => {
            setEnquiryDish('');
            setIsEnquiryModalOpen(true);
          }}
        />

        {/* 16. Contact & Reservation/Enquiry Form */}
        <ContactSection
          prefilledDish={enquiryDish}
        />

        {/* 17. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Sticky Mobile Actions (Call, WhatsApp, Directions) */}
      <MobileActionBar />

      {/* Smooth Scroll to Top */}
      <BackToTop />

      {/* Interactive Enquiry / Table Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialDish={enquiryDish}
      />
    </div>
  );
}
