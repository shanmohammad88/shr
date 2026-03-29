import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-900 scroll-smooth selection:bg-indigo-600 selection:text-white">
      {/* Premium animated background gradient */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-400/5 blur-[80px] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Contact />
      </main>
      <footer className="relative backdrop-blur-xl bg-slate-950/80 py-12 text-center border-t border-slate-800/50 shadow-2xl">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          © 2026 ShrutiHR • High-Performance Human Capital Advisory
        </p>
      </footer>
    </div>
  );
}

export default App;