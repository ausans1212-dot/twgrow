import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Megaphone, 
  Calendar, 
  ChevronRight, 
  ChevronLeft,
  Search, 
  X, 
  Pin,
  ExternalLink,
  Sparkles,
  Store,
  MapPin,
  Image as ImageIcon,
  FileText,
  Maximize2,
  Download,
} from 'lucide-react';

export interface NewsItem {
  id: string;
  title: string;
  category?: string;
  date: string; // YYYY/MM/DD
  summary: string;
  content: string;
  isPinned?: boolean;
  linkText?: string;
  linkUrl?: string;
  image?: string;
  highlightTag?: string;
  partnerInfo?: {
    partnerName: string;
    offer: string;
    donationRatio: string;
    targetProject: string;
    period: string;
    address: string;
  };
}

const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'news-beetle-dream',
    title: '【公益陪伴合作】昆蟲哲學「甲蟲載夢計畫」啟動：每售出1對彩虹鍬形蟲成蟲，提撥30%收益支持假日陪伴',
    category: '專案公告',
    date: '2026/10/18',
    isPinned: true,
    highlightTag: '昆蟲哲學 × 愛心提撥 30%',
    image: '/beetle_poster.png',
    summary: '「一隻甲蟲，一份陪伴」！昆蟲哲學愛心發起公益提撥活動，活動期間購買指定昆蟲，每售出1對彩虹鍬形蟲成蟲，即提撥銷售收入30%捐助「孩童假日陪伴計劃」。',
    content: `🌿 昆蟲哲學－公益陪伴活動【甲蟲載夢計畫】
「一隻甲蟲，一份陪伴」

社團法人中華陪童長大兒少關懷協會誠摯感謝「昆蟲哲學」愛心發起【甲蟲載夢計畫】！
透過微小而堅韌的生命教育，將愛心化作溫暖實際的支持力量，陪伴孩子在假日時光獲得充分照顧、探索自然奧秘與快樂成長。

━━━━━━━━━━━━━━━━━━━
📌【公益提撥方案】
於活動期間至「昆蟲哲學」購買指定昆蟲：
✨ 每售出 1 對「彩虹鍬形蟲成蟲」
✨ 自銷售收入提撥 30% 捐贈公益！

💝【捐款受贈專案】
捐贈予：社團法人陪童長大兒少關懷協會「孩童假日陪伴計劃」
「您帶回一個值得細心照顧的小生命，昆蟲哲學也替這份相遇轉化成支持孩子成長的力量。」

📍【門市與活動資訊】
• 活動期間：即日起至售完為止
• 合作店家：昆蟲哲學
• 門市地址：高雄市左營區民族一路1103號
• 公開承諾：［捐款成果將由店家與協會定期公開］
━━━━━━━━━━━━━━━━━━━

誠摯邀請喜愛昆蟲生態、關心在地弱勢兒少的朋友們一同前往選購支持，用愛陪伴孩子載夢飛翔！`,
    linkText: '查看助童芳名錄',
    linkUrl: '#honor-roll',
    partnerInfo: {
      partnerName: '昆蟲哲學',
      offer: '購買指定昆蟲：每售出 1 對彩虹鍬形蟲成蟲',
      donationRatio: '銷售收入提撥 30% 捐贈公益',
      targetProject: '社團法人中華陪童長大兒少關懷協會「孩童假日陪伴計劃」',
      period: '即日起至售完為止',
      address: '高雄市左營區民族一路1103號'
    }
  },
  {
    id: 'news-1',
    title: '【勸募許可】「孩有陪伴」假日陪伴照顧暨家庭支持服務 公益勸募專案正式展開',
    category: '專案公告',
    date: '2026/10/15',
    isPinned: true,
    summary: '本會依法經衛生福利部核准勸募許可（衛部救字第1151361110號），專款專用挹注於弱勢兒少假日課後陪伴、家庭支持與品格輔導。',
    content: `社團法人中華陪童長大兒少關懷協會正式展開「孩有陪伴」假日陪伴照顧暨家庭支持服務公益勸募專案！\n\n一、勸募活動期間：2026年03月18日至2027年02月01日\n二、許可文號：衛部救字第1151361110號\n三、捐贈用途：皆為本專案勸募財務支出專款專用。\n\n我們深信，每位孩子都值得在愛與關懷中長大。誠摯邀請社會大眾與企業夥伴攜手加入資助行列，為需要陪伴的孩子鋪設安心成長的道路。`,
    linkText: '查看助童芳名錄',
    linkUrl: '#honor-roll'
  },
  {
    id: 'news-2',
    title: '【志工熱情招募】歡迎加入活動支援志工與專長才藝志工團隊！',
    category: '志工動態',
    date: '2026/10/10',
    isPinned: false,
    summary: '假日活動支援志工與專長才藝志工現正熱烈招募中，誠摯邀請具備熱忱或特殊才藝的夥伴，共同陪伴孩子快樂學習成長。',
    content: `陪伴是孩子成長路上最珍貴的禮物！本會現正熱烈招募假日陪伴夥伴：\n\n1. 【報名活動支援志工】：\n協助假日活動/課程之器材場地佈置、支援及攝影，陪伴並協助兒童一起進行活動。\n報名連結：https://neti.cc/MAJ7MA4\n\n2. 【專長才藝志工】：\n具備特殊才藝（如：手作、運動球類、音樂律動等），願意帶領社團並提供教學指導。\n報名連結：https://forms.gle/9QnqE3ojboNnGrVa7\n\n歡迎有愛心、耐心的您點選報名，讓愛在陪伴中綻放！`,
    linkText: '立即前往志工專區',
    linkUrl: '#volunteer'
  },
  {
    id: 'news-3',
    title: '【店家認養】「陪童募款箱」邀請愛心店家申請放置，一同守護孩童成長',
    category: '專案公告',
    date: '2026/09/25',
    summary: '由本會提供精美壓克力募款箱，讓顧客隨手的零錢善心，匯聚成守護弱勢孩子的溫暖臂膀。',
    content: `「陪童募款箱認養計畫」熱烈推廣中！\n\n無論您是餐飲店、便利超商、手搖飲品店、藥局或診所，只要提供結帳櫃檯一隅空間，就能成為支持弱勢兒少的愛心基地。\n\n顧客隨手投入的每一枚硬幣，都能匯聚成孩子假日安心陪伴、學習成長的溫暖力量。\n歡迎各行各業愛心店家夥伴線上登記申請！`,
    linkText: '了解募款箱認養',
    linkUrl: '#store-partnership'
  },
  {
    id: 'news-4',
    title: '【徵信公開】115年3月至9月份「孩有陪伴」專案捐款徵信芳名錄更新上線',
    category: '徵信公開',
    date: '2026/10/15',
    summary: '感謝各界愛心天使、善心人士與熱心店家的慷慨資助，最新一期捐贈芳名錄已完成整理公開，款項全數投入兒少陪伴計畫。',
    content: `社團法人中華陪童長大兒少關懷協會依公益勸募條例相關規範，辦理115年3月至9月份捐贈資料徵信公告。\n\n本期所有捐款資料均已依法登載，捐贈人中間姓名均採隱匿保護隱私，詳細捐款名冊可至官網「助童芳名錄」專區依月份快速檢索。\n衷心感謝各界溫暖同行！`,
    linkText: '查閱芳名錄',
    linkUrl: '#honor-roll'
  },
  {
    id: 'news-5',
    title: '【活動花絮】多元體驗課程與假日營隊歡笑結業，滿載孩子自信笑容',
    category: '活動花絮',
    date: '2026/08/30',
    summary: '藉由手作探索、團康大地遊戲與品格探索，孩子們在志工大哥哥大姊姊的用心陪伴下，突破自我、收穫珍貴情誼。',
    content: `暑期主題營隊與系列多元體驗課程圓滿結束！\n\n孩子們從最初的害羞靦腆，到能夠在台上大方分享自己的手作作品、主動協助身邊同儕，看著孩子們閃閃發亮的雙眼與燦爛自信的笑容，正是全體夥伴持續堅持的最大動力！\n更多精采剪影與生活紀錄，歡迎前往「陪童日常」專區瀏覽。`,
    linkText: '瀏覽活動花絮',
    linkUrl: '#activities'
  }
];

export default function News() {
  const [newsList] = useState<NewsItem[]>(() => {
    // Fixed and locked official news list with guaranteed poster
    return INITIAL_NEWS.map(item => {
      if (item.id === 'news-beetle-dream') {
        return {
          ...item,
          image: '/beetle_poster.png'
        };
      }
      return item;
    });
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [modalViewTab, setModalViewTab] = useState<'content' | 'poster'>('content');
  const [isPosterZoomed, setIsPosterZoomed] = useState(false);
  // Carousel slider state
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position for slider arrows
  const checkScrollState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener('resize', checkScrollState);
    return () => window.removeEventListener('resize', checkScrollState);
  }, [newsList]);

  // Horizontal scroll handler (scroll by exactly 3 cards width on desktop, 1 on mobile)
  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      // Scroll by containerWidth to advance the 3 visible cards
      const scrollDistance = containerWidth * 0.95;
      carouselRef.current.scrollBy({
        left: direction === 'right' ? scrollDistance : -scrollDistance,
        behavior: 'smooth'
      });
      setTimeout(checkScrollState, 350);
    }
  };

  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) return newsList;
    const q = searchQuery.toLowerCase();
    return newsList.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q)
    );
  }, [newsList, searchQuery]);


  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white via-orange-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <Megaphone className="w-3.5 h-3.5" />
              <span>News & Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              最新消息與動態公告
            </h2>
            <p className="mt-2 text-base text-neutral-600 max-w-2xl">
              即時掌握協會最新服務成果、公益勸募進度、志工召募與活動花絮。
            </p>
          </div>

          {/* Controls: Search, Slider Arrows & Add Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜尋公告關鍵字..."
                className="w-full pl-9 pr-3 py-2 bg-white rounded-xl text-xs sm:text-sm border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-neutral-800 placeholder-neutral-400 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 hover:text-neutral-700 bg-neutral-100 px-1.5 py-0.5 rounded cursor-pointer"
                >
                  清除
                </button>
              )}
            </div>

            {/* Slider Navigation Arrows (左右滑動觀看更多) */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className="p-2.5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs transition-all cursor-pointer"
                title="往左滑動檢視"
                aria-label="往左滑動"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className="p-2.5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs transition-all cursor-pointer"
                title="往右滑動檢視"
                aria-label="往右滑動"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Hint Bar */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-4 px-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>卡片頁面顯示 3 張，向右滑動可觀看更多公告</span>
          </span>
          <span className="font-mono text-neutral-400">
            共 {filteredNews.length} 則最新公告
          </span>
        </div>

        {/* News Carousel: Displays 3 cards on desktop, slides horizontally */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-dashed border-neutral-300">
            <p className="text-neutral-500 text-base mb-2">查無符合「{searchQuery}」的最新消息</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-orange-600 text-sm font-medium hover:underline cursor-pointer"
            >
              清除搜尋條件
            </button>
          </div>
        ) : (
          <div className="relative">
            <div
              ref={carouselRef}
              onScroll={checkScrollState}
              className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
            >
              {filteredNews.map((news) => (
                <article
                  key={news.id}
                  className="w-[85vw] sm:w-[360px] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white rounded-3xl border border-neutral-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:border-orange-300"
                >
                  <div>
                    {/* Thumbnail Banner */}
                    {news.image ? (
                      <div 
                        onClick={() => {
                          setSelectedNews(news);
                          setModalViewTab('content');
                        }}
                        className="relative w-full h-48 sm:h-52 overflow-hidden cursor-pointer bg-neutral-50 flex items-center justify-center border-b border-neutral-100"
                      >
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        {news.highlightTag && (
                          <span className="absolute bottom-3 left-3 px-3 py-1 rounded-lg text-xs font-bold bg-orange-600 text-white shadow-md flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            <span>{news.highlightTag}</span>
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="h-3 bg-gradient-to-r from-orange-400/40 via-amber-300/40 to-orange-400/40" />
                    )}

                    <div className="p-6">
                      {/* Meta row: Date & Pinned status (Category labels removed per request) */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium font-mono">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{news.date}</span>
                        </div>

                        {news.isPinned && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                            <Pin className="w-3 h-3 text-amber-600 rotate-45" />
                            <span>重要置頂</span>
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 
                        onClick={() => {
                          setSelectedNews(news);
                          setModalViewTab('content');
                        }}
                        className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug cursor-pointer mb-2.5"
                      >
                        {news.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                        {news.summary}
                      </p>
                    </div>
                  </div>

                  {/* Footer action */}
                  <div className="px-6 py-4 bg-neutral-50/70 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedNews(news);
                        setModalViewTab('content');
                      }}
                      className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
                    >
                      <span>閱讀全文</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {news.linkUrl && (
                      <a
                        href={news.linkUrl}
                        className="text-xs text-neutral-500 hover:text-neutral-800 flex items-center gap-1 transition-colors"
                      >
                        <span>{news.linkText || '前往專區'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Carousel navigation indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {filteredNews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (carouselRef.current) {
                      const container = carouselRef.current;
                      const card = container.children[idx] as HTMLElement;
                      if (card) {
                        card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                      }
                    }
                  }}
                  className="w-2.5 h-2.5 rounded-full bg-neutral-300 hover:bg-orange-500 transition-colors cursor-pointer"
                  title={`跳至第 ${idx + 1} 則公告`}
                  aria-label={`第 ${idx + 1} 則公告`}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Detail Modal - Content-First & Spacious Layout (Never squeezes information!) */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-200"
            >
              {/* Modal Top Bar */}
              <div className="p-5 sm:p-6 border-b border-neutral-200 bg-neutral-50/70 flex items-start justify-between gap-4 shrink-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-neutral-600 flex items-center gap-1 font-medium bg-white px-2.5 py-1 rounded-lg border border-neutral-200">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      {selectedNews.date}
                    </span>
                    {selectedNews.isPinned && (
                      <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1">
                        <Pin className="w-3 h-3 text-amber-600 rotate-45" />
                        重要置頂
                      </span>
                    )}
                    {selectedNews.highlightTag && (
                      <span className="text-xs font-bold text-orange-800 bg-orange-100 px-2.5 py-1 rounded-lg flex items-center gap-1 border border-orange-200">
                        <Sparkles className="w-3 h-3 text-orange-600" />
                        {selectedNews.highlightTag}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 leading-snug">
                    {selectedNews.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 rounded-full transition-colors cursor-pointer shrink-0"
                  title="關閉視窗"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* View Mode Tabs (Allows switching between full text view & full poster view) */}
              {selectedNews.image && (
                <div className="px-6 pt-3 bg-white border-b border-neutral-200 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalViewTab('content')}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                        modalViewTab === 'content'
                          ? 'border-orange-600 text-orange-600'
                          : 'border-transparent text-neutral-500 hover:text-neutral-900'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      <span>活動完整內容與資訊</span>
                    </button>
                    <button
                      onClick={() => setModalViewTab('poster')}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                        modalViewTab === 'poster'
                          ? 'border-orange-600 text-orange-600'
                          : 'border-transparent text-neutral-500 hover:text-neutral-900'
                      }`}
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>查看活動宣傳海報 (A2視覺)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Modal Body: Scrollable, uncompressed content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Mode 1: Detailed Structured Content */}
                {modalViewTab === 'content' && (
                  <>
                    {/* Partner Highlights Box if present */}
                    {selectedNews.partnerInfo && (
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 rounded-2xl p-5 sm:p-6 border border-orange-200/90 shadow-2xs">
                        <div className="flex items-center gap-2 text-orange-800 font-bold text-base mb-4">
                          <Store className="w-5 h-5 text-orange-600" />
                          <span>合作亮點與公益回饋資訊</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                          <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-orange-100">
                            <span className="text-neutral-500 block mb-0.5">愛心合作單位</span>
                            <strong className="text-neutral-900 text-sm sm:text-base font-bold">
                              {selectedNews.partnerInfo.partnerName}
                            </strong>
                          </div>
                          <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-orange-100">
                            <span className="text-neutral-500 block mb-0.5">公益回饋方案</span>
                            <strong className="text-orange-700 text-sm sm:text-base font-bold">
                              {selectedNews.partnerInfo.donationRatio}
                            </strong>
                          </div>
                          <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-orange-100">
                            <span className="text-neutral-500 block mb-0.5">受贈指定專案</span>
                            <strong className="text-neutral-900 font-semibold">
                              {selectedNews.partnerInfo.targetProject}
                            </strong>
                          </div>
                          <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-orange-100">
                            <span className="text-neutral-500 block mb-0.5">實體店面地址</span>
                            <span className="text-neutral-800 flex items-center gap-1 font-medium">
                              <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                              {selectedNews.partnerInfo.address}
                            </span>
                          </div>
                        </div>

                        {selectedNews.image && (
                          <div className="mt-4 pt-3 border-t border-orange-200/60 flex items-center justify-between">
                            <span className="text-xs text-orange-800 font-medium">
                              附有官方宣傳 A2 高清活動海報
                            </span>
                            <button
                              onClick={() => setModalViewTab('poster')}
                              className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer"
                            >
                              <span>切換至海報大圖檢視</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Summary Callout */}
                    <div className="p-4 rounded-xl bg-neutral-50 border-l-4 border-orange-500 text-neutral-700 text-sm sm:text-base leading-relaxed font-medium">
                      {selectedNews.summary}
                    </div>

                    {/* Full Content */}
                    <div className="text-neutral-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal space-y-4">
                      {selectedNews.content}
                    </div>
                  </>
                )}

                {/* Mode 2: Official A2 Poster Viewer */}
                {modalViewTab === 'poster' && selectedNews.image && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-neutral-100 p-3 rounded-xl text-xs text-neutral-600">
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-neutral-500" />
                        <span>官方活動海報視覺（保持 A2 完整比例，不變形壓縮）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsPosterZoomed(!isPosterZoomed)}
                          className="px-2.5 py-1 rounded bg-white hover:bg-neutral-200 border border-neutral-300 font-medium text-neutral-700 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>{isPosterZoomed ? '標準顯示' : '全屏放大檢視'}</span>
                        </button>
                        <a
                          href={selectedNews.image}
                          download="昆蟲哲學甲蟲載夢計畫海報.png"
                          className="px-2.5 py-1 rounded bg-white hover:bg-neutral-200 border border-neutral-300 font-medium text-neutral-700 flex items-center gap-1 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>下載海報圖檔</span>
                        </a>
                      </div>
                    </div>

                    {/* Poster Canvas Frame */}
                    <div className={`relative mx-auto rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-stone-100 flex items-center justify-center ${
                      isPosterZoomed ? 'w-full max-h-[85vh]' : 'max-w-xl max-h-[65vh]'
                    }`}>
                      <img 
                        src={selectedNews.image} 
                        alt="活動官方宣傳海報" 
                        className="w-full h-auto max-h-full object-contain"
                      />
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between gap-3 shrink-0">
                <div className="text-xs text-neutral-500 font-mono">
                  社團法人中華陪童長大兒少關懷協會 · 官方公告
                </div>

                <div className="flex items-center gap-3">
                  {selectedNews.linkUrl && (
                    <a
                      href={selectedNews.linkUrl}
                      onClick={() => setSelectedNews(null)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <span>{selectedNews.linkText || '前往相關頁面'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-200 border border-neutral-300 text-neutral-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    關閉
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
