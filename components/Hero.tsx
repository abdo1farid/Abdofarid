
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

  // Using requested casing: Abderrahmane FARID
  const nameFirst = "Abderrahmane";
  const nameLast = "FARID";

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-16 md:py-24 overflow-hidden">
      <FloatingLines />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-full relative w-full flex flex-col items-center"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 mb-8 md:mb-12 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[9px] md:text-xs font-black tracking-[0.2em] uppercase backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <Sparkles size={14} className="animate-pulse hidden xs:block" />
          <span>Building the Future</span>
        </motion.div>

        {/* Name - Optimized with clamp and flex for full visibility */}
        <motion.h1 
          variants={itemVariants}
          className="flex flex-col items-center sm:block text-[clamp(2.2rem,10vw,9.5rem)] font-black mb-8 md:mb-14 tracking-tighter leading-[0.9] select-none px-2 w-full"
        >
          <span className="inline-block relative bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent break-all sm:break-normal">
            {nameFirst}
          </span>
          <span className="text-blue-600 inline-block relative sm:ml-4 sm:mt-0 mt-2">
            {nameLast}
            <motion.div 
              className="absolute -bottom-1 md:-bottom-2 left-0 h-1 md:h-2 bg-blue-600/30 rounded-full blur-[2px]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "circOut" }}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 md:gap-6 mb-12 md:mb-20 max-w-4xl px-2">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-100 font-semibold tracking-tight leading-tight">
            A youth passionate by programming and developing software
          </p>
          <div className="flex items-center justify-center gap-3 text-slate-500 text-[10px] sm:text-xs md:text-lg font-medium tracking-widest uppercase">
            <span className="h-[1px] w-4 md:w-8 bg-blue-500/30" />
            Software Developer & Creative Engineer
            <span className="h-[1px] w-4 md:w-8 bg-blue-500/30" />
          </div>
        </motion.div>

        {/* Buttons and Socials */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-10 w-full max-w-2xl px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full">
            <motion.a
              href="#projects"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59,130,246,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/30 text-[10px] md:text-[11px] uppercase tracking-[0.2em] cursor-pointer text-center"
            >
              Explore Portfolio
            </motion.a>

            <motion.button
              onClick={() => setIsPopupOpen(true)}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl transition-all text-[10px] md:text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <MessageSquare size={16} className="text-blue-400" />
              Your Opinion
            </motion.button>
          </div>
          
          <div className="flex items-center gap-5">
            {[
              { icon: <Github size={24} />, href: 'https://github.com/abdo1farid', label: 'GitHub' },
              { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/abderrahmane-farid-9477aa2b6', label: 'LinkedIn' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -4, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.9 }}
                className="p-5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-blue-400 transition-all backdrop-blur-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 cursor-pointer flex flex-col items-center gap-2"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase font-black tracking-[0.5em] text-slate-600">Scroll</span>
        <ChevronDown className="text-blue-500/50" size={20} />
      </motion.div>

      <OpinionPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default Hero;
