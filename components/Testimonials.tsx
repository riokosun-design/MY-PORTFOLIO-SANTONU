import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Trusted by 50+ Businesses</h2>
            <p className="text-slate-400">Average 4.9/5 Rating across all freelance platforms.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-900/80 backdrop-blur p-8 rounded-2xl border border-slate-800 relative">
              <Quote className="absolute top-8 right-8 text-indigo-500/20 w-10 h-10" />
              <p className="text-slate-300 mb-6 relative z-10 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.imageUrl} alt={t.name} className="w-12 h-12 rounded-full border border-slate-700" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;