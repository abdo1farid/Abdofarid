
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import AnnouncementPopup from './components/AnnouncementPopup';
import { motion } from 'framer-motion';
import { Mail, Clock, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <main className="relative text-white selection:bg-red-500/30 overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <AnnouncementPopup />
      
      <Hero />
      
      <div className="space-y-32 md:space-y-64 mb-32 md:mb-64">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Experience />
        </motion.div>
        
        <section id="contact" className="py-20 md:py-40 px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-[1px] bg-gradient-to-br from-red-500/40 via-red-900/10 to-transparent rounded-[2.5rem] md:rounded-[5rem] overflow-hidden group shadow-2xl"
          >
            <div className="bg-[#080202]/95 p-8 md:p-24 lg:p-32 rounded-[2.4rem] md:rounded-[4.9rem] text-center backdrop-blur-3xl relative z-10 overflow-hidden min-h-[500px] md:min-h-[650px] flex flex-col justify-center items-center">
              {/* Cinematic Red Glows */}
              <div className="absolute top-0 right-0 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-red-600/15 blur-[100px] md:blur-[160px] pointer-events-none animate-pulse" />
              <div className="absolute bottom-0 left-0 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-rose-500/10 blur-[100px] md:blur-[160px] pointer-events-none" />

              <div className="relative z-30 w-full flex flex-col items-center">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-red-500/10 text-red-400 px-4 md:px-6 py-2 rounded-full border border-red-500/30 mb-8 md:mb-12 flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <Clock size={14} className="hidden sm:block" />
                  Status: Academic Focus
                </motion.div>
                
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12 leading-[1.1] tracking-tighter text-white max-w-5xl px-4"
                >
                  I'm not available at the moment <br className="hidden md:block" /> 
                  <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">due to my studies.</span>
                </motion.h2>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="max-w-xl mx-auto mb-10 md:mb-16 text-slate-300 font-medium text-base md:text-lg leading-relaxed px-4"
                >
                  Currently prioritizing studies, but I'm always open to future collaborations and visionary ideas.
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full max-w-2xl px-4"
                >
                  <a 
                    href="mailto:faridabderrahmane1@gmail.com" 
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 p-4 md:p-6 lg:p-8 rounded-[1.5rem] md:rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500 hover:scale-[1.01] hover:border-red-500/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 md:p-4 bg-red-600 rounded-xl md:rounded-2xl group-hover:scale-110 group-hover:bg-red-500 transition-all shadow-lg shadow-red-600/20">
                        <Mail size={24} className="text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Send an inquiry</div>
                        <div className="font-black text-sm md:text-lg lg:text-xl tracking-tight text-white break-all">faridabderrahmane1@gmail.com</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/5 rounded-full group-hover:bg-red-600 transition-all group-hover:shadow-lg group-hover:shadow-red-600/30">
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </motion.div>

                <motion.button 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05, color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 md:mt-16 px-8 py-4 bg-white/5 text-slate-400 hover:text-white font-black rounded-2xl border border-white/5 transition-all text-[10px] uppercase tracking-[0.3em]"
                >
                  Scroll Back to Start
                </motion.button>
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
