import React, { useState } from 'react';
import { MessageSquarePlus, ShoppingBag, ExternalLink, Smartphone, Info, Receipt, Plus, Minus, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { MENU_ITEMS, PARTNER_LINKS } from '../data';

export default function OrderNow() {
  const [selectedItems, setSelectedItems] = useState<{ [id: string]: number }>({});
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const availableItems = MENU_ITEMS;

  const handleAddItem = (id: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleMinusItem = (id: string) => {
    setSelectedItems((prev) => {
      const copy = { ...prev };
      const currentVal = copy[id];
      if (currentVal === undefined || currentVal <= 1) {
        delete copy[id];
      } else {
        copy[id] = currentVal - 1;
      }
      return copy;
    });
  };

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((total, [id, qty]) => {
      const item = availableItems.find((i) => i.id === id);
      return total + (item ? item.price * Number(qty) : 0);
    }, 0);
  };

  const getWhatsAppLink = () => {
    const baseMessage = 'Hi, I would like to order from The 80 Club';
    
    // Check if user chose items via the custom builder
    const itemsList = Object.entries(selectedItems);
    if (itemsList.length === 0) {
      return `https://wa.me/916302078328?text=${encodeURIComponent(baseMessage)}`;
    }

    let detailedMessage = `${baseMessage}:\n\n`;
    itemsList.forEach(([id, qty]) => {
      const item = availableItems.find((i) => i.id === id);
      if (item) {
        detailedMessage += `• ${qty}x ${item.name} (₹${item.price * Number(qty)})\n`;
      }
    });

    detailedMessage += `\nTotal: ₹${calculateTotal()}`;
    
    if (address.trim()) {
      detailedMessage += `\n📍 Deliver to: ${address}`;
    }
    if (note.trim()) {
      detailedMessage += `\n💬 Note: ${note}`;
    }

    return `https://wa.me/916302078328?text=${encodeURIComponent(detailedMessage)}`;
  };

  return (
    <section
      id="order"
      className="bg-[#FDFCF8] py-20 border-t-2 border-[#1A1A1A] text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[#FF5C00] font-black uppercase tracking-widest text-xs">
            Ready to Feast?
          </span>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mt-1.5 mb-4">
            Order Now on Your Favorite Channel
          </h3>
          <p className="text-neutral-700">
            We are partnered with Swiggy and Zomato for automated lightning-fast delivery. Or, order directly on WhatsApp for custom billing, personalized notes, and a flat 10% discount!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Third Party Partner Platforms (Swiggy / Zomato) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Swiggy Card */}
            <div className="bg-white border-2 border-[#1A1A1A] rounded-[24px] p-6 sm:p-8 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FC8019]/5 blur-2xl pointer-events-none group-hover:bg-[#FC8019]/10 transition-colors" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-orange-50 text-[#FC8019] rounded-2xl border border-[#1A1A1A] shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[#1A1A1A] text-lg sm:text-xl">
                    Order via Swiggy
                  </h4>
                  <p className="font-mono text-[10px] uppercase text-[#FC8019] font-black tracking-widest">
                    Best for Super Saver Deals
                  </p>
                </div>
              </div>

              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 relative z-10">
                Use your Swiggy One membership to receive free deliveries, apply flat coupon discounts, and trace our designated food courier in real-time.
              </p>

              <a
                href={PARTNER_LINKS.swiggy}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#FC8019] border-2 border-[#1A1A1A] hover:bg-[#FC8019]/90 text-white font-black rounded-2xl text-sm sm:text-base transition-all shadow-[2px_2px_0px_0px_#1A1A1A] cursor-pointer"
                id="external-link-swiggy"
              >
                <span>Go to Swiggy Profile</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Zomato Card */}
            <div className="bg-white border-2 border-[#1A1A1A] rounded-[24px] p-6 sm:p-8 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#CB202D]/5 blur-2xl pointer-events-none group-hover:bg-[#CB202D]/10 transition-colors" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-red-550/10 text-[#CB202D] rounded-2xl border border-[#1A1A1A] shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
                  <Smartphone className="h-6 w-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[#1A1A1A] text-lg sm:text-xl">
                    Order via Zomato
                  </h4>
                  <p className="font-mono text-[10px] uppercase text-[#CB202D] font-black tracking-widest">
                    Best for Instant Support
                  </p>
                </div>
              </div>

              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 relative z-10">
                Redeem continuous credits, search detailed categories, read community reviews, and get customized packaging configurations.
              </p>

              <a
                href={PARTNER_LINKS.zomato}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#E23744] border-2 border-[#1A1A1A] hover:bg-[#E23744]/90 text-white font-black rounded-2xl text-sm sm:text-base transition-all shadow-[2px_2px_0px_0px_#1A1A1A] cursor-pointer"
                id="external-link-zomato"
              >
                <span>Go to Zomato Profile</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Order Call Info */}
            <div className="p-4 bg-white border-2 border-[#1A1A1A] rounded-2xl flex gap-3 shadow-[2px_2px_0px_0px_#1A1A1A]">
              <Info className="h-5 w-5 text-[#FF5C00] shrink-0 mt-0.5" />
              <p className="text-neutral-600 text-xs leading-relaxed font-medium">
                <strong className="text-[#FF5C00] font-bold">Minimum Order Notice:</strong> Third party order minimums vary by location. Direct WhatsApp and Call orders require a minimum subtotal of <strong className="text-[#1A1A1A] font-extrabold">₹149</strong> for free delivery within 3km.
              </p>
            </div>
          </div>

          {/* RIGHT: High-Utility Direct WhatsApp Order Customizer */}
          <div className="lg:col-span-7 bg-white border-2 border-[#1A1A1A] rounded-[24px] p-6 sm:p-8 relative shadow-[4px_4px_0px_0px_#1A1A1A]">
            <div className="flex items-center justify-between border-b-2 border-[#1A1A1A]/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 border border-[#1A1A1A] rounded-xl shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
                  <MessageSquarePlus className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[#1A1A1A] text-base sm:text-lg">
                    Direct WhatsApp Order Builder
                  </h4>
                  <p className="text-xs text-neutral-500 font-bold">
                    Draft, summarize, and send your meal directly
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono bg-[#FF5C00] border border-[#1A1A1A] text-white font-extrabold px-2 py-1 rounded-md shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
                10% Direct Discount
              </span>
            </div>

            {/* Selector Grid of Items */}
            <p className="text-[#1A1A1A] text-xs sm:text-sm font-black mb-3">
              1. Customize Your Order Basket:
            </p>
            <div className="max-h-[190px] overflow-y-auto pr-1 space-y-2 mb-6 custom-scrollbar">
              {availableItems.map((item) => {
                const count = selectedItems[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-[#FDFCF8] border-2 border-[#1A1A1A] p-2.5 rounded-xl hover:border-[#FF5C00] transition-colors shadow-[2px_2px_0px_0px_#1A1A1A]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2 text-left">
                      <div className="h-10 w-10 rounded-lg overflow-hidden border border-[#1A1A1A] shrink-0 bg-neutral-150">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-display font-black text-[#1A1A1A] text-xs sm:text-sm truncate">
                          {item.name}
                        </h5>
                        <p className="text-[#FF5C00] text-xs font-black font-mono">₹{item.price}</p>
                      </div>
                    </div>

                    {/* Plus/minus buttons */}
                    <div className="flex items-center gap-2">
                      {count > 0 ? (
                        <>
                          <button
                            onClick={() => handleMinusItem(item.id)}
                            className="p-1 rounded-lg bg-white border border-[#1A1A1A] hover:bg-[#1A1A1A]/5 text-[#FF5C00] font-black shadow-[1.5px_1.5px_0px_0px_#1A1A1A] cursor-pointer"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="font-mono text-xs sm:text-sm font-black text-[#1A1A1A] min-w-[20px] text-center">
                            {count}
                          </span>
                        </>
                      ) : null}
                      <button
                        onClick={() => handleAddItem(item.id)}
                        className={`p-1 rounded-lg border border-[#1A1A1A] shadow-[1.5px_1.5px_0px_0px_#1A1A1A] transition-colors cursor-pointer ${
                          count > 0 ? 'bg-white hover:bg-neutral-55 text-[#FF5C00]' : 'bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-bold'
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery address & comments inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <label className="block text-[#1A1A1A] text-xs font-black mb-2">
                  2. Add Delivery Address (Optional):
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street name, Flat No., Area name..."
                  className="w-full bg-[#FDFCF8] border-2 border-[#1A1A1A] rounded-xl py-2.5 px-3.5 text-[#1A1A1A] text-xs font-semibold placeholder:text-neutral-400 outline-none focus:border-[#FF5C00]"
                />
              </div>
              <div className="text-left">
                <label className="block text-[#1A1A1A] text-xs font-black mb-2">
                  3. Cooking Notes / Free Gifts (Optional):
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Extra spicy, no onions, cutlery..."
                  className="w-full bg-[#FDFCF8] border-2 border-[#1A1A1A] rounded-xl py-2.5 px-3.5 text-[#1A1A1A] text-xs font-semibold placeholder:text-neutral-400 outline-none focus:border-[#FF5C00]"
                />
              </div>
            </div>

            {/* Receipt Summary Block */}
            {Object.keys(selectedItems).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-50/50 border-2 border-[#1A1A1A] rounded-2xl p-4 mb-6 text-left shadow-[2px_2px_0px_0px_#1A1A1A]"
              >
                <h5 className="font-display font-black text-emerald-800 text-xs flex items-center gap-1.5 mb-3">
                  <Receipt className="h-4 w-4 text-[#FF5C00]" />
                  <span>Interactive Receipt Estimation</span>
                </h5>
                <div className="space-y-1.5 border-b border-[#1A1A1A]/10 pb-3 mb-3">
                  {Object.entries(selectedItems).map(([id, qty]) => {
                    const item = availableItems.find((i) => i.id === id);
                    if (!item) return null;
                    return (
                      <div
                        key={id}
                        className="flex justify-between items-center text-xs text-neutral-600 font-bold"
                      >
                        <span>
                          {qty}x {item.name}
                        </span>
                        <span className="font-mono text-[#1A1A1A] font-extrabold">₹{item.price * Number(qty)}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center font-display">
                  <span className="text-xs font-black text-[#1A1A1A]">Subtotal Check:</span>
                  <span className="text-sm font-black text-[#FF5C00]">
                    ₹{calculateTotal()}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Large WhatsApp CTA */}
            <div>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#25D366] hover:bg-emerald-500 text-[#1A1A1A] border-2 border-[#1A1A1A] font-black rounded-2xl text-sm sm:text-base shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:translate-y-[-1px] text-center"
                id="whatsapp-dispatch-link"
              >
                <Send className="h-5 w-5" />
                <span>
                  {Object.keys(selectedItems).length > 0
                    ? `Order Pre-filled text on WhatsApp (₹${calculateTotal() || 0})`
                    : 'Order Pre-filled text on WhatsApp'}
                </span>
              </a>
              <p className="text-center font-mono text-[9px] text-neutral-500 uppercase tracking-wider mt-3 font-semibold">
                Pre-fills with: "Hi, I would like to order from The 80 Club..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
