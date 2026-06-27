import React, { useState, useMemo } from 'react';
import {
  LayoutGrid,
  Beef,
  CookingPot,
  Pizza,
  CupSoda,
  Search,
  Check,
  Flame,
  ChefHat,
  Heart,
  Timer,
  Sparkles,
  PartyPopper,
  HandPlatter,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FOOD_CATEGORIES, MENU_ITEMS, SPECIAL_COMBOS, PARTNER_LINKS } from '../data';
import { MenuItem } from '../types';

interface MenuProps {
  scrollToSection: (id: string) => void;
}

export default function Menu({ scrollToSection }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Toggle favorite for custom interaction
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Maps icon names to actual Lucide Icon Components
  const renderCategoryIcon = (iconName: string) => {
    const iconProps = { className: 'h-4 w-4 sm:h-5 sm:w-5' };
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid {...iconProps} />;
      case 'Beef':
        return <Beef {...iconProps} />;
      case 'CookingPot':
        return <CookingPot {...iconProps} />;
      case 'Pizza':
        return <Pizza {...iconProps} />;
      case 'CupSoda':
        return <CupSoda {...iconProps} />;
      default:
        return <LayoutGrid {...iconProps} />;
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = !vegOnly || item.isVegetarian;
      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [selectedCategory, searchQuery, vegOnly]);

  return (
    <div className="bg-[#FDFCF8] py-20 border-t-2 border-[#1A1A1A]">
      {/* 1. MAIN MENU SECTION */}
      <section id="menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-[#FF5C00] font-black uppercase tracking-widest text-xs">
            Indulge Your Hunger
          </span>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mt-1.5 mb-4">
            Browse Our Digital Menu
          </h3>
          <p className="text-neutral-700">
            Freshly prepared, packaged with heat-retaining technology, and ready to fly to your address. Click any item to begin your order journey!
          </p>
        </div>

        {/* Filters/Search Controls Toolbar */}
        <div className="bg-white border-2 border-[#1A1A1A] rounded-[24px] p-4 sm:p-6 mb-10 shadow-[4px_4px_0px_0px_#1A1A1A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="lg:col-span-4 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food by name, ingredient..."
                className="w-full bg-[#FDFCF8] border-2 border-[#1A1A1A] focus:border-[#FF5C00] rounded-xl py-3 pl-11 pr-4 text-[#1A1A1A] text-sm outline-none font-medium transition-colors"
                id="menu-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500 hover:text-[#1A1A1A]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Buttons Carousel-like container */}
            <div className="lg:col-span-5 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {FOOD_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold border-2 border-[#1A1A1A] transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#FF5C00] text-white shadow-[2px_2px_0px_0px_#1A1A1A]'
                      : 'bg-white text-[#1A1A1A] hover:bg-neutral-50 shadow-[2px_2px_0px_0px_#1A1A1A]'
                  }`}
                  id={`category-tab-${cat.id}`}
                >
                  {renderCategoryIcon(cat.iconName)}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Veg Switch / Stats Toggle */}
            <div className="lg:col-span-3 flex items-center justify-end gap-3 border-t lg:border-t-0 pt-4 lg:pt-0 border-neutral-100">
              <label className="flex items-center gap-2 cursor-pointer" id="veg-toggle-wrapper">
                <span className="text-xs sm:text-sm text-[#1A1A1A] font-extrabold">
                  Veg Only (🌱)
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={vegOnly}
                    onChange={() => setVegOnly(!vegOnly)}
                    className="sr-only peer"
                    id="veg-switch"
                  />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500" />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="relative min-h-[300px]" id="menu-items-grid-wrapper">
          <AnimatePresence mode="popLayout">
            {filteredItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center border-2 border-dashed border-[#1A1A1A] rounded-[24px] bg-white shadow-[4px_4px_0px_0px_#1A1A1A]"
                id="menu-no-results"
              >
                <div className="text-4xl mb-4">🍽️</div>
                <h4 className="text-[#1A1A1A] font-black text-lg">No Items Match Your Filter</h4>
                <p className="text-neutral-600 text-sm mt-1 max-w-sm mx-auto">
                  Try clearing your search keyword, disabling Veg-only switch, or browsing other categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setVegOnly(false);
                  }}
                  className="mt-4 px-4 py-2 bg-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] text-[#1A1A1A] hover:bg-neutral-50 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Reset All Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col bg-white border-2 border-[#1A1A1A] rounded-[24px] overflow-hidden hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-200"
                    id={`food-card-${item.id}`}
                  >
                    {/* Visual Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border-b-2 border-[#1A1A1A]">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        id={`food-img-${item.id}`}
                      />

                      {/* Hot Overlays */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        {/* Vegetarian Indicator */}
                        {item.isVegetarian ? (
                          <span className="flex items-center gap-1 px-2.5 py-1 bg-white border border-[#1A1A1A] text-emerald-700 text-[10px] uppercase font-bold tracking-wider rounded-lg shadow-[1px_1px_0px_0px_#1A1A1A]">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block ring-2 ring-emerald-500/20" />
                            Veg
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 px-2.5 py-1 bg-white border border-[#1A1A1A] text-red-650 text-[10px] uppercase font-bold tracking-wider rounded-lg shadow-[1px_1px_0px_0px_#1A1A1A]">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block" />
                            Non-Veg
                          </span>
                        )}

                        {/* Best Seller or Chef Special Badge */}
                        {item.isBestSeller && (
                          <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-300 text-[#1A1A1A] border border-[#1A1A1A] text-[10px] uppercase font-bold tracking-wider rounded-lg shadow-[1px_1px_0px_0px_#1A1A1A]">
                            <Sparkles className="h-3 w-3" />
                            Best Seller
                          </span>
                        )}

                        {item.isChefSpecial && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-[#FF5C00] text-white border border-[#1A1A1A] text-[10px] uppercase font-bold tracking-wider rounded-lg shadow-[1px_1px_0px_0px_#1A1A1A]">
                            <ChefHat className="h-3 w-3" />
                            Chef Special
                          </span>
                        )}
                      </div>

                      {/* Side Actions (Favorite Button) */}
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className="absolute top-3 right-3 p-2 bg-white border border-[#1A1A1A] hover:bg-neutral-50 hover:text-red-500 text-neutral-700 rounded-xl transition-all shadow-[2px_2px_0px_0px_#1A1A1A] cursor-pointer"
                        title={favorites.includes(item.id) ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        <Heart
                          className={`h-4.5 w-4.5 transition-colors ${
                            favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''
                          }`}
                        />
                      </button>

                      {/* Prep estimation bar */}
                      <div className="absolute bottom-3 right-3 bg-white px-2.5 py-1 border border-[#1A1A1A] rounded-lg flex items-center gap-1 font-mono text-[10px] text-[#1A1A1A] shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
                        <Timer className="h-3 w-3 text-[#FF5C00]" />
                        <span className="font-bold">{item.prepTime || '15 min'}</span>
                      </div>
                    </div>

                    {/* Meta info container */}
                    <div className="p-5 flex-1 flex flex-col text-left">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="font-display font-black text-[#1A1A1A] text-lg group-hover:text-[#FF5C00] transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-display font-black text-[#FF5C00] text-xl tracking-tight">
                          ₹{item.price}
                        </span>
                      </div>

                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                        {item.description}
                      </p>

                      <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[11px] text-neutral-500 font-bold">
                        <span>{item.calories ? `${item.calories} kCal` : 'Fresh Prep'}</span>
                        <button
                          onClick={() => scrollToSection('order')}
                          className="flex items-center gap-1 px-3 py-1.5 bg-[#FF5C00]/10 border border-[#1A1A1A] text-[#FF5C00] hover:bg-[#FF5C00] hover:text-white rounded-lg font-bold transition-all cursor-pointer shadow-[1.5px_1.5px_0px_0px_#1A1A1A] active:translate-y-[0.5px]"
                        >
                          Order Online →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 2. COMBO / MEAL DEALS HIGHLIGHT BOX */}
      <section id="combos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white border-2 border-[#1A1A1A] rounded-[24px] p-6 md:p-10 relative overflow-hidden shadow-[8px_8px_0px_0px_#1A1A1A]">
          {/* Radial gold glow backing */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF5C00]/5 blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left relative z-10">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-[#FF5C00] font-black uppercase tracking-widest flex items-center gap-2">
                <PartyPopper className="h-4 w-4" />
                Featured Combo Offers
              </span>
              <h3 className="font-display font-black text-[#1A1A1A] text-3xl sm:text-4xl mt-3 mb-4 tracking-tight leading-none">
                Craving for <span className="text-[#FF5C00] italic underline decoration-[#1A1A1A]/40">More?</span> Get the Bundle.
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                Engineered for corporate lunches, flatmate parties, or lazy weekend binges. The 80 Club signature combo packs deliver complete gourmet satisfaction while matching lighter budgets.
              </p>

              {/* Combo Highlight 1 */}
              {SPECIAL_COMBOS.map((combo) => (
                <div
                  key={combo.id}
                  className="bg-[#FDFCF8] border-2 border-[#1A1A1A] rounded-[20px] p-5 mb-4 shadow-[3px_3px_0px_0px_#1A1A1A]"
                  id={`combo-block-${combo.id}`}
                >
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <div>
                      <span className="px-2.5 py-0.5 bg-[#FF5C00] text-white border border-[#1A1A1A] text-[9px] font-extrabold uppercase rounded-md tracking-wider inline-block mb-1.5 shadow-[1px_1px_0px_0px_#1A1A1A]">
                        {combo.badge}
                      </span>
                      <h5 className="font-display font-black text-[#1A1A1A] text-base">
                        {combo.name}
                      </h5>
                    </div>
                    <div className="text-right">
                      <span className="line-through text-neutral-400 text-xs block font-semibold">
                        ₹{combo.originalPrice}
                      </span>
                      <span className="font-display font-black text-[#FF5C00] text-xl block leading-none">
                        ₹{combo.promoPrice}
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-xs mb-3">{combo.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1A1A1A]/10">
                    <span className="text-[9px] font-mono tracking-wider uppercase text-neutral-500 font-extrabold">
                      Includes:
                    </span>
                    {combo.items.map((it, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-white border border-[#1A1A1A] px-2 py-0.5 rounded-md text-[#1A1A1A] font-bold shadow-[1px_1px_0px_0px_#1A1A1A]"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollToSection('order')}
                  className="px-6 py-3 bg-[#FF5C00] hover:bg-[#FF5C00]/95 text-white border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] font-black rounded-xl text-sm transition-all cursor-pointer text-center hover:translate-y-[-1px]"
                >
                  Order Combos Instantly
                </button>
                <a
                  href={`tel:${PARTNER_LINKS.phone}`}
                  className="px-6 py-3 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] font-black hover:bg-neutral-50 rounded-xl text-xs sm:text-sm text-center transition-all hover:translate-y-[-1px]"
                >
                  Inquire for Corporate Parties
                </a>
              </div>
            </div>

            {/* Visual Spread */}
            <div className="lg:col-span-7 h-full w-full flex items-center justify-center">
              <div className="relative w-full aspect-video sm:aspect-[16/10] bg-neutral-100 rounded-[20px] overflow-hidden border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                <img
                  src={SPECIAL_COMBOS[0].image}
                  alt="Special combo meal spread"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left p-4 bg-white border-2 border-[#1A1A1A] rounded-xl shadow-[3px_3px_0px_0px_#1A1A1A]">
                  <p className="font-display font-black text-[#1A1A1A] text-sm">
                    {SPECIAL_COMBOS[0].name}
                  </p>
                  <p className="text-neutral-600 text-[11px] mt-0.5 font-medium">
                    Our highest rating feast bundle, enjoyed by over 5,000+ happy dynamic eaters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
