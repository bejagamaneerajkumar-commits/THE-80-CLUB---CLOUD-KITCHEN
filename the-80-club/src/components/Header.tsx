import { useState, useEffect } from 'react';
import { ChefHat, Menu as MenuIcon, X, Phone, MessageSquarePlus, MapPin, HandPlatter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PARTNER_LINKS } from '../data';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'combos', label: 'Special Offers' },
    { id: 'about', label: 'About Us' },
    { id: 'order', label: 'Order Now' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_10px_rgba(26,26,26,0.05)] border-b-2 border-[#1A1A1A] py-3'
            : 'bg-[#FDFCF8]/80 backdrop-blur-sm border-b border-[#1A1A1A]/10 py-4'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
              id="header-logo-btn"
            >
              <div className="bg-[#FF5C00] text-white p-2 rounded-xl border-[1.5px] border-[#1A1A1A] group-hover:scale-105 transition-transform duration-300 shadow-[2px_2px_0px_0px_#1A1A1A]">
                <ChefHat className="h-5.5 w-5.5" />
              </div>
              <div>
                <h1 className="font-display font-black tracking-tight text-[#1A1A1A] text-lg sm:text-xl leading-none">
                  THE <span className="text-[#FF5C00]">80</span> CLUB
                </h1>
                <p className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase mt-0.5">
                  Premium Cloud Kitchen
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer relative ${
                    activeSection === item.id
                      ? 'text-[#FF5C00]'
                      : 'text-[#1A1A1A] hover:text-[#FF5C00] hover:bg-[#1A1A1A]/5'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FF5C00] rounded-full"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Sticky Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={PARTNER_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 border-1.5 border-[#1A1A1A] text-[#1A1A1A] rounded-lg text-xs font-bold hover:bg-[#1A1A1A]/5 transition-colors shadow-[2px_2px_0px_0px_#1A1A1A]"
                id="header-quick-whatsapp"
              >
                <MessageSquarePlus className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </a>
              <button
                onClick={() => handleNavClick('order')}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#FF5C00] text-white font-bold rounded-lg text-xs border-1.5 border-[#1A1A1A] hover:bg-[#FF5C00]/90 hover:translate-y-[-1px] transition-all shadow-[2px_2px_0px_0px_#1A1A1A] active:scale-95 duration-105 cursor-pointer"
                id="header-quick-order"
              >
                <HandPlatter className="h-4 w-4" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-2">
              <button
                onClick={() => handleNavClick('order')}
                className="bg-[#FF5C00] text-white p-2 rounded-xl text-xs font-bold border-[1.5px] border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-colors cursor-pointer"
                id="mobile-quick-order-btn"
              >
                <HandPlatter className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-white text-[#1A1A1A] border-1.5 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-neutral-100"
                id="hamburger-btn"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-[#FDFCF8] border-b-2 border-[#1A1A1A] shadow-lg overflow-hidden py-4 px-4"
            id="mobile-navigation-drawer"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-bold transition-all ${
                    activeSection === item.id
                      ? 'bg-[#FF5C00]/10 text-[#FF5C00] border-l-4 border-[#FF5C00] pl-3'
                      : 'text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 grid grid-cols-2 gap-2">
              <a
                href={PARTNER_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-white border-1.5 border-[#1A1A1A] rounded-lg text-sm text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-neutral-50"
                id="mobile-wa-order-btn"
              >
                <MessageSquarePlus className="h-4 w-4 text-emerald-650" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => handleNavClick('order')}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#FF5C00] text-white border-1.5 border-[#1A1A1A] rounded-lg text-sm font-bold shadow-[2px_2px_0px_0px_#1A1A1A] active:scale-95 transition-all"
                id="mobile-action-order"
              >
                <HandPlatter className="h-4 w-4" />
                <span>Order Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
