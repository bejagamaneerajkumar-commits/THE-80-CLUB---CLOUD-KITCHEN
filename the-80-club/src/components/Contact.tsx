import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  CheckCircle,
  AlertTriangle,
  Send,
  Trash2,
  HelpCircle,
  UtensilsCrossed,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DELIVERY_ZONES, PARTNER_LINKS } from '../data';

interface InquirySubmit {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrewlgnw';

  const [distance, setDistance] = useState<string>('');
  const [zoneResult, setZoneResult] = useState<{
    status: 'Free Delivery' | 'Standard' | 'Extended' | 'Out of Bounds';
    area: string;
    minOrder: number;
    estimatedTime: string;
    message: string;
  } | null>(null);

  // Inquiry Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Feedback',
    message: '',
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [inquiryHistory, setInquiryHistory] = useState<InquirySubmit[]>([]);

  // Load submissions from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('the_80_club_inquiries');
      if (stored) {
        setInquiryHistory(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }, []);

  // Delivery zone checks
  const handleCheckDistance = (e: React.FormEvent) => {
    e.preventDefault();
    const km = parseFloat(distance);
    if (isNaN(km) || km < 0) {
      setZoneResult({
        status: 'Out of Bounds',
        area: 'Unknown',
        minOrder: 0,
        estimatedTime: 'N/A',
        message: 'Please enter a valid positive distance or pin coordinate.',
      });
      return;
    }

    if (km <= 3.0) {
      const z = DELIVERY_ZONES[0];
      setZoneResult({
        status: z.status,
        area: z.area,
        minOrder: z.minOrder,
        estimatedTime: z.estimatedTime,
        message: 'Fantastic! You are in our premium Blitz Free Delivery core. We will arrive in under 25 minutes! 🎉',
      });
    } else if (km > 3.0 && km <= 6.0) {
      const z = DELIVERY_ZONES[1];
      setZoneResult({
        status: z.status,
        area: z.area,
        minOrder: z.minOrder,
        estimatedTime: z.estimatedTime,
        message: 'Perfect! Standard parameters apply. Hot food delivered within 35 minutes.',
      });
    } else if (km > 6.0 && km <= 8.0) {
      const z = DELIVERY_ZONES[2];
      setZoneResult({
        status: z.status,
        area: z.area,
        minOrder: z.minOrder,
        estimatedTime: z.estimatedTime,
        message: 'Awesome. Extended city limit. Cooked fresh, carefully packaged to retain warmth over 45 minutes.',
      });
    } else {
      setZoneResult({
        status: 'Out of Bounds',
        area: 'Out of Radius (8km+)',
        minOrder: 0,
        estimatedTime: 'N/A',
        message: 'Currently out of our hyper-local kitchen reach. Please call us direct to discuss custom corporate/bulk distribution orders!',
      });
    }
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError('');

    const newInquiry: InquirySubmit = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Accept: 'application/json',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error('Your inquiry could not be sent right now.');
      }

      const updated = [newInquiry, ...inquiryHistory];
      setInquiryHistory(updated);
      try {
        localStorage.setItem('the_80_club_inquiries', JSON.stringify(updated));
      } catch (err) {
        console.warn('Could not write to localStorage', err);
      }

      setIsSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Feedback',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 6000);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Your inquiry could not be sent right now.';
      setSubmitError(message);

      const updated = [newInquiry, ...inquiryHistory];
      setInquiryHistory(updated);
      try {
        localStorage.setItem('the_80_club_inquiries', JSON.stringify(updated));
      } catch (err) {
        console.warn('Could not write to localStorage', err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiryHistory.filter((inq) => inq.id !== id);
    setInquiryHistory(updated);
    try {
      localStorage.setItem('the_80_club_inquiries', JSON.stringify(updated));
    } catch (err) {
      console.warn('Could not write to localStorage', err);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#FDFCF8] py-20 border-t-2 border-[#1A1A1A] text-left relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[#FF5C00] font-black uppercase tracking-widest text-xs">
            Where to Find Us
          </span>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mt-1.5 mb-4">
            Delivery Scope & Contact Information
          </h3>
          <p className="text-neutral-700 font-medium">
            Based centrally, we serve a hyper-local 8km delivery radius to guarantee premium meal standard. Check your radius distance and drop us comments!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left: Contact Info Info Cards & Distance Validator */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Details Card */}
            <div className="bg-white border-2 border-[#1A1A1A] rounded-[24px] p-6 relative overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] group">
              <h4 className="font-display font-black text-[#1A1A1A] text-lg mb-6 flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5 text-[#FF5C00]" />
                <span>The 80 Club HQ</span>
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 font-semibold">
                {/* map location */}
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-[#FF5C00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-display font-black">Kitchen Address</strong>
                    <span className="text-neutral-500 text-xs">{PARTNER_LINKS.address}</span>
                  </div>
                </div>

                {/* hours */}
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-[#FF5C00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-display font-black">Operating Hours</strong>
                    <span className="text-neutral-500 text-xs">{PARTNER_LINKS.operatingHours}</span>
                  </div>
                </div>

                {/* phone */}
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-[#FF5C00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-display font-black">Direct Hotline Support</strong>
                    <a
                      href={`tel:${PARTNER_LINKS.phone}`}
                      className="text-[#FF5C00] hover:underline font-black text-xs block mt-0.5"
                    >
                      {PARTNER_LINKS.phone}
                    </a>
                  </div>
                </div>

                {/* email */}
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-[#FF5C00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-display font-black">Email Relations</strong>
                    <a
                      href={`mailto:${PARTNER_LINKS.email}`}
                      className="text-[#FF5C00] hover:underline hover:text-neutral-900 font-black text-xs block mt-0.5"
                    >
                      {PARTNER_LINKS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Hyper-local delivery circle checker */}
            <div className="bg-white border-2 border-[#1A1A1A] rounded-[24px] p-6 shadow-[4px_4px_0px_0px_#1A1A1A]">
              <h4 className="font-display font-black text-[#1A1A1A] text-base mb-2 flex items-center gap-2">
                <Compass className="h-5 w-5 text-[#FF5C00]" />
                <span>Interactive Delivery Circle Check</span>
              </h4>
              <p className="text-neutral-550 text-xs mb-4 font-bold">
                Enter your approximate travel distance (in kilometers) from Central Sector 4 to estimate delivery fees & speed.
              </p>

              <form onSubmit={handleCheckDistance} className="flex gap-2">
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="50"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="Distance (e.g., 2.5 or 5)"
                  className="bg-[#FDFCF8] border-2 border-[#1A1A1A] rounded-xl px-4 py-2 text-xs sm:text-sm text-[#1A1A1A] outline-none focus:border-[#FF5C00] w-full font-bold"
                  id="distance-check-input"
                />
                <button
                  type="submit"
                  className="bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-black border-2 border-[#1A1A1A] px-4 py-2 rounded-xl text-xs whitespace-nowrap cursor-pointer transition-colors shadow-[2px_2px_0px_0px_#1A1A1A]"
                  id="distance-check-submit"
                >
                  Verify Range
                </button>
              </form>

              {/* result status render */}
              <AnimatePresence mode="popLayout">
                {zoneResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 p-4 rounded-xl text-xs text-left border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] ${
                      zoneResult.status === 'Free Delivery'
                        ? 'bg-emerald-50 text-emerald-800'
                        : zoneResult.status === 'Out of Bounds'
                        ? 'bg-red-50 text-red-800'
                        : 'bg-amber-50 text-amber-800'
                    }`}
                    id="distance-check-result-box"
                  >
                    <div className="flex gap-2 items-start">
                      {zoneResult.status === 'Free Delivery' ? (
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                      ) : zoneResult.status === 'Out of Bounds' ? (
                        <AlertTriangle className="h-4.5 w-4.5 text-red-600 shrink-0" />
                      ) : (
                        <CheckCircle className="h-4.5 w-4.5 text-amber-600 shrink-0" />
                      )}
                      <div>
                        <p className="font-display font-black uppercase text-[10px] tracking-wider mb-1 text-neutral-800">
                          Zone Status: {zoneResult.status} ({zoneResult.area})
                        </p>
                        <p className="neutral-800 font-bold leading-relaxed mb-2">
                          {zoneResult.message}
                        </p>
                        {zoneResult.status !== 'Out of Bounds' && (
                          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1A1A1A]/10 font-mono text-[10px] text-neutral-700 font-extrabold">
                            <div>
                              <span>Min order:</span>{' '}
                              <strong className="text-black font-black">₹{zoneResult.minOrder}</strong>
                            </div>
                            <div>
                              <span>Estimate ride:</span>{' '}
                              <strong className="text-black font-black">{zoneResult.estimatedTime}</strong>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Inquiry Input Form & Local Message History List */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Inquiry Form */}
            <div className="bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] rounded-[24px] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#FF5C00]">
              <h4 className="font-display font-black text-white text-lg mb-2">
                Send Us a Business Inquiry
              </h4>
              <p className="text-neutral-300 text-xs sm:text-sm mb-6 font-medium">
                Have a corporate event, recipe query, feedback, or delivery concern? Fill in the form and the core leadership (Bejagama Neeraj, Bingi Manikanta, and Damera Sathwik) will contact you!
              </p>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-left">
                    <label className="block text-neutral-200 text-xs font-black mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full bg-[#2A2A2A] border-2 border-transparent rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-semibold outline-none focus:border-[#FF5C00]"
                      id="contact-form-name"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-neutral-200 text-xs font-black mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#2A2A2A] border-2 border-transparent rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-semibold outline-none focus:border-[#FF5C00]"
                      id="contact-form-email"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-neutral-200 text-xs font-black mb-1.5">
                    Category Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#2A2A2A] border-2 border-transparent rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-semibold outline-none focus:border-[#FF5C00]"
                    id="contact-form-subject"
                  >
                    <option value="Feedback">General Food Quality Feedback</option>
                    <option value="Corporate / Bulk Catering">Corporate Events & Bulk Orders</option>
                    <option value="Packaging Complaint">Packaging Concerns / Spillages</option>
                    <option value="Career Opportunities">Join The 80 Club Kitchen Staff</option>
                  </select>
                </div>

                <div className="text-left">
                  <label className="block text-neutral-200 text-xs font-black mb-1.5">
                    Message Detail
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry with detail..."
                    className="w-full bg-[#2A2A2A] border-2 border-transparent rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-semibold outline-none focus:border-[#FF5C00] resize-none"
                    id="contact-form-message"
                  />
                </div>

                {/* Submit Feedback */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <span className="text-[10px] font-mono text-neutral-400 font-semibold">
                    * Sent to Formspree and saved locally as backup
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-1.5 px-6 py-3.5 bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-black rounded-xl border-2 border-transparent text-xs sm:text-sm shadow-md cursor-pointer transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                    id="contact-form-submit-btn"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </div>
              </form>

              {/* Submit Feedback Panel notification */}
              <AnimatePresence>
                {isSubmitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-emerald-50 text-emerald-800 border-2 border-[#1A1A1A] text-xs rounded-xl text-left"
                  >
                    <p className="font-black mb-1">
                      📬 Inquiry Sent Successfully!
                    </p>
                    <p className="text-neutral-700 font-bold">
                      Thank you! Your message has been sent through Formspree and saved locally for reference. Our team will get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-red-50 text-red-700 border-2 border-red-300 text-xs rounded-xl text-left"
                  >
                    <p className="font-black mb-1">⚠️ Submission Issue</p>
                    <p className="text-neutral-700 font-bold">{submitError}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Local sandbox submissions log list (so the form has a real functional outlet!) */}
            <AnimatePresence>
              {inquiryHistory.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border-2 border-[#1A1A1A] rounded-[24px] p-6 text-left shadow-[4px_4px_0px_0px_#1A1A1A]"
                  id="contact-history-panel"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-display font-black text-[#1A1A1A] text-xs sm:text-sm flex items-center gap-2">
                      <HelpCircle className="h-4.5 w-4.5 text-[#FF5C00]" />
                      <span>Your Submitted Inquiries ({inquiryHistory.length})</span>
                    </h5>
                    <button
                      onClick={() => {
                        setInquiryHistory([]);
                        localStorage.removeItem('the_80_club_inquiries');
                      }}
                      className="text-neutral-400 hover:text-red-500 p-1 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                      title="Clear local submissions history log"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                    {inquiryHistory.map((inq) => (
                      <motion.div
                        key={inq.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="bg-[#FDFCF8] border-2 border-[#1A1A1A] p-3.5 rounded-2xl relative group hover:border-[#FF5C00] transition-colors shadow-[2px_2px_0px_0px_#1A1A1A]"
                      >
                        <button
                          onClick={() => handleDeleteInquiry(inq.id)}
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-550 p-1 rounded transition-opacity cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                        <div className="flex justify-between items-start gap-3 mb-1">
                          <span className="text-[10px] bg-[#FF5C00] text-white px-2 py-0.5 rounded font-mono uppercase tracking-wider font-black border border-[#1A1A1A]">
                            {inq.subject}
                          </span>
                          <span className="font-mono text-[9px] text-[#1A1A1A]/60 font-bold">
                            {inq.timestamp}
                          </span>
                        </div>
                        <h6 className="font-display font-black text-[#1A1A1A] text-xs mb-1">
                          {inq.name} ({inq.email})
                        </h6>
                        <p className="text-neutral-600 text-xs font-semibold leading-relaxed">
                          "{inq.message}"
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
