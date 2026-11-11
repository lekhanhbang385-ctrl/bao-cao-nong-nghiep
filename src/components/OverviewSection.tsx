import React, { useState } from 'react';
import {
  MapPin,
  Layers,
  ShieldAlert,
  Microscope,
  CheckCircle2,
  Compass,
  Clock
} from 'lucide-react';
import { STUDENT_REPORT_PROFILE } from '../utils/shrimpModelLogic';

interface StageDetail {
  stageNumber: number;
  title: string;
  duration: string;
  density: string;
  shrimpWeight: string;
  keyTech: string;
  description: string;
}

const THREE_STAGES: StageDetail[] = [
  {
    stageNumber: 1,
    title: 'Giai đoạn 1: Ao ương vèo công nghệ cao trong nhà màng',
    duration: '25 – 30 ngày đầu',
    density: '1.500 – 2.500 con Postlarvae/m³',
    shrimpWeight: 'Đạt 800 – 1.000 con/kg',
    keyTech: 'Kiểm soát nhiệt độ 29–30°C, gây màu nước vi sinh Biofloc sớm',
    description:
      'Tôm giống sạch bệnh (SPF - Specific Pathogen Free) cỡ PL12 được đưa vào bể ương tròn diện tích nhỏ (100 - 200 m²) có mái che kín. Môi trường được kiểm soát nghiêm ngặt giúp tôm con vượt qua giai đoạn nhạy cảm nhất với hội chứng hoại tử gan tụy cấp (EMS).'
  },
  {
    stageNumber: 2,
    title: 'Giai đoạn 2: Ao nuôi tăng trưởng sinh khối',
    duration: '30 – 35 ngày tiếp theo',
    density: '350 – 500 con/m²',
    shrimpWeight: 'Đạt 70 – 90 con/kg',
    keyTech: 'Sang tôm bằng ống ngầm tự chảy + Hệ thống lọc tuần hoàn RAS',
    description:
      'Tôm từ ao ương được chuyển sang ao nuôi giai đoạn 2 diện tích 500 m² thông qua hệ thống ống dẫn chênh lệch mực nước, không gây sốc cơ học. Hệ thống sục khí đáy Oxy Nano kết hợp máy cho ăn tự động theo cảm biến âm thanh giúp tốc độ tăng trưởng tối ưu.'
  },
  {
    stageNumber: 3,
    title: 'Giai đoạn 3: Ao nuôi thương phẩm về đích Size lớn',
    duration: '25 – 30 ngày cuối',
    density: '200 – 300 con/m²',
    shrimpWeight: 'Về đích 20 – 30 con/kg (Chuẩn xuất khẩu)',
    keyTech: 'Siphon đáy tự động 24/7 + Khử trùng UV/Ozone + Cân bằng khoáng',
    description:
      'Tôm được san thưa sang ao tròn nổi khung thép lót bạt HDPE (500 - 1.000 m²). Nhờ mật độ hợp lý và nước tuần hoàn sạch 100%, tôm lột xác đồng loạt, vỏ sáng bóng, thịt săn chắc, đạt cỡ lớn 20 - 30 con/kg với giá bán thương phẩm cao gấp 1,4 - 1,6 lần tôm cỡ nhỏ.'
  }
];

export const OverviewSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(1);
  const currentStage =
    THREE_STAGES.find((s) => s.stageNumber === selectedStage) ||
    THREE_STAGES[0];

  return (
    <section
      id="tong-quan"
      className="py-16 lg:py-24 border-b border-slate-200/80 bg-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold text-sky-700 tracking-wide">
            01. Mở Đầu &amp; Khái Niệm Mô Hình · Bối Cảnh Thực Tiễn Bạc Liêu
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Định Danh Kỹ Thuật &amp; Hạt Nhân Công Nghệ Cao Tại ĐBSCL
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Tìm hiểu bản chất khoa học và vị trí chiến lược của mô hình nuôi tôm
            thẻ chân trắng siêu thâm canh đang làm thay đổi diện mạo kinh tế
            nông nghiệp vùng ven biển bán đảo Cà Mau.
          </p>
        </div>

        {/* Official Model Name & Focal Location 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Official Name Card */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-sky-700 font-semibold text-sm">
                <Layers className="w-5 h-5 shrink-0" />
                <span>Tên mô hình chính thức trong báo cáo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {STUDENT_REPORT_PROFILE.modelOfficialName}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Đối tượng nuôi chủ lực là{' '}
                <strong className="font-semibold text-slate-800">
                  Tôm thẻ chân trắng (Litopenaeus vannamei)
                </strong>{' '}
                dòng giống gia hóa sạch bệnh. Thay vì đào ao đất quảng canh phụ
                thuộc thủy triều, toàn bộ quy trình được công nghiệp hóa trên
                mặt đất bằng vật liệu полиme HDPE và công nghệ sinh học phân tử.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs text-slate-500">
                  Mật độ thả nuôi chuẩn
                </span>
                <span className="font-mono-tabular font-bold text-lg text-slate-900">
                  200 – 300 con/m²
                </span>
              </div>
              <div>
                <span className="block text-xs text-slate-500">
                  Tỷ lệ thay nước ngoài
                </span>
                <span className="font-mono-tabular font-bold text-lg text-emerald-700">
                  0% (Tuần hoàn kín)
                </span>
              </div>
            </div>
          </div>

          {/* Focal Location Card (Bạc Liêu 2025-2026 Context) */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-700 font-semibold text-sm">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Địa bàn triển khai trọng điểm (Cập nhật 2025 – 2026)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {STUDENT_REPORT_PROFILE.focalLocation}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Đây là hạt nhân trung tâm (quy mô{' '}
                <strong className="font-mono-tabular font-semibold text-slate-900">
                  418,9 ha
                </strong>
                ) thuộc đề án xây dựng Bạc Liêu trở thành{' '}
                <strong className="font-semibold text-slate-900">
                  &ldquo;Thủ phủ ngành tôm công nghiệp của cả nước&rdquo;
                </strong>
                . Tính đến năm 2025 – 2026, toàn tỉnh Bạc Liêu duy trì hơn{' '}
                <strong className="font-mono-tabular font-semibold text-slate-900">
                  140.000 ha
                </strong>{' '}
                nuôi trồng thủy sản, trong đó diện tích nuôi tôm siêu thâm canh
                công nghệ cao tại TP. Bạc Liêu, Hòa Bình và Đông Hải đã đạt{' '}
                <strong className="font-mono-tabular font-semibold text-sky-700">
                  4.000 – 6.000 ha
                </strong>{' '}
                (hướng tới quy hoạch vùng công nghệ cao{' '}
                <strong className="font-mono-tabular font-semibold text-slate-900">
                  27.200 ha
                </strong>
                ).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-3">
              <div>
                <span className="block text-xs text-slate-500">
                  Khu hạt nhân CNC
                </span>
                <span className="font-mono-tabular font-bold text-base sm:text-lg text-slate-900">
                  418,9 ha
                </span>
              </div>
              <div>
                <span className="block text-xs text-slate-500">
                  Vùng siêu thâm canh
                </span>
                <span className="font-mono-tabular font-bold text-base sm:text-lg text-sky-700">
                  ~6.000 ha
                </span>
              </div>
              <div>
                <span className="block text-xs text-slate-500">
                  Tỷ trọng XK tỉnh
                </span>
                <span className="font-mono-tabular font-bold text-base sm:text-lg text-emerald-700">
                  &gt;95% kim ngạch
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Definition & Core Operating Principle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Compass className="w-5 h-5 text-sky-600 shrink-0" />
              <h4>Khái Niệm &amp; Kết Cấu Kỹ Thuật</h4>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Là hình thức nuôi tôm với{' '}
              <strong className="font-semibold text-slate-900">
                mật độ siêu cao (200 – 300 con/m²)
              </strong>{' '}
              trong các ao nổi tròn khung sắt lót bạt nhựa{' '}
              <strong className="font-semibold text-slate-900">HDPE</strong> có
              mái che nhà màng. Thiết kế hình trụ tròn kết hợp quạt tạo dòng chảy
              ly tâm giúp gom toàn bộ thức ăn thừa, vỏ tôm lột và chất thải rắn
              về phễu rốn ao ở chính giữa chỉ trong vài phút.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Microscope className="w-5 h-5 text-emerald-600 shrink-0" />
              <h4>Nguyên Lý Vận Hành &amp; An Toàn Sinh Học</h4>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong className="font-semibold text-slate-900">
                Cách ly 100% với nguồn dịch bệnh tự nhiên
              </strong>{' '}
              từ môi trường bên ngoài; kiểm soát tuyệt đối chất lượng nước bằng
              hệ vi sinh vật dị dưỡng{' '}
              <strong className="font-semibold text-slate-900">Biofloc</strong>{' '}
              và cảm biến tự động{' '}
              <strong className="font-semibold text-slate-900">IoT</strong>. Tuyệt
              đối không sử dụng hóa chất độc hại hay kháng sinh cấm, đảm bảo truy
              xuất nguồn gốc điện tử từ trại giống đến bàn ăn.
            </p>
          </div>
        </div>

        {/* Interactive 3-Stage Process Explorer */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Quy Trình Chuyển Giai Đoạn 3 Bậc (San Thưa Giảm Áp Lực Sinh Học)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Nhấp vào từng giai đoạn bên dưới để khảo sát thông số kỹ thuật
                thực tế tại các nông trại công nghệ cao Bạc Liêu:
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Các giai đoạn nuôi tôm siêu thâm canh"
              className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl shrink-0"
            >
              {THREE_STAGES.map((stage) => (
                <button
                  key={stage.stageNumber}
                  type="button"
                  role="tab"
                  aria-selected={selectedStage === stage.stageNumber}
                  onClick={() => setSelectedStage(stage.stageNumber)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    selectedStage === stage.stageNumber
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  Giai đoạn {stage.stageNumber}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tabular font-semibold text-sky-700">
                <Clock className="w-4 h-4" />
                <span>Thời gian: {currentStage.duration}</span>
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                {currentStage.title}
              </h4>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentStage.description}
              </p>

              <div className="flex items-start gap-2.5 pt-2 text-xs sm:text-sm text-emerald-800 bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-3.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Công nghệ trọng tâm:</strong> {currentStage.keyTech}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-slate-200/90 p-4 space-y-1">
                <span className="text-xs text-slate-500">
                  Mật độ thả / vận hành
                </span>
                <p className="font-mono-tabular font-bold text-base sm:text-lg text-slate-900">
                  {currentStage.density}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/90 p-4 space-y-1">
                <span className="text-xs text-slate-500">
                  Kích cỡ tôm cuối kỳ
                </span>
                <p className="font-mono-tabular font-bold text-base sm:text-lg text-sky-700">
                  {currentStage.shrimpWeight}
                </p>
              </div>

              <div className="sm:col-span-2 bg-white rounded-xl border border-slate-200/90 p-4 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs text-slate-500">
                    Tổng chu kỳ quay vòng ao nuôi thương phẩm
                  </span>
                  <p className="text-sm font-semibold text-slate-800">
                    Nhờ ương vèo riêng, ao lớn nuôi được 3 – 4 vụ/năm
                  </p>
                </div>
                <ShieldAlert className="w-6 h-6 text-sky-600 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
