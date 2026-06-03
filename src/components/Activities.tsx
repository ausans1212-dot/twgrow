import { motion } from 'motion/react';
import { Sparkles, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';

function ImageCarousel({ images, altPrefix }: { images: string[], altPrefix: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollTo = useCallback((index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const targetScrollLeft = container.clientWidth * index;
      container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        scrollTo(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, images.length, scrollTo]);

  const scrollByAmount = (direction: 1 | -1) => {
    setIsAutoPlaying(false);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth * direction;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative group rounded-3xl overflow-hidden shadow-lg">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${altPrefix} ${idx + 1}`}
            className="w-full shrink-0 snap-center object-cover aspect-[4/3]"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>
      
      {/* 左右切換按鈕 */}
      <button 
        onClick={() => scrollByAmount(-1)}
        className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center transition-opacity z-10 ${
          currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-label="上一張圖片"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={() => scrollByAmount(1)}
        className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center transition-opacity z-10 ${
          currentIndex === images.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-label="下一張圖片"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 左右滑動提示點 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none z-10">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-2 h-2 rounded-full shadow-sm border border-black/10 transition-colors ${
              currentIndex === idx ? 'bg-white' : 'bg-white/60'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            陪童日常
          </h2>
          <p className="text-lg text-neutral-600">
            每一張照片背後，都是一段生命影響生命的過程。
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Activity 1 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 text-rose-500 font-bold tracking-wider uppercase text-base sm:text-lg mb-4">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
                <span>多元體驗課程</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                探索興趣，發掘無限潛能
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                精心設計多樣化的假日課程，涵蓋才藝、手作與生活體驗。讓孩子在輕鬆歡樂的氛圍中探索世界，激發學習熱情，並在每一次的嘗試與互動中獲取成就感，一步步建立起對未來的自信與期待。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <ImageCarousel 
                images={['/course_01.jpg', '/course_02.jpg', '/course_03.jpg']} 
                altPrefix="活動紀錄" 
              />
            </motion.div>
          </div>

          {/* Activity 2 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ImageCarousel 
                images={['/course_04.jpg', '/course_05.jpg', '/course_06.jpg', '/course_07.jpg']} 
                altPrefix="營隊活動紀錄" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-blue-500 font-bold tracking-wider uppercase text-base sm:text-lg mb-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7" />
                <span>快樂營隊</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                主題式營隊活動，創造歡樂回憶
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                透過寒暑假及週末的主題營隊活動，我們帶領孩子們走出教室，參與各種大地遊戲、團康活動與品格教育。在團隊合作中學習溝通與包容，在歡笑聲中建立深厚的友誼，為他們的童年留下難忘的美好回憶。
              </p>
            </motion.div>
          </div>

        </div>



      </div>
    </section>
  );
}
