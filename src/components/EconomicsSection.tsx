import React, { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Award,
  Sliders,
  Globe2,
  Check,
  ArrowUpRight
} from 'lucide-react';
import {
  COMPARISON_CRITERIA,
  calculateFarmComparison,
  VIETNAM_SHRIMP_STATS_2022_2026
} from '../utils/shrimpModelLogic';

export const EconomicsSection: React.FC = () => {
  const [areaHa, setAreaHa] = useState<number>(2);
  const [cropsPerYear, setCropsPerYear] = useState<number>(3.5);
  const [shrimpPrice, setShrimpPrice] = useState<number>(185);
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(4); // Default to 2026

  const simulation = calculateFarmComparison({
    areaHa,
    highTechCropsPerYear: cropsPerYear,
    shrimpPriceMillionsPerTon: shrimpPrice
  });

  const activeYearRecord =
    VIETNAM_SHRIMP_STATS_2022_2026[selectedYearIndex] ||
    VIETNAM_SHRIMP_STATS_2022_2026[4];

  return (
    <section
      id="so-lieu"
      className="py-16 lg:py-24 border-b border-slate-200/80 bg-slate-50 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold text-sky-700 tracking-wide">
            02. Sản Phẩm &amp; Bảng Đối Soát Chỉ Số Kinh Tế · Dữ Liệu Thực Chứng
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Đột Phá Năng Suất &amp; Chuẩn Hóa Chất Lượng Xuất Khẩu Toàn Cầu
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Đối sánh trực tiếp hiệu quả kinh tế - kỹ thuật giữa phương thức nuôi
            ao đất truyền thống và mô hình nuôi siêu thâm canh công nghệ cao tại
            Bạc Liêu, kèm số liệu xuất khẩu VASEP cập nhật năm 2025 – 2026.
          </p>
        </div>

        {/* 4 Prominent Stat Cards (Mandatory Section 2 Requirement) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-sky-700">
              <span className="text-xs font-semibold">Năng suất kỷ lục</span>
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="font-mono-tabular text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              45 Tấn/ha/vụ
            </div>
            <p className="text-xs text-slate-600">
              Dao động 40 – 50 tấn/ha/vụ, gấp 15 – 20 lần so với nuôi ao đất
              truyền thống (2 – 3 tấn/ha/vụ).
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-cyan-700">
              <span className="text-xs font-semibold">Tỷ lệ tôm sống sót</span>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-mono-tabular text-3xl sm:text-4xl font-extrabold text-sky-700 tracking-tight">
              85%+
            </div>
            <p className="text-xs text-slate-600">
              Đạt 85% – 90% nhờ kiểm soát tự động Oxy, pH, độ kiềm và cách ly
              mầm bệnh trong nhà màng kín.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-emerald-700">
              <span className="text-xs font-semibold">Canh tác quanh năm</span>
              <RefreshCw className="w-5 h-5" />
            </div>
            <div className="font-mono-tabular text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              3–4 Vụ/Năm
            </div>
            <p className="text-xs text-slate-600">
              Không phụ thuộc mùa mưa hay hạn mặn ĐBSCL; san thưa 2–3 giai đoạn
              giúp quay vòng ao liên tục.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-emerald-700">
              <span className="text-xs font-semibold">Đạt chuẩn GlobalGAP</span>
              <Award className="w-5 h-5" />
            </div>
            <div className="font-mono-tabular text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
              100% Không Kháng Sinh
            </div>
            <p className="text-xs text-slate-600">
              Đáp ứng tiêu chuẩn khắt khe nhất: ASC, GlobalGAP, BAP xuất khẩu
              sang Mỹ, Nhật Bản, EU, CPTPP.
            </p>
          </div>
        </div>

        {/* Harvested Product Profile Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Globe2 className="w-4 h-4" />
              <span>Sản Phẩm Thu Hoạch &amp; Định Chuẩn Thương Phẩm Quốc Tế</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Tôm Thẻ Chân Trắng Thương Phẩm Size Lớn (20 – 30 con/kg)
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nhờ môi trường nước tuần hoàn giàu khoáng chất và nguồn đạm vi
              sinh tự nhiên từ hạt Biofloc, tôm thu hoạch tại Khu nông nghiệp
              công nghệ cao Bạc Liêu đạt kích cỡ lớn{' '}
              <strong className="font-semibold text-slate-900">
                20 – 30 con/kg
              </strong>{' '}
              (trọng lượng 33 – 50g/con), vỏ bóng sáng tự nhiên, thịt săn chắc,
              ngọt và hoàn toàn không tồn dư kháng sinh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Chứng nhận ASC</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Hội đồng Quản lý Nuôi trồng Thủy sản bền vững quốc tế (Châu
                  Âu).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-sky-600" />
                  <span>Chứng nhận GlobalGAP</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Thực hành nông nghiệp tốt toàn cầu, truy xuất nguồn gốc toàn
                  diện.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-cyan-600" />
                  <span>Chứng nhận BAP (4 Sao)</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Tiêu chuẩn Thực hành Nuôi trồng Thủy sản Tốt nhất vào thị
                  trường Hoa Kỳ &amp; Nhật Bản.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Inspection SVG Diagram of Export-Grade Whiteleg Shrimp */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-xl p-5 text-white border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
                <span>Hồ sơ kiểm định thương phẩm</span>
                <span className="font-mono-tabular text-emerald-400 font-semibold">
                  SIZE 20–30 PCS/KG
                </span>
              </div>

              <svg
                viewBox="0 0 420 190"
                className="w-full h-auto"
                role="img"
                aria-label="Sơ đồ tiêu chuẩn chất lượng tôm thẻ chân trắng thương phẩm xuất khẩu 20 đến 30 con trên kg"
              >
                {/* Stylized Shrimp Silhouette & Callouts */}
                <path
                  d="M 95 110 C 130 55, 235 45, 310 85 C 335 100, 345 125, 325 145 C 300 130, 275 115, 225 112 C 175 110, 130 125, 95 110 Z"
                  fill="#0284c7"
                  fillOpacity="0.35"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                />
                {/* Segments */}
                <path
                  d="M 155 72 C 160 90, 160 102, 155 115"
                  stroke="#7dd3fc"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 195 66 C 200 85, 200 100, 195 112"
                  stroke="#7dd3fc"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 235 68 C 240 86, 240 100, 235 112"
                  stroke="#7dd3fc"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 275 76 C 278 92, 278 106, 272 118"
                  stroke="#7dd3fc"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Antennae */}
                <path
                  d="M 95 110 Q 45 95 20 65"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 95 112 Q 45 120 18 135"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="112" cy="96" r="4" fill="#f8fafc" />

                {/* Callout Annotations */}
                <line
                  x1="195"
                  y1="66"
                  x2="195"
                  y2="28"
                  stroke="#34d399"
                  strokeWidth="1.5"
                />
                <circle cx="195" cy="66" r="3.5" fill="#34d399" />
                <text
                  x="195"
                  y="20"
                  textAnchor="middle"
                  fill="#34d399"
                  fontSize="10"
                  fontWeight="700"
                >
                  Vỏ bóng sáng, giàu khoáng · Không đốm trắng
                </text>

                <line
                  x1="265"
                  y1="100"
                  x2="310"
                  y2="45"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />
                <circle cx="265" cy="100" r="3.5" fill="#38bdf8" />
                <text
                  x="335"
                  y="38"
                  textAnchor="middle"
                  fill="#7dd3fc"
                  fontSize="10"
                  fontWeight="700"
                >
                  Cơ thịt săn chắc (Đạm Biofloc)
                </text>

                <line
                  x1="135"
                  y1="95"
                  x2="135"
                  y2="160"
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                />
                <circle cx="135" cy="95" r="3.5" fill="#fbbf24" />
                <text
                  x="145"
                  y="175"
                  textAnchor="middle"
                  fill="#fde047"
                  fontSize="10"
                  fontWeight="700"
                >
                  Gan tụy khỏe mạnh · 0% Dư lượng kháng sinh
                </text>
              </svg>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center text-xs">
                <div>
                  <span className="text-slate-400 block">Trọng lượng</span>
                  <span className="font-mono-tabular font-bold text-white">
                    35 – 50 g/con
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Thị trường đích</span>
                  <span className="font-semibold text-sky-400">
                    Mỹ, Nhật, EU, CPTPP
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Truy xuất QR</span>
                  <span className="font-mono-tabular font-bold text-emerald-400">
                    100% Lô nuôi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Comparison Table: Traditional Earthen Pond vs High-Tech Super-Intensive */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Bảng Đối Soát Trực Quan: Nuôi Ao Đất Truyền Thống vs. Siêu Thâm
                Canh Công Nghệ Cao
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Số liệu tổng hợp từ Sở NN&amp;PTNT tỉnh Bạc Liêu và Bộ Nông
                nghiệp &amp; PTNT (mard.gov.vn)
              </p>
            </div>
            <span className="text-xs font-mono-tabular text-slate-500 shrink-0">
              Đơn vị chuẩn: 1 ha canh tác
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs sm:text-sm">
                  <th className="py-4 px-6 font-semibold">
                    Tiêu chí đối soát kỹ thuật - kinh tế
                  </th>
                  <th className="py-4 px-6 font-semibold text-slate-300">
                    Nuôi ao đất truyền thống
                  </th>
                  <th className="py-4 px-6 font-semibold text-sky-300">
                    Nuôi công nghệ cao siêu thâm canh (RAS + Biofloc)
                  </th>
                  <th className="py-4 px-6 font-semibold text-emerald-300">
                    Mức độ đột phá &amp; Cơ sở khoa học
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 text-sm">
                {COMPARISON_CRITERIA.map((row, idx) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/90 transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-slate-900 align-top">
                      <span className="text-xs font-mono-tabular text-slate-400 block mb-0.5">
                        Tiêu chí 0{idx + 1}
                      </span>
                      {row.criterion}
                    </td>
                    <td className="py-5 px-6 text-slate-600 font-mono-tabular align-top">
                      {row.traditionalLabel}
                    </td>
                    <td className="py-5 px-6 font-bold text-sky-700 font-mono-tabular align-top bg-sky-50/40">
                      {row.highTechLabel}
                    </td>
                    <td className="py-5 px-6 align-top space-y-1">
                      <div className="font-bold text-emerald-700 flex items-center gap-1">
                        <ArrowUpRight className="w-4 h-4 shrink-0" />
                        <span>{row.multiplierText}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {row.scientificNote}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Economic Calculator & 2025-2026 Export Chart Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Farm Yield & FCR Calculator */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                <Sliders className="w-4 h-4" />
                <span>Công cụ Mô phỏng Thực hành Địa lí 9</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Máy Tính Đối Soát Sản Lượng &amp; Tiết Kiệm Thức Ăn (FCR)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Kéo thanh trượt để tính toán sự chênh lệch sản lượng, lượng thức
                ăn tiết kiệm nhờ vi sinh Biofloc và doanh thu ước tính theo quy
                mô diện tích:
              </p>
            </div>

            {/* Sliders */}
            <div className="space-y-4 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <label htmlFor="slider-area" className="text-slate-700">
                    Quy mô diện tích vùng nuôi khảo sát:
                  </label>
                  <span className="font-mono-tabular text-sky-700 font-bold">
                    {areaHa} ha
                  </span>
                </div>
                <input
                  id="slider-area"
                  type="range"
                  min={1}
                  max={20}
                  step={0.5}
                  value={areaHa}
                  onChange={(e) => setAreaHa( parseFloat(e.target.value) )}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono-tabular text-slate-400 mt-0.5">
                  <span>1 ha (Hộ gia đình CNC)</span>
                  <span>10 ha (Hợp tác xã)</span>
                  <span>20 ha (Doanh nghiệp)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200/70">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <label htmlFor="slider-crops" className="text-slate-700">
                      Số vụ nuôi CNC/năm:
                    </label>
                    <span className="font-mono-tabular text-sky-700 font-bold">
                      {cropsPerYear} vụ/năm
                    </span>
                  </div>
                  <input
                    id="slider-crops"
                    type="range"
                    min={3}
                    max={4}
                    step={0.5}
                    value={cropsPerYear}
                    onChange={(e) => setCropsPerYear(parseFloat(e.target.value))}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <label htmlFor="slider-price" className="text-slate-700">
                      Giá tôm size 25 con/kg:
                    </label>
                    <span className="font-mono-tabular text-emerald-700 font-bold">
                      {shrimpPrice} tr/tấn
                    </span>
                  </div>
                  <input
                    id="slider-price"
                    type="range"
                    min={150}
                    max={230}
                    step={5}
                    value={shrimpPrice}
                    onChange={(e) => setShrimpPrice(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Dynamic Output Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/80">
                <span className="text-xs text-slate-500 block">
                  Sản lượng Ao đất truyền thống
                </span>
                <span className="font-mono-tabular font-bold text-xl text-slate-700 mt-1 block">
                  {simulation.traditionalAnnualTons} tấn/năm
                </span>
                <span className="text-[11px] text-slate-500">
                  Doanh thu: ~{simulation.traditionalRevenueBillionVND} tỷ VNĐ
                </span>
              </div>

              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200/90">
                <span className="text-xs text-sky-800 font-medium block">
                  Sản lượng Siêu thâm canh CNC
                </span>
                <span className="font-mono-tabular font-extrabold text-xl text-sky-700 mt-1 block">
                  {simulation.highTechAnnualTons} tấn/năm
                </span>
                <span className="text-[11px] text-sky-700 font-semibold">
                  Gấp {simulation.yieldRatio} lần cả năm · Doanh thu ~
                  {simulation.highTechRevenueBillionVND} tỷ
                </span>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                <span className="text-xs text-emerald-800 font-medium block">
                  Thức ăn tiết kiệm nhờ Biofloc
                </span>
                <span className="font-mono-tabular font-bold text-lg text-emerald-700 mt-1 block">
                  -{simulation.totalFeedSavedEquivalentTons} tấn cám/năm
                </span>
                <span className="text-[11px] text-emerald-700">
                  FCR giảm từ 1.50 xuống 1.15 kg cám/kg tôm
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-white">
                <span className="text-xs text-slate-300 block">
                  Lợi nhuận ròng ước tính (CNC)
                </span>
                <span className="font-mono-tabular font-bold text-lg text-emerald-400 mt-1 block">
                  ~{simulation.estimatedHighTechProfitBillionVND} tỷ VNĐ/năm
                </span>
                <span className="text-[11px] text-slate-400">
                  Biên lợi nhuận ròng ~30% sau khấu hao
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Updated 2025-2026 VASEP & Bạc Liêu Export Chart */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700">
                  Thống kê VASEP &amp; Tỉnh Bạc Liêu (2022 – 2026)
                </span>
                <span className="text-xs font-mono-tabular text-slate-500">
                  Nguồn: vasep.com.vn · baclieu.gov.vn
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Biểu Đồ Tăng Trưởng Kim Ngạch Xuất Khẩu Tôm &amp; Diện Tích CNC
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Năm 2025, xuất khẩu tôm Việt Nam lập kỷ lục lịch sử{' '}
                <strong className="font-mono-tabular text-slate-900">
                  4,6 tỷ USD
                </strong>{' '}
                (+19%). 9 tháng đầu năm 2026 tiếp tục đạt{' '}
                <strong className="font-mono-tabular text-slate-900">
                  3,7 tỷ USD
                </strong>{' '}
                (+11% YoY). Nhấp vào từng năm để xem chi tiết:
              </p>
            </div>

            {/* Interactive SVG Bar Chart */}
            <div className="bg-slate-950 rounded-xl p-4 sm:p-5 border border-slate-800 text-white space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-xs bg-sky-500 inline-block" />
                    <span>XK Tôm Cả nước (Tỷ USD)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-xs bg-emerald-400 inline-block" />
                    <span>XK Tôm Bạc Liêu (Tỷ USD)</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 sm:gap-3 pt-4 items-end h-44 px-2 border-b border-slate-800">
                {VIETNAM_SHRIMP_STATS_2022_2026.map((item, index) => {
                  const isSelected = index === selectedYearIndex;
                  const natHeightPercent = Math.round(
                    (item.nationalExportBillionUSD / 5.2) * 100
                  );
                  const blHeightPercent = Math.round(
                    (item.bacLieuExportBillionUSD / 5.2) * 100
                  );

                  return (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => setSelectedYearIndex(index)}
                      aria-label={`Xem số liệu năm ${item.year}`}
                      className={`group flex flex-col items-center h-full justify-end rounded-lg p-1.5 transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-slate-800/90 ring-1 ring-sky-400'
                          : 'hover:bg-slate-900'
                      }`}
                    >
                      <div className="w-full flex items-end justify-center gap-1.5 h-32 pt-4">
                        {/* National Export Bar */}
                        <div className="flex flex-col items-center justify-end h-full">
                          <span className="text-[10px] font-mono-tabular font-bold text-white mb-1">
                            {item.nationalExportBillionUSD}
                          </span>
                          <div
                            className="w-5 sm:w-6 bg-sky-500 group-hover:bg-sky-400 rounded-t transition-all"
                            style={{ height: `${natHeightPercent}%` }}
                          />
                        </div>
                        {/* Bạc Liêu Export Bar */}
                        <div className="flex flex-col items-center justify-end h-full">
                          <span className="text-[10px] font-mono-tabular font-bold text-emerald-300 mb-1">
                            {item.bacLieuExportBillionUSD}
                          </span>
                          <div
                            className="w-5 sm:w-6 bg-emerald-400 group-hover:bg-emerald-300 rounded-t transition-all"
                            style={{ height: `${blHeightPercent}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-[11px] font-mono-tabular font-semibold text-slate-300 mt-2 truncate max-w-full">
                        {item.year.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Year Highlight Box */}
              <div className="bg-slate-900 rounded-lg p-3.5 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-sky-400">
                    Năm {activeYearRecord.year}
                  </span>
                  <span className="font-mono-tabular text-emerald-400 font-semibold">
                    Diện tích siêu thâm canh Bạc Liêu: ~
                    {activeYearRecord.bacLieuHighTechAreaHa.toLocaleString(
                      'vi-VN'
                    )}{' '}
                    ha
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeYearRecord.highlightNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
