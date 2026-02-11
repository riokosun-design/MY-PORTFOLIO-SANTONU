import React, { useState } from 'react';
import { FEATURED_PROJECTS, CLIENT_ARCHIVE } from '../constants';
import { Star, ExternalLink, LayoutGrid, List } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'archive'>('featured');

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Proven Results</h2>
                <p className="text-slate-400 text-lg">
                    Delivering measurable ROI for <span className="text-white font-semibold">50+ clients</span> across diverse industries.
                </p>
            </div>
            
            {/* Tabs */}
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
                <button
                    onClick={() => setActiveTab('featured')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium text-sm transition-all ${activeTab === 'featured' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                    <LayoutGrid className="w-4 h-4" /> Featured
                </button>
                <button
                    onClick={() => setActiveTab('archive')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium text-sm transition-all ${activeTab === 'archive' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                    <List className="w-4 h-4" /> Client Archive (50+)
                </button>
            </div>
        </div>

        {/* Featured Projects View */}
        {activeTab === 'featured' && (
            <div className="grid lg:grid-cols-2 gap-10">
                {FEATURED_PROJECTS.map((project) => (
                    <div key={project.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-white border border-slate-700">
                                {project.industry}
                            </div>
                        </div>
                        
                        <div className="p-8 relative z-20 -mt-12">
                            <div className="flex gap-2 mb-4 flex-wrap">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-slate-400 text-sm mb-6">{project.description}</p>
                            
                            <div className="grid grid-cols-3 gap-4 mb-6 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                {project.stats.map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-lg font-bold text-white">{stat.value}</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="text-sm text-slate-300">
                                    <span className="text-indigo-400 font-semibold">Problem:</span> {project.challenge}
                                </div>
                                <div className="text-sm text-slate-300">
                                    <span className="text-green-400 font-semibold">Solution:</span> {project.solution}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Archive View */}
        {activeTab === 'archive' && (
            <div className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {CLIENT_ARCHIVE.map((client) => (
                        <div key={client.id} className="bg-slate-900/30 p-4 rounded-lg border border-slate-800 hover:border-indigo-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-white text-sm">{client.name}</h4>
                                <div className="flex text-yellow-500">
                                    {Array.from({ length: client.rating }).map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-current" />
                                    ))}
                                </div>
                            </div>
                            <div className="text-xs text-indigo-400 mb-2">{client.industry} • {client.projectType}</div>
                            <p className="text-xs text-slate-500 italic line-clamp-2">"{client.testimonialShort}"</p>
                        </div>
                    ))}
                </div>
            </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;