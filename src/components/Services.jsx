import React, { useState, useEffect } from 'react';
import { Speaker, Cloud, Sparkles, PartyPopper, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Equipo de Sonido/DJ',
    description: 'Sistema profesional completo para eventos de hasta 150 personas. Incluye DJ, audio y control.',
    icon: Speaker,
    color: 'from-onyx-gold to-yellow-600',
    glow: 'shadow-onyx-gold/20',
    tags: ['Profesional', '150 Pax']
  },
  {
    title: 'Máquina de Humo',
    description: 'Efectos atmosféricos de alta densidad para realzar la iluminación y el escenario.',
    icon: Cloud,
    color: 'from-onyx-blue to-cyan-600',
    glow: 'shadow-onyx-blue/20',
    tags: ['Atmósfera', 'Pro']
  },
  {
    title: 'Pirotecnia Fría',
    description: 'Chisperos electrónicos de alta seguridad para momentos clave de tu celebración.',
    icon: Sparkles,
    color: 'from-onyx-purple to-pink-600',
    glow: 'shadow-onyx-purple/20',
    tags: ['Impacto', 'Seguro']
  },
  {
    title: 'Lluvia de Papel',
    description: 'Máquina profesional de confeti para un final espectacular en la pista de baile.',
    icon: PartyPopper,
    color: 'from-yellow-400 to-onyx-gold',
    glow: 'shadow-onyx-gold/20',
    tags: ['Espectáculo', 'Dinámico']
  }
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: isMobile ? true : false, amount: 0.01 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
          style={{ willChange: isMobile ? "auto" : "transform, opacity" }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            NUESTROS <span className="bg-gradient-to-r from-onyx-gold via-onyx-purple to-onyx-blue bg-clip-text text-transparent">SERVICIOS</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Soluciones premium con tecnología de punta para que tu evento sea simplemente inolvidable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: isMobile ? true : false, amount: isMobile ? 0.01 : 0.2 }}
              transition={isMobile ? { duration: 0 } : { 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={isMobile ? {} : { y: -10 }}
              className="group relative bg-[#0D0D0D] border border-white/5 p-8 rounded-[2.5rem] transition-all duration-500 hover:border-white/20"
              style={{ willChange: isMobile ? "auto" : "transform, opacity" }}
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-px rounded-[2.5rem] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}></div>
              
              <div className={`relative w-16 h-16 mb-10 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-2xl ${service.glow} group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={32} strokeWidth={1.5} />
                {/* Icon Inner Glow */}
                <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="flex gap-2 mb-6">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-onyx-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-500 font-light leading-relaxed mb-10 text-sm group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>

              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-onyx-purple/10 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-onyx-purple" />
                  </div>
                  Montaje Profesional
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-onyx-purple/10 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-onyx-purple" />
                  </div>
                  Operador Técnico Especializado
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className={`absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br ${service.color} opacity-0 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-onyx-purple/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-onyx-blue/5 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Services;
