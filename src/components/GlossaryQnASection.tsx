import React, { useState } from 'react';
import {
  Search,
  ChevronDown,
  ChevronUp,
  BookOpenCheck,
  Lightbulb,
  CheckCircle2,
  Microscope,
  X,
  ChevronsDownUp,
  ChevronsUpDown
} from 'lucide-react';
import {
  GLOSSARY_QNA_ITEMS,
  QnACategory,
  filterGlossaryQnA
} from '../utils/shrimpModelLogic';

const CATEGORY_TABS: { id: QnACategory; label: string }[] = [
  { id: 'all', label: 'Tất cả (8)' },
  { id: 'tech_bio', label: 'Công nghệ & Sinh học' },
  { id: 'infra_ops', label: 'Hạ tầng & Vận hành' },
  { id: 'econ_geo', label: 'Kinh tế & Địa lí 9' }
];

const QUICK_KEYWORDS = [
  'RAS',
  'Biofloc',
  'FCR',
  'Siphon',
  'SPF PL12',
  'IoT',
  'ASC',
  'Biến đổi khí hậu'
];

export const GlossaryQnASection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<QnACategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<string[]>([
    'qna-01',
    'qna-02',
    'qna-08'
  ]);

  const filteredItems = filterGlossaryQnA(
    GLOSSARY_QNA_ITEMS,
    selectedCategory,
    searchQuery
  );

  const handleToggleCard = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setExpandedIds(filteredItems.map((item) => item.id));
  };

  const handleCollapseAll = () => {
    setExpandedIds([]);
  };

  const allFilteredExpanded =
    filteredItems.length > 0 &&
    filteredItems.every((item) => expandedIds.includes(item.id));

  return (
    <section
      id="hoi-dap"
      className="py-16 lg:py-24 border-b border-slate-200/80 bg-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold text-sky-700 tracking-wide">
            Phụ Lục Chuyên Đề · Giải Mã Kỹ Thuật &amp; Hỏi Đáp Trực Quan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Cẩm Nang Giải Thích Thuật Ngữ &amp; Q&amp;A Thực Tiễn (Dành Cho
            Thuyết Trình)
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Hệ thống hóa các khái niệm công nghệ cao (RAS, Biofloc, FCR, Siphon,
            IoT...) sang ngôn ngữ trực quan, dễ hiểu, làm rõ bản chất khoa học
            và mối liên hệ thực tiễn với chương trình Địa lí 9 (Vùng Đồng bằng
            sông Cửu Long).
          </p>
        </div>

        {/* Interactive Search, Category Tabs & Expand/Collapse Controls */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <label htmlFor="qna-search-input" className="sr-only">
                Tìm kiếm nhanh từ khóa thuật ngữ
              </label>
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="qna-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tra cứu thuật ngữ (VD: RAS, Biofloc, FCR, Siphon, IoT...)"
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200/90 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Xóa từ khóa tìm kiếm"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Bộ lọc nhóm câu hỏi Q&A"
              className="lg:col-span-5 flex flex-wrap items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl"
            >
              {CATEGORY_TABS.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Expand All / Collapse All Action Buttons */}
            <div className="lg:col-span-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={
                  allFilteredExpanded ? handleCollapseAll : handleExpandAll
                }
                className="w-full lg:w-auto px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                {allFilteredExpanded ? (
                  <>
                    <ChevronsDownUp className="w-3.5 h-3.5 text-sky-600" />
                    <span>Thu gọn tất cả</span>
                  </>
                ) : (
                  <>
                    <ChevronsUpDown className="w-3.5 h-3.5 text-sky-600" />
                    <span>Mở rộng tất cả</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Keyword Filter Strip */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/70 text-xs">
            <span className="text-slate-500 font-medium">
              Từ khóa tra cứu nhanh trên lớp:
            </span>
            {QUICK_KEYWORDS.map((kw) => {
              const isSelected =
                searchQuery.toLowerCase() === kw.toLowerCase();
              return (
                <button
                  key={kw}
                  type="button"
                  onClick={() =>
                    setSearchQuery(isSelected ? '' : kw)
                  }
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-sky-600 text-white font-semibold'
                      : 'bg-white text-slate-700 border border-slate-200/80 hover:border-sky-400 hover:text-sky-700'
                  }`}
                >
                  {kw}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredItems.length === 0 ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-10 text-center space-y-3">
            <p className="text-base font-bold text-slate-900">
              Không tìm thấy thuật ngữ phù hợp với từ khóa &ldquo;{searchQuery}
              &rdquo;
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Hãy thử từ khóa khác như RAS, Biofloc, FCR, Siphon, SPF, IoT hoặc
              nhấn nút bên dưới để xem lại toàn bộ 8 câu hỏi.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors cursor-pointer"
            >
              Hiển thị tất cả 8 thẻ Q&amp;A
            </button>
          </div>
        ) : (
          /* 8 Q&A Accordion Cards List */
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const isExpanded = expandedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-white border-sky-300 shadow-sm'
                      : 'bg-slate-50/70 border-slate-200/90 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Accordion Header Button */}
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => handleToggleCard(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-2 flex-1">
                      {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono-tabular">
                        <span className="font-bold text-sky-700">
                          [{item.code}]
                        </span>
                        <span aria-hidden="true" className="text-slate-300">
                          ·
                        </span>
                        <span className="font-semibold text-slate-500">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug">
                        {item.question}
                      </h3>

                      <p className="text-xs sm:text-sm text-emerald-800 font-medium">
                        <strong className="font-semibold text-slate-900">
                          Tóm tắt nhanh:{' '}
                        </strong>
                        {item.quickSummary}
                      </p>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0 mt-1">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-sky-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Body: Side-by-Side Comparison ("Thuật ngữ chuyên ngành" vs "Giải thích nôm na dễ hiểu") */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100 space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                        {/* Left Box: Technical Term & Scientific Definition */}
                        <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-5 flex flex-col justify-between space-y-3 border border-slate-800">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                              <Microscope className="w-4 h-4 shrink-0" />
                              <span>Thuật ngữ chuyên ngành &amp; Bản chất</span>
                            </div>
                            <div className="text-sm sm:text-base font-bold text-white leading-snug">
                              {item.technicalTerm}
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                              {item.technicalDefinition}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-800 text-[11px] font-mono-tabular text-slate-400">
                            Từ khóa: {item.keywords.join(' · ')}
                          </div>
                        </div>

                        {/* Right Box: Plain-Language Explanation ("Giải thích nôm na dễ hiểu") */}
                        <div className="lg:col-span-7 bg-sky-50/50 rounded-xl p-5 border border-sky-200/80 flex flex-col justify-between space-y-3">
                          <div className="space-y-2.5">
                            <div className="flex items-center gap-2 text-xs font-bold text-sky-800">
                              <Lightbulb className="w-4 h-4 text-sky-600 shrink-0" />
                              <span>
                                Giải thích nôm na dễ hiểu (Dành cho thuyết trình
                                trên lớp)
                              </span>
                            </div>

                            <div className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                              {item.easyExplanation.map((paragraph, pIdx) => (
                                <p key={pIdx}>{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Practical Meaning & Geography 9 Connection Strip */}
                      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                          <strong className="font-bold text-emerald-900">
                            Ý nghĩa thực tế &amp; Giá trị cốt lõi:{' '}
                          </strong>
                          {item.practicalMeaning}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Presentation Tip Footer Bar */}
        <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="w-4 h-4 text-sky-600 shrink-0" />
            <span>
              <strong>Mẹo thuyết trình:</strong> Sử dụng ô tìm kiếm phía trên để
              lọc nhanh câu hỏi khi giáo viên hoặc các bạn trong lớp đặt câu hỏi
              phản biện.
            </span>
          </div>
          <span className="font-mono-tabular text-slate-500 shrink-0">
            Hiển thị {filteredItems.length} / {GLOSSARY_QNA_ITEMS.length} chủ đề
          </span>
        </div>
      </div>
    </section>
  );
};
