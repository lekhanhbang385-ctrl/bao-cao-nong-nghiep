import React, { useState, useEffect } from 'react';
import { Printer, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenPrintModal: () => void;
}

const NAV_ITEMS = [
  { id: 'tong-quan', label: 'Tổng quan' },
  { id: 'so-lieu', label: 'Sản phẩm & Số liệu' },
  { id: 'cong-nghe', label: 'Công nghệ lõi' },
  { id: 'y-nghia', label: 'Ý nghĩa 3 trục' },
  { id: 'hoi-dap', label: 'Giải mã & Q&A' },
  { id: 'ket-luan', label: 'Kết luận & Nguồn' }
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenPrintModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 no-print ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs'
          : 'bg-slate-50/90 backdrop-blur-xs border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 lg:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="text-sm sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-sky-700 transition-colors"
        >
          Địa Lí 9 · Báo Cáo Bài 7
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav
          aria-label="Điều hướng báo cáo"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                  isActive
                    ? 'text-sky-700 border-sky-600 font-semibold'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenPrintModal}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-sky-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Phiếu Đánh Giá &amp; In</span>
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-200/70 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-50 text-sky-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
