
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Generate static dots for the grid
  const dots = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        arr.push({ x: i * 7, y: j * 7 });
      }
    }
    return arr;
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#010409]">
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      {/* Spicy Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[140px]"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -60, 0],
          y: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[160px]"
      />

      {/* Mouse Follower Glow (Simplified for pure CSS/Motion performance) */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent pointer-events-none opacity-40" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay" />
    </div>
  );
};

export default AnimatedBackground;