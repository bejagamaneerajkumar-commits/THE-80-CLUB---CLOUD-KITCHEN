import React from 'react';
import { ChefHat, Milestone, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FDFCF8] py-20 border-t-2 border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="about-story"
          >
            <span className="font-mono text-xs text-[#FF5C00] font-black tracking-widest uppercase">
              Our Food Story
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mt-2 mb-6">
              Who We Are: The Culinary Story of <span className="text-[#FF5C00] italic">The 80 Club</span>
            </h3>
            <p className="text-neutral-750 text-sm sm:text-base leading-relaxed mb-6">
              Born as a pure passion experiment by three young AI & ML technologists with a serious craving for superior fast-casual diner food, <strong className="text-[#FF5C00]">The 80 Club</strong> is a boutique, delivery-only cloud kitchen brand. We saw that traditional delivery food was either mass-produced, frozen, or compromised during the ride to your doorstep.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              We decided to hack the equation. By taking dining rooms out of the budget, we redirected resources entirely toward hiring elite culinary stars, sourcing top-grade local organic vegetables, importing genuine parmesan slabs, and selecting butter-baked brioches. The result? Pure flavor explosions, packed to stay perfect during delivery.
            </p>

            {/* Micro Highlights list */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-[#FF5C00] text-white p-2 rounded-xl border border-[#1A1A1A] mt-1 shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="font-display font-black text-[#1A1A1A] text-sm">Strict Hygiene Standards</h5>
                  <p className="text-neutral-500 text-xs mt-0.5 font-medium">Double-masked, temperature-checked staff daily.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white text-[#1A1A1A] p-2 rounded-xl border border-[#1A1A1A] mt-1 shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
                  <HeartPulse className="h-4.5 w-4.5 text-[#FF5C00]" />
                </div>
                <div>
                  <h5 className="font-display font-black text-[#1A1A1A] text-sm">Wellness Friendly Sourcing</h5>
                  <p className="text-neutral-500 text-xs mt-0.5 font-medium">High-oleic cooking oil, zero trans fat, no MSG.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values Illustration Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] rounded-[24px] p-6 sm:p-8 relative overflow-hidden shadow-[4px_4px_0px_0px_#FF5C00]"
            id="about-visual-highlights"
          >
            {/* Visual background details */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#FF5C00]/5 blur-3xl" />
            
            <h4 className="font-display font-black text-white text-lg mb-6 flex items-center gap-2">
              <Milestone className="h-5 w-5 text-[#FF5C00]" />
              <span>How We Maintain Our Excellence Guarantee</span>
            </h4>

            {/* steps progress */}
            <div className="space-y-6">
              {/* step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-[#FF5C00] text-white border border-white font-mono font-bold text-xs flex items-center justify-center">
                    01
                  </span>
                  <div className="w-0.5 h-12 bg-neutral-800" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-white text-sm sm:text-base">No Preservatives / Scratch Cooking</h5>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-1">
                    Every brioche burger bun is butter-brushed and toasted on our flat top griddle on order. Patties are smashed fresh daily.
                  </p>
                </div>
              </div>

              {/* step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-[#FF5C00] text-white border border-white font-mono font-bold text-xs flex items-center justify-center">
                    02
                  </span>
                  <div className="w-0.5 h-12 bg-neutral-800" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-white text-sm sm:text-base">Optimized Delivery Science</h5>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-1">
                    We use compartmentalized thermal insulation foil boxes to lock in steam so that your crispy loaded fries arrive crispy, not soggy.
                  </p>
                </div>
              </div>

              {/* step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-[#FF5C00] text-white border border-white font-mono font-bold text-xs flex items-center justify-center">
                    03
                  </span>
                </div>
                <div>
                  <h5 className="font-display font-bold text-white text-sm sm:text-base">Customer Feedback Loop</h5>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-1">
                    We review performance logs daily. If a wrap or shake did not hit perfection, we immediately optimize the prep times.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Team / Founders Section */}
        <div className="border-t border-[#1A1A1A]/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-mono text-[#FF5C00] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-1.5">
              <ChefHat className="h-4 w-4" />
              The Assigned Team & Founders
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight mt-2 mb-4">
              Meet The Minds Behind The 80 Club
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm font-bold">
              We translate rigorous technical logic and algorithmic optimization principles directly into designing delicious and logistics-efficient cloud kitchen experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-founders-grid">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-[#1A1A1A] rounded-[24px] p-6 text-left hover:translate-y-[-2px] shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[6px_6px_0px_0px_#1A1A1A] transition-all duration-200 flex flex-col justify-between"
                id={`founder-card-${index}`}
              >
                <div>
                  {/* Custom initials avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF5C00] text-white border-1.5 border-[#1A1A1A] font-mono font-black text-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#1A1A1A]">
                      {member.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-[#1A1A1A] text-base">
                        {member.name}
                      </h4>
                      <p className="text-[#FF5C00] text-xs font-mono font-bold mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 font-extrabold">
                  <span>Branch: B.Tech AI & ML</span>
                  <span className="text-[#FF5C00]">Active Partner</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
