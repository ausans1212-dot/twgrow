import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { PlayCircle, Headphones, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const videos = [
  {
    id: 'mmwPN3-fMFM',
    title: '陪伴的日常紀錄短影音',
    description: '透過影像紀錄，真實呈現孩子們參與活動的點點滴滴，展現最純真快樂的笑容。'
  },
  {
    id: 'OR811q8tlt0',
    title: '孩子們的笑容與成長',
    description: '記錄活動中每一次充滿活力的參與，這些美好的相聚時刻都是陪伴成長的養分。'
  },
  {
    id: 'u2QlZMmCAiI',
    title: '分享愛與關懷的時刻',
    description: '用鏡頭補捉每一次真摯的互動，透過陪伴讓每個孩子感受到世界的溫暖。'
  }
];

const photos = [
  '/Activity_01.jpg',
  '/Activity_02.jpeg',
  '/Activity_03.png',
  '/Activity_04.jpeg',
  '/Activity_05.jpg',
  '/Activity_06.png',
  '/Activity_07.jpeg',
  '/Activity_08.png',
  '/Activity_09.jpg',
  '/Activity_10.jpg'
];

function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollByAmount = (direction: 1 | -1) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth * direction;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth * index;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
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
    <div className="flex flex-col gap-6 w-full">
      {/* 輪播區域 */}
      <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-neutral-200/60 bg-neutral-100">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {videos.map((vid, idx) => (
            <div key={idx} className="w-full shrink-0 snap-center relative aspect-video flex flex-col justify-between">
              {vid.id ? (
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${vid.id}?rel=0`} 
                  title={vid.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-neutral-400 bg-neutral-100">
                  <PlayCircle className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="font-medium text-lg">影片準備中...</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 左右切換按鈕 */}
        <button 
          onClick={() => scrollByAmount(-1)}
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center transition-opacity z-10 ${
            currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
          }`}
          aria-label="上一支影片"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scrollByAmount(1)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center transition-opacity z-10 ${
            currentIndex === videos.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
          }`}
          aria-label="下一支影片"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 點點與文字 */}
      <div className="px-2 flex flex-col gap-4">
        {/* 指示點點 */}
        <div className="flex gap-2 items-center">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-2 h-2 rounded-full shadow-sm transition-all duration-300 ${
                currentIndex === idx ? 'bg-rose-500 w-6' : 'bg-neutral-300 hover:bg-rose-300'
              }`}
              aria-label={`切換至影片 ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className="min-h-[80px]">
          <h3 className="text-xl font-bold text-neutral-900 mb-2 transition-all">
            {videos[currentIndex].title}
          </h3>
          <p className="text-neutral-600 leading-relaxed transition-all">
            {videos[currentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Media() {
  return (
    <section id="media" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          
          {/* YouTube Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 text-rose-500 font-bold tracking-wider uppercase text-base sm:text-lg">
              <PlayCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>精采放送中</span>
            </div>
            
            <VideoCarousel />
            
          </motion.div>

          {/* Podcasts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 text-blue-500 font-bold tracking-wider uppercase text-base sm:text-lg">
              <Headphones className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>線上播音室</span>
            </div>
            
            <div className="bg-neutral-50 rounded-3xl p-2 sm:p-4 shadow-sm border border-neutral-100 h-fit">
               <iframe 
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                frameBorder="0" 
                height="175" 
                style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '20px' }} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.podcasts.apple.com/tw/podcast/ep148-feat-%E9%99%AA%E7%AB%A5%E9%95%B7%E5%A4%A7%E5%85%92%E5%B0%91%E9%97%9C%E6%87%B7%E5%8D%94%E6%9C%83-%E8%BE%B0%E8%BE%B0-%E9%98%BF%E5%A6%83-%E6%9C%89%E6%88%91%E5%80%91%E9%99%AA%E7%AB%A5-%E4%B8%96%E7%95%8C%E6%9C%83%E4%B8%8D%E5%90%8C/id1626110274?i=1000744120489">
              </iframe>
            </div>
            
            <div className="px-2 mt-2">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                EP148 有我們陪童，世界會不同
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                邀請協會來到節目分享陪伴孩子成長的心路歷程，探討每個孩子獨一無二的價值與協會一路走來的故事。
              </p>
            </div>
          </motion.div>

          {/* Smile Gallery Section */}
          <motion.div
            id="smile-gallery"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6 scroll-mt-20"
          >
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-wider uppercase text-base sm:text-lg">
              <Camera className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>微笑補手</span>
            </div>
            
            <div className="bg-neutral-50 rounded-3xl p-3 sm:p-4 shadow-sm border border-neutral-100 h-fit">
              <div className="w-full aspect-square overflow-y-auto pr-1 sm:pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-track]:bg-transparent">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {photos.slice(0, 10).map((src, idx) => (
                    <div key={idx} className="relative group rounded-2xl overflow-hidden aspect-square h-full w-full">
                      <img 
                        src={src} 
                        alt={`微笑補手剪影 ${idx + 1}`} 
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-2 mt-2">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                捕捉純真無邪
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                用鏡頭記錄每個充滿活力與純萃快樂的瞬間，將這些美好的回憶與感動永遠珍藏。
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
