export type CuisineType = 'South Indian' | 'Andhra' | 'Telangana' | 'All';

export type MenuCategoryType = 
  | 'BREAKFAST'
  | 'IDLI & VADA'
  | 'DOSA'
  | 'UPMA & SPECIALS'
  | 'ANDHRA'
  | 'TELANGANA'
  | 'MEALS / THALI'
  | 'BEVERAGES';

export interface MenuItem {
  id: string;
  name: string;
  regionalName?: string;
  category: MenuCategoryType;
  cuisine: CuisineType;
  description: string;
  priceNote: string;
  isVegetarian: boolean;
  isSignature?: boolean;
  isBreakfastSpecial?: boolean;
  image?: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Authentic Spicy';
  servingInfo?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'FOOD' | 'RESTAURANT' | 'SPECIALS';
  imageUrl: string;
  description: string;
  isRealPhoto?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimingSlot {
  label: string;
  time: string;
  highlight?: boolean;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  enquiryType: 'Dine-In Table' | 'Takeaway Pre-Order' | 'Curbside Pickup' | 'General Query';
  message: string;
}
