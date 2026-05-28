import heroImg from '@/src/assets/images/hero_banner_1779948519770.png';
import { motion } from 'motion/react';
import { ArrowRight, HeartHandshake } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-orange-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-100 text-orange-600 font-medium text-base mb-6">
              <HeartHandshake className="w-5 h-5" />
              <span>陪伴，是最溫柔而堅定的力量</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15] mb-6">
              有我們陪童，<br />
              <span className="text-orange-500">世界會不同。</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed max-w-lg">
              我們堅信，每位孩子都應獲得溫暖的陪伴、悉心的聆聽與尊重。唯有了解他們獨特的特質，才能輕柔地引導他們，以自己的步伐與方向安心成長，最終發掘並發揮他們的無限潛能。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#donate"
                className="inline-flex justify-center items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                加入資助行列
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex justify-center items-center gap-2 bg-white text-neutral-700 border border-neutral-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-50 hover:border-neutral-300 transition-all w-full sm:w-auto"
              >
                了解我們的故事
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[4/5]">
              <img
                src="/BN_1.jpg"
                alt="志工與孩子開心地在陽光下玩耍"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
