import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, TrendingUp, ArrowRight, Award, CheckCircle } from 'lucide-react';
import shrutiImg from '../assets/shruti-hero.jpg';

const Hero = () => {
  const [imageHovered, setImageHovered] = useState(false);

  // Animation variants for that expensive, smooth stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 z-10 py-6 sm:py-8 md:py-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100/50 border border-indigo-200 mb-6 sm:mb-8 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
              <span className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent uppercase tracking-widest">
                Elite HR Consultant & Strategist
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-tight sm:leading-[0.95] lg:leading-[0.9] mb-6 sm:mb-8 bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-700 bg-clip-text text-transparent">
              Strategic <br className="hidden sm:block" />
              <span className="text-indigo-600">Human Capital</span> <br className="sm:hidden" /> Advisor.
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-xl text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed font-medium">
              I partner with high-growth organizations to architect elite teams, 
              streamline compliance, and build scalable HR infrastructures that drive 
              measurable business impact.
            </motion.p>

            {/* Premium CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5 mb-12 sm:mb-16">
              <button className="w-full sm:w-auto bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold hover:from-indigo-600 hover:to-indigo-500 hover:shadow-[0_15px_40px_rgba(99,102,241,0.3)] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base group border border-slate-700/50 hover:border-indigo-400/30 uppercase tracking-[0.15em]">
                Consult With Me
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold hover:bg-slate-50 hover:border-indigo-300 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)] transition-all flex items-center justify-center gap-2 text-sm sm:text-base uppercase tracking-[0.15em]">
                View Case Studies
              </button>
            </motion.div>

            {/* High-End Trust Bar */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10 pt-8 sm:pt-10 border-t border-slate-200">
              <div className="flex flex-col group cursor-pointer">
                <span className="text-2xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-slate-900 transition-all">500+</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-indigo-600 transition-colors">Talent Placed</span>
              </div>
              <div className="flex flex-col group cursor-pointer">
                <span className="text-2xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-slate-900 transition-all">100%</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-indigo-600 transition-colors">Compliance Rate</span>
              </div>
              <div className="flex flex-col group cursor-pointer">
                <span className="text-2xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-slate-900 transition-all">15+</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-indigo-600 transition-colors">Global Markets</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image Reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-auto"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          >
            <div className={`relative z-10 w-full h-full lg:h-auto lg:aspect-[4/5] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] sm:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] lg:shadow-[0_50px_120px_-30px_rgba(99,102,241,0.3)] border-8 sm:border-12 lg:border-[16px] border-white ring-1 ring-slate-200 transition-all duration-500 ${
              imageHovered ? 'ring-indigo-300 shadow-[0_50px_120px_-30px_rgba(99,102,241,0.4)] translate-y--2' : ''
            }`}>
              <img 
                src={shrutiImg} 
                alt="Shruti HR Portfolio" 
                className={`w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 ${imageHovered ? 'scale-105' : 'scale-100'}`}
              />
            </div>
            
            {/* Minimalist Floating Card - Added floating motion */}
            <motion.div 
              animate={{ y: imageHovered ? 0 : [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-bottom-10 lg:-right-6 bg-white/95 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl border border-slate-100 z-20 max-w-[160px] sm:max-w-[200px] backdrop-blur-sm hover:shadow-[0_15px_40px_rgba(99,102,241,0.2)] transition-all ${
                imageHovered ? 'scale-105' : ''
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-1 sm:p-1.5 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.2)]">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent uppercase">Available</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-slate-600 font-semibold leading-tight">
                Currently accepting new consultancy projects for Q2 2026.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;