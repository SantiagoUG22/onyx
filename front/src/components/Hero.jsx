import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animProps = (yValue, delayValue = 0) => {
    return {
      initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: yValue },
      whileInView: isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 },
      viewport: { once: isMobile ? true : false, amount: 0.1 },
      transition: isMobile ? { duration: 0 } : { duration: 1.2, delay: delayValue, ease: [0.16, 1, 0.3, 1] }
    };
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 bg-[#0A0A0A]"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-12 md:py-0">
        <motion.h1 
          {...animProps(20)}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
          style={{ willChange: isMobile ? "auto" : "transform, opacity" }}
        >
          <span className="block text-white">LLEVAMOS TU EVENTO AL</span>
          <span className="text-onyx-gold">
            SIGUIENTE NIVEL
          </span>
        </motion.h1>
        
        <motion.p 
          {...animProps(15, 0.1)}
          className="text-gray-400 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          style={{ willChange: isMobile ? "auto" : "transform, opacity" }}
        >
          Renta de equipo profesional, montaje de escenarios y producción de eventos de alto impacto.
        </motion.p>

        <motion.div 
          initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{ willChange: isMobile ? "auto" : "transform, opacity" }}
        >
          <a href="#contact" className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <span className="relative z-10">Solicitar Cotización</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </a>
          <a href="#services" className="group relative w-full sm:w-auto px-10 py-5 font-medium rounded-full transition-all backdrop-blur-sm border border-white/10 hover:border-white/40 hover:bg-white/5 overflow-hidden text-white">
            <span className="relative z-10">Ver Servicios</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-onyx-gold/10 via-transparent to-onyx-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block pointer-events-none"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent animate-bounce"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
