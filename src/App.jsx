import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  // 1. Setup for the Top Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    /* Add 'cursor-none' to hide the default mouse on desktop */
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-600 selection:text-white lg:cursor-none">
      
      {/* High-End Custom Mouse Follower */}
      <CustomCursor />

      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-[110]"
        style={{ scaleX }}
      />
      
      {/* Premium organic animated background - Adjusted for depth */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-400/5 blur-[100px] rounded-full"
        />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        
        {/* Sections Wrapper for cleaner background transitions */}
        <div className="relative z-10">
          <Services />
          <Experience />
          <Contact />
        </div>
      </main>

      <footer className="relative bg-slate-950 py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white italic">S</div>
             <span className="font-black tracking-widest text-white uppercase text-sm">ShrutiHR</span>
          </div>
          
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em]">
            © 2026 • High-Performance Human Capital Advisory
          </p>
          
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
             <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;