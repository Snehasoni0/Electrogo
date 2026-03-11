"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Electrogo Mobility?",
    answer:
      "Electrogo is Rajasthan's leading EV-first mobility company providing electric cabs, government taxis, and EV charging infrastructure.",
  },
  {
    question: "When does Electrogo launch?",
    answer:
      "We are officially rolling out our fleet in April 2026 across major cities in Rajasthan.",
  },
  {
    question: "How can I invest or partner?",
    answer:
      "Visit our Investor Relations portal or use the Partnership form available on the homepage.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-28 px-6 text-slate-900">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lime-600 font-mono text-[10px] tracking-[0.5em] uppercase font-bold block mb-4"
          >
            Support Center
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900">
            Frequently Asked <span className="text-slate-400">Questions</span>
          </h2>
          <div className="h-1 w-12 bg-lime-500 mx-auto mt-6"></div>
        </div>

        <div className="space-y-0 border-t border-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = (index + 1).toString().padStart(2, '0');

            return (
              <div 
                key={index} 
                className="border-b border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group  cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">
                      {number}
                    </span>
                    <span className={`text-base md:text-lg font-bold uppercase tracking-tight transition-colors duration-300 ${isOpen ? 'text-lime-600' : 'text-slate-800'}`}>
                      {faq.question}
                    </span>
                  </div>

                  <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-lime-600' : 'text-slate-300'}`}>
                    <ChevronDown size={20} strokeWidth={3} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-10 pl-10 pr-6">
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl border-l-2 border-lime-500 pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}