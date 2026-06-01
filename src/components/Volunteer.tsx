import { useState } from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, CalendarHeart, CheckCircle } from 'lucide-react';

export default function Volunteer() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const roles = [
    {
      icon: <CalendarHeart className="w-6 h-6 text-rose-500" />,
      title: '活動支援志工',
      desc: '協助假日才藝課程、營隊活動之場地佈置、動線引導及活動攝影。'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-blue-500" />,
      title: '專長才藝志工',
      desc: '具備特殊才藝（如：美術、音樂等），願意提供教學指導。'
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
              
              <div className="space-y-6 mb-10">
                {roles.map((role, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-white p-3 rounded-2xl h-fit shadow-sm">
                      {role.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900 mb-1">{role.title}</h4>
                      <p className="text-neutral-600 leading-relaxed">{role.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {submitted ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-2xl border border-green-200 flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-bold text-lg">感謝您的報名，我們會盡快與您聯絡！</span>
                </div>
              ) : showForm ? (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">姓名</label>
                    <input id="name" required type="text" className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="請輸入您的姓名" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">聯絡電話</label>
                    <input id="phone" required type="tel" className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="請輸入聯絡電話" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                    <input id="email" required type="email" className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="請輸入 Email" />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-1">想擔任的志工類型</label>
                    <select id="role" className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="活動支援志工">活動支援志工</option>
                      <option value="專長才藝志工">專長才藝志工</option>
                      <option value="皆可">皆可</option>
                    </select>
                  </div>
                  <div className="flex gap-3 pt-2">
                     <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 px-4 rounded-lg font-bold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors">取消</button>
                     <button type="submit" className="flex-1 py-3 px-4 rounded-lg font-bold text-white bg-neutral-900 hover:bg-orange-500 transition-colors">送出報名表</button>
                  </div>
                </form>
              ) : (
                <button 
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  我要報名志工
                </button>
              )}
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
