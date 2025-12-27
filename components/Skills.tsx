
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Tools'] as const;

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Technical <span className="text-blue-500">Arsenal</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              A diverse proficiency across the modern software stack, focusing on architecture, 
              performance, and scalable development patterns.
            </p>
          </div>
          <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-[2rem] backdrop-blur-xl">
            <div className="text-4xl font-black text-blue-500 mb-1">10+</div>
            <div className="text-xs uppercase font-bold tracking-widest text-slate-500">Expert Languages</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <div key={cat} className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500">{cat}</span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>
              <div className="grid gap-6">
                {SKILLS.filter(s => s.category === cat).map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                    viewport={{ once: true }}
                    className="p-6 bg-slate-900/30 border border-white/5 rounded-3xl group transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 p-2 bg-white/5 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                        <span className="font-bold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-blue-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;