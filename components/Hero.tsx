import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { EMAIL_CONTACT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        {/* Animated Orbs */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] animate-blob mix-blend-screen" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] bg-indigo-800/20 rounded-full blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '4s' }} />
        
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#818cf810_1px,transparent_1px),linear-gradient(to_bottom,#818cf810_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for New Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Stop Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-pulse">
              Static Websites.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
            I replace passive web pages with <strong>intelligent AI Agents</strong> that automate sales, support, and operations 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`mailto:${EMAIL_CONTACT}`}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/25"
            >
              Request Custom AI Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#portfolio"
              className="flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm"
            >
              View Case Studies
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/40/40?random=${i + 20}`} alt="Client" className="w-8 h-8 rounded-full border-2 border-slate-950" />
              ))}
            </div>
            <p>Trusted by <span className="text-white font-semibold">50+ Founders</span></p>
          </div>
        </div>

        <div className="hidden md:flex justify-center relative animate-slide-up delay-200">
            {/* Abstract UI Representation of an AI Agent */}
            <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl border border-white/10 backdrop-blur-xl p-6 shadow-2xl flex flex-col transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs text-slate-500 font-mono">agent_core_v2.tsx</span>
                    </div>
                    
                    <div className="space-y-4 font-mono text-sm">
                        <div className="p-3 rounded bg-slate-900/50 border-l-2 border-green-500 text-slate-300">
                            <span className="text-green-400">$</span> analyzing_traffic_pattern...
                        </div>
                        <div className="p-3 rounded bg-slate-900/50 border-l-2 border-indigo-500 text-indigo-300">
                             <span className="text-indigo-400">{'>'}</span> Intent Detected: High-Value Lead
                        </div>
                        <div className="p-3 rounded bg-slate-900/50 border-l-2 border-cyan-500 text-cyan-300">
                             <span className="text-cyan-400">{'>'}</span> Action: Deploying Sales_Concierge
                        </div>
                        <div className="mt-4 p-4 rounded-lg bg-indigo-600/10 border border-indigo-500/20">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-indigo-200 text-xs font-bold uppercase">Live Conversation</span>
                            </div>
                            <p className="text-slate-300 italic">"Hello! I noticed you're looking at the Enterprise plan. Would you like to see a comparison chart?"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;