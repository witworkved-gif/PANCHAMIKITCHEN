import { MenuItem, GalleryItem, FAQItem, TimingSlot } from '../types';

export const BUSINESS_INFO = {
  name: 'Panchami Kitchen Idli Street',
  shortName: "Panchami's Idli Street",
  tagline: 'Authentic South Indian Flavours, Served With Heart.',
  subTagline: 'From Idli Street to your table.',
  description: 'Experience authentic South Indian, Andhra and Telangana home-style cuisine in the heart of Solapur.',
  phone: '9423330177',
  phoneFormatted: '+91 94233 30177',
  whatsappNumber: '919423330177',
  whatsappUrl: 'https://wa.me/919423330177?text=Hello%20Panchami%20Kitchen%20Solapur%2C%20I%20would%20like%20to%20enquire%20about%20dining%20and%20takeaway.',
  instagramHandle: '@panchami_kitchen_solapur',
  instagramUrl: 'https://www.instagram.com/panchami_kitchen_solapur/',
  facebookUrl: 'https://www.facebook.com/61575578488751/about/',
  googleMapsUrl: 'https://goo.gl/maps/G7wgy2jE6uCBX8MW7',
  address: {
    line1: '33, 1/5, Kamatam Vasahat, Geeta Nagar',
    landmark: 'Near Shrikrishna Mangal Karyalaya, near MIDC Road',
    area: 'New Paccha Peth, Sakhar Peth',
    city: 'Solapur',
    state: 'Maharashtra',
    pincode: '413006',
    country: 'India',
    fullFormatted: '33, 1/5, Kamatam Vasahat, Geeta Nagar, near Shrikrishna Mangal Karyalaya, near MIDC Road, New Paccha Peth, Sakhar Peth, Solapur, Maharashtra 413006, India'
  },
  ratings: {
    justdial: {
      score: '5.0',
      totalReviews: '308',
      platform: 'Justdial'
    }
  },
  priceRange: '₹1 – ₹200 per person (Indicative)',
  breakfastCombos: 'Starting around ₹99',
  services: ['Dine-In', 'Takeaway', 'Curbside Pickup'],
  deliveryDisclaimer: 'Home delivery is not currently offered. We warmly welcome Dine-In, Takeaway, and Curbside Pickup.'
};

export const TIMINGS_SCHEDULE: TimingSlot[] = [
  { label: 'Morning Breakfast', time: '7:30 AM – 12:00 PM', highlight: true },
  { label: 'Afternoon Lunch', time: '12:30 PM – 4:00 PM' },
  { label: 'Evening Dinner', time: '7:00 PM – 10:00 PM' },
  { label: 'Wednesday Schedule', time: 'Open until 12:00 PM (Weekly holiday after 12:00 PM)' }
];

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'sig-1',
    name: 'Pesarattu Upma Dosa',
    regionalName: 'పెసరట్టు ఉప్మా',
    category: 'ANDHRA',
    cuisine: 'Andhra',
    description: 'Crispy, protein-rich whole green moong dal crepe cooked on tawa, wrapped around soft aromatic rava upma, and served with tangy ginger-allam pachadi, coconut chutney, and sambar.',
    priceNote: 'Starting from ₹90 – Indicative',
    isVegetarian: true,
    isSignature: true,
    image: '/images/pesarattu-dosa.jpg',
    spiceLevel: 'Medium',
    servingInfo: 'Served with 2 house chutneys and sambar'
  },
  {
    id: 'sig-2',
    name: 'Ghee Pineapple Sheera',
    regionalName: 'अननस शिरा / கேசரி',
    category: 'UPMA & SPECIALS',
    cuisine: 'South Indian',
    description: 'A beloved house specialty! Roasted semolina infused with pure golden desi ghee, cardamom, roasted cashews, plump raisins, and tender chunks of fresh pineapple.',
    priceNote: 'Starting from ₹60 – Indicative',
    isVegetarian: true,
    isSignature: true,
    image: '/images/sheera.jpg',
    spiceLevel: 'Mild',
    servingInfo: 'Warm dessert in pure cow ghee'
  },
  {
    id: 'sig-3',
    name: 'Ghee Podi Idli',
    regionalName: 'காரப்பொடி இட்லி',
    category: 'IDLI & VADA',
    cuisine: 'South Indian',
    description: 'Pillowy steamed rice-lentil idlis generously tossed in aromatic warm desi ghee and authentic spicy gunpowder (karam podi), bursting with earthy roasted lentil flavours.',
    priceNote: 'Starting from ₹70 – Indicative',
    isVegetarian: true,
    isSignature: true,
    image: '/images/podi-idli.jpg',
    spiceLevel: 'Authentic Spicy',
    servingInfo: 'Freshly tossed with pure ghee'
  },
  {
    id: 'sig-4',
    name: 'Classic Steamed Idli',
    regionalName: 'మల్లెపూవు ఇడ్లీ',
    category: 'IDLI & VADA',
    cuisine: 'South Indian',
    description: 'Signature feather-light, cloud-soft idlis naturally fermented overnight and freshly steamed in small batches. Served with tempered coconut chutney and piping hot drumstick sambar.',
    priceNote: 'Starting from ₹50 – Indicative',
    isVegetarian: true,
    isSignature: true,
    image: '/images/idli-vada.jpg',
    spiceLevel: 'Mild',
    servingInfo: 'Pair with filter coffee'
  },
  {
    id: 'sig-5',
    name: 'Crispy Medu Vada',
    regionalName: 'గారెలు / மெது வடை',
    category: 'IDLI & VADA',
    cuisine: 'South Indian',
    description: 'Golden fried urad dal donuts with a signature crunch on the outside and airy, fluffy tenderness inside. Spiced with crushed peppercorns, fresh ginger, and curry leaves.',
    priceNote: 'Starting from ₹60 – Indicative',
    isVegetarian: true,
    isSignature: true,
    image: '/images/medu-vada.jpg',
    spiceLevel: 'Mild',
    servingInfo: 'Served crisp with sambar dip'
  },
  {
    id: 'sig-6',
    name: 'South Indian Filter Coffee',
    regionalName: 'டிகிரி காபி',
    category: 'BEVERAGES',
    cuisine: 'South Indian',
    description: 'Traditional slow-dripped chicory-blended coffee decoction frothed with freshly boiled creamy milk. Poured with characteristic flair in a brass dabara and tumbler.',
    priceNote: 'Starting from ₹30 – Indicative',
    isVegetarian: true,
    isSignature: true,
    image: '/images/filter-coffee.jpg',
    spiceLevel: 'Mild',
    servingInfo: 'Served hot in dabara-tumbler'
  },
  {
    id: 'sig-7',
    name: 'Crispy Golden Dosas',
    regionalName: 'మసాలా దోశ',
    category: 'DOSA',
    cuisine: 'South Indian',
    description: 'Masterfully spread thin and browned to perfection on iron griddles. Offered in classic plain, spiced potato masala, and rich butter & ghee variations.',
    priceNote: 'Starting from ₹70 – Indicative',
    isVegetarian: true,
    isSignature: true,
    image: '/images/dosa-crispy.jpg',
    spiceLevel: 'Medium',
    servingInfo: 'Served with podi, chutney & sambar'
  },
  {
    id: 'sig-8',
    name: 'Andhra / South Indian Thali',
    regionalName: 'ఆంధ్రా భోజనం',
    category: 'MEALS / THALI',
    cuisine: 'Andhra',
    description: 'A fulfilling, nourishing platter celebrating regional homestyle cooking with fragrant steamed rice, signature seasonal dal, spicy tangy rasam, vegetable vepudu, pachadi, curd, and crisp papad.',
    priceNote: 'Available during Lunch & Dinner hours',
    isVegetarian: true,
    isSignature: true,
    image: '/images/south-indian-thali.jpg',
    spiceLevel: 'Medium',
    servingInfo: 'Complete wholesome vegetarian meal'
  },
  {
    id: 'sig-9',
    name: 'Pappu Buvva',
    regionalName: 'పప్పు బువ్వ (నెయ్యి)',
    category: 'TELANGANA',
    cuisine: 'Telangana',
    description: 'The ultimate comforting soul meal of Andhra & Telangana homes: steaming hot rice blended with slowly simmered spiced toor dal (pappu), fresh curry leaves, and a generous dollop of pure ghee.',
    priceNote: 'Homestyle Lunch & Dinner special',
    isVegetarian: true,
    isSignature: true,
    image: '/images/south-indian-thali.jpg',
    spiceLevel: 'Medium',
    servingInfo: 'Traditional home-cooked comfort'
  },
  {
    id: 'sig-10',
    name: 'Charu Buvva',
    regionalName: 'చారు బువ్వ',
    category: 'ANDHRA',
    cuisine: 'Andhra',
    description: 'A nostalgic Telugu culinary staple: fragrant steamed rice mixed with spicy, tangy, garlic and cumin tempered Andhra charu (pepper rasam) that warms the soul and aids digestion.',
    priceNote: 'Homestyle Lunch & Dinner special',
    isVegetarian: true,
    isSignature: true,
    image: '/images/south-indian-thali.jpg',
    spiceLevel: 'Authentic Spicy',
    servingInfo: 'Served warm with papad'
  },
  {
    id: 'sig-11',
    name: 'Traditional Rava Upma',
    regionalName: 'ఉప్మా / உப்மா',
    category: 'UPMA & SPECIALS',
    cuisine: 'South Indian',
    description: 'Fluffy semolina roasted with mustard seeds, curry leaves, slit green chillies, finely chopped ginger, and crunchy fried cashews. Light, balanced, and deeply comforting.',
    priceNote: 'Starting from ₹50 – Indicative',
    isVegetarian: true,
    isSignature: true,
    image: '/images/upma.jpg',
    spiceLevel: 'Mild',
    servingInfo: 'Served with fresh coconut chutney'
  }
];

export const FULL_MENU: MenuItem[] = [
  ...SIGNATURE_DISHES,
  {
    id: 'menu-12',
    name: 'Idli Vada Combo',
    category: 'BREAKFAST',
    cuisine: 'South Indian',
    description: 'The definitive breakfast pairing: two melt-in-mouth steamed idlis paired with one crunchy medu vada, served with generous chutney and sambar.',
    priceNote: 'Combos starting around ₹99',
    isVegetarian: true,
    isBreakfastSpecial: true,
    image: '/images/idli-vada.jpg',
    spiceLevel: 'Mild'
  },
  {
    id: 'menu-13',
    name: 'Butter Masala Dosa',
    category: 'DOSA',
    cuisine: 'South Indian',
    description: 'Thin golden crepe glazed with fresh butter, lined with mild red chutney, and filled with flavorful tempered potato onion sabzi.',
    priceNote: 'Starting from ₹85 – Indicative',
    isVegetarian: true,
    image: '/images/dosa-crispy.jpg',
    spiceLevel: 'Medium'
  },
  {
    id: 'menu-14',
    name: 'Open Butter Masala Dosa',
    category: 'DOSA',
    cuisine: 'South Indian',
    description: 'Crisp open-faced crepe topped generously with homemade butter, aromatic spiced podi, and seasoned potato filling.',
    priceNote: 'Starting from ₹95 – Indicative',
    isVegetarian: true,
    image: '/images/dosa-crispy.jpg',
    spiceLevel: 'Medium'
  },
  {
    id: 'menu-15',
    name: 'Plain Andhra Pesarattu',
    category: 'ANDHRA',
    cuisine: 'Andhra',
    description: 'Authentic green gram (moong dal) crepe seasoned with cumin and ginger, roasted crisp on iron tawa. High protein and gluten-friendly.',
    priceNote: 'Starting from ₹75 – Indicative',
    isVegetarian: true,
    image: '/images/pesarattu-dosa.jpg',
    spiceLevel: 'Medium'
  },
  {
    id: 'menu-16',
    name: 'Onion Pesarattu',
    category: 'ANDHRA',
    cuisine: 'Andhra',
    description: 'Green gram crepe embedded with finely chopped red onions, green chillies, and ginger, cooked crisp with aromatic oil.',
    priceNote: 'Starting from ₹85 – Indicative',
    isVegetarian: true,
    image: '/images/pesarattu-dosa.jpg',
    spiceLevel: 'Authentic Spicy'
  },
  {
    id: 'menu-17',
    name: 'Telangana Homestyle Rasam Rice',
    category: 'TELANGANA',
    cuisine: 'Telangana',
    description: 'Steaming hot rice blended with tangy tamarind and crushed coriander rasam, tempered with cumin and mustard.',
    priceNote: 'Homestyle Lunch & Dinner special',
    isVegetarian: true,
    image: '/images/south-indian-thali.jpg',
    spiceLevel: 'Authentic Spicy'
  },
  {
    id: 'menu-18',
    name: 'Curd Rice (Bagala Bath)',
    category: 'MEALS / THALI',
    cuisine: 'South Indian',
    description: 'Cooling probiotic comfort food: mashed rice mixed with fresh homemade yoghurt, tempered with mustard seeds, curry leaves, ginger, and pomegranate arils.',
    priceNote: 'Starting from ₹60 – Indicative',
    isVegetarian: true,
    image: '/images/south-indian-thali.jpg',
    spiceLevel: 'Mild'
  },
  {
    id: 'menu-19',
    name: 'Special Masala Tea',
    category: 'BEVERAGES',
    cuisine: 'South Indian',
    description: 'Freshly brewed strong tea infused with crushed cardamom, ginger, and aromatic Indian spices.',
    priceNote: 'Starting from ₹25 – Indicative',
    isVegetarian: true,
    spiceLevel: 'Mild'
  },
  {
    id: 'menu-20',
    name: 'Chilled Spiced Buttermilk (Majjiga)',
    category: 'BEVERAGES',
    cuisine: 'Andhra',
    description: 'Refreshing churned curd lightly spiced with crushed ginger, green chilli, fresh coriander, and asafoetida. Perfect accompaniment for hot afternoons.',
    priceNote: 'Starting from ₹30 – Indicative',
    isVegetarian: true,
    spiceLevel: 'Mild'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Restaurant Facade & Entrance Sign',
    category: 'RESTAURANT',
    imageUrl: '/images/panchmi-exterior-sign.jpg',
    description: 'The welcoming entrance of Panchami Kitchen Idli Street at New Paccha Peth, Solapur.',
    isRealPhoto: true
  },
  {
    id: 'gal-2',
    title: 'Warm & Clean Dining Space',
    category: 'RESTAURANT',
    imageUrl: '/images/panchmi-interior.jpg',
    description: 'Bright, cheerful orange table seating designed for comfortable family meals and casual breakfasts.',
    isRealPhoto: true
  },
  {
    id: 'gal-3',
    title: 'Fresh Pesarattu Upma Dosa',
    category: 'FOOD',
    imageUrl: '/images/pesarattu-dosa.jpg',
    description: 'Authentic rolled green moong dal Pesarattu stuffed with upma, served with coconut chutney & spicy sambar.',
    isRealPhoto: true
  },
  {
    id: 'gal-4',
    title: 'Ghee Pineapple Sheera',
    category: 'SPECIALS',
    imageUrl: '/images/sheera.jpg',
    description: 'Signature pineapple sheera made with pure desi ghee and dry fruits, served fresh at the table.',
    isRealPhoto: true
  },
  {
    id: 'gal-5',
    title: 'Fresh Steamed Idli & Crispy Vada',
    category: 'FOOD',
    imageUrl: '/images/idli-vada.jpg',
    description: 'Traditional morning breakfast pairing with creamy coconut chutney and fragrant vegetable sambar.',
    isRealPhoto: false
  },
  {
    id: 'gal-6',
    title: 'Golden Crispy Dosa',
    category: 'FOOD',
    imageUrl: '/images/dosa-crispy.jpg',
    description: 'Thin, crispy crepe made from carefully fermented rice and urad dal batter.',
    isRealPhoto: false
  },
  {
    id: 'gal-7',
    title: 'Authentic Filter Coffee',
    category: 'SPECIALS',
    imageUrl: '/images/filter-coffee.jpg',
    description: 'Rich, frothy decoction brewed fresh throughout the day.',
    isRealPhoto: false
  },
  {
    id: 'gal-8',
    title: 'Wholesome South Indian Thali',
    category: 'FOOD',
    imageUrl: '/images/south-indian-thali.jpg',
    description: 'Complete home-style meal featuring regional Andhra and Telangana specialties.',
    isRealPhoto: false
  },
  {
    id: 'gal-9',
    title: 'Warm Hospitality',
    category: 'RESTAURANT',
    imageUrl: '/images/owner.jpg',
    description: 'The dedicated leadership ensuring genuine flavours, hygiene, and attentive service in every meal.',
    isRealPhoto: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is Panchami Kitchen vegetarian?',
    answer: 'Yes. Panchami Kitchen is presented as a pure vegetarian restaurant.'
  },
  {
    question: 'What type of food do you serve?',
    answer: 'The restaurant specializes in South Indian, Andhra and Telangana cuisine.'
  },
  {
    question: 'What are your breakfast timings?',
    answer: '7:30 AM – 12:00 PM.'
  },
  {
    question: 'Do you offer takeaway?',
    answer: 'Yes, takeaway is available.'
  },
  {
    question: 'Do you offer home delivery?',
    answer: 'The provided information indicates that home delivery is not available.'
  },
  {
    question: 'Do you offer curbside pickup?',
    answer: 'Yes.'
  },
  {
    question: 'What is the price range?',
    answer: 'The typical price range is approximately ₹1–₹200 per person, though prices can vary by item.'
  },
  {
    question: 'Where are you located?',
    answer: '33, 1/5, Kamatam Vasahat, Geeta Nagar, near Shrikrishna Mangal Karyalaya and MIDC Road, New Paccha Peth, Sakhar Peth, Solapur.'
  },
  {
    question: 'What is your phone number?',
    answer: '9423330177.'
  },
  {
    question: 'Do you have a weekly holiday?',
    answer: 'Wednesday after 12:00 PM.'
  }
];
