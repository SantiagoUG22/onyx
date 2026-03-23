import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: 'Boda',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/quote', {
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
          message: ''
        });
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error de conexión con el servidor.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-black/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10">
              COTIZA TU <span className="bg-gradient-to-r from-onyx-purple to-onyx-blue bg-clip-text text-transparent">EVENTO</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto lg:mx-0 font-light">
              Estamos listos para transformar tu celebración. Déjanos tus datos y diseñemos juntos una experiencia inolvidable.
            </p>

            <div className="space-y-8 flex flex-col items-center lg:items-start">
              {[
                { icon: Phone, label: 'Llámanos o WhatsApp', value: '+52 (555) 123-4567', color: 'text-onyx-purple', bg: 'group-hover:bg-onyx-purple/20' },
                { icon: Mail, label: 'Correo Electrónico', value: 'ventas@onyxevents.com', color: 'text-onyx-blue', bg: 'group-hover:bg-onyx-blue/20' },
                { icon: MapPin, label: 'Ubicación', value: 'Ciudad de México, México', color: 'text-onyx-gold', bg: 'group-hover:bg-onyx-gold/20' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group text-center sm:text-left"
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

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#121212] p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-onyx-purple/10 blur-[60px] rounded-full"></div>
            
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
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-purple transition-colors text-white"
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
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-purple transition-colors text-white"
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
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-purple transition-colors text-white [color-scheme:dark]"
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Tipo de Evento</label>
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-purple transition-colors text-white appearance-none cursor-pointer pr-12"
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

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Mensaje o Requerimientos</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-onyx-purple transition-colors text-white resize-none"
                  placeholder="Cuéntanos más sobre tu evento..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="relative w-full py-5 bg-gradient-to-r from-onyx-purple via-onyx-blue to-onyx-purple bg-[length:200%_auto] hover:bg-right transition-all duration-700 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 group shadow-xl shadow-onyx-purple/20 overflow-hidden"
              >
                <span className="relative z-10">Enviar Solicitud</span>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      {/* Background Decorative Aura */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-onyx-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default ContactForm;
