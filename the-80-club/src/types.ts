export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian: boolean;
  isSpicy?: boolean;
  isBestSeller?: boolean;
  isChefSpecial?: boolean;
  calories?: number;
  prepTime?: string; // e.g. "15-20 min"
}

export interface FoodCategory {
  id: string;
  name: string;
  iconName: string; // lucide-react icon name
  description: string;
}

export interface SpecialCombo {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  promoPrice: number;
  items: string[];
  badge: string;
  image: string;
}

export interface DeliveryZone {
  area: string;
  status: 'Free Delivery' | 'Standard' | 'Extended';
  minOrder: number;
  estimatedTime: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarLetter: string;
}
