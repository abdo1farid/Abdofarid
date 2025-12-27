
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isDevelopment = project.title.toLowerCase() === 'codify';

  // Specific theme colors as requested
  const getThemeGradient = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('greenconnect')) return 'from-emerald-600 to-green-900';
    if (t.includes('astrosolve')) return 'from-blue-900 to-indigo-950';
    if (t.includes('codify')) return 'from-purple-600 to-violet-900';
    return 'from-slate-800 to-slate-950'; // Default
  };
  
  const themeColor = getThemeGradient(project.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-500 hover:border-blue-500/30 perspective-1000 shadow-2xl"
    >
      {/* Animated Typography Header (Replaces Image) */}
      <div className={`aspect-video w-full overflow-hidden relative flex items-center justify-center bg-gradient-to-br ${themeColor} opacity-90 group-hover:opacity-100 transition-all duration-500`}>
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] mix-blend-overlay animate-pulse" />
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/20" />
          ))}
        </div>

        {/* Dynamic Name Display */}
        <motion.div
          style={{ translateZ: 50 }}
          className="relative z-10 text-center select-none"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-black tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500"
          >
            {project.title.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40%' }}
            className="h-1 bg-white/50 mx-auto mt-4 rounded-full group-hover:w-full transition-all duration-500"
          />
        </motion.div>

        {!isDevelopment && (
          <div className="absolute top-6 right-6">
            <motion.div 
              whileHover={{ rotate: 45 }}
              className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white"
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>
        )}
      </div>
      
      <div className="p-10 relative bg-[#020617]/50 backdrop-blur-xl">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-sm md:text-base text-slate-400 mb-10 font-light leading-relaxed min-h-[80px]">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          {isDevelopment ? (
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-500/70 italic">
              <Sparkles size={12} className="animate-pulse" />
              Under construction
            </div>
          ) : (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all flex items-center gap-2"
            >
              Launch Site <ArrowUpRight size={14} />
            </a>
          )}
          
          <div className="flex gap-4">
            {project.github && (
              <motion.a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, color: '#fff' }}
                className="text-slate-500 transition-colors"
              >
                <Github size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
            >
              Curated <br />
              <span className="text-blue-500">Excellence</span>
            </motion.h2>
            <p className="text-slate-500 text-lg md:text-xl font-light">
              Pushing the boundaries of what's possible in the digital realm.
            </p>
          </div>
          <div className="h-1 w-32 bg-blue-600 rounded-full hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
