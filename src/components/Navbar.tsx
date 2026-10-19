import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(true);

  const mainLinks = [
    { name: '最新消息', href: '#news' },
    // 關於我們 is handled with dropdown
    { name: '志工招募', href: '#volunteer' },
    { name: '公開徵信', href: '#honor-roll' },
    { name: '募款箱認養', href: '#store-partnership' },
  ];

  const aboutSubLinks = [
    { name: '協會簡介與願景', href: '#about' },
    { name: '服務項目', href: '#services' },
    { name: '陪童日常', href: '#activities' },
    { name: '大小心聲', href: '#media' },
  ];

  return (
    <nav className="relative md:sticky md:top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-3">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 lg:gap-4 group">
              <img 
                src="/LOGO_01.png" 
                alt="陪伴兒童成長關懷協會 LOGO" 
                className="h-14 md:h-18 lg:h-20 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-bold text-base md:text-lg lg:text-xl text-neutral-800 tracking-tight leading-snug">
                社團法人中華陪童長大<br className="xl:hidden" />兒少關懷協會
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-5 text-sm xl:text-base">
            <a
              href="#news"
              className="text-neutral-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap py-2"
            >
              最新消息
            </a>

            {/* 關於我們 Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <a
                  href="#about"
                  className="text-neutral-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  關於我們
                </a>
                <button
                  type="button"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="text-neutral-400 hover:text-orange-500 p-0.5 rounded transition-colors"
                  aria-label="切換關於我們子選單"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-orange-500' : ''}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 top-full pt-1 w-48 z-50"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-orange-100 py-1.5 overflow-hidden">
                      {aboutSubLinks.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setAboutDropdownOpen(false)}
                          className="flex items-center px-4 py-2.5 text-sm text-neutral-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Main Links */}
            {mainLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-600 hover:text-orange-500 font-medium transition-colors whitespace-nowrap py-2"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://neti.cc/Qj74MeK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-5 py-2.5 rounded-full font-medium hover:bg-orange-600 hover:shadow-md transition-all active:scale-95 whitespace-nowrap shrink-0 ml-2"
            >
              加入資助行列
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-orange-500 p-2"
              aria-label="開啟選單"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-orange-50 bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a
                href="#news"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-neutral-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              >
                最新消息
              </a>

              {/* 關於我們 Mobile Accordion */}
              <div className="rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-neutral-700 hover:bg-orange-50 rounded-lg">
                  <a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-orange-500 flex-1"
                  >
                    關於我們
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="p-1 text-neutral-400 hover:text-orange-500"
                    aria-label="切換子選單"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180 text-orange-500' : ''}`} />
                  </button>
                </div>

                {mobileAboutOpen && (
                  <div className="pl-6 pr-2 py-1 space-y-1 bg-neutral-50/60 rounded-lg border-l-2 border-orange-300 my-1">
                    {aboutSubLinks.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-neutral-600 hover:text-orange-500 hover:bg-white rounded transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {mainLinks.slice(1).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-neutral-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://neti.cc/Qj74MeK"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-sm"
              >
                加入資助行列
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
