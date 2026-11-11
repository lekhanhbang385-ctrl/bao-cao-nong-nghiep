import React from 'react';
import {
  BookMarked,
  ExternalLink,
  CheckCircle,
  GraduationCap,
  ArrowUp
} from 'lucide-react';
import { STUDENT_REPORT_PROFILE } from '../utils/shrimpModelLogic';

interface ReferenceSource {
  id: number;
  organization: string;
  title: string;
  urlLabel: string;
  href: string;
  updatedData2026: string;
}

const REFERENCE_SOURCES: ReferenceSource[] = [
  {
    id: 1,
    organization: 'Bộ Nông nghiệp và Phát triển Nông thôn (nay là Bộ Nông nghiệp & Môi trường)',
    title: 'Cổng thông tin điện tử Bộ NN&PTNT — Chiến lược phát triển thủy sản Việt Nam đến năm 2030, tầm nhìn 2045',
    urlLabel: 'https://www.mard.gov.vn',
    href: 'https://www.mard.gov.vn',
    updatedData2026:
      'Định hướng nhân rộng mô hình nuôi tôm thẻ chân trắng 2–3 giai đoạn tuần hoàn nước khép kín (RAS) và giảm phát thải khí nhà kính vùng ĐBSCL giai đoạn 2025–2026.'
  },
  {
    id: 2,
    organization: 'UBND Tỉnh Bạc Liêu & Sở NN&PTNT Tỉnh Bạc Liêu',
    title: 'Báo cáo kinh tế - xã hội & Đề án xây dựng Bạc Liêu trở thành trung tâm ngành công nghiệp tôm cả nước',
    urlLabel: 'https://baclieu.gov.vn',
    href: 'https://baclieu.gov.vn',
    updatedData2026:
      'Vận hành Khu nông nghiệp ứng dụng CNC phát triển tôm Bạc Liêu (418,9 ha tại xã Hiệp Thành); diện tích nuôi siêu thâm canh đạt ~4.000 – 6.000 ha, quy hoạch vùng CNC đạt 27.200 ha.'
  },
  {
    id: 3,
    organization: 'Hiệp hội Chế biến và Xuất khẩu Thủy sản Việt Nam (VASEP)',
    title: 'Báo cáo Xuất khẩu Tôm Việt Nam năm 2025 và Thống kê 9 tháng đầu năm 2026',
    urlLabel: 'https://vasep.com.vn',
    href: 'https://vasep.com.vn',
    updatedData2026:
      'Năm 2025 kim ngạch xuất khẩu tôm Việt Nam đạt kỷ lục 4,6 tỷ USD (+19% YoY); 9 tháng đầu năm 2026 đạt 3,7 tỷ USD (+11% so với cùng kỳ năm 2025), tôm chân trắng chiếm chủ lực.'
  },
  {
    id: 4,
    organization: 'Tổng cục Thống kê (GSO) & Tạp chí Thủy sản Việt Nam',
    title: 'Niên giám Thống kê Thủy sản Việt Nam & Chuyên đề Công nghệ Biofloc - RAS',
    urlLabel: 'https://thuysanvietnam.com.vn',
    href: 'https://thuysanvietnam.com.vn',
    updatedData2026:
      'Đối soát năng suất bình quân mô hình siêu thâm canh nhà màng đạt 40 – 50 tấn/ha/vụ, hệ số chuyển đổi thức ăn FCR giảm còn 1.1 – 1.2 và tỷ lệ sống đạt 85% – 90%.'
  }
];

interface ConclusionFooterSectionProps {
  onScrollTop: () => void;
}

export const ConclusionFooterSection: React.FC<ConclusionFooterSectionProps> = ({
  onScrollTop
}) => {
  return (
    <section
      id="ket-luan"
      className="pt-16 lg:pt-24 bg-white scroll-mt-16 flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 pb-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold text-sky-700 tracking-wide">
            05. Kết Luận &amp; Nguồn Tư Liệu Tham Khảo · Evaluation &amp;
            Citations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Tổng Kết Bài Học Thực Hành &amp; Hồ Sơ Tư Liệu Đối Soát (2025 –
            2026)
          </h2>
        </div>

        {/* Core Academic Evaluation Callout */}
        <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-md space-y-6">
          <div className="flex items-center gap-2.5 text-emerald-400 text-xs sm:text-sm font-semibold">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span>Đánh Giá Bài Học Thực Hành (Môn Địa Lí 9 · Bài 7)</span>
          </div>

          <blockquote className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed text-slate-50">
            &ldquo;Mô hình nuôi tôm công nghệ cao tại Bạc Liêu chứng minh rằng:
            Hiện đại hóa nông nghiệp không chỉ là nâng cao sản lượng, mà là chìa
            khóa để bảo vệ môi trường và giữ vững sinh kế bền vững cho vùng Tây
            Nam Bộ trước thách thức toàn cầu.&rdquo;
          </blockquote>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                Báo cáo cá nhân: <strong>{STUDENT_REPORT_PROFILE.fullName}</strong>{' '}
                · Lớp <strong>{STUDENT_REPORT_PROFILE.className}</strong> ·
                Trường <strong>{STUDENT_REPORT_PROFILE.schoolName}</strong>
              </span>
            </div>
            <span className="font-mono-tabular text-slate-400">
              Năm học: {STUDENT_REPORT_PROFILE.academicYear}
            </span>
          </div>
        </div>

        {/* Verifiable Reference Table (Tuân thủ mục 2 SGK Bài 7) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-sky-600" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Bảng Kê Khai Nguồn Tư Liệu Tin Cậy (Tuân Thủ Mục 2 SGK Địa Lí 9
                Bài 7)
              </h3>
            </div>
            <span className="text-xs font-mono-tabular text-slate-500 hidden sm:inline">
              Cập nhật số liệu đến Quý III/2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REFERENCE_SOURCES.map((source) => (
              <div
                key={source.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono-tabular text-slate-500">
                    <span>NGUỒN TƯ LIỆU 0{source.id}</span>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 hover:text-sky-900 font-semibold flex items-center gap-1"
                    >
                      <span>{source.urlLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h4 className="text-base font-bold text-slate-900">
                    {source.organization}
                  </h4>

                  <p className="text-xs sm:text-sm font-medium text-slate-700">
                    {source.title}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">
                    Dữ liệu trích xuất (2025 – 2026):{' '}
                  </strong>
                  {source.updatedData2026}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Synchronized Personal Student Footer */}
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="text-sm sm:text-base font-bold text-white">
              Địa Lí 9 · Bài 7: Thực Hành — Báo Cáo Mô Hình Sản Xuất Nông Nghiệp
              Hiệu Quả Cao
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Nội dung &amp; Báo cáo thực hành được thực hiện bởi học sinh{' '}
              <strong className="text-white font-semibold">
                {STUDENT_REPORT_PROFILE.fullName}
              </strong>{' '}
              - Lớp{' '}
              <strong className="text-sky-400 font-semibold">
                {STUDENT_REPORT_PROFILE.className}
              </strong>{' '}
              - Trường{' '}
              <strong className="text-white font-semibold">
                {STUDENT_REPORT_PROFILE.schoolName}
              </strong>
              . Dữ liệu đối soát phục vụ học tập theo Chương trình GDPT 2018.
            </p>
          </div>

          <button
            type="button"
            onClick={onScrollTop}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white border border-slate-800 transition-colors flex items-center gap-2 shrink-0 cursor-pointer no-print"
          >
            <span>Lên đầu báo cáo</span>
            <ArrowUp className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </footer>
    </section>
  );
};
