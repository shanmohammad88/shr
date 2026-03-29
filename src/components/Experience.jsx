import React from 'react';
import { Building2, CheckCircle2, Trophy, Landmark } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 blur-[100px] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Professional Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                Professional Pedigree
              </h2>
              <h3 className="text-5xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-indigo-100 to-slate-300 bg-clip-text text-transparent">
                Proven Expertise at <br /> 
                <span className="text-slate-500">Industry Scale.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                With a deep-rooted background in India's leading private sector insurance firm, 
                I bring over 4 years of specialized experience in high-volume recruitment 
                and corporate HR strategy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 p-2 rounded-lg group-hover:bg-indigo-500/30 transition-all">
                    <Trophy className="w-5 h-5 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">Managed recruitment for one of India's Top 3 Private Insurers.</p>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 p-2 rounded-lg group-hover:bg-indigo-500/30 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">Expertise in 100% Compliance & Regulatory HR Standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Experience Card */}
          <div className="lg:col-span-7">
            <div className="relative border-l border-slate-700/50 ml-4 pl-12 space-y-16">
              
              {/* Main Career Block */}
              <div className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[57px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.8)] border-4 border-slate-950 group-hover:shadow-[0_0_30px_rgba(99,102,241,1)] transition-all"></div>
                
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-indigo-500/20 p-8 rounded-[2rem] hover:border-indigo-400/40 hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all backdrop-blur-sm">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-indigo-100 transition-colors">Senior HR Consultant</h4>
                      <div className="flex items-center gap-2 text-indigo-300 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-bold text-sm uppercase tracking-wider">ICICI Prudential Life Insurance</span>
                      </div>
                    </div>
                    <span className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/10 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-bold border border-indigo-500/30 hover:border-indigo-400/50 transition-all">
                      4 Years Total Exp.
                    </span>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-300 text-sm group-hover:text-slate-200 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-indigo-400 to-indigo-600 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                      Led full-lifecycle recruitment for a workforce of 5,000+ employees in the Mumbai headquarters.
                    </li>
                    <li className="flex gap-3 text-slate-300 text-sm group-hover:text-slate-200 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-indigo-400 to-indigo-600 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                      Specialized in Talent Acquisition for Wealth Management, Retirement Planning, and Corporate Sales divisions.
                    </li>
                    <li className="flex gap-3 text-slate-300 text-sm group-hover:text-slate-200 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-indigo-400 to-indigo-600 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                      Navigated complex statutory disclaimers and insurance-sector labor law compliance.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Freelance Advisory Block */}
              <div className="relative group">
                <div className="absolute -left-[57px] top-0 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950 group-hover:bg-slate-500 transition-colors"></div>
                <div className="p-8 border border-slate-700/50 rounded-[2rem] hover:border-slate-600/80 hover:shadow-[0_15px_30px_rgba(99,102,241,0.1)] transition-all backdrop-blur-sm group-hover:bg-slate-900/40">
                  <h4 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">Independent Strategic Consultant</h4>
                  <p className="text-indigo-400 text-sm font-bold mt-1 uppercase tracking-widest">ShrutiHR Portfolio</p>
                  <p className="text-slate-400 text-sm mt-4 group-hover:text-slate-300 transition-colors">
                    Transitioned 4+ years of institutional knowledge into a boutique consultancy serving global markets (Kuwait / India).
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;