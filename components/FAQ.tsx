import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 transition-colors hover:border-slate-700">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-medium transition-colors duration-300 ${isOpen ? 'text-indigo-400' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className="relative w-5 h-5 shrink-0">
                    <Minus 
                      className={`absolute inset-0 text-indigo-400 w-5 h-5 transition-all duration-300 ${
                        isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                      }`} 
                    />
                    <Plus 
                      className={`absolute inset-0 text-slate-500 w-5 h-5 transition-all duration-300 ${
                        isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows,opacity,padding] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-50'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;