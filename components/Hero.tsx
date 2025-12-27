
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-7xl"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-black tracking-[0.2em] uppercase backdrop-blur-md shadow-lg"
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
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.9] bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent select-none"
        >
          ABDERRAHMANE <br />
          <span className="text-blue-500 inline-block relative">
            FARID
            <motion.div 
              className="absolute -bottom-2 left-0 h-2 bg-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
            />
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="flex flex-col gap-6 mb-12">
          <p className="text-xl md:text-3xl text-slate-100 font-medium tracking-tight">
            Software Developer & Programmer
          </p>
          <div className="flex items-center justify-center gap-4 text-slate-500 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            <span className="h-[1px] w-8 bg-blue-500/30" />
            A young programmer and software developer
            <span className="h-[1px] w-8 bg-blue-500/30" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.a
            href="#projects"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/20 text-sm uppercase tracking-widest cursor-pointer"
          >
            Explore Portfolio
          </motion.a>
          
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
                whileHover={{ scale: 1.1, y: -4, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-blue-400 transition-all backdrop-blur-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 cursor-pointer"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="text-blue-500/50" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
