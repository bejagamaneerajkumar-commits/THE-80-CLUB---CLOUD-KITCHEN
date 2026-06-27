import { Flame, Zap, Award, ArrowRight, Star, CookingPot } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE, PARTNER_LINKS } from '../data';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-[#FDFCF8] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-[#FF5C00]/15 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col text-left"
            id="hero-content-left"
          >
            {/* Tag / Quality Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border-1.5 border-[#1A1A1A] rounded-full w-fit mb-6 shadow-[2px_2px_0px_0px_#1A1A1A]">
              <Flame className="h-4 w-4 text-[#FF5C00] animate-pulse" />
              <span className="font-mono text-[10px] text-[#1A1A1A] tracking-wider font-extrabold uppercase">
                #1 Premium Cloud Kitchen Space
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1] mb-6">
              Gourmet Eats <span className="text-[#FF5C00] font-sans italic text-[0.98em]">Freshly Crafted</span> & Delivered Fast.
            </h2>

            {/* Tagline */}
            <p className="text-neutral-700 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              No physical storefront, no frozen food shortcuts, just bold high-concept gourmet flavors. <strong className="text-[#FF5C00]">The 80 Club</strong> brings hand-formed smash burgers, truffle parmesan creations, and rich caramel milkshakes directly to your door.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-10">
              <button
                onClick={() => scrollToSection('order')}
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FF5C00] hover:bg-[#FF5C00]/95 text-white font-black rounded-2xl text-base border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:scale-98 transition-all duration-150 cursor-pointer"
                id="hero-cta-order-now"
              >
                <span>Order Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => scrollToSection('menu')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-[#1A1A1A]/5 text-[#1A1A1A] font-black rounded-2xl text-base border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:scale-98 transition-all duration-150 cursor-pointer"
                id="hero-cta-view-menu"
              >
                <span>Explore Food Menu</span>
              </button>
            </div>

            {/* Order Channels logos indicators */}
            <div className="pt-6 border-t border-[#1A1A1A]/10">
              <p className="font-mono text-[10px] tracking-widest text-[#1A1A1A]/70 uppercase mb-4 font-bold">
                Instant delivery available on
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#1A1A1A]">
                <a
                  href={PARTNER_LINKS.swiggy}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-50 text-[#FC8019] border-1.5 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all hover:translate-y-[-1px]"
                  id="hero-partner-swiggy"
                >
                  Swiggy
                </a>
                <a
                  href={PARTNER_LINKS.zomato}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-50 text-[#E23744] border-1.5 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all hover:translate-y-[-1px]"
                  id="hero-partner-zomato"
                >
                  Zomato
                </a>
                <a
                  href={PARTNER_LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-50 text-emerald-600 border-1.5 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all hover:translate-y-[-1px]"
                  id="hero-partner-whatsapp"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Creative Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative lg:-mr-10 h-full w-full flex justify-center items-center"
            id="hero-content-right"
          >
            {/* Visual Frame */}
            <div className="relative w-full max-w-lg md:max-w-xl aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[24px] overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] group">
              <img
                src={HERO_IMAGE}
                alt="Signature selection of gourmet food from The 80 Club"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6s] ease-out"
                id="hero-banner-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-80" />

              {/* Float Badge 1 */}
              <div className="absolute top-4 left-4 bg-white border-2 border-[#1A1A1A] rounded-[16px] p-3 flex items-center gap-2.5 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <div className="bg-[#FF5C00]/10 p-1.5 rounded-lg border border-[#1A1A1A]">
                  <Star className="h-4.5 w-4.5 text-[#FF5C00] fill-[#FF5C00] animate-pulse" />
                </div>
                <div className="text-left">
                  <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider font-extrabold">
                    Highly Rated
                  </p>
                  <p className="font-sans font-extrabold text-[#1A1A1A] text-xs">
                    4.8★ on Swiggy
                  </p>
                </div>
              </div>

              {/* Float Badge 2 */}
              <div className="absolute bottom-4 right-4 bg-white border-2 border-[#1A1A1A] rounded-[16px] p-3 flex items-center gap-2.5 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <div className="bg-emerald-50 p-1.5 rounded-lg border border-[#1A1A1A]">
                  <CookingPot className="h-4.5 w-4.5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="font-sans font-extrabold text-[#1A1A1A] text-xs">
                    Freshly Prepared
                  </p>
                  <p className="font-mono text-[9px] text-emerald-600 font-bold">
                    100% Chef-Crafted
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Stats / Selling Points */}
        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* point 1 */}
          <div className="bento-card">
            <div className="bg-[#FF5C00] text-white border-1.5 border-[#1A1A1A] p-3 rounded-xl w-fit mb-4 shadow-[2px_2px_0px_0px_#1A1A1A]">
              <Flame className="h-5 w-5" />
            </div>
            <h4 className="font-display font-black text-lg text-[#1A1A1A] mb-2">
              Freshly Made on Order
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              We never use frozen premade patties or canned shortcuts. Every burger is hand-shaped, every sauce cooked daily in small batches.
            </p>
          </div>

          {/* point 2 */}
          <div className="bento-card">
            <div className="bg-white text-[#1A1A1A] border-1.5 border-[#1A1A1A] p-3 rounded-xl w-fit mb-4 shadow-[2px_2px_0px_0px_#1A1A1A]">
              <Zap className="h-5 w-5 text-[#FF5C00]" />
            </div>
            <h4 className="font-display font-black text-lg text-[#1A1A1A] mb-2">
              Blitz Delivery Radius
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Engineered for delivery first. Located centrally to package and mobilize within minutes, assuring piping-hot fries and gooey cheeses under 30m.
            </p>
          </div>

          {/* point 3 */}
          <div className="bento-card">
            <div className="bg-[#1A1A1A] text-white border-1.5 border-[#1A1A1A] p-3 rounded-xl w-fit mb-4 shadow-[2px_2px_0px_0px_#FF5C00]">
              <Award className="h-5 w-5 text-[#FF5C00]" />
            </div>
            <h4 className="font-display font-black text-lg text-[#1A1A1A] mb-2">
              Signature Fusion Flavors
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Curated recipes mixing high-grade brioches and signature white truffles with local aromatic gunpowder spices for incredible taste punch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
