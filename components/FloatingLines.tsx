
import React from 'react';
import { motion } from 'framer-motion';

const FloatingLines: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background radial gradient to ground the lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#010409_100%)] opacity-90" />
      
      {/* Horizontal Floating Lines - Boosted Opacity */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          style={{
            height: '1.5px',
            width: '150%',
            top: `${(i / 15) * 110}%`,
            left: '-25%',
            rotate: '-1deg',
          }}
          animate={{
            x: ['-2%', '2%', '-2%'],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      {/* Vertical Floating Lines - Boosted Opacity */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute bg-blue-400/15 shadow-[0_0_15px_rgba(96,165,250,0.1)]"
          style={{
            width: '1.5px',
            height: '150%',
            left: `${(i / 15) * 110}%`,
            top: '-25%',
            rotate: '-1deg',
          }}
          animate={{
            y: ['-2%', '2%', '-2%'],
            opacity: [0.08, 0.25, 0.08],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Decorative Blur Orbs for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full" />
    </div>
  );
};

export default FloatingLines;
