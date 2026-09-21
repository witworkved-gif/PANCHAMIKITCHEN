import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/restaurantData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-800 tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            COMMON INQUIRIES
          </span>
          <h2 className="font-serif-heading font-black text-3xl sm:text-4xl text-stone-900 mt-3 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Clear, honest answers about our food, timings, location and services in Solapur.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-amber-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-heading font-bold text-sm sm:text-base text-stone-900 flex items-center gap-3">
                    <span className="text-amber-800 text-xs font-extrabold w-5">
                      Q{idx + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-200 text-amber-900' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-[#FDFBF7]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
