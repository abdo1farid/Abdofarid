
import React from 'react';

const Footer: React.FC = () => {
  const links = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abderrahmane-farid-9477aa2b6' },
    { name: 'Github', href: 'https://github.com/abdo1farid' }
  ];

  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-slate-950/80 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6">
        {/* Logo/Identity Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black tracking-tighter mb-2">AF</h2>
          <p className="text-slate-500 text-[10px] md:text-sm font-medium uppercase tracking-widest">Engineering precision</p>
        </div>
        
        {/* Links Section - Strictly on the same horizontal axis */}
        <div className="flex items-center gap-8 md:gap-12">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[11px] font-black text-slate-400 hover:text-white uppercase tracking-[0.4em] transition-all hover:tracking-[0.5em] whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest text-center md:text-right">
          © {new Date().getFullYear()} Abderrahmane FARID
        </div>
      </div>
    </footer>
  );
};

export default Footer;
