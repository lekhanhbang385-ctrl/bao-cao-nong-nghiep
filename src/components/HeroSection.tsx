import React, { useState } from 'react';
import {
  ArrowDown,
  BarChart3,
  UserCheck,
  GraduationCap,
  School,
  BookOpen,
  Calendar,
  MapPin,
  ShieldCheck,
  Cpu,
  Droplets
} from 'lucide-react';
import { STUDENT_REPORT_PROFILE } from '../utils/shrimpModelLogic';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [diagramLayer, setDiagramLayer] = useState<
    'architecture' | 'ras_flow' | 'regional_map'
  >('architecture');

  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Kicker Metadata (Unboxed clean typography per Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold tracking-wide text-sky-700 mb-4">
          <span>Địa Lí 9 · Bài 7: Thực Hành</span>
          <span aria-hidden="true" className="text-slate-300">
            ·
          </span>
          <span>Mô hình Nông nghiệp Hiệu quả cao</span>
          <span aria-hidden="true" className="text-slate-300">
            ·
          </span>
          <span className="text-emerald-700">
            Vùng Đồng bằng sông Cửu Long (Cập nhật số liệu 2025 – 2026)
          </span>
        </div>

        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Title, Subtitle, Student Personal Profile Card, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h1
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                Báo Cáo Khảo Sát Mô Hình Nuôi Tôm Siêu Thâm Canh Công Nghệ Cao
                Tại Bạc Liêu
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Đột phá năng suất, thích ứng biến đổi khí hậu và chuyển đổi số
                trong kinh tế biển Đồng bằng sông Cửu Long thông qua tổ hợp công
                nghệ tuần hoàn nước khép kín{' '}
                <strong className="font-semibold text-slate-800">RAS</strong>,
                vi sinh{' '}
                <strong className="font-semibold text-slate-800">
                  Biofloc
                </strong>{' '}
                và trạm quan trắc{' '}
                <strong className="font-semibold text-slate-800">
                  IoT 24/7
                </strong>
                .
              </p>
            </div>

            {/* Personal Student Identification Card (Updated from Group to Individual Report) */}
            <div
              aria-label="Thông tin cá nhân học sinh thực hiện báo cáo"
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 sm:p-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-5 h-5 text-sky-600 shrink-0" />
                  <h2 className="text-sm font-bold text-slate-900">
                    Định Danh Báo Cáo Thực Hành Cá Nhân
                  </h2>
                </div>
                <span className="text-xs font-mono-tabular text-slate-500">
                  Chương trình GDPT 2018
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3.5 text-sm">
                <div>
                  <dt className="text-xs text-slate-500 flex items-center gap-1.5 mb-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                    <span>Học sinh thực hiện</span>
                  </dt>
                  <dd className="font-bold text-slate-900 text-base">
                    {STUDENT_REPORT_PROFILE.fullName}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-500 flex items-center gap-1.5 mb-0.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>Lớp</span>
                  </dt>
                  <dd className="font-bold text-sky-700 font-mono-tabular text-base">
                    {STUDENT_REPORT_PROFILE.className}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-500 flex items-center gap-1.5 mb-0.5">
                    <School className="w-3.5 h-3.5 text-slate-400" />
                    <span>Trường THCS</span>
                  </dt>
                  <dd className="font-bold text-slate-900">
                    {STUDENT_REPORT_PROFILE.schoolName}
                  </dd>
                </div>

                <div className="sm:col-span-2">
                  <dt className="text-xs text-slate-500 flex items-center gap-1.5 mb-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Môn học & Chuyên đề</span>
                  </dt>
                  <dd className="font-semibold text-slate-800">
                    {STUDENT_REPORT_PROFILE.subject}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-500 flex items-center gap-1.5 mb-0.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Năm học</span>
                  </dt>
                  <dd className="font-semibold text-slate-800 font-mono-tabular">
                    {STUDENT_REPORT_PROFILE.academicYear}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Smooth-Scroll CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('tong-quan')}
                className="px-5 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Khám phá báo cáo</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('so-lieu')}
                className="px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200/90 rounded-xl shadow-2xs transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <BarChart3 className="w-4 h-4 text-sky-600" />
                <span>Xem số liệu đối soát</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Architectural & Geo-Spatial Visual Carrier */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md overflow-hidden flex flex-col justify-between h-full">
              {/* Interactive Layer Selector Bar */}
              <div className="p-3.5 sm:p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 bg-slate-950/60">
                <span className="text-xs font-semibold text-slate-300 whitespace-nowrap">
                  Sơ đồ Khu CNC Bạc Liêu:
                </span>
                <div
                  role="tablist"
                  aria-label="Chế độ xem sơ đồ mô hình"
                  className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 shrink-0"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={diagramLayer === 'architecture'}
                    onClick={() => setDiagramLayer('architecture')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      diagramLayer === 'architecture'
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Nhà màng HDPE
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={diagramLayer === 'ras_flow'}
                    onClick={() => setDiagramLayer('ras_flow')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      diagramLayer === 'ras_flow'
                        ? 'bg-cyan-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Chu trình RAS
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={diagramLayer === 'regional_map'}
                    onClick={() => setDiagramLayer('regional_map')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      diagramLayer === 'regional_map'
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Vị thế Bạc Liêu
                  </button>
                </div>
              </div>

              {/* Dynamic High-Contrast Technical SVG Canvas */}
              <div className="p-5 flex-1 flex flex-col justify-center bg-gradient-to-b from-slate-900 to-slate-950">
                {diagramLayer === 'architecture' && (
                  <div className="space-y-4">
                    <svg
                      viewBox="0 0 500 290"
                      className="w-full h-auto rounded-xl bg-slate-950/90 border border-slate-800/80"
                      role="img"
                      aria-label="Sơ đồ kiến trúc nhà màng nuôi tôm siêu thâm canh ao tròn lót bạt HDPE tại Bạc Liêu"
                    >
                      <defs>
                        <linearGradient
                          id="skyDome"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#0284c7"
                            stopOpacity="0.28"
                          />
                          <stop
                            offset="100%"
                            stopColor="#0f172a"
                            stopOpacity="0.05"
                          />
                        </linearGradient>
                        <linearGradient
                          id="bioflocWater"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#0284c7" />
                        </linearGradient>
                      </defs>

                      {/* Background Grid */}
                      <g stroke="#1e293b" strokeWidth="1">
                        <line x1="0" y1="60" x2="500" y2="60" />
                        <line x1="0" y1="120" x2="500" y2="120" />
                        <line x1="0" y1="180" x2="500" y2="180" />
                        <line x1="0" y1="240" x2="500" y2="240" />
                        <line x1="100" y1="0" x2="100" y2="290" />
                        <line x1="250" y1="0" x2="250" y2="290" />
                        <line x1="400" y1="0" x2="400" y2="290" />
                      </g>

                      {/* Greenhouse Membrane Dome Arch */}
                      <path
                        d="M 35 225 Q 250 15 465 225"
                        fill="url(#skyDome)"
                        stroke="#38bdf8"
                        strokeWidth="2.5"
                        strokeDasharray="6 3"
                      />
                      <text
                        x="250"
                        y="44"
                        textAnchor="middle"
                        fill="#7dd3fc"
                        fontSize="11"
                        fontWeight="600"
                      >
                        MÁI CHE NHÀ MÀNG CÁCH LY DỊCH BỆNH &amp; ỔN ĐỊNH NHIỆT
                        ĐỘ 100%
                      </text>

                      {/* Steel Frame Pillars */}
                      <line
                        x1="55"
                        y1="205"
                        x2="55"
                        y2="255"
                        stroke="#94a3b8"
                        strokeWidth="3"
                      />
                      <line
                        x1="445"
                        y1="205"
                        x2="445"
                        y2="255"
                        stroke="#94a3b8"
                        strokeWidth="3"
                      />

                      {/* Circular HDPE Above-Ground Tank Cross-section */}
                      <rect
                        x="85"
                        y="135"
                        width="330"
                        height="95"
                        rx="8"
                        fill="url(#bioflocWater)"
                        fillOpacity="0.85"
                        stroke="#22d3ee"
                        strokeWidth="2.5"
                      />

                      {/* Siphon Central Funnel */}
                      <polygon
                        points="220,230 280,230 260,258 240,258"
                        fill="#0f172a"
                        stroke="#38bdf8"
                        strokeWidth="2"
                      />
                      <line
                        x1="250"
                        y1="258"
                        x2="250"
                        y2="275"
                        stroke="#10b981"
                        strokeWidth="3"
                      />
                      <line
                        x1="250"
                        y1="275"
                        x2="430"
                        y2="275"
                        stroke="#10b981"
                        strokeWidth="3"
                      />

                      {/* Biofloc Particles & Shrimp silhouettes */}
                      <circle
                        cx="145"
                        cy="170"
                        r="3.5"
                        fill="#fde047"
                        opacity="0.9"
                      />
                      <circle
                        cx="185"
                        cy="195"
                        r="3"
                        fill="#fde047"
                        opacity="0.8"
                      />
                      <circle
                        cx="240"
                        cy="165"
                        r="4"
                        fill="#fde047"
                        opacity="0.9"
                      />
                      <circle
                        cx="310"
                        cy="185"
                        r="3.5"
                        fill="#fde047"
                        opacity="0.85"
                      />
                      <circle
                        cx="355"
                        cy="165"
                        r="3"
                        fill="#fde047"
                        opacity="0.9"
                      />
                      <circle
                        cx="280"
                        cy="205"
                        r="3.5"
                        fill="#a7f3d0"
                        opacity="0.9"
                      />
                      <circle
                        cx="205"
                        cy="175"
                        r="3.5"
                        fill="#a7f3d0"
                        opacity="0.9"
                      />

                      {/* IoT Sensor Probe Mast */}
                      <line
                        x1="125"
                        y1="95"
                        x2="125"
                        y2="205"
                        stroke="#f8fafc"
                        strokeWidth="2.5"
                      />
                      <rect
                        x="102"
                        y="75"
                        width="46"
                        height="22"
                        rx="4"
                        fill="#0f172a"
                        stroke="#38bdf8"
                        strokeWidth="1.5"
                      />
                      <text
                        x="125"
                        y="90"
                        textAnchor="middle"
                        fill="#38bdf8"
                        fontSize="9"
                        fontWeight="700"
                      >
                        IoT 24/7
                      </text>

                      {/* Auto Feeder Unit */}
                      <rect
                        x="345"
                        y="80"
                        width="54"
                        height="26"
                        rx="4"
                        fill="#0f172a"
                        stroke="#10b981"
                        strokeWidth="1.5"
                      />
                      <text
                        x="372"
                        y="96"
                        textAnchor="middle"
                        fill="#34d399"
                        fontSize="9"
                        fontWeight="700"
                      >
                        AUTO FEED
                      </text>
                      <line
                        x1="372"
                        y1="106"
                        x2="360"
                        y2="132"
                        stroke="#34d399"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />

                      {/* Labels inside tank */}
                      <text
                        x="250"
                        y="156"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="12"
                        fontWeight="700"
                      >
                        AO NỔI TRÒN LÓT BẠT HDPE (200 – 300 CON/M²)
                      </text>
                      <text
                        x="250"
                        y="220"
                        textAnchor="middle"
                        fill="#e0f2fe"
                        fontSize="10"
                        fontWeight="500"
                      >
                        Đáy ao dốc tâm + Hút Siphon tự động gom chất thải 100%
                      </text>
                      <text
                        x="340"
                        y="269"
                        textAnchor="middle"
                        fill="#34d399"
                        fontSize="10"
                        fontWeight="600"
                      >
                        ➔ Trạm lọc RAS + UV/Ozone tuần hoàn
                      </text>
                    </svg>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Cấu trúc ao nổi khung thép lót bạt HDPE đặt trong nhà màng
                      giúp chủ động hoàn toàn trước nắng nóng, mưa dầm làm giảm
                      độ mặn và ngăn chim trời, giáp xác mang mầm bệnh xâm nhập.
                    </p>
                  </div>
                )}

                {diagramLayer === 'ras_flow' && (
                  <div className="space-y-4">
                    <svg
                      viewBox="0 0 500 290"
                      className="w-full h-auto rounded-xl bg-slate-950/90 border border-slate-800/80"
                      role="img"
                      aria-label="Sơ đồ chu trình tuần hoàn nước khép kín RAS và vi sinh Biofloc"
                    >
                      {/* 4 Node Closed Loop Diagram */}
                      <rect
                        x="30"
                        y="35"
                        width="190"
                        height="85"
                        rx="10"
                        fill="#0f172a"
                        stroke="#0284c7"
                        strokeWidth="2"
                      />
                      <text
                        x="125"
                        y="62"
                        textAnchor="middle"
                        fill="#38bdf8"
                        fontSize="12"
                        fontWeight="700"
                      >
                        1. AO NUÔI SIÊU THÂM CANH
                      </text>
                      <text
                        x="125"
                        y="82"
                        textAnchor="middle"
                        fill="#cbd5e1"
                        fontSize="10"
                      >
                        Hạt Biofloc xử lý NH3/NO2 tại chỗ
                      </text>
                      <text
                        x="125"
                        y="100"
                        textAnchor="middle"
                        fill="#34d399"
                        fontSize="10"
                        fontWeight="600"
                      >
                        DO ≥ 6.0 mg/L · pH 7.8
                      </text>

                      <rect
                        x="280"
                        y="35"
                        width="190"
                        height="85"
                        rx="10"
                        fill="#0f172a"
                        stroke="#06b6d4"
                        strokeWidth="2"
                      />
                      <text
                        x="375"
                        y="62"
                        textAnchor="middle"
                        fill="#22d3ee"
                        fontSize="12"
                        fontWeight="700"
                      >
                        2. HÚT SIPHON &amp; LỌC CƠ HỌC
                      </text>
                      <text
                        x="375"
                        y="82"
                        textAnchor="middle"
                        fill="#cbd5e1"
                        fontSize="10"
                      >
                        Tách bùn hữu cơ &amp; vỏ tôm lột xác
                      </text>
                      <text
                        x="375"
                        y="100"
                        textAnchor="middle"
                        fill="#38bdf8"
                        fontSize="10"
                        fontWeight="600"
                      >
                        Trống lọc Drum Filter 60 micron
                      </text>

                      <rect
                        x="280"
                        y="165"
                        width="190"
                        height="85"
                        rx="10"
                        fill="#0f172a"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                      <text
                        x="375"
                        y="192"
                        textAnchor="middle"
                        fill="#34d399"
                        fontSize="12"
                        fontWeight="700"
                      >
                        3. LỌC SINH HỌC &amp; OZONE/UV
                      </text>
                      <text
                        x="375"
                        y="212"
                        textAnchor="middle"
                        fill="#cbd5e1"
                        fontSize="10"
                      >
                        Diệt khuẩn Vibrio, virus đốm trắng
                      </text>
                      <text
                        x="375"
                        y="230"
                        textAnchor="middle"
                        fill="#34d399"
                        fontSize="10"
                        fontWeight="600"
                      >
                        Khử trùng tuyệt đối · 0% kháng sinh
                      </text>

                      <rect
                        x="30"
                        y="165"
                        width="190"
                        height="85"
                        rx="10"
                        fill="#0f172a"
                        stroke="#38bdf8"
                        strokeWidth="2"
                      />
                      <text
                        x="125"
                        y="192"
                        textAnchor="middle"
                        fill="#7dd3fc"
                        fontSize="12"
                        fontWeight="700"
                      >
                        4. CẤP NƯỚC TUẦN HOÀN 100%
                      </text>
                      <text
                        x="125"
                        y="212"
                        textAnchor="middle"
                        fill="#cbd5e1"
                        fontSize="10"
                      >
                        Bổ sung khoáng &amp; sục Oxy Nano
                      </text>
                      <text
                        x="125"
                        y="230"
                        textAnchor="middle"
                        fill="#34d399"
                        fontSize="10"
                        fontWeight="600"
                      >
                        Không xả thải ra sông rạch tự nhiên
                      </text>

                      {/* Directional Flow Arrows */}
                      <path
                        d="M 225 77 L 275 77"
                        stroke="#38bdf8"
                        strokeWidth="3"
                      />
                      <polygon points="275,77 265,71 265,83" fill="#38bdf8" />

                      <path
                        d="M 375 125 L 375 160"
                        stroke="#22d3ee"
                        strokeWidth="3"
                      />
                      <polygon
                        points="375,160 369,150 381,150"
                        fill="#22d3ee"
                      />

                      <path
                        d="M 275 207 L 225 207"
                        stroke="#10b981"
                        strokeWidth="3"
                      />
                      <polygon points="225,207 235,201 235,213" fill="#10b981" />

                      <path
                        d="M 125 160 L 125 125"
                        stroke="#34d399"
                        strokeWidth="3"
                      />
                      <polygon
                        points="125,125 119,135 131,135"
                        fill="#34d399"
                      />
                    </svg>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Chu trình tuần hoàn nước khép kín (RAS) tái sử dụng tới
                      100% lượng nước qua hệ thống lọc cơ học và tia UV/Ozone,
                      triệt tiêu nguy cơ lây nhiễm chéo từ nguồn nước kênh rạch
                      ĐBSCL.
                    </p>
                  </div>
                )}

                {diagramLayer === 'regional_map' && (
                  <div className="space-y-4">
                    <svg
                      viewBox="0 0 500 290"
                      className="w-full h-auto rounded-xl bg-slate-950/90 border border-slate-800/80"
                      role="img"
                      aria-label="Sơ đồ vị trí hạt nhân Khu nông nghiệp công nghệ cao phát triển tôm Bạc Liêu tại bán đảo Cà Mau - ĐBSCL"
                    >
                      {/* Stylized Mekong Delta Coastline & Bạc Liêu Hub */}
                      <path
                        d="M 60 40 L 340 40 L 420 120 L 360 220 L 190 265 L 95 230 L 60 140 Z"
                        fill="#0f172a"
                        stroke="#334155"
                        strokeWidth="2"
                      />
                      <text
                        x="215"
                        y="85"
                        fill="#64748b"
                        fontSize="12"
                        fontWeight="700"
                      >
                        VÙNG ĐỒNG BẰNG SÔNG CỬU LONG
                      </text>

                      {/* Coastal belt highlight */}
                      <path
                        d="M 420 120 L 360 220 L 190 265"
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <text
                        x="400"
                        y="245"
                        textAnchor="middle"
                        fill="#38bdf8"
                        fontSize="11"
                        fontWeight="600"
                      >
                        BIỂN ĐÔNG (Vùng nước lợ ven biển)
                      </text>

                      {/* Bạc Liêu Core Focal Node */}
                      <circle
                        cx="295"
                        cy="205"
                        r="26"
                        fill="#10b981"
                        fillOpacity="0.2"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                      <circle cx="295" cy="205" r="8" fill="#10b981" />
                      <text
                        x="295"
                        y="168"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="13"
                        fontWeight="800"
                      >
                        TP. BẠC LIÊU (XÃ HIỆP THÀNH)
                      </text>

                      {/* Callout Box */}
                      <rect
                        x="25"
                        y="110"
                        width="215"
                        height="92"
                        rx="8"
                        fill="#1e293b"
                        stroke="#38bdf8"
                        strokeWidth="1.5"
                      />
                      <text
                        x="38"
                        y="132"
                        fill="#38bdf8"
                        fontSize="11"
                        fontWeight="700"
                      >
                        THỦ PHỦ TÔM CÔNG NGHIỆP (2026)
                      </text>
                      <text x="38" y="152" fill="#e2e8f0" fontSize="10">
                        • Khu CNC Hiệp Thành: 418,9 ha
                      </text>
                      <text x="38" y="170" fill="#e2e8f0" fontSize="10">
                        • Diện tích siêu thâm canh: ~6.000 ha
                      </text>
                      <text x="38" y="188" fill="#34d399" fontSize="10">
                        • Quy hoạch vùng CNC: 27.200 ha
                      </text>
                    </svg>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Tọa lạc tại xã Hiệp Thành (TP. Bạc Liêu), Khu nông nghiệp
                      ứng dụng công nghệ cao phát triển tôm Bạc Liêu đóng vai trò
                      hạt nhân lan tỏa công nghệ nuôi tôm siêu thâm canh ra toàn
                      bán đảo Cà Mau và ĐBSCL.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Key Metrics Strip inside Hero Visual Card */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 grid grid-cols-3 gap-3 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-sky-400 text-xs font-medium mb-0.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Mật độ thả</span>
                  </div>
                  <span className="font-mono-tabular font-bold text-sm sm:text-base text-white">
                    200–300 con/m²
                  </span>
                </div>
                <div className="flex flex-col items-center border-x border-slate-800 px-2">
                  <div className="flex items-center gap-1 text-cyan-400 text-xs font-medium mb-0.5">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Tuần hoàn RAS</span>
                  </div>
                  <span className="font-mono-tabular font-bold text-sm sm:text-base text-white">
                    100% Khép kín
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>An toàn sinh học</span>
                  </div>
                  <span className="font-mono-tabular font-bold text-sm sm:text-base text-white">
                    0% Kháng sinh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
