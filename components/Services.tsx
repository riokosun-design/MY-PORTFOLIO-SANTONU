import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Intelligence as a Service</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond standard web development. I deploy autonomous systems that work while you sleep, turning your digital presence into an active asset.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]"
            >
              {/* Icon Section with Micro-interaction */}
              <div className="relative w-16 h-16 mb-8">
                {/* Background Decor Element that rotates on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-2xl rotate-3 scale-90 opacity-0 group-hover:opacity-100 group-hover:rotate-12 group-hover:scale-100 transition-all duration-500 ease-out" />
                
                {/* Main Icon Container */}
                <div className="absolute inset-0 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-indigo-500/50 group-hover:bg-slate-800 transition-all duration-300 z-10">
                  <service.icon 
                    className="w-8 h-8 text-indigo-400 transition-all duration-500 ease-out group-hover:text-cyan-400 group-hover:scale-110 group-hover:-rotate-6" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                {service.description}
              </p>
              
              <ul className="space-y-3 pt-6 border-t border-slate-800/50 group-hover:border-indigo-500/20 transition-colors duration-300">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500/70 group-hover:text-cyan-400 shrink-0 mt-0.5 transition-colors duration-300" />
                    <span>{benefit}</span>
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