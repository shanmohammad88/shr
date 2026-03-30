import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Building2, CheckCircle2, Trophy } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef(null);
  
  // Create a scroll-linked animation for the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" ref={containerRef} className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Professional Summary */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">
                Professional Pedigree
              </h2>
              <h3 className="text-5xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-indigo-100 to-slate-400 bg-clip-text text-transparent">
                Proven Expertise at <br /> 
                <span className="text-slate-500">Industry Scale.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                With a deep-rooted background in India's leading private sector insurance firm, 
                I bring over 4 years of specialized experience in high-volume recruitment 
                and corporate HR strategy.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Trophy, text: "Managed recruitment for one of India's Top 3 Private Insurers." },
                  { icon: CheckCircle2, text: "Expertise in 100% Compliance & Regulatory HR Standards." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="bg-white/5 p-2 rounded-lg group-hover:bg-indigo-500/20 transition-all border border-white/10 group-hover:border-indigo-500/50">
                      <item.icon className="w-5 h-5 text-indigo-300" />
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Timeline */}
          <div className="lg:col-span-7">
            <div className="relative ml-4 pl-12">
              
              {/* This is the "Drawing" Timeline Line */}
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-indigo-500 via-indigo-400 to-transparent"
              />
              {/* Background faded line */}
              <div className="absolute left-0 top-0 w-[2px] h-full bg-white/5" />

              <div className="space-y-20">
                {/* Main Career Block */}
                <motion.div 
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative group"
                >
                  {/* Timeline Dot with Pulse */}
                  <div className="absolute -left-[59px] top-2">
                    <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] border-4 border-slate-950 z-10 relative" />
                    <div className="absolute inset-0 w-5 h-5 rounded-full bg-indigo-500 animate-ping opacity-40" />
                  </div>
                  
                  <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-indigo-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 backdrop-blur-md">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                      <div>
                        <h4 className="text-3xl font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight">Senior HR Consultant</h4>
                        <div className="flex items-center gap-2 text-indigo-400 mt-2 font-semibold text-sm uppercase tracking-widest">
                          <Building2 className="w-4 h-4" />
                          <span>ICICI Prudential Life Insurance</span>
                        </div>
                      </div>
                      <span className="bg-indigo-500/10 text-indigo-300 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border border-indigo-500/20">
                        4 Years Total Exp.
                      </span>
                    </div>

                    <ul className="space-y-5">
                      {[
                        "Led full-lifecycle recruitment for a workforce of 5,000+ employees in Mumbai.",
                        "Specialized in Talent Acquisition for Wealth Management & Corporate divisions.",
                        "Navigated complex statutory disclaimers and insurance labor law compliance."
                      ].map((bullet, i) => (
                        <motion.li 
                          key={i} 
                          variants={listItemVariants}
                          className="flex gap-4 text-slate-400 text-sm leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(99,102,241,1)]" />
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Freelance Block */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -left-[57px] top-2 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950 group-hover:bg-indigo-400 transition-colors" />
                  <div className="p-8 border border-white/5 rounded-[2.5rem] hover:border-white/20 transition-all backdrop-blur-sm group-hover:bg-white/[0.02]">
                    <h4 className="text-xl font-bold text-slate-200">Independent Strategic Consultant</h4>
                    <p className="text-indigo-400 text-[10px] font-black mt-1 uppercase tracking-[0.3em]">ShrutiHR Global Portfolio</p>
                    <p className="text-slate-500 text-sm mt-4 leading-relaxed group-hover:text-slate-400 transition-colors">
                      Transitioned 4+ years of institutional knowledge into a boutique consultancy serving Mumbai and Kuwait markets.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;