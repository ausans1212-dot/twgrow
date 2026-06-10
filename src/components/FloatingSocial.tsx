import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Instagram, Share2, Link as LinkIcon, X, Check } from 'lucide-react';

export default function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[60] flex flex-col items-center gap-2 md:gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 md:gap-3"
          >
            <a
              href="https://www.facebook.com/p/陪童長大兒少關懷協會-61575631187535/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 md:w-[46px] md:h-[46px] bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl border border-neutral-100 hover:bg-blue-50 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 md:w-[22px] md:h-[22px]" />
            </a>
            <a
              href="https://www.instagram.com/twgrow2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 md:w-[46px] md:h-[46px] bg-white rounded-full flex items-center justify-center text-pink-600 shadow-xl border border-neutral-100 hover:bg-pink-50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 md:w-[22px] md:h-[22px]" />
            </a>
            <a
               href="https://line.me/ti/p/~@twgrow2025"
               target="_blank"
               rel="noopener noreferrer"
               className="w-11 h-11 md:w-[46px] md:h-[46px] bg-white rounded-full flex items-center justify-center text-[#06C755] shadow-xl border border-neutral-100 hover:bg-[#06C755]/10 transition-colors"
               aria-label="LINE"
            >
              <span className="font-black text-[11px] md:text-[13px] leading-none tracking-tight">LINE</span>
            </a>
            <button
              onClick={handleCopyLink}
              className="w-11 h-11 md:w-[46px] md:h-[46px] bg-white rounded-full flex items-center justify-center text-neutral-600 shadow-xl border border-neutral-100 hover:bg-neutral-50 transition-colors"
              aria-label="複製連結"
            >
              {copied ? <Check className="w-5 h-5 md:w-[22px] md:h-[22px] text-green-500" /> : <LinkIcon className="w-5 h-5 md:w-[22px] md:h-[22px]" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 md:w-14 md:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/30 transition-all hover:scale-105 active:scale-95 z-10 ${!isOpen ? 'opacity-50 md:opacity-100 hover:opacity-100' : ''}`}
        aria-label="社群與分享"
      >
        <motion.div
           initial={false}
           animate={{ rotate: isOpen ? 90 : 0 }}
           transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Share2 className="w-5 h-5 md:w-6 md:h-6" />}
        </motion.div>
      </button>
    </div>
  );
}
