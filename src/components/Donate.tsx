import { useState } from 'react';
import donateImg from '@/src/assets/images/donate_hope_1779948588468.png';
import { motion } from 'motion/react';
import { Heart, CreditCard, Landmark, Copy, Check } from 'lucide-react';

export default function Donate() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = `銀行代碼：004\n匯款帳號：118-001-029636`;
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="donate" className="py-24 md:py-16 bg-white min-h-[calc(100vh-5rem)] flex items-center justify-center scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-orange-600 text-white">
          <div className="absolute inset-0">
            <img
              src={donateImg}
              alt="手捧綠色小苗，象徵捐款帶來的希望"
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-600/80"></div>
          </div>
          
          <div className="relative p-8 md:p-16 lg:p-20 grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                您的每一分愛心，<br />
                都是灌溉孩子未來的養分。
              </h2>
              <p className="text-lg md:text-xl text-orange-50 mb-8 max-w-lg leading-relaxed">
                關懷行動的延續需要您的支持。無論金額大小，您的捐款都能幫助我們培育更多志工、提供更好的學習資源，讓愛生生不息。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 text-neutral-800 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">選擇捐款方式</h3>
              
              <div className="space-y-4">
                {/* Option 2 */}
                <a 
                  href="https://neti.cc/Qj74MeK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-3 bg-orange-500 text-white px-8 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-orange-600 transition-all active:scale-95"
                >
                  <CreditCard className="w-6 h-6 md:w-7 md:h-7" />
                  <span>線上捐款</span>
                </a>

                 {/* Option 3 */}
                <div id="donate-info" className="p-4 border-2 border-neutral-100 rounded-xl bg-neutral-50 scroll-mt-28">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Landmark className="w-6 h-6 text-neutral-500" />
                      <h4 className="font-bold text-lg">銀行匯款 / ATM 轉帳</h4>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors active:scale-95"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-700">已複製</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>複製帳號</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-sm space-y-2 border border-neutral-200 font-mono">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500">銀行戶名</span>
                      <span className="font-bold text-neutral-800">社團法人中華陪童長大兒少關懷協會</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500">銀行代碼</span>
                      <span className="font-bold text-neutral-800">004 (臺灣銀行)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500">匯款帳號</span>
                      <span className="font-bold text-neutral-800 tracking-wider text-base">118-001-029636</span>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-3 text-center leading-relaxed">
                    轉帳完成後，請不吝透過 Email 或粉專私訊告知您的<strong className="font-bold text-neutral-700">姓名、電話、轉帳日期及帳號末五碼</strong>。謝謝您的善心與協助！
                  </p>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
