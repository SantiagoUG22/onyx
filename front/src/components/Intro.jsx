import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: isMobile ? 30 : 80 }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 6,
    }));
  }, [isMobile]);

  return (
    <section id="intro" className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-[#050505]"></div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-onyx-gold/10 blur-[80px] md:blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-onyx-accent/10 blur-[80px] md:blur-[150px] rounded-full"
        />

        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: "110vh", x: `${p.x}vw` }}
            animate={{ 
              opacity: [0, 0.5, 0.8, 0.5, 0],
              y: "-15vh",
              x: [`${p.x}vw`, `${p.x + (Math.random() * 20 - 10)}vw`]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear" 
            }}
            className="absolute bg-onyx-gold rounded-full shadow-[0_0_10px_rgba(197,160,33,0.8)]"
            style={{ 
              width: isMobile ? p.size * 0.6 : p.size, 
              height: isMobile ? p.size * 0.6 : p.size,
              filter: `blur(${p.size < 4 ? '0.5px' : '1px'})`
            }}
          />
        ))}

        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none mix-blend-overlay">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.6" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex flex-col items-center w-full max-w-[1600px]"
        >
          <div className="w-full h-auto flex justify-center items-center overflow-visible">
            <svg 
              viewBox="0 0 1600 250" 
              className="w-full h-auto drop-shadow-[0_0_20px_rgba(184,155,94,0.15)]"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#B89B5E" />
                  <stop offset="50%" stopColor="#E5D9C2" />
                  <stop offset="100%" stopColor="#B89B5E" />
                </linearGradient>
              </defs>
              <text 
                x="800" 
                y="160" 
                dx="0.22em" 
                textAnchor="middle" 
                className="font-black"
                style={{ 
                  fontSize: '150px', 
                  letterSpacing: '0.45em',
                  fill: 'url(#goldGradient)',
                  fontFamily: 'inherit'
                }}
              >
                EXCLUSIVE
              </text>
            </svg>
          </div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-px bg-onyx-gold/30 mt-4 md:mt-8 w-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.8em] mt-6 md:mt-8 uppercase font-light text-center w-full"
          >
            Experience the extraordinary
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-12 bg-gradient-to-b from-onyx-gold/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Intro;
