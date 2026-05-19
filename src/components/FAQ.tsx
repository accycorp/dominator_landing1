import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do I need a Telegram account?",
    answer: "Yes, Dominator Study is built as a Telegram Mini App for ultimate portability and speed. You can use it on any device where you have Telegram installed."
  },
  {
    question: "How long is my subscription?",
    answer: "We offer various tiers depending on your current exam cycle. Typically, a 'Dominator Pro' license lasts until the completion of your current academic year exams."
  },
  {
    question: "Can I use it for any subject?",
    answer: "Absolutely. Our platform covers a wide range of subjects including Mathematics, Engineering, Social Sciences, and more. Our AI assistance can help with virtually any academic query."
  },
  {
    question: "Is the payment secure?",
    answer: "Yes, we use verified account transfers and manual verification to ensure every payment is logged correctly. You'll receive instant bot notification upon payment confirmation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="p-3 bg-cyan-glow/10 rounded-2xl mb-6 border border-cyan-glow/20">
            <HelpCircle className="w-8 h-8 text-cyan-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Got Questions?</h2>
          <p className="text-soft-blue font-light uppercase tracking-widest text-[10px]">Everything you need to know about the Dominator advantage.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bento-card !p-0 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors gap-4"
              >
                <span className="font-bold text-lg tracking-tight uppercase">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-cyan-glow" />
                ) : (
                  <Plus className="w-5 h-5 text-soft-blue" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-soft-blue font-light leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
