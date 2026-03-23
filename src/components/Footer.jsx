import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <h2 className="text-xl font-black bg-gradient-to-r from-onyx-gold via-onyx-purple to-onyx-blue bg-clip-text text-transparent">
              ONYX EVENTS
            </h2>
            <div className="hidden md:block w-px h-4 bg-white/10"></div>
            <p className="text-gray-500 font-light text-xs max-w-[300px] text-center md:text-left">
              Transformando celebraciones en experiencias extraordinarias.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-500 hover:text-onyx-purple transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-onyx-blue transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <a href="#home" className="hover:text-onyx-gold transition-colors">Inicio</a>
            <a href="#services" className="hover:text-onyx-gold transition-colors">Servicios</a>
            <a href="#contact" className="hover:text-onyx-gold transition-colors">Cotizar</a>
            <span className="text-gray-700">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
