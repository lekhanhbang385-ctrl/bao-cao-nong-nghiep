/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { EconomicsSection } from './components/EconomicsSection';
import { TechStackSection } from './components/TechStackSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { GlossaryQnASection } from './components/GlossaryQnASection';
import { ConclusionFooterSection } from './components/ConclusionFooterSection';
import { STUDENT_REPORT_PROFILE } from './utils/shrimpModelLogic';
import { X, Printer, CheckCircle2 } from 'lucide-react';

const SECTION_IDS = [
  'hero',
  'tong-quan',
  'so-lieu',
  'cong-nghe',
  'y-nghia',
  'hoi-dap',
  'ket-luan'
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('tong-quan');
  const [printModalOpen, setPrintModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id === 'hero' ? 'tong-quan' : id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (sectionId !== 'hero') {
        setActiveSection(sectionId);
      }
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPrintModal={() => setPrintModalOpen(true)}
      />

      <main className="flex-1">
        <HeroSection onNavigate={handleNavigate} />
        <OverviewSection />
        <EconomicsSection />
        <TechStackSection />
        <SustainabilitySection />
        <GlossaryQnASection />
        <ConclusionFooterSection onScrollTop={handleScrollTop} />
      </main>

      {/* Academic Rubric & Print Summary Dialog */}
      {printModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-rubric-title"
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 no-print"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-semibold text-sky-700">
                  Phiếu Tổng Hợp Báo Cáo Thực Hành Cá Nhân · Chương Trình GDPT
                  2018
                </span>
                <h2
                  id="modal-rubric-title"
                  className="text-xl font-bold text-slate-900 mt-1"
                >
                  Hồ Sơ Nộp Bài: {STUDENT_REPORT_PROFILE.fullName} (Lớp{' '}
                  {STUDENT_REPORT_PROFILE.className})
                </h2>
              </div>
              <button
                type="button"
                aria-label="Đóng hộp thoại"
                onClick={() => setPrintModalOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-sm">
              <div>
                <span className="text-xs text-slate-500 block">
                  Học sinh thực hiện
                </span>
                <strong className="text-slate-900">
                  {STUDENT_REPORT_PROFILE.fullName}
                </strong>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">
                  Lớp &amp; Trường THCS
                </span>
                <strong className="text-slate-900">
                  Lớp {STUDENT_REPORT_PROFILE.className} · Trường{' '}
                  {STUDENT_REPORT_PROFILE.schoolName}
                </strong>
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs text-slate-500 block">
                  Đề tài báo cáo thực hành
                </span>
                <strong className="text-slate-900">
                  {STUDENT_REPORT_PROFILE.modelOfficialName}
                </strong>
              </div>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="font-bold text-slate-900">
                Danh mục hoàn thành theo yêu cầu SGK Địa lí 9 - Bài 7:
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Mở đầu &amp; Khái niệm:</strong> Nêu rõ địa bàn Khu
                  nông nghiệp CNC phát triển tôm Bạc Liêu (xã Hiệp Thành) và mật
                  độ nuôi 200 – 300 con/m² trong nhà màng.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Bảng đối soát chỉ số kinh tế:</strong> So sánh đầy đủ
                  4 tiêu chí (Năng suất 40–50 tấn/ha/vụ, Tỷ lệ sống 85–90%, 3–4
                  vụ/năm, FCR 1.1–1.2) và số liệu xuất khẩu VASEP 2025–2026 (4,6
                  tỷ USD năm 2025; 3,7 tỷ USD 9T/2026).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Công nghệ lõi &amp; Ý nghĩa 3 trục:</strong> Phân tích
                  4 trụ cột (RAS, Biofloc, Ao tròn HDPE nhà màng, IoT 24/7) và ý
                  nghĩa Kinh tế – Xã hội – Môi trường.
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setPrintModalOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => {
                  setPrintModalOpen(false);
                  setTimeout(() => window.print(), 150);
                }}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>In Báo Cáo / Lưu PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
