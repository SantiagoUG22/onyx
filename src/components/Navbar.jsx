import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[130] bg-black/80 backdrop-blur-md border-b border-white/10 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-onyx-gold via-onyx-purple to-onyx-blue bg-clip-text text-transparent">
                  ONYX EVENTS
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-onyx-gold px-3 py-2 transition-colors">Inicio</a>
                <a href="#services" className="hover:text-onyx-gold px-3 py-2 transition-colors">Servicios</a>
                <a href="#about" className="hover:text-onyx-gold px-3 py-2 transition-colors">Nosotros</a>
                <a href="#contact" className="relative px-6 py-2 rounded-full font-medium overflow-hidden transition-all hover:scale-105 active:scale-95 group">
                  <span className="absolute inset-0 bg-gradient-to-r from-onyx-purple to-onyx-blue opacity-100 group-hover:opacity-90 transition-opacity"></span>
                  <span className="absolute inset-0 border border-white/20 rounded-full"></span>
                  <span className="relative z-10 text-white">Cotizar</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="relative z-[140] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-onyx-gold focus:outline-none transition-all"
              >
                {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal - Full Screen Absolute Fix */}
      <div 
        className={`fixed inset-0 w-screen h-[100dvh] z-[120] md:hidden transition-all duration-500 flex items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Background Blur Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-[15px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMenu}
        ></div>

        {/* Centered Content */}
        <div className={`relative z-[125] w-full flex flex-col items-center justify-center space-y-12 px-6 transition-all duration-500 transform ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}>
          <div className="flex flex-col items-center space-y-10 w-full">
            <a 
              href="#home" 
              onClick={closeMenu}
              className="text-4xl font-medium text-white hover:text-onyx-gold transition-all tracking-[0.15em] text-center w-full block"
            >
              INICIO
            </a>
            <a 
              href="#services" 
              onClick={closeMenu}
              className="text-4xl font-medium text-white hover:text-onyx-gold transition-all tracking-[0.15em] text-center w-full block"
            >
              SERVICIOS
            </a>
            <a 
              href="#about" 
              onClick={closeMenu}
              className="text-4xl font-medium text-white hover:text-onyx-gold transition-all tracking-[0.15em] text-center w-full block"
            >
              NOSOTROS
            </a>
          </div>
          
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="group relative px-12 py-5 rounded-full text-xl font-bold tracking-widest overflow-hidden transition-all shadow-[0_0_50px_rgba(138,43,226,0.3)] text-center mt-4"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-onyx-purple to-onyx-blue"></span>
            <span className="relative z-10 text-white uppercase">Cotizar Ahora</span>
          </a>

          {/* Decorative Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-onyx-purple/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
