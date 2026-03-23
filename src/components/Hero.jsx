import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-onyx-purple/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-onyx-blue/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="block text-white">LLEVAMOS TU EVENTO AL</span>
          <span className="bg-gradient-to-r from-onyx-gold via-onyx-purple to-onyx-blue bg-clip-text text-transparent">
            SIGUIENTE NIVEL
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Renta de equipo profesional, montaje de escenarios y producción de eventos de alto impacto.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#contact" className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            <span className="relative z-10">Solicitar Cotización</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </a>
          <a href="#services" className="group relative px-10 py-5 font-medium rounded-full transition-all backdrop-blur-sm border border-white/10 hover:border-white/40 hover:bg-white/5 overflow-hidden text-white">
            <span className="relative z-10">Ver Servicios</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-onyx-purple/10 via-transparent to-onyx-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
