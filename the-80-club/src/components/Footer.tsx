import React from 'react';
import { ChefHat, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { PARTNER_LINKS } from '../data';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-neutral-300 font-sans border-t-4 border-[#1A1A1A] py-12 md:py-16 text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 text-left cursor-pointer focus:outline-none"
            >
              <div className="bg-[#FF5C00] text-white p-2 rounded-xl border border-white/20 shadow-[1.5px_1.5px_0px_0px_white]">
                <ChefHat className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-black text-white text-lg sm:text-xl tracking-tight leading-none block">
                  THE <span className="text-[#FF5C00]">80</span> CLUB
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[#FF5C00] font-bold uppercase block mt-0.5">
                  Cloud Kitchen Site
                </span>
              </div>
            </button>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              We are a premium delivery-only cloud kitchen workspace dedicated to delivering high-concept soul food (loaded burgers, truffle alfredo pastas) to your desk under 30 minutes.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm">
              <span className="text-neutral-400 font-bold">Fast delivery partner is:</span>
              <span className="px-2 py-0.5 bg-[#FC8019] rounded text-white font-extrabold text-[10px] border border-white/10 uppercase tracking-wider">
                Swiggy
              </span>
              <span className="px-2 py-0.5 bg-[#CB202D] rounded text-white font-extrabold text-[10px] border border-white/10 uppercase tracking-wider">
                Zomato
              </span>
            </div>
          </div>

          {/* Col 2: Useful navigation links */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-white font-display font-black text-sm uppercase tracking-wider">
              Navigation Links
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-[#FF5C00] cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-[#FF5C00] cursor-pointer"
                >
                  Our Culinary Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('combos')}
                  className="hover:text-[#FF5C00] cursor-pointer"
                >
                  Featured Combo Meals
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#FF5C00] cursor-pointer"
                >
                  About Our Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('order')}
                  className="hover:text-[#FF5C00] cursor-pointer"
                >
                  Quick Partner Order Pages
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact quick reference */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-white font-display font-black text-sm uppercase tracking-wider">
              Quick Contact
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-semibold">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4.5 w-4.5 text-[#FF5C00] shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-xs font-semibold">Sector 4, Jubilee Hills Hub, Hyderabad, TG</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4.5 w-4.5 text-[#FF5C00] shrink-0" />
                <a href={`tel:${PARTNER_LINKS.phone}`} className="hover:text-[#FF5C00] text-[#FF5C00] font-black">
                  {PARTNER_LINKS.phone}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4.5 w-4.5 text-[#FF5C00] shrink-0" />
                <a href={`mailto:${PARTNER_LINKS.email}`} className="hover:text-[#FF5C00] text-[#FF5C00] font-black">
                  {PARTNER_LINKS.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-neutral-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left font-semibold">
            <p className="text-xs text-neutral-400">
              &copy; {currentYear} The 80 Club. Built as our Internship Specification Engagement.
            </p>
            <p className="text-[10px] text-neutral-500 font-mono mt-1 font-bold">
              Curated under full guidance with The 80 Club Company. All rights reserved.
            </p>
          </div>

          {/* Personalization Tribute block to students */}
          <div className="bg-white/5 border border-neutral-800 rounded-xl px-4 py-3 text-right max-w-sm shadow-[2px_2px_0px_0px_#FF5C00]">
            <p className="text-[10px] font-mono tracking-widest text-[#FF5C00] font-black uppercase mb-1">
              Assigned Development Team
            </p>
            <div className="text-[11px] text-neutral-350 space-y-0.5 font-bold">
              <p>Bejagama Neeraj Kumar (Roll: 252U1R6031)</p>
              <p>Bingi Manikanta (Roll: 252U1R6033)</p>
              <p>Damera Sathwik Reddy (Roll: 252U1R6056)</p>
            </div>
            <p className="text-[9px] text-neutral-500 font-bold mt-1.5 flex items-center justify-end gap-1">
              <span>B.Tech AI & ML</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
