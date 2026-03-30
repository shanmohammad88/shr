import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Command } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion Variants for the drop-down and stagger effect
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Super smooth custom easing
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl"
    >
      <div className={`flex items-center justify-between transition-all duration-500 backdrop-blur-xl border rounded-2xl ${
        scrolled 
          ? 'px-6 py-3 bg-white/80 border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-white/50' 
          : 'px-8 py-5 bg-white/10 border-white/20 shadow-lg'
      } hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)]`}>
        
        {/* Minimalist Logo */}
        <motion.div variants={linkVariants} className="flex items-center gap-2 group cursor-pointer">
          <Command className="w-5 h-5 text-indigo-600 group-hover:rotate-180 group-hover:text-indigo-500 transition-all duration-700" />
          <span className="font-black tracking-tighter text-slate-900 uppercase text-lg bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-indigo-500 transition-all">
            S<span className="text-indigo-600 group-hover:text-indigo-500">HR</span>
          </span>
        </motion.div>

        {/* Dynamic Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Expertise', 'Experience', 'Contact'].map((item) => (
            <motion.a 
              variants={linkVariants}
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-indigo-600 transition-all relative group"
            >
              <span className="relative">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-indigo-400 group-hover:w-full transition-all duration-500"></span>
              </span>
            </motion.a>
          ))}
          
          <motion.a 
            variants={linkVariants}
            href="#contact" 
            className="bg-gradient-to-r from-slate-900 to-slate-800 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-indigo-500 hover:shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:scale-105 transition-all active:scale-95 border border-slate-700/50 hover:border-indigo-400/50"
          >
            Inquire
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;