import { MenuItem, FoodCategory, SpecialCombo, DeliveryZone, TeamMember } from './types';
import heroImage from './assets/images/hero_spread_1781583965459.jpg';
import burgerImage from './assets/images/burger_gourmet_1781583979932.jpg';
import pastaImage from './assets/images/pasta_gourmet_1781583993986.jpg';

// Let's use the actual paths of the generated images from tool outputs
export const HERO_IMAGE = heroImage;
export const BURGER_IMAGE = burgerImage;
export const PASTA_IMAGE = pastaImage;

// Public high-quality stock photos as CDN helpers for other categories
export const SIDES_IMAGE = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=600'; // loaded fries
export const DESSERT_IMAGE = 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600'; // brownie
export const DRINK_IMAGE = 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600'; // mocktail

export const FOOD_CATEGORIES: FoodCategory[] = [
  {
    id: 'all',
    name: 'Full Menu',
    iconName: 'LayoutGrid',
    description: 'Explore our complete range of gourmet culinary creations.'
  },
  {
    id: 'burgers',
    name: 'Gourmet Burgers',
    iconName: 'Beef',
    description: 'Thick, stackable, flame-grilled premium patties crafted with artisan buns.'
  },
  {
    id: 'pastas',
    name: 'Silky Pastas',
    iconName: 'CookingPot',
    description: 'Satisfying, rich, hand-tossed Italian pasta crafted in house sauces.'
  },
  {
    id: 'sides',
    name: 'Sides & Starters',
    iconName: 'Pizza',
    description: 'Crispy, seasoned accompaniments designed to pair perfectly.'
  },
  {
    id: 'drinks',
    name: 'Drinks & Shakes',
    iconName: 'CupSoda',
    description: 'Refreshing, ice-cold visual mocktails and blend shakes.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'The Classique Double-Cheese',
    description: 'Two flame-grilled beef/crispy patties loaded with melting cheddar, house-blend secret sauce, caramelized onions, crisp pickles, served on our artisan toasted brioche bun.',
    price: 249,
    category: 'burgers',
    image: BURGER_IMAGE,
    isVegetarian: false,
    isBestSeller: true,
    prepTime: '12-15 min',
    calories: 680
  },
  {
    id: 'b2',
    name: 'Hickory Smoked BBQ Burger',
    description: 'Flame-broiled gourmet patty glazed in signature rich hickory BBQ sauce, topped with high-melt provolone, crispy golden onion rings, and chopped green handpressed cabbage.',
    price: 279,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    isVegetarian: false,
    isChefSpecial: true,
    prepTime: '15 min',
    calories: 720
  },
  {
    id: 'b3',
    name: 'Spicy Nashville Firebird',
    description: 'Fiery crispy-fried buttermilk chicken thigh dipped under authentic Nashville hot oil glaze, layered over creamy sweet slaw and crisp pickled cucumber slices.',
    price: 269,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=600',
    isVegetarian: false,
    isSpicy: true,
    prepTime: '10-12 min',
    calories: 650
  },
  {
    id: 'b4',
    name: 'Aroma Garden Crispy (Veg)',
    description: 'A crisp, thick custom bean & vegetable herb patty layered with creamy garlic aioli, vine-ripened red tomatoes, crisp iceberg lettuce and melted local paneer slices.',
    price: 199,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
    isBestSeller: true,
    prepTime: '10 min',
    calories: 520
  },
  {
    id: 'p1',
    name: 'Truffle-Infused Alfredo Penne',
    description: 'Perfectly-boiled penne pasta tossed in rich, decadent butter-parmesan Alfredo cream, loaded with wood-grilled earthy button mushrooms, and finished with luxurious truffle oil.',
    price: 349,
    category: 'pastas',
    image: PASTA_IMAGE,
    isVegetarian: true,
    isChefSpecial: true,
    prepTime: '15 min',
    calories: 590
  },
  {
    id: 'p2',
    name: 'Pesto Rosso Fusilli with Grilled Chicken',
    description: 'Spiral fusilli pasta matched with tender oven-baked chicken breast pieces, smothered in premium slow-cooked sundried tomato basil pesto and finished with fresh parm.',
    price: 329,
    category: 'pastas',
    image: 'https://images.unsplash.com/photo-1621996346565-e3bb64d0bc55?auto=format&fit=crop&q=80&w=600',
    isVegetarian: false,
    prepTime: '14-16 min',
    calories: 610
  },
  {
    id: 'p3',
    name: 'Spicy Basil Arrabbiata (Veg)',
    description: 'Rich, intense slow-simmered San Marzano tomato sauce infused with toasted red pepper flakes, crushed garlic cloves, fresh garden basil, and slick extra virgin olive oil.',
    price: 269,
    category: 'pastas',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
    isSpicy: true,
    prepTime: '12 min',
    calories: 440
  },
  {
    id: 's1',
    name: 'Loaded Gunpowder Craft Fries',
    description: 'Double-cooked skin-on golden fries seasoned with deep aromatic South Indian gun-powder spices, loaded state-wide in rich house cheese sauce & toasted fresh sesame seeds.',
    price: 149,
    category: 'sides',
    image: SIDES_IMAGE,
    isVegetarian: true,
    isBestSeller: true,
    isSpicy: true,
    prepTime: '8 min',
    calories: 380
  },
  {
    id: 's2',
    name: 'Crispy Cheese Fire Poppers',
    description: 'Crunchy golden panko-crusted appetizers stuffed with fire-roasted jalapeño pepper rings and a soft melting cheddar, mozzarella secret cheese blend. Served with chipotle-ranch dip.',
    price: 169,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
    prepTime: '7 min',
    calories: 310
  },
  {
    id: 's3',
    name: 'Garlic Herb Glazed Wings',
    description: 'Succulent chicken wings slow-baked to bubble, glazed in a premium emulsified sauce of melted churned butter, roasted premium garlic, green garden oregano, and black pepper.',
    price: 219,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=600',
    isVegetarian: false,
    prepTime: '10-12 min',
    calories: 470
  },
  {
    id: 'd1',
    name: 'Salted Caramel Silk Shake',
    description: 'Thick creamy double-thick vanilla ice cream blended with home-crafted sweet, salty caramel glaze, topped with fresh whipped cream and crunch cookie crumbles.',
    price: 159,
    category: 'drinks',
    image: DRINK_IMAGE,
    isVegetarian: true,
    isBestSeller: true,
    prepTime: '5 min',
    calories: 490
  },
  {
    id: 'd2',
    name: 'Afonso Mango-Mint Refresher',
    description: 'Chilled premium Alphonso mango syrup muddled together with fresh local garden mint leaves, lime disks, simple sugarcane syrup, and crushed ice, fizzed with bubble soda.',
    price: 129,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
    prepTime: '5 min',
    calories: 180
  },
  {
    id: 'd3',
    name: 'Cacao Intense Fudge Brownie',
    description: 'A luxurious slab of dark rich cacao chocolate brownie with molten fudge inside, served warm with rich dark chocolate chips and single mint sprig on top.',
    price: 139,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=600',
    isVegetarian: true,
    isChefSpecial: true,
    prepTime: '4 min',
    calories: 350
  }
];

export const SPECIAL_COMBOS: SpecialCombo[] = [
  {
    id: 'c1',
    name: 'The 80 Club Signature Feast',
    description: 'Get our award-winning Classique Double-Cheese Burger, paired with hot Loaded Gunpowder Fries, and the giant Salted Caramel Silk Shake. The ultimate party meal.',
    originalPrice: 557,
    promoPrice: 449,
    items: ['The Classique Double-Cheese', 'Loaded Gunpowder Craft Fries', 'Salted Caramel Silk Shake'],
    badge: 'Save 20%',
    image: '/src/assets/images/hero_spread_1781583965459.jpg'
  },
  {
    id: 'c2',
    name: 'Italian Duo Delizia',
    description: 'A cozy lunch box featuring Truffle-Infused Alfredo Penne, a side portion of Garlic Herb Glazed Wings OR Crispy Cheese Fire Poppers, alongside the Afonso Mango-Mint Refresher.',
    originalPrice: 697,
    promoPrice: 549,
    items: ['Truffle-Infused Alfredo Penne', 'Garlic Herb Glazed Wings (or Veg Poppers)', 'Afonso Mango-Mint Refresher'],
    badge: 'Chef Choice',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Bejagama Neeraj Kumar',
    role: 'Product Lead & Tech Founder',
    bio: 'B.Tech AI & ML (Roll: 252U1R6031). Driving technical strategy and design systems to deliver world-class digital brand presence for cloud kitchens.',
    avatarLetter: 'N'
  },
  {
    name: 'Bingi Manikanta',
    role: 'Director of Kitchen Operations',
    bio: 'B.Tech AI & ML (Roll: 252U1R6033). Optimizing supply chain logistics, partner integrations (Swiggy/Zomato), and rapid delivery execution times.',
    avatarLetter: 'M'
  },
  {
    name: 'Damera Sathwik Reddy',
    role: 'Flavors Innovator & Menu Director',
    bio: 'B.Tech AI & ML (Roll: 252U1R6056). Curating high-grade fusion recipes and selecting high-contrast local spices to cultivate unforgettable food memories.',
    avatarLetter: 'S'
  }
];

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    area: 'Central Business District (0 - 3 km)',
    status: 'Free Delivery',
    minOrder: 149,
    estimatedTime: '20-25 mins'
  },
  {
    area: 'Residential Suburbs & IT Parks (3 - 6 km)',
    status: 'Standard',
    minOrder: 249,
    estimatedTime: '30-35 mins'
  },
  {
    area: 'Extended City Borders (6 - 8 km)',
    status: 'Extended',
    minOrder: 399,
    estimatedTime: '40-45 mins'
  }
];

// Mock restaurant profiling links. In actual setting, client provides these.
export const PARTNER_LINKS = {
  swiggy: 'https://www.swiggy.com/city/hyderabad/the-80-club-gachibowli-rest1299511',
  zomato: 'https://www.zomato.com/bangalore/food-club-shanti-nagar-bangalore/order',
  whatsapp: 'https://wa.me/916302078328?text=Hi,%20I%20would%20like%20to%20order%20from%20The%2080%20Club',
  phone: '+91 6302078328',
  email: 'hello@the80club.com',
  address: '80 Club Cloud Hub, Ground Floor, Sector 4, Hyderabad, Telangana, 500081',
  operatingHours: '11:00 AM - 12:00 AM (Midnight), Everyday'
};
