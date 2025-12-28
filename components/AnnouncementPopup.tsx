
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Rocket } from 'lucide-react';

const AnnouncementPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to allow initial animations to breathe
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
            className="relative w-full max-w-[500px] bg-[#050508] border border-cyan-500/30 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_80px_rgba(6,182,212,0.15)] overflow-hidden"
          >
            {/* Ambient Lighting Effects */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-3 bg-white/5 hover:bg-white/10 hover:rotate-90 rounded-full text-slate-400 hover:text-white transition-all duration-300 z-20 backdrop-blur-md border border-white/5"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Animated Icon Container */}
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 mb-8 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)] group"
              >
                <Rocket size={44} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
              </motion.div>

              {/* Status Tag */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-cyan-500/10"
              >
                <Sparkles size={12} className="animate-pulse" />
                <span>Big Announcement</span>
              </motion.div>

              {/* Headline */}
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter leading-[1.1]"
              >
                Master Developer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">is Finally Live!</span>
              </motion.h3>

              {/* Copy */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-[90%] font-medium"
              >
                We're excited to announce the launch of our new platform. Join the exclusive waitlist today and secure your spot in the future of development.
              </motion.p>

              {/* CTA Button */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="https://masterdeveloper.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-cyan-600/20 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Join Waitlist</span>
                <ExternalLink size={16} className="relative mb-0.5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementPopup;
