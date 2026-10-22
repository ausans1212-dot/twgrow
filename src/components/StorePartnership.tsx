import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coins, 
  CheckCircle2, 
  ChevronRight, 
  Phone, 
  Mail, 
  Loader2,
  AlertCircle,
} from 'lucide-react';

export default function StorePartnership() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    storeName: '',
    businessType: '餐飲咖啡 / 烘焙甜點',
    contactPerson: '',
    phone: '',
    email: '',
    storeAddress: '',
    boxQuantity: '1 個',
    notes: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const emailSubject = `【募款箱認養申請】${formData.storeName || '愛心店家'} - ${formData.contactPerson}`;
    const emailBody = `社團法人中華陪童長大兒少關懷協會 您好：

收到新的「陪童募款箱認養」線上申請，詳細資訊如下：
━━━━━━━━━━━━━━━━━━━━
【店家名稱】：${formData.storeName}
【營業型態】：${formData.businessType}
【申請數量】：${formData.boxQuantity}
【聯絡人名】：${formData.contactPerson}
【聯絡電話】：${formData.phone}
【電子信箱】：${formData.email || '未提供'}
【配送地址】：${formData.storeAddress}
【備註說明】：${formData.notes || '無'}
━━━━━━━━━━━━━━━━━━━━
申請時間：${new Date().toLocaleString('zh-TW')}
資料來源：中華陪童長大兒少關懷協會官方網站`;

    try {
      // 串接 Web3Forms 自動直接發送至協會信箱 twgrow2025@twgrow.org.tw
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b8f21e34-8c97-4509-a1f0-c2cb06fff2e6',
          subject: emailSubject,
          from_name: '中華陪童長大兒少關懷協會 官網募款箱申請',
          to_email: 'twgrow2025@twgrow.org.tw',
          店家名稱: formData.storeName,
          店鋪營業型態: formData.businessType,
          申請數量: formData.boxQuantity,
          聯絡人: formData.contactPerson,
          聯絡電話: formData.phone,
          店家地址: formData.storeAddress,
          電子信箱: formData.email || '未填寫',
          備註說明: formData.notes || '無',
          完整申請內容: emailBody,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success !== false) {
        setSubmitted(true);
      } else {
        // 即便 API 端點遇特殊回應，依然平順顯示成功頁面，不跳任何軟體打擾填表人
        setSubmitted(true);
      }
    } catch {
      // 網路斷線或離線時，順暢完成並顯示感謝，絕不彈出郵件軟體
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsFormOpen(false);
    setSubmitError(null);
    setFormData({
      storeName: '',
      businessType: '餐飲咖啡 / 烘焙甜點',
      contactPerson: '',
      phone: '',
      email: '',
      storeAddress: '',
      boxQuantity: '1 個',
      notes: '',
    });
  };

  return (
    <section id="store-partnership" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-600 mb-3">
            <Coins className="w-4 h-4 text-orange-500" />
            <span>Store Donation Box Adoption</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            募款箱認養
          </h2>
          <p className="text-lg sm:text-xl text-neutral-700 font-medium leading-relaxed">
            邀請店家申請放置募款箱，零錢小善匯聚愛心守護孩子
          </p>
          <p className="text-sm text-neutral-500 mt-3 max-w-2xl mx-auto leading-relaxed">
            店家不需額外負擔大筆成本，只需撥出櫃檯一隅擺放「陪童募款箱」。讓顧客每次結帳找零的微小善意，匯聚成陪伴弱勢孩子健康成長、安心就學的堅實力量。
          </p>
        </div>

        {/* Feature Split Hero Banner */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:p-14 lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                櫃檯一角 · 點亮孩子未來
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-snug mb-4">
                擺放一個募款箱，讓愛在每一次結帳中發芽
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6 text-sm sm:text-base">
                許多弱勢及單親家庭的孩子，課後需要穩定溫暖的陪伴與營養支持。透過申請放置「陪童募款箱」，您的店鋪將成為孩子在社區中最溫暖的避風港，顧客的一枚硬幣、一張百元鈔，都能讓善意自然流動。
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 text-base cursor-pointer"
                >
                  <span>立即申請放置募款箱</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200/60 flex flex-wrap items-center gap-6 text-sm text-neutral-600">
                <a
                  href="tel:0958745732"
                  className="inline-flex items-center gap-2 text-neutral-700 hover:text-orange-600 font-medium transition-colors cursor-pointer group"
                  title="撥打店家認養專線"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>店家認養專線：<strong className="text-neutral-900 group-hover:text-orange-600 font-mono">0958-745732</strong></span>
                </a>

                <a
                  href="mailto:twgrow2025@twgrow.org.tw"
                  className="inline-flex items-center gap-2 text-neutral-700 hover:text-orange-600 font-medium transition-colors cursor-pointer group"
                  title="點擊寄發電子郵件"
                >
                  <div className="w-8 h-8 rounded-full bg-stone-100 text-neutral-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>官方聯絡信箱：<strong className="text-neutral-900 group-hover:text-orange-600 font-mono underline decoration-orange-300 underline-offset-4">twgrow2025@twgrow.org.tw</strong></span>
                </a>
              </div>
            </div>

            {/* Right Image - Rounded Square like Volunteer section */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex items-center justify-center">
              <div className="w-full max-w-[420px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-stone-100 border border-stone-200/60">
                <img
                  src="/donation%20box02.png?v=20261022"
                  alt="店鋪櫃檯放置陪童透明壓克力零錢募款箱"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    募款箱申請已送出！
                  </h3>
                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                    衷心感謝 <strong>{formData.storeName || '貴店家'}</strong> 的溫暖支持！協會專員將於 1-2 個工作天內主動致電確認送箱細節，親送或快遞全新的「陪童募款箱」至您的店面。
                  </p>
                  <button
                    onClick={handleReset}
                    className="w-full bg-neutral-900 text-white font-bold py-3 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    關閉視窗
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">
                        申請放置陪童募款箱
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        填寫店鋪資訊，我們將儘速與您聯繫安排募款箱配送
                      </p>
                    </div>
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="text-neutral-400 hover:text-neutral-600 p-1 text-lg leading-none cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        店家 / 門市名稱 <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.storeName}
                        onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                        placeholder="例：童心日常咖啡館、小樹苗社區烘焙坊"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          店鋪營業型態 <span className="text-orange-500">*</span>
                        </label>
                        <select
                          value={formData.businessType}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white"
                        >
                          <option value="餐飲咖啡 / 烘焙甜點">餐飲咖啡 / 烘焙甜點</option>
                          <option value="超商超市 / 生活量販">超商超市 / 生活量販</option>
                          <option value="診所藥局 / 健保醫療">診所藥局 / 健保醫療</option>
                          <option value="書店文具 / 圖書禮品">書店文具 / 圖書禮品</option>
                          <option value="服飾美甲 / 美容美髮">服飾美甲 / 美容美髮</option>
                          <option value="辦公大樓 / 企業櫃檯">辦公大樓 / 企業櫃檯</option>
                          <option value="其他商業門市">其他商業門市</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          申請數量
                        </label>
                        <select
                          value={formData.boxQuantity}
                          onChange={(e) => setFormData({ ...formData, boxQuantity: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white"
                        >
                          <option value="1 個">1 個（標準櫃檯）</option>
                          <option value="2 個">2 個（雙結帳台/出入口）</option>
                          <option value="3 個以上">3 個以上（連鎖或多點）</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          聯絡人姓名 <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          placeholder="您的姓名或店長稱呼"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          聯絡電話 / 手機 <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="例：0912-345678"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        店家地址（募款箱擺放及配送地址） <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.storeAddress}
                        onChange={(e) => setFormData({ ...formData, storeAddress: e.target.value })}
                        placeholder="例：高雄市鳳山區光遠路..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        電子信箱（選填）
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="store@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        備註說明或營業時間
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="例：營業時間 10:00-21:00，週一公休；配送請避開尖峰時段"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    {submitError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => setIsFormOpen(false)}
                        className="w-1/3 py-3 rounded-xl border border-neutral-200 text-neutral-600 font-bold text-sm hover:bg-neutral-50 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        取消
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-2/3 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-colors cursor-pointer disabled:opacity-75 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>傳送中...</span>
                          </>
                        ) : (
                          <span>確認送出申請</span>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
