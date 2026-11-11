import React from 'react';
import { Coins, Users, Leaf, CheckCircle2 } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section
      id="y-nghia"
      className="py-16 lg:py-24 border-b border-slate-200/80 bg-slate-50 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold text-emerald-700 tracking-wide">
            04. Ý Nghĩa Phát Triển Bền Vững · Triple-Bottom-Line (Kinh Tế – Xã
            Hội – Môi Trường)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Giá Trị Ba Trục Của Mô Hình Nông Nghiệp Hiệu Quả Cao Tại ĐBSCL
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Không chỉ tạo ra bước nhảy vọt về sản lượng xuất khẩu, mô hình nuôi
            tôm siêu thâm canh công nghệ cao tại Bạc Liêu còn giải quyết hài hòa
            bài toán sinh kế nông thôn và thích ứng biến đổi khí hậu.
          </p>
        </div>

        {/* 3 Symmetrical Columns (Triple-Bottom-Line) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Economic Value */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-700">
                <Coins className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono-tabular font-semibold text-sky-700">
                  TRỤC 01 · ECONOMIC VALUE
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Ý Nghĩa Kinh Tế
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Tạo ra giá trị gia tăng khổng lồ trên một đơn vị diện tích (lợi
                nhuận đạt{' '}
                <strong className="font-semibold text-slate-900">
                  hàng tỷ đồng/ha/năm
                </strong>
                ); giảm thiểu tối đa rủi ro &ldquo;mất trắng đầm tôm&rdquo; do
                dịch bệnh; đóng góp trực tiếp vào cột mốc kim ngạch xuất khẩu
                tôm{' '}
                <strong className="font-semibold text-slate-900">
                  4,6 – 5 tỷ USD
                </strong>{' '}
                của Việt Nam và mục tiêu{' '}
                <strong className="font-semibold text-slate-900">
                  1,3 – 1,7 tỷ USD
                </strong>{' '}
                của tỉnh Bạc Liêu.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>
                  Năng suất đạt 40 – 50 tấn/ha/vụ, tối ưu hóa hệ số sử dụng đất.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>
                  Tôm đạt chuẩn ASC, GlobalGAP, BAP vào thẳng hệ thống siêu thị
                  Mỹ, Nhật, EU.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Social Value */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-700">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono-tabular font-semibold text-cyan-700">
                  TRỤC 02 · SOCIAL VALUE
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Ý Nghĩa Xã Hội
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Xóa bỏ tư duy{' '}
                <strong className="font-semibold text-slate-900">
                  &ldquo;đánh bạc với trời&rdquo;
                </strong>
                , hình thành đội ngũ nông dân thế hệ mới am hiểu công nghệ (kỹ
                thuật viên số vận hành cảm biến IoT và vi sinh); tạo việc làm
                chất lượng cao, thu nhập ổn định tại chỗ cho thanh niên nông
                thôn miền Tây, hạn chế di cư lao động tự phát.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>
                  Chuyển dịch lao động chân tay sang kỹ sư quản trị trang trại
                  thông minh.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>
                  Thúc đẩy liên kết chuỗi 4 nhà: Nhà nông – Nhà nước – Nhà khoa
                  học – Doanh nghiệp.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecological Value */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
                <Leaf className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono-tabular font-semibold text-emerald-700">
                  TRỤC 03 · ECOLOGICAL VALUE
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Ý Nghĩa Môi Trường &amp; Thích Ứng Khí Hậu
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Là mô hình mẫu mực để nông dân Bạc Liêu và ĐBSCL{' '}
                <strong className="font-semibold text-slate-900">
                  &ldquo;thuận thiên&rdquo;
                </strong>{' '}
                thích ứng với tình trạng xâm nhập mặn và biến đổi khí hậu; tiết
                kiệm tài nguyên nước ngầm, triệt tiêu ô nhiễm hữu cơ ra môi
                trường tự nhiên nhờ hệ thống tuần hoàn RAS, hướng đến nền kinh
                tế biển{' '}
                <strong className="font-semibold text-emerald-700">
                  Net Zero
                </strong>
                .
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Biến thách thức xâm nhập mặn ven biển thành lợi thế kinh tế
                  nước lợ giá trị cao.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Bảo vệ hệ sinh thái rừng ngập mặn và kênh rạch nội đồng ĐBSCL.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
