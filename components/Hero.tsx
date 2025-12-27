
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, Sparkles, MessageSquare } from 'lucide-react';
import FloatingLines from './FloatingLines';
import OpinionPopup from './OpinionPopup';

const Hero: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nameWords = "ABDERRAHMANE FARID".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <FloatingLines />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-7xl relative"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <Sparkles size={14} className="animate-pulse" />
          <span>Building the Future</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black mb-8 tracking-tighter leading-[0.85] bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent select-none px-4"
        >
          {nameWords[0]} <br className="md:hidden" />
          <span className="text-blue-600 inline-block relative md:ml-4">
            {nameWords[1]}
            <motion.div 
              className="absolute -bottom-2 md:-bottom-4 left-0 h-2 md:h-3 bg-blue-600/30 rounded-full blur-sm"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1.2, ease: "circOut" }}
            />
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="flex flex-col gap-6 mb-12">
          <p className="text-lg md:text-2xl lg:text-3xl text-slate-100 font-medium tracking-tight">
            A youth passionate by programming and developing software
          </p>
          <div className="flex items-center justify-center gap-4 text-slate-500 text-xs md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            <span className="hidden sm:block h-[1px] w-8 bg-blue-500/30" />
            Software Developer & Creative Engineer
            <span className="hidden sm:block h-[1px] w-8 bg-blue-500/30" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.a
            href="#projects"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/30 text-[11px] uppercase tracking-[0.2em] cursor-pointer"
          >
            Explore Portfolio
          </motion.a>

          <motion.button
            onClick={() => setIsPopupOpen(true)}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl transition-all text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3"
          >
            <MessageSquare size={16} className="text-blue-400" />
            Your Opinion
          </motion.button>
          
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={20} />, href: 'https://github.com/abdo1farid' },
              { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/abderrahmane-farid-9477aa2b6' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.9 }}
                className="p-5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-blue-400 transition-all backdrop-blur-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 cursor-pointer hidden md:flex flex-col items-center gap-2"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase font-black tracking-widest text-slate-600">Scroll</span>
        <ChevronDown className="text-blue-500/50" size={24} />
      </motion.div>

      <OpinionPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default Hero;
