import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Activities from './components/Activities';
import Media from './components/Media';
import Volunteer from './components/Volunteer';
import Donate from './components/Donate';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3700); // 1.5s logo + 1.2s text + 1s pause
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center flex-col"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.img 
          src="/LOGO_01.png" 
          alt="陪伴兒童成長關懷協會 LOGO" 
          className="h-48 sm:h-72 w-auto object-contain scale-110 sm:scale-125 transform origin-center"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 px-4 w-full"
        >
          <span className="font-bold whitespace-nowrap text-[15px] sm:text-xl md:text-2xl text-neutral-800 tracking-[0.1em] sm:tracking-[0.25em] ml-[0.1em] sm:ml-[0.25em]">
            社團法人中華陪童長大兒少關懷協會
          </span>
          <div className="w-16 h-1 bg-orange-400 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showIntro]);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-orange-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Activities />
          <Media />
          <Volunteer />
          <Donate />
        </main>
        <Footer />
        <FloatingSocial />
      </div>
    </>
  );
}
