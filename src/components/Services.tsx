import { Package, Users, Tent, GraduationCap, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: '脆弱家庭兒童假日小學陪伴計畫',
      description: '邀請志工與孩子們共度時光，提供品格教育、創意手作等多元活動。不僅讓孩子在快樂中建立自信、學習合作，更提供一個溫暖的心靈避風港，讓他們在成長過程中不再感到孤單。',
      image: '/Serve_01.png'
    },
    {
      icon: <Package className="w-8 h-8 text-rose-500" />,
      title: '脆弱家庭物資連結',
      description: '積極串聯社會資源，募集並精準媒合生活與學習物資，減輕弱勢家庭經濟負擔，讓孩子不再為基本需求憂慮，父母也能投入更多心力陪伴與教育。',
      image: '/Serve_02.jpeg'
    },
    {
      icon: <Tent className="w-8 h-8 text-blue-500" />,
      title: '寒暑假挑戰營',
      description: '透過三至五天的營隊，結合團隊合作、生活技能與運動挑戰，讓孩子體驗堅持與合作的價值。不只是創造快樂假期，更幫助孩子突破自我，建立面對未來的自信與勇氣。',
      image: '/Serve_03.jpeg'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-purple-500" />,
      title: '志工培育',
      description: '規劃系統化培訓課程，涵蓋兒童心理、活動帶領與安全守則，並搭配督導回饋機制幫助志工成長。透過有方法的陪伴，志工不僅能成為孩子的典範，也能在服務中互相學習，讓陪伴的力量更深遠。',
      image: '/Serve_05.jpeg'
    }
  ];

  return (
    <section id="services" className="py-24 bg-orange-50/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            服務項目
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            以長期穩定的陪伴，接住每一個需要的孩子
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-transparent hover:border-orange-100 flex flex-col"
            >
              {/* Background Image that fades in on hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-60 transform scale-105 group-hover:scale-100 transition-all duration-700 ease-out z-0"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay gradient to keep text readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent group-hover:via-white/80 z-0 transition-colors duration-500"></div>

              {/* Card Content with translate right on hover */}
              <div className="relative p-8 z-10 transform group-hover:translate-x-2 transition-transform duration-500 ease-out flex-1 flex flex-col">
                <div className="bg-orange-50/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-lg flex-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
