import React from 'react';
import { Globe, Cpu, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="expertise" className="relative py-40 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-indigo-300/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-400/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600 mb-4">Capabilities</h2>
          <h3 className="text-5xl font-light text-slate-900 leading-[1.1] tracking-tight">
            Next-gen talent solutions <br />
            <span className="text-indigo-500 italic font-serif font-normal">driven by precision.</span>
          </h3>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          
          {/* Main Large Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-[2rem] p-10 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] transition-all border border-indigo-200/40 hover:border-indigo-300/60 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-2xl shadow-[0_4px_12px_rgba(99,102,241,0.1)] border border-indigo-200/50"><Globe className="text-indigo-600" /></div>
              <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">Global & Overseas Sourcing</h4>
              <p className="text-slate-600">Bridging international borders to source elite manpower for the Gulf and emerging markets.</p>
            </div>
          </div>

          {/* Small Tech Card */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/50 rounded-[2rem] p-10 flex flex-col justify-between text-white hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all border border-indigo-500/20 group hover:border-indigo-400/40">
             <Cpu className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
             <div>
               <h4 className="text-xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mb-2">HR Systems</h4>
               <p className="text-slate-400 text-sm">ERP & Digital Infrastructure.</p>
             </div>
          </div>

          {/* Small Compliance Card */}
          <div className="bg-gradient-to-br from-emerald-50/80 to-slate-50 rounded-[2rem] p-10 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] transition-all border border-emerald-200/40 group">
             <ShieldCheck className="text-emerald-500 group-hover:text-emerald-600 transition-colors w-6 h-6" />
             <div>
               <h4 className="text-xl font-bold text-slate-900 mb-2">Compliance</h4>
               <p className="text-slate-600 text-sm">Strict 100% legal integrity.</p>
             </div>
          </div>

          {/* Medium Talent Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 rounded-[2rem] p-10 flex items-center justify-between text-white overflow-hidden relative group hover:shadow-[0_20px_50px_rgba(99,102,241,0.25)] transition-all border border-indigo-600/30">
             <div className="relative z-10 group-hover:translate-x-2 transition-transform">
               <h4 className="text-3xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mb-4">Executive Search</h4>
               <p className="text-slate-300 max-w-xs">High-level leadership headhunting for Mumbai's top financial firms.</p>
             </div>
             <Zap className="w-40 h-40 text-indigo-400/20 absolute -right-8 bottom-0 group-hover:text-indigo-400/30 transition-colors" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;