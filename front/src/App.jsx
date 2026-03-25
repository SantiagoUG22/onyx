import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Intro from './components/Intro';
import WhatsAppButton from './components/WhatsAppButton';
import { motion } from 'framer-motion';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-onyx-gold selection:text-white relative overflow-hidden">
      {/* Global Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: mousePos.x, 
            y: mousePos.y,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-onyx-gold/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: -mousePos.x, 
            y: -mousePos.y,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-onyx-accent/10 blur-[150px] rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-onyx-gold/5 blur-[180px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Intro />
          <Hero />
          <Services />
          <ContactForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default App;
