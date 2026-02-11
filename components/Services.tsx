import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Intelligence as a Service</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Beyond standard web development. I deploy autonomous systems that work while you sleep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <service.icon className="w-7 h-7 text-indigo-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;