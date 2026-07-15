import { motion } from 'motion/react';
import { HeartHandshake, CalendarHeart } from 'lucide-react';

export default function Volunteer() {
  const roles = [
    {
      icon: <CalendarHeart className="w-6 h-6 text-rose-500" />,
      title: '活動支援志工',
      desc: '協助假日活動/課程之器材場地佈置、支援及攝影，陪伴並協助兒童一起進行活動。',
      link: 'https://neti.cc/MAJ7MA4'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-blue-500" />,
      title: '專長才藝志工',
      desc: '具備特殊才藝（如：手作、運動球類等），願意帶領社團並提供教學指導。',
      link: 'https://forms.gle/9QnqE3ojboNnGrVa7'
    }
  ];

  return (
    <section id="volunteer" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                加入志工行列
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                陪伴，是我們能給孩子最珍貴的禮物。邀請您加入陪伴兒童成長的行列，用您的愛心與專長，點亮孩子們的生命，讓他們在充滿關懷的環境中成長茁壯。
              </p>
              
              <div className="space-y-6">
                {roles.map((role, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
                    <div className="bg-orange-50 p-3 rounded-2xl h-fit w-fit">
                      {role.icon}
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-lg text-neutral-900 mb-2">{role.title}</h4>
                        <p className="text-neutral-600 leading-relaxed mb-4">{role.desc}</p>
                      </div>
                      <a 
                        href={role.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-neutral-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-500 transition-colors w-full sm:w-fit"
                      >
                        我要報名
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="/Volunteer_01.jpg" 
                  alt="志工陪伴"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <HeartHandshake className="w-8 h-8 text-rose-500" />
                  <span className="font-bold text-2xl text-neutral-900">100+</span>
                </div>
                <p className="text-sm text-neutral-500">位熱心志工已加入我們的陪伴行列</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
