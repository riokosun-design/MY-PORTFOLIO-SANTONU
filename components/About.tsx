import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing to keep it visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Column - Slides in from left */}
            <div 
              className={`w-full md:w-1/2 relative group transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-2xl rotate-3 opacity-50 group-hover:rotate-6 group-hover:opacity-70 transition-all duration-500 blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.3)] group-hover:border-indigo-500/50">
                    <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80" 
                        alt="San Santonu Safi" 
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-blob">
                    <div className="bg-green-500/10 p-2 rounded-lg">
                        <Code className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 font-mono">Lines of Code</div>
                        <div className="text-white font-bold">1.2M+ Shipped</div>
                    </div>
                </div>
            </div>

            {/* Content Column - Slides in from right with delay */}
            <div 
              className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
                <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-4">
                    <Terminal className="w-4 h-4" /> About Me
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Future of Web</span>
                </h2>
                
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                    <p>
                        I am a <strong className="text-white">Web Architect & AI Solutions Specialist</strong> with a singular focus: transforming digital liabilities into automated assets.
                    </p>
                    <p>
                        Most businesses treat their website as a static billboard. I treat it as a <span className="text-indigo-300">neural network</span>. By integrating custom AI agents directly into your web infrastructure, I build systems that autonomously capture leads, resolve support tickets, and optimize workflows without human intervention.
                    </p>
                    <p>
                        With <strong className="text-white">50+ successful deployments</strong> across FinTech, Real Estate, and SaaS, I don't just write code—I engineer business outcomes.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'Python', 'TensorFlow', 'OpenAI', 'AWS'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-400 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;