import { motion } from 'motion/react';
import { Sparkles, Users } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            陪童的日常紀錄
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
              <div className="inline-flex items-center gap-2 text-rose-500 font-semibold tracking-wider uppercase text-sm mb-4">
                <Sparkles className="w-5 h-5" />
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
              <div className="relative group">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {['/course_01.jpg', '/course_02.jpg', '/course_03.jpg'].map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={`活動紀錄 ${idx + 1}`}
                      className="w-full shrink-0 snap-center rounded-3xl shadow-lg object-cover aspect-[4/3]"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                {/* 左右滑動提示點 */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-white shadow-sm border border-black/10"></div>
                  <div className="w-2 h-2 rounded-full bg-white/60 shadow-sm border border-black/10"></div>
                  <div className="w-2 h-2 rounded-full bg-white/60 shadow-sm border border-black/10"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Activity 2 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {['/course_04.jpg', '/course_05.jpg', '/course_06.jpg', '/course_07.jpg'].map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={`營隊活動紀錄 ${idx + 1}`}
                      className="w-full shrink-0 snap-center rounded-3xl shadow-lg object-cover aspect-[4/3]"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                {/* 左右滑動提示點 */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-white shadow-sm border border-black/10"></div>
                  <div className="w-2 h-2 rounded-full bg-white/60 shadow-sm border border-black/10"></div>
                  <div className="w-2 h-2 rounded-full bg-white/60 shadow-sm border border-black/10"></div>
                  <div className="w-2 h-2 rounded-full bg-white/60 shadow-sm border border-black/10"></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">
                <Users className="w-5 h-5" />
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
