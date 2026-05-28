import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/BN_02jpg.jpg"
                alt="志工與孩子一起閱讀故事書"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 text-orange-500 font-semibold tracking-wider uppercase text-base mb-4">
              <BookOpen className="w-6 h-6" />
              <span>關於本協會</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              陪伴，讓愛扎根。
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                許多孩子因家庭或環境因素，在課後與假日缺乏陪伴，容易感到孤單並失去探索世界的機會。「陪童長大」因此誕生，我們深信每一位孩子都值得被關懷與引導。
              </p>
              <p>
                我們提供的不僅是課外知識，更透過遊戲、藝術、手作與運動等多元體驗，讓孩子在充滿愛的環境中發掘熱情、建立自信。只要我們願意釋出溫暖，這份陪伴的力量將能改變他們的一生。
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  '填補陪伴缺口：為缺乏照顧的孩子提供穩定、真摯的關懷與傾聽。',
                  '多元體驗探索：透過遊戲與藝術等活動，協助孩子發掘興趣與熱情。',
                  '建立自信未來：在溫馨安全的環境中播散愛，培養責任感與感恩的心。'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm mt-1">
                      {i + 1}
                    </span>
                    <span className="font-medium text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
