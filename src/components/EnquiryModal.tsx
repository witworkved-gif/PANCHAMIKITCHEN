import { useState } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';
import { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDish?: string;
}

export default function EnquiryModal({ isOpen, onClose, initialDish }: EnquiryModalProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    guests: '2 People',
    date: '',
    time: 'Morning Breakfast',
    enquiryType: initialDish ? 'Takeaway Pre-Order' : 'Dine-In Table',
    message: initialDish ? `Enquiry regarding: ${initialDish}` : ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="enquiry-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <div
        id="enquiry-modal-container"
        className="relative bg-[#FDFBF7] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-900/20 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif-heading font-black text-2xl text-stone-900 mb-2">
              Enquiry Received!
            </h3>
            <p className="text-sm text-stone-700 max-w-sm mx-auto leading-relaxed mb-4">
              Thank you, <span className="font-bold text-stone-900">{formData.name}</span>! Your enquiry has been received. Please wait for confirmation from Panchami Kitchen.
            </p>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 mb-6">
              Need urgent confirmation? Call our counter directly at{' '}
              <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold underline">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wider shadow-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-widest block mb-1">
                Panchami Kitchen Idli Street
              </span>
              <h3 className="font-serif-heading font-black text-2xl text-stone-900">
                Table & Food Enquiry
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Send your request and our team will get in touch with you.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-2.5 rounded-lg bg-red-50 text-red-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 bg-white"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 People">2 People</option>
                    <option value="3-4 People">3-4 People</option>
                    <option value="5-8 People">5-8 People</option>
                    <option value="Large Group (8+)">Large Group (8+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Service Type</label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 bg-white"
                  >
                    <option value="Dine-In Table">Dine-In Table</option>
                    <option value="Takeaway Pre-Order">Takeaway Pre-Order</option>
                    <option value="Curbside Pickup">Curbside Pickup</option>
                    <option value="General Query">General Query</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Meal Slot</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 bg-white"
                  >
                    <option value="Breakfast (7:30 AM – 12:00 PM)">Breakfast</option>
                    <option value="Lunch (12:30 PM – 4:00 PM)">Lunch</option>
                    <option value="Dinner (7:00 PM – 10:00 PM)">Dinner</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Message / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Any particular dish or preference?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SUBMIT ENQUIRY</span>
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
              <span className="text-stone-500">Prefer instant contact?</span>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-bold text-amber-800 flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 flex items-center gap-1 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
