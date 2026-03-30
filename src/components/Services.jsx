import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Services = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect based on index
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section id="expertise" className="relative py-40 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-1/3 w-96 h-96 bg-indigo-300/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-400/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Reveal Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600 mb-4">Capabilities</h2>
          <h3 className="text-5xl font-light text-slate-900 leading-[1.1] tracking-tight">
            Next-gen talent solutions <br />
            <span className="text-indigo-500 italic font-serif font-normal">driven by precision.</span>
          </h3>
        </motion.div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Main Large Card */}
          <motion.div 
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="md:col-span-2 bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-[2rem] p-10 flex flex-col justify-between group cursor-pointer border border-indigo-200/40 hover:border-indigo-400/60 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.2)] transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-indigo-100 group-hover:scale-110 transition-transform duration-500">
                <Globe className="text-indigo-600" />
              </div>
              <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Global & Overseas Sourcing</h4>
              <p className="text-slate-600">Bridging international borders to source elite manpower for the Gulf and emerging markets.</p>
            </div>
          </motion.div>

          {/* Small Tech Card */}
          <motion.div 
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-[2rem] p-10 flex flex-col justify-between text-white border border-indigo-500/20 group cursor-pointer hover:border-indigo-400/40 shadow-xl"
          >
            <div className="p-3 bg-white/5 rounded-xl w-fit group-hover:rotate-12 transition-transform">
              <Cpu className="text-indigo-400 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">HR Systems</h4>
              <p className="text-slate-400 text-sm">ERP & Digital Infrastructure.</p>
            </div>
          </motion.div>

          {/* Small Compliance Card */}
          <motion.div 
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-emerald-50/80 to-slate-50 rounded-[2rem] p-10 flex flex-col justify-between border border-emerald-200/40 group cursor-pointer shadow-sm hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)] transition-all"
          >
            <div className="p-3 bg-white rounded-xl w-fit shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-emerald-500 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Compliance</h4>
              <p className="text-slate-600 text-sm">Strict 100% legal integrity.</p>
            </div>
          </motion.div>

          {/* Medium Talent Card */}
          <motion.div 
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="md:col-span-2 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-[2rem] p-10 flex items-center justify-between text-white overflow-hidden relative group cursor-pointer border border-indigo-500/30 shadow-2xl"
          >
            <div className="relative z-10 group-hover:translate-x-2 transition-transform duration-500">
              <h4 className="text-3xl font-bold text-white mb-4">Executive Search</h4>
              <p className="text-slate-300 max-w-xs leading-relaxed">High-level leadership headhunting for Mumbai's top financial firms.</p>
            </div>
            <div className="absolute -right-10 bottom-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <Zap className="w-64 h-64 text-indigo-400 rotate-12" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;