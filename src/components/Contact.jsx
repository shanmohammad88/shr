import React, { useState } from 'react';
/* Using 'Link' icon from lucide-react for LinkedIn */
import { Mail, Link, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !requirement.trim()) {
      setStatus('Please fill in all fields before sending.');
      return;
    }

    const subject = encodeURIComponent('Talent Acquisition Inquiry - ShrutiHR');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nRequirement:\n${requirement}`);
    const mailto = `mailto:shrutigupta9005@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    setStatus('Your email draft is opened in your mail app. Submit to complete.');
    setName('');
    setEmail('');
    setRequirement('');
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-slate-100 via-white to-slate-950 overflow-hidden">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl relative border border-indigo-600/20 backdrop-blur-xl">
          
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left Column: Brand Info */}
            <div className="relative p-8 sm:p-12 md:p-20 lg:p-20 text-white z-10">
              <h2 className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">Connect</h2>
              <h3 className="text-4xl sm:text-5xl font-black mb-8 leading-tight bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Ready to optimize your <span className="text-slate-400">Human Capital?</span>
              </h3>
              <p className="text-slate-300 text-lg mb-12 leading-relaxed">
                Leveraging 4 years of expertise from ICICI Prudential to help you build elite teams. 
                Whether it's local specialists or overseas recruitment, let's start the conversation.
              </p>

              <div className="space-y-8">
                {/* Email Item */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600/30 group-hover:border-indigo-400/50 transition-all shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                    <Mail className="w-6 h-6 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                    <p className="text-lg font-bold text-slate-100 group-hover:text-indigo-200 transition-colors">shrutigupta9005@gmail.com</p>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a 
                  href="https://www.linkedin.com/in/shruti-gupta-a247b3358/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-[#0077b5]/30 group-hover:border-blue-400/50 transition-all shadow-[0_0_20px_rgba(0,119,181,0.2)]">
                    <Link className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Professional Profile</p>
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-slate-100 group-hover:text-blue-200 transition-colors">LinkedIn Portfolio</p>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-300 transition-colors" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="relative bg-white/95 m-4 sm:m-6 md:m-8 lg:m-12 rounded-[2rem] p-8 sm:p-10 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-slate-200/50 z-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-slate-600 mb-3 block">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gradient-to-r from-slate-50 to-indigo-50/30 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400 font-medium hover:border-slate-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-slate-600 mb-3 block">Business Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gradient-to-r from-slate-50 to-indigo-50/30 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400 font-medium hover:border-slate-300"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-slate-600 mb-3 block">Requirement</label>
                  <textarea
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    className="w-full bg-gradient-to-r from-slate-50 to-indigo-50/30 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none h-32 text-slate-900 placeholder-slate-400 font-medium resize-none hover:border-slate-300"
                    placeholder="Tell me about your recruitment needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 sm:py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:from-indigo-600 hover:to-indigo-500 hover:shadow-[0_15px_40px_rgba(99,102,241,0.3)] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 group border border-slate-700/50 hover:border-indigo-400/30"
                >
                  Send Inquiry
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {status && (
                  <p className={`text-sm font-bold text-center px-4 py-3 rounded-lg transition-all ${
                    status.includes('Please') 
                      ? 'text-red-600 bg-red-50 border border-red-200' 
                      : 'text-emerald-600 bg-emerald-50 border border-emerald-200'
                  }`}>{status}</p>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;