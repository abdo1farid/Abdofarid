
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Mail, Clock } from 'lucide-react';

const App: React.FC = () => {
  return (
    <main className="relative text-white selection:bg-blue-500/30">
      <AnimatedBackground />
      <Navbar />
      
      <Hero />
      
      <div className="space-y-48 mb-48">
        <Projects />
        <Skills />
        <Experience />
        
        <section id="contact" className="py-40 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-[2px] bg-gradient-to-br from-blue-500 via-blue-900/40 to-transparent rounded-[5rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(37,99,235,0.2)]"
          >
            <div className="bg-[#020617] p-16 md:p-28 rounded-[4.9rem] text-center backdrop-blur-3xl relative z-10 overflow-hidden min-h-[600px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/5 blur-[150px] pointer-events-none" />

              {/* Status Overlay Layer */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 z-20 bg-red-600/10 backdrop-blur-md border-2 border-red-500/30 rounded-[4.9rem] flex flex-col items-center justify-center p-12 md:p-24 text-center"
              >
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-red-600/20 text-red-400 px-6 py-2.5 rounded-full border border-red-500/30 mb-10 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] animate-pulse"
                >
                  <Clock size={16} />
                  Status: Academic Focus
                </motion.div>
                
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1.1] tracking-tighter text-white max-w-4xl"
                >
                  I'm not available at the moment <br /> 
                  <span className="text-red-500">due to my studies.</span>
                </motion.h2>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="max-w-2xl mx-auto mb-14 text-slate-300 font-medium text-lg leading-relaxed"
                >
                  <p className="mb-6">However, for any urgent inquiries or projects, I remain available via email:</p>
                  <a 
                    href="mailto:faridabderrahmane1@gmail.com" 
                    className="text-white hover:text-red-400 transition-all flex items-center justify-center gap-4 bg-white/5 border border-white/10 px-8 py-6 rounded-[2rem] group hover:bg-white/10 hover:scale-[1.02]"
                  >
                    <Mail size={24} className="text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="font-black text-lg md:text-xl tracking-tight">faridabderrahmane1@gmail.com</span>
                  </a>
                </motion.div>

                <motion.button 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.05 }}
                  className="px-10 py-4 bg-white/5 text-white font-black rounded-2xl border border-white/10 transition-all text-xs uppercase tracking-[0.3em]"
                >
                  Return to Top
                </motion.button>
              </motion.div>

              {/* Background Mock Content (Blurred) */}
              <div className="opacity-10 blur-md pointer-events-none select-none">
                <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">
                  Let's <span className="text-blue-500">Collaborate</span>
                </h2>
                <p className="text-slate-400 mb-12 text-xl max-w-2xl mx-auto">
                  Engineering the future through code and creativity.
                </p>
                <div className="flex justify-center">
                  <div className="px-12 py-5 bg-blue-600 rounded-2xl font-black">START PROJECT</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default App;
