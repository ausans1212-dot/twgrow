import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: '關於我們', href: '#about' },
    { name: '服務項目', href: '#services' },
    { name: '活動紀錄', href: '#activities' },
    { name: '志工招募', href: '#volunteer' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 lg:gap-4 group">
              <img 
                src="/LOGO_01.png" 
                alt="陪伴兒童成長關懷協會 LOGO" 
                className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105" 
                onError={(e) => {
                  // Fallback if logo is missing
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-bold text-lg md:text-xl lg:text-2xl text-neutral-800 tracking-tight leading-snug">
                社團法人中華陪童長大<br className="xl:hidden" />兒少關懷協會
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-600 hover:text-orange-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate-info"
              className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 hover:shadow-md transition-all active:scale-95"
            >
              我要捐款
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-orange-500 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-orange-50 bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-neutral-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#donate-info"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                我要捐款
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
