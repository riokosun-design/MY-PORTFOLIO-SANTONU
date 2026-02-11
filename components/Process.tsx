import React from 'react';
import { Search, PenTool, Database, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Audit & Strategy",
    desc: "I analyze your current bottlenecks and identify where AI can produce the highest ROI immediately."
  },
  {
    icon: PenTool,
    title: "2. Architect & Build",
    desc: "I design custom neural agents and workflow automations tailored specifically to your data."
  },
  {
    icon: Database,
    title: "3. Integration",
    desc: "Seamless deployment into your existing tech stack (CRM, Website, Slack) with zero downtime."
  },
  {
    icon: Rocket,
    title: "4. Scale & Optimize",
    desc: "Continuous monitoring and fine-tuning to ensure the agents improve their performance over time."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-400">From static website to autonomous growth engine in 4 steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl h-full hover:border-indigo-500 transition-colors">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <step.icon className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
              {/* Connector Line (Desktop) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-slate-800 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;