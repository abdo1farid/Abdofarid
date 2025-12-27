
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
        >
          Professional <span className="text-blue-500">Timeline</span>
        </motion.h2>
        <p className="text-slate-500 text-lg font-light">The journey of building and winning.</p>
      </div>

      <div className="relative space-y-20">
        {/* Animated Background Line - Centered on desktop, left-aligned on mobile */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-950 to-transparent -translate-x-1/2" />

        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center w-full`}
          >
            {/* Dot on line */}
            <div className={`absolute left-[20px] md:left-1/2 top-10 md:top-auto w-5 h-5 ${exp.company === 'Master Developer' ? 'bg-cyan-400' : 'bg-blue-600'} rounded-full border-4 border-slate-950 shadow-[0_0_20px_rgba(37,99,235,1)] -translate-x-1/2 z-10`} />

            {/* Content Side 1: Header Info */}
            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <Calendar size={12} />
                {exp.period}
              </motion.div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight tracking-tighter">{exp.role}</h3>
              <div className={`flex items-center gap-2 text-blue-400 font-bold mb-6 text-base md:text-xl ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                <Briefcase size={18} className="text-blue-500" />
                {exp.company}
              </div>
            </div>

            {/* Spacer for center line */}
            <div className="hidden md:block w-[10%]" />

            {/* Content Side 2: Description Box */}
            <div className={`w-full md:w-[45%] pl-12 md:pl-0`}>
              <div className={`p-8 bg-slate-900/40 border ${exp.company === 'Master Developer' ? 'border-cyan-500/30 bg-cyan-500/5' : 'border-white/5'} rounded-[2.5rem] backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10`}>
                <ul className="space-y-4">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-4 text-slate-400 font-light leading-relaxed group-hover:text-slate-200 transition-colors text-sm md:text-base">
                      <span className={`w-1.5 h-1.5 rounded-full ${exp.company === 'Master Developer' ? 'bg-cyan-400' : 'bg-blue-500'} shrink-0 mt-2.5 shadow-[0_0_8px_rgba(59,130,246,0.6)]`} />
                      {desc}
                    </li>
                  ))}
                </ul>
                {exp.company === 'Master Developer' && (
                  <motion.a 
                    href="https://masterdeveloper.vercel.app"
                    target="_blank"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 mt-6 text-cyan-400 text-xs font-black uppercase tracking-widest hover:text-cyan-300 transition-colors"
                  >
                    Visit Master Developer <ExternalLink size={14} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
