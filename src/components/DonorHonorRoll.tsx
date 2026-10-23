import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Search,
  ShieldCheck,
  Mail,
  ExternalLink,
  Calendar,
  FileText,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Sparkles,
  Eye,
  BookOpen,
  X,
  Filter,
  ArrowRight,
} from 'lucide-react';
import {
  DONOR_RECORDS,
  CAMPAIGN_INFO,
  DEFAULT_PROJECT_DETAIL,
} from '../data/donors';

const ITEMS_PER_PAGE = 15;

export default function DonorHonorRoll() {
  const [isListExpanded, setIsListExpanded] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');
  // 'all' or specific year like '2026'
  const [selectedYear, setSelectedYear] = useState<string>('all');
  // 'all' or specific month key like '2026-03'
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const yearCardsScrollRef = useRef<HTMLDivElement>(null);

  // Group records by Year, sorted descending (newest in front: e.g. 2027, 2026...)
  const yearStats = useMemo(() => {
    const map = new Map<string, number>();
    DONOR_RECORDS.forEach((r) => {
      const yr = r.month.split('/')[0] || '2026';
      map.set(yr, (map.get(yr) || 0) + 1);
    });

    const years = Array.from(map.keys()).sort((a, b) => b.localeCompare(a));
    return years.map((yr) => ({
      year: yr,
      label: `${yr} 年`,
      count: map.get(yr) || 0,
    }));
  }, []);

  // Monthly sub-filters for the active year (or all months if 'all')
  const activeYearMonths = useMemo(() => {
    if (selectedYear === 'all') {
      return [
        { key: 'all', label: '全部月份', count: DONOR_RECORDS.length },
        ...CAMPAIGN_INFO.monthlySubtotals.map((m) => ({
          key: m.key,
          label: `${m.month.replace('2026/', '')} 月`,
          fullLabel: m.month,
          count: m.count,
        })),
      ];
    }
    // Filter months matching the selected year
    const matching = CAMPAIGN_INFO.monthlySubtotals.filter((m) =>
      m.month.startsWith(selectedYear)
    );
    const totalYearCount = matching.reduce((sum, m) => sum + m.count, 0);

    return [
      { key: 'all', label: `${selectedYear} 全年`, count: totalYearCount },
      ...matching.map((m) => ({
        key: m.key,
        label: `${m.month.replace(`${selectedYear}/`, '')} 月`,
        fullLabel: m.month,
        count: m.count,
      })),
    ];
  }, [selectedYear]);

  // Current display label
  const currentViewTitle = useMemo(() => {
    if (selectedYear === 'all') {
      if (selectedMonth === 'all') {
        return '全部月份名單 (2026/03 - 2026/09)';
      }
      const found = CAMPAIGN_INFO.monthlySubtotals.find((m) => m.key === selectedMonth);
      return found ? `${found.month} 月份` : selectedMonth;
    }
    if (selectedMonth === 'all') {
      return `${selectedYear} 年度名單`;
    }
    const found = CAMPAIGN_INFO.monthlySubtotals.find((m) => m.key === selectedMonth);
    return found ? `${found.month} 月份` : selectedMonth;
  }, [selectedYear, selectedMonth]);

  // Filtered donor list
  const filteredDonors = useMemo(() => {
    return DONOR_RECORDS.filter((item) => {
      // Year check
      const matchYear = selectedYear === 'all' || item.month.startsWith(selectedYear);
      // Month check
      const matchMonth = selectedMonth === 'all' || item.monthKey === selectedMonth;

      const cleanSearch = searchTerm.trim().toLowerCase();
      const matchSearch =
        cleanSearch === '' ||
        item.name.toLowerCase().includes(cleanSearch) ||
        item.gregorianDate.includes(cleanSearch) ||
        item.amount.toString().includes(cleanSearch);

      return matchYear && matchMonth && matchSearch;
    });
  }, [selectedYear, selectedMonth, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredDonors.length / ITEMS_PER_PAGE) || 1;
  const paginatedDonors = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDonors.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDonors, currentPage]);

  // Scroll year cards horizontally
  const handleScrollYears = (direction: 'left' | 'right') => {
    if (yearCardsScrollRef.current) {
      const scrollAmount = 340;
      yearCardsScrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Open list for all months or specific year
  const handleSelectYearCard = (year: 'all' | string) => {
    setSelectedYear(year);
    setSelectedMonth('all');
    setIsListExpanded(true);
    setCurrentPage(1);

    setTimeout(() => {
      if (listContainerRef.current) {
        listContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  // Close/collapse list
  const handleCloseList = () => {
    setIsListExpanded(false);
  };

  // Search input handler
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
    if (value.trim().length > 0 && !isListExpanded) {
      setIsListExpanded(true);
    }
  };

  return (
    <section id="honor-roll" className="py-20 md:py-28 bg-stone-50/70 border-t border-stone-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-xs font-semibold tracking-wider text-orange-700 mb-3.5 shadow-2xs">
            <Heart className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span>感謝有你</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            公開徵信
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
            謝謝每一位陪伴孩子走過風雨、溫暖綻放的你。專款專用、依法全額公開徵信。
          </p>
        </div>

        {/* Official Campaign Filing Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-neutral-200/80 mb-10">
          <div className="pb-5 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
                <BadgeCheck className="w-4 h-4 text-orange-500" />
                <span>主管機關核准勸募專案</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                {CAMPAIGN_INFO.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                辦理單位：{CAMPAIGN_INFO.organizer}
              </p>
            </div>
          </div>

          {/* Key Campaign Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 text-xs text-neutral-600">
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-neutral-800">勸募活動期間</span>
                <span className="font-mono text-neutral-600">{CAMPAIGN_INFO.campaignPeriod}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <FileText className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-neutral-800">勸募許可文號</span>
                <span className="font-mono text-neutral-600">{CAMPAIGN_INFO.permitNumber}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-neutral-800">捐贈用途</span>
                <span className="text-neutral-600">{CAMPAIGN_INFO.purpose}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ANNUAL DIRECTORY HUB (Only 2 cards: 全部月份名單 + 2026年, horizontal swipe)
            ========================================================================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-neutral-200/80 mb-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span>年度名單查閱中心</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                選擇查閱年度與名單
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                以年度區分彙整，點選卡片即可展開名單。
              </p>
            </div>

            {/* Quick Search on top level */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="輸入姓名 / 店家 / 金額快速搜尋..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 bg-neutral-200/70 hover:bg-neutral-200 px-1.5 py-0.5 rounded-full cursor-pointer"
                >
                  清除
                </button>
              )}
            </div>
          </div>

          {/* Horizontal Slider Area for Annual Cards */}
          <div className="relative">
            <div
              ref={yearCardsScrollRef}
              className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
            >
              
              {/* Card 1: 全部月份名單 (All Months Master Card) */}
              <div
                onClick={() => {
                  if (isListExpanded && selectedYear === 'all' && selectedMonth === 'all') {
                    handleCloseList();
                  } else {
                    handleSelectYearCard('all');
                  }
                }}
                className={`w-full sm:w-80 md:w-96 shrink-0 snap-start group relative p-6 sm:p-7 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isListExpanded && selectedYear === 'all'
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md ring-2 ring-orange-500/50'
                    : 'bg-gradient-to-br from-orange-50/90 via-amber-50/50 to-orange-100/40 hover:from-orange-100/80 hover:to-amber-100/70 border-orange-200/90 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-lg ${
                      isListExpanded && selectedYear === 'all'
                        ? 'bg-neutral-800 text-orange-300'
                        : 'bg-orange-200/70 text-orange-800'
                    }`}>
                      全期名單彙整
                    </span>
                    <BookOpen className={`w-5 h-5 ${
                      isListExpanded && selectedYear === 'all' ? 'text-orange-400' : 'text-orange-500'
                    }`} />
                  </div>
                  <h4 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                    isListExpanded && selectedYear === 'all' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    全部月份名單
                  </h4>
                  <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                    isListExpanded && selectedYear === 'all' ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    完整公開 2026/03 至 2026/09 所有徵信收據記錄
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/50 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider block opacity-70">收據記錄</span>
                    <span className={`text-base font-bold font-mono ${
                      isListExpanded && selectedYear === 'all' ? 'text-orange-300' : 'text-neutral-900'
                    }`}>
                      共 {DONOR_RECORDS.length} 筆愛心捐款
                    </span>
                  </div>

                  <span className={`text-xs font-bold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                    isListExpanded && selectedYear === 'all'
                      ? 'bg-neutral-800 text-orange-300'
                      : 'bg-white text-orange-600 shadow-xs group-hover:bg-orange-600 group-hover:text-white'
                  }`}>
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isListExpanded && selectedYear === 'all' ? '檢視中（點擊收合）' : '點擊觀看名單'}</span>
                  </span>
                </div>
              </div>

              {/* Card 2: 2026 年 (Newest year first; future years naturally slide to the right) */}
              {yearStats.map((y) => {
                const isSelected = isListExpanded && selectedYear === y.year;
                return (
                  <div
                    key={y.year}
                    onClick={() => {
                      if (isSelected) {
                        handleCloseList();
                      } else {
                        handleSelectYearCard(y.year);
                      }
                    }}
                    className={`w-full sm:w-80 md:w-96 shrink-0 snap-start group relative p-6 sm:p-7 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-md ring-2 ring-orange-500/50'
                        : 'bg-white hover:bg-neutral-50/80 border-neutral-200/90 hover:border-neutral-300 hover:shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-lg ${
                          isSelected
                            ? 'bg-neutral-800 text-neutral-300'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}>
                          年度專案
                        </span>
                        <Calendar className={`w-5 h-5 ${
                          isSelected ? 'text-orange-400' : 'text-neutral-400 group-hover:text-orange-500'
                        }`} />
                      </div>
                      <h4 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                        isSelected ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {y.label}
                      </h4>
                      <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                        isSelected ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        包含 3 月至 9 月份「孩有陪伴」假日照顧專案芳名錄
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider block opacity-70">年度合計</span>
                        <span className={`text-base font-bold font-mono ${
                          isSelected ? 'text-orange-300' : 'text-neutral-900'
                        }`}>
                          {y.count} 筆捐贈收據
                        </span>
                      </div>

                      <span className={`text-xs font-bold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                        isSelected
                          ? 'bg-neutral-800 text-orange-300'
                          : 'bg-neutral-100 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white'
                      }`}>
                        <Eye className="w-3.5 h-3.5" />
                        <span>{isSelected ? '檢視中（點擊收合）' : '點擊觀看名單'}</span>
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Slider Navigation Cue / Controls */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                {isListExpanded && (
                  <span className="font-medium text-orange-600">
                    名單已展開：{currentViewTitle}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {isListExpanded && (
                  <button
                    onClick={handleCloseList}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ChevronUp className="w-4 h-4" />
                    <span>收起名單</span>
                  </button>
                )}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleScrollYears('left')}
                    className="p-2 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600 transition-colors cursor-pointer"
                    title="往左滑動"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleScrollYears('right')}
                    className="p-2 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600 transition-colors cursor-pointer"
                    title="往右滑動"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            EXPANDED DONOR LIST SECTION (Smoothly revealed on click)
            ========================================================================= */}
        <div ref={listContainerRef} className="scroll-mt-24">
          <AnimatePresence>
            {isListExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 mb-10"
              >
                {/* Active List Control Toolbar */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-neutral-200/90">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 mb-1">
                        <Filter className="w-3.5 h-3.5" />
                        <span>正在瀏覽收據名單</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2">
                        <span>【{currentViewTitle}】</span>
                        <span className="text-xs sm:text-sm font-normal text-neutral-500">
                          共篩選出 <strong className="font-mono text-neutral-900 font-bold">{filteredDonors.length}</strong> 筆
                        </span>
                      </h3>
                    </div>

                    {/* Quick Action Button: Close */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCloseList}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>收合名單</span>
                      </button>
                    </div>
                  </div>

                  {/* Month Sub-Filter Tabs for this year */}
                  <div className="mt-4 pt-1 overflow-x-auto scrollbar-none">
                    <div className="flex items-center gap-1.5 min-w-max pb-1">
                      <span className="text-xs font-semibold text-neutral-400 mr-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        月份篩選：
                      </span>
                      {activeYearMonths.map((m) => {
                        const isActive = selectedMonth === m.key;
                        return (
                          <button
                            key={m.key}
                            onClick={() => {
                              setSelectedMonth(m.key);
                              setCurrentPage(1);
                            }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                              isActive
                                ? 'bg-neutral-900 text-white font-bold shadow-xs'
                                : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700'
                            }`}
                          >
                            <span>{m.label}</span>
                            <span
                              className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                                isActive ? 'bg-neutral-800 text-orange-300' : 'bg-neutral-200 text-neutral-600'
                              }`}
                            >
                              {m.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Donors Table */}
                <div className="bg-white rounded-3xl shadow-sm border border-neutral-200/90 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-neutral-50/90 border-b border-neutral-200/80 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        <tr>
                          <th className="py-4 px-6 whitespace-nowrap">捐款日期</th>
                          <th className="py-4 px-6 whitespace-nowrap">捐款人 / 贊助單位</th>
                          <th className="py-4 px-6 text-right whitespace-nowrap">捐贈金額</th>
                          <th className="py-4 px-6">支持項目與摘要說明</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {paginatedDonors.length > 0 ? (
                          paginatedDonors.map((donor) => (
                            <tr key={donor.id} className="hover:bg-orange-50/30 transition-colors">
                              <td className="py-3.5 px-6 whitespace-nowrap">
                                <span className="font-mono text-neutral-800 font-semibold text-xs sm:text-sm">
                                  {donor.gregorianDate}
                                </span>
                              </td>
                              <td className="py-3.5 px-6 whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-neutral-900 text-sm sm:text-base">
                                    {donor.name}
                                  </span>
                                  {donor.isOrganization && (
                                    <span className="text-[10px] font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                      愛心店家/團體
                                    </span>
                                  )}
                                  {donor.name === '善心人士' && (
                                    <span className="text-[10px] font-medium bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">
                                      無名愛心
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="py-3.5 px-6 text-right whitespace-nowrap">
                                <span className="font-mono font-bold text-neutral-900 text-sm sm:text-base">
                                  NT$ {donor.amount.toLocaleString()}
                                </span>
                              </td>
                              <td className="py-3.5 px-6 text-neutral-700 text-xs sm:text-sm leading-relaxed font-medium">
                                <span className="inline-flex items-center gap-1.5 text-neutral-800">
                                  <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                                  {DEFAULT_PROJECT_DETAIL}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4} className="py-12 text-center text-neutral-400">
                              查無符合「{searchTerm}」的公開徵信資料，請嘗試其他關鍵字或切換月份。
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination & Footer Controls */}
                  <div className="py-4 px-6 bg-neutral-50/70 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
                    <div className="flex items-center gap-3">
                      <span>
                        顯示第 <strong className="font-mono text-neutral-900">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</strong> 至{' '}
                        <strong className="font-mono text-neutral-900">
                          {Math.min(currentPage * ITEMS_PER_PAGE, filteredDonors.length)}
                        </strong>{' '}
                        筆，共 <strong className="font-mono text-neutral-900">{filteredDonors.length}</strong> 筆
                      </span>

                      <button
                        onClick={handleCloseList}
                        className="text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-1 ml-2 cursor-pointer"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                        <span>收起名單</span>
                      </button>
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="p-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                          aria-label="上一頁"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <div className="flex items-center gap-1 font-mono text-xs">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            if (
                              page === 1 ||
                              page === totalPages ||
                              (page >= currentPage - 2 && page <= currentPage + 2)
                            ) {
                              return (
                                <button
                                  key={page}
                                  onClick={() => setCurrentPage(page)}
                                  className={`w-7 h-7 rounded-lg font-medium transition-colors cursor-pointer ${
                                    currentPage === page
                                      ? 'bg-orange-500 text-white font-bold'
                                      : 'bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700'
                                  }`}
                                >
                                  {page}
                                </button>
                              );
                            } else if (
                              (page === currentPage - 3 && page > 1) ||
                              (page === currentPage + 3 && page < totalPages)
                            ) {
                              return <span key={page} className="px-1 text-neutral-400">...</span>;
                            }
                            return null;
                          })}
                        </div>

                        <button
                          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="p-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                          aria-label="下一頁"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Notice & Privacy Policy / Call to Action */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-neutral-800 font-bold text-base mb-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>個人資料保護與徵信隱碼原則</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                本會恪遵《公益勸募條例》及《個人資料保護法》，捐款人姓名中間字以星號遮蔽。如需完全匿名或更正徵信名稱、收據資訊，請與本會聯繫。
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap gap-4 text-xs">
              <a
                href="mailto:twgrow2025@twgrow.org.tw"
                className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-orange-600 font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>芳名異動信箱：twgrow2025@twgrow.org.tw</span>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-orange-200">
                Join our circle of care
              </span>
              <h3 className="text-2xl font-bold mt-1 mb-2">加入愛心支持行列</h3>
              <p className="text-xs sm:text-sm text-orange-100 leading-relaxed mb-6">
                孩子成長的每一步，都需要像您一樣溫暖的雙手牽引。您的支持，將轉化為書桌上的筆墨、下課後的營養點心，以及假日專業志工的滿滿陪伴。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://neti.cc/Qj74MeK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors shadow-sm text-sm"
              >
                <span>立即線上定期定額 / 單筆捐款</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#donate"
                className="inline-flex items-center justify-center gap-2 bg-orange-700/60 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-full border border-orange-400/40 transition-colors text-sm"
              >
                查看銀行匯款資訊
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
