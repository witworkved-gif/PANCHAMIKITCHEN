import { useState } from 'react';
import { Phone, MapPin, Instagram, MessageCircle, Send, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';
import { EnquiryFormData } from '../types';

interface ContactSectionProps {
  prefilledDish?: string;
}

export default function ContactSection({ prefilledDish }: ContactSectionProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    guests: '2 People',
    date: '',
    time: 'Morning Breakfast',
    enquiryType: 'Dine-In Table',
    message: prefilledDish ? `I would like to enquire about ${prefilledDish}.` : ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      guests: '2 People',
      date: '',
      time: 'Morning Breakfast',
      enquiryType: 'Dine-In Table',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            CONNECT & ENQUIRE
          </span>
          <h2 className="font-serif-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 mt-3 tracking-tight">
            CRAVING SOMETHING AUTHENTIC?
          </h2>
          <p className="text-stone-700 text-base sm:text-lg mt-3 leading-relaxed">
            Visit Panchami Kitchen Idli Street and enjoy authentic vegetarian South Indian, Andhra and Telangana flavours. Reach out to us directly or send an enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Hub */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
              <span className="text-xs uppercase font-bold text-amber-800 tracking-wider block mb-1">
                Direct Line
              </span>
              <h3 className="font-serif-heading font-black text-3xl text-stone-900 mb-4">
                {BUSINESS_INFO.phone}
              </h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Call our counter directly for current availability, breakfast specials, or to order ahead for curbside pickup and takeaway.
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  id="contact-call-btn"
                  className="py-3 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-directions-btn"
                  className="py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-stone-300 transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-amber-800" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-instagram-btn"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-amber-600 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>INSTAGRAM</span>
                </a>
              </div>

              {/* Quick Summary Note */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1.5">
                <div className="flex items-center gap-2 font-bold">
                  <Clock className="w-3.5 h-3.5 text-amber-800" />
                  <span>Quick Dining Reference:</span>
                </div>
                <p className="text-stone-700">
                  • Breakfast: 7:30 AM – 12:00 PM
                  <br />
                  • Lunch: 12:30 PM – 4:00 PM
                  <br />
                  • Dinner: 7:00 PM – 10:00 PM
                  <br />
                  • Wednesday: After 12:00 PM Weekly Holiday
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation / Table & Takeaway Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-stone-200">
              <div className="mb-6">
                <h3 className="font-serif-heading font-black text-2xl text-stone-900">
                  Table & Takeaway Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Planning a family visit or large takeaway order? Fill out your details below and our team will get back to you.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 px-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-heading font-black text-2xl text-emerald-950 mb-2">
                    Enquiry Received!
                  </h4>
                  <p className="text-sm font-semibold text-emerald-900 max-w-md mx-auto leading-relaxed mb-4">
                    Thank you, <span className="font-bold">{formData.name}</span>! Your enquiry has been received. Please wait for confirmation from Panchami Kitchen.
                  </p>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto mb-6">
                    Note: Enquiry submissions are subject to table and food availability. For immediate confirmation, please call us directly.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="px-5 py-2.5 rounded-xl bg-amber-800 text-white font-bold text-xs uppercase tracking-wider"
                    >
                      Call Counter: {BUSINESS_INFO.phone}
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-white text-stone-800 font-bold text-xs border border-stone-300 hover:bg-stone-50"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kulkarni"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Number of People
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-stone-50/50"
                      >
                        <option value="1 Person">1 Person</option>
                        <option value="2 People">2 People</option>
                        <option value="3-4 People">3-4 People</option>
                        <option value="5-8 People (Family)">5-8 People (Family)</option>
                        <option value="Large Group (8+)">Large Group (8+)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-stone-50/50"
                      >
                        <option value="Dine-In Table">Dine-In Table</option>
                        <option value="Takeaway Pre-Order">Takeaway Pre-Order</option>
                        <option value="Curbside Pickup">Curbside Pickup</option>
                        <option value="General Query">General Query</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Preferred Meal Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-stone-50/50"
                      >
                        <option value="Morning Breakfast (7:30 AM – 12:00 PM)">Morning Breakfast (7:30 AM – 12:00 PM)</option>
                        <option value="Afternoon Lunch (12:30 PM – 4:00 PM)">Afternoon Lunch (12:30 PM – 4:00 PM)</option>
                        <option value="Evening Dinner (7:00 PM – 10:00 PM)">Evening Dinner (7:00 PM – 10:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify dietary requests, breakfast combo pre-orders, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-stone-50/50"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-enquiry-btn"
                      className="w-full py-3.5 px-6 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT ENQUIRY</span>
                    </button>
                    <p className="text-[11px] text-stone-500 text-center mt-2.5">
                      * Please note: Submitting an enquiry does not constitute a guaranteed reservation. Our team will contact you to confirm.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
