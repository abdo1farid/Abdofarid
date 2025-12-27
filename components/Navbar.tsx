import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-6 flex justify-center`}
    >
      <div 
        className={`flex items-center justify-between md:justify-center gap-10 w-full md:w-auto px-6 md:px-10 py-3.5 rounded-full border border-white/10 bg-slate-950/50 backdrop-blur-3xl shadow-2xl transition-all duration-500 ${
          scrolled ? 'scale-95 md:scale-90 opacity-95 translate-y-2' : 'scale-100'
        }`}
      >
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, '#home')}
          className="text-white font-black text-2xl tracking-tighter group flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-sm">A</span>
          AF
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="relative text-[10px] font-black text-slate-400 hover:text-white transition-colors tracking-[0.3em] uppercase group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,1)]" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-blue-600 text-white text-[11px] font-black px-8 py-3 rounded-full uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20"
          >
            Contact
          </motion.a>

          {/* Hamburger Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-6 right-6 md:hidden bg-slate-950/95 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center gap-6 z-[99]"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-lg font-black text-slate-400 hover:text-white uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full bg-blue-600 text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;