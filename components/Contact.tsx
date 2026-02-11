import React from 'react';
import { Mail, Calendar, ArrowRight } from 'lucide-react';
import { EMAIL_CONTACT } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-indigo-900/50 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Automate Your Growth?</h2>
            <p className="text-lg text-slate-300 mb-10">
              I only take on 3 new clients per month to ensure deep focus on architecture and quality. Let's see if we're a good match.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`mailto:${EMAIL_CONTACT}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors"
              >
                <Mail className="w-5 h-5" /> Email Me Directly
              </a>
               {/* Note: In a real app, this would link to Calendly */}
              <a 
                href={`mailto:${EMAIL_CONTACT}?subject=Discovery Email Request`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
              >
                <Calendar className="w-5 h-5" /> Book Discovery Email
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              No pressure. Just a conversation about your business bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;