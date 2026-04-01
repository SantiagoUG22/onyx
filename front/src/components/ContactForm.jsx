import React, { useState, useEffect } from 'react';
import { Send, MapPin, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: 'Boda',
    guests: '50-100',
    services: {
      audio: true,
      smoke: true,
      sparkles: true,
      confetti: true
    },
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        setFormData({
          name: '',
          email: '',
          eventDate: '',
          eventType: 'Boda',
          guests: '50-100',
          services: {
            audio: true,
            smoke: true,
            sparkles: true,
            confetti: true
          },
          message: ''
        });
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error de conexión con el servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section id="contact" className="py-24 bg-black/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: isMobile ? true : false, amount: isMobile ? 0.01 : 0.3 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
            style={{ willChange: isMobile ? "auto" : "transform, opacity" }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10">
              COTIZA TU <span className="text-onyx-gold">EVENTO</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto lg:mx-0 font-light">
              Estamos listos para transformar tu celebración. Déjanos tus datos y diseñemos juntos una experiencia inolvidable.
            </p>

            <div className="space-y-8 flex flex-col items-center lg:items-start">
              {[
                { icon: Phone, label: 'Llámanos o WhatsApp', value: '+52 (442) 772-2553', color: 'text-onyx-gold', bg: 'group-hover:bg-onyx-gold/20' },
                { icon: Mail, label: 'Correo Electrónico', value: 'onyxeventsqro@gmail.com', color: 'text-onyx-accent', bg: 'group-hover:bg-onyx-accent/20' },
                { icon: MapPin, label: 'Ubicación', value: 'Santiago de Querétaro, México', color: 'text-onyx-gold', bg: 'group-hover:bg-onyx-gold/20' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  viewport={{ once: isMobile ? true : false }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group text-center sm:text-left"
                  style={{ willChange: isMobile ? "auto" : "transform, opacity" }}
                >
                  <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center ${item.bg} transition-colors`}>
                    <item.icon size={24} className={item.color} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className="text-xl text-white font-bold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: isMobile ? true : false, amount: isMobile ? 0.01 : 0.3 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#121212] p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden"
            style={{ willChange: isMobile ? "auto" : "transform, opacity" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-onyx-gold/10 blur-[60px] rounded-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-gold transition-colors text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-gold transition-colors text-white"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Fecha del Evento</label>
                  <input 
                    type="date" 
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-gold transition-colors text-white [color-scheme:dark] appearance-none"
                    style={{ 
                      minHeight: "60px",
                      WebkitAppearance: "none",
                      position: "relative"
                    }}
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Tipo de Evento</label>
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-gold transition-colors text-white appearance-none cursor-pointer pr-12"
                    style={{ minHeight: "60px" }}
                  >
                    <option value="Boda" className="bg-black">Boda</option>
                    <option value="XV Años" className="bg-black">XV Años</option>
                    <option value="Corporativo" className="bg-black">Corporativo</option>
                    <option value="Graduación" className="bg-black">Graduación</option>
                    <option value="Privado" className="bg-black">Fiesta Privada</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-[60%] -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Invitados Estimados</label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-gold transition-colors text-white appearance-none cursor-pointer pr-12"
                    style={{ minHeight: "60px" }}
                  >
                    <option value="<50" className="bg-black">Menos de 50</option>
                    <option value="50-100" className="bg-black">50 - 100 invitados</option>
                    <option value="100-150" className="bg-black">100 - 150 invitados</option>
                    <option value="150-200" className="bg-black">150 - 200 invitados</option>
                    <option value="200+" className="bg-black">Más de 200 invitados</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-[60%] -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                </div>
                <div className="flex flex-col justify-center">
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Servicios Requeridos</label>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {[
                      { id: 'audio', label: 'Audio/DJ' },
                      { id: 'smoke', label: 'Humo' },
                      { id: 'sparkles', label: 'Pirotecnia' },
                      { id: 'confetti', label: 'Papel' }
                    ].map((svc) => (
                      <label key={svc.id} className="flex items-center gap-2 cursor-pointer group/check">
                        <div className="relative flex items-center justify-center">
                          <input 
                            type="checkbox"
                            name={svc.id}
                            checked={formData.services[svc.id]}
                            onChange={handleChange}
                            className="peer appearance-none w-5 h-5 border border-white/20 rounded-md bg-white/5 checked:bg-onyx-gold checked:border-onyx-gold transition-all"
                          />
                          <svg className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-400 group-hover/check:text-white transition-colors">{svc.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Mensaje o Requerimientos</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-gold transition-colors text-white resize-none"
                  placeholder="Cuéntanos más sobre tu evento..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={`relative w-full py-5 bg-gradient-to-r from-[#C5A021] via-[#8E7618] to-[#C5A021] bg-[length:200%_auto] hover:bg-right transition-all duration-700 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 group shadow-xl shadow-[#C5A021]/30 overflow-hidden ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Enviar Solicitud</span>
                    <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-onyx-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default ContactForm;
