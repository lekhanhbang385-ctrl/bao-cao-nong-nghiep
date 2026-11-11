import React, { useState } from 'react';
import {
  RefreshCcw,
  FlaskConical,
  Home,
  Wifi,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  CloudRain,
  Sun,
  Waves,
  CloudSun
} from 'lucide-react';
import {
  simulatePondEnvironment,
  WeatherCondition
} from '../utils/shrimpModelLogic';

interface TechPillar {
  number: string;
  id: 'ras' | 'biofloc' | 'greenhouse' | 'iot';
  title: string;
  subtitle: string;
  description: string;
  keyMetrics: string;
}

const FOUR_PILLARS: TechPillar[] = [
  {
    number: '01.',
    id: 'ras',
    title: 'Hệ thống tuần hoàn nước khép kín (RAS - Recirculating Aquaculture System)',
    subtitle: 'Tái sử dụng tuần hoàn 100% · Khử trùng Ozone & Tia cực tím (UV)',
    description:
      'Nước nuôi được gom xả cặn đáy tự động (hút siphon), đưa qua hệ thống lọc cơ học (trống lọc vi lưới), lọc sinh học và khử trùng bằng ozone/tia cực tím (UV) trước khi tái sử dụng tuần hoàn 100%. Không xả thải mầm bệnh ra sông rạch tự nhiên.',
    keyMetrics: 'Tiết kiệm >90% tài nguyên nước · 0% xả thải trực tiếp'
  },
  {
    number: '02.',
    id: 'biofloc',
    title: 'Công nghệ vi sinh Biofloc tự làm sạch nước',
    subtitle: 'Chuyển hóa khí độc NH3, NO2 thành đạm sinh học tự nhiên',
    description:
      'Nuôi cấy các khối hạt vi sinh vật có lợi (flocs) trôi nổi trong nước theo tỷ lệ C:N chuẩn để chuyển hóa chất thải hữu cơ và khí độc (NH3, NO2) thành protein sinh học giàu đạm, làm thức ăn bổ sung tự nhiên 24/24 cho tôm.',
    keyMetrics: 'Hạ hệ số FCR xuống 1.1 – 1.2 · Khí độc NH3 ≤ 0.03 mg/L'
  },
  {
    number: '03.',
    id: 'greenhouse',
    title: 'Hạ tầng Ao tròn khung sắt lót bạt HDPE trong Nhà màng',
    subtitle: 'Cách ly hoàn toàn biến động thời tiết & trung gian truyền bệnh',
    description:
      'Thiết kế ao tròn nổi giúp dòng nước ly tâm gom chất thải vào rốn ao cực nhanh; mái che nhà màng ngăn nước mưa làm biến động độ mặn/pH, chống sốc nhiệt mùa nắng nóng và ngăn chặn hoàn toàn chim trời, côn trùng, cua còng mang mầm bệnh.',
    keyMetrics: 'Biên độ nhiệt ổn định 28–30°C · Độ bền bạt HDPE >10 năm'
  },
  {
    number: '04.',
    id: 'iot',
    title: 'Trạm cảm biến IoT & Giám sát thông minh 24/7',
    subtitle: 'Số hóa thông số môi trường & Cho ăn định lượng tự động',
    description:
      'Đầu đo cảm biến tự động theo dõi nồng độ Oxy hòa tan (DO), độ pH, độ kiềm, nhiệt độ và độ mặn theo thời gian thực. Tích hợp máy cho ăn tự động định lượng và điều khiển toàn bộ quạt nước, sục khí đáy từ xa qua ứng dụng di động của kỹ sư.',
    keyMetrics: 'Cảnh báo sớm <30 giây · Duy trì DO ≥ 5.8 mg/L'
  }
];

export const TechStackSection: React.FC = () => {
  const [stockingDensity, setStockingDensity] = useState<number>(250);
  const [weather, setWeather] = useState<WeatherCondition>('normal');
  const [rasActive, setRasActive] = useState<boolean>(true);
  const [bioflocActive, setBioflocActive] = useState<boolean>(true);
  const [greenhouseActive, setGreenhouseActive] = useState<boolean>(true);
  const [iotAutoAeration, setIotAutoAeration] = useState<boolean>(true);

  const telemetry = simulatePondEnvironment({
    stockingDensityPerM2: stockingDensity,
    weather,
    rasActive,
    bioflocActive,
    greenhouseActive,
    iotAutoAeration
  });

  const handleResetNominal = () => {
    setStockingDensity(250);
    setWeather('normal');
    setRasActive(true);
    setBioflocActive(true);
    setGreenhouseActive(true);
    setIotAutoAeration(true);
  };

  const renderPillarIcon = (id: TechPillar['id']) => {
    switch (id) {
      case 'ras':
        return <RefreshCcw className="w-5 h-5 text-sky-600 shrink-0" />;
      case 'biofloc':
        return <FlaskConical className="w-5 h-5 text-emerald-600 shrink-0" />;
      case 'greenhouse':
        return <Home className="w-5 h-5 text-cyan-600 shrink-0" />;
      case 'iot':
        return <Wifi className="w-5 h-5 text-sky-600 shrink-0" />;
    }
  };

  return (
    <section
      id="cong-nghe"
      className="py-16 lg:py-24 border-b border-slate-200/80 bg-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs sm:text-sm font-semibold text-sky-700 tracking-wide">
            03. Bốn Trụ Cột Công Nghệ Lõi · The Tech Stack Pipeline
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Tổ Hợp Công Nghệ Vi Sinh, Tuần Hoàn Nước &amp; Chuyển Đổi Số IoT
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Sự kết hợp đồng bộ của 4 trụ cột công nghệ giúp mô hình nuôi tôm tại
            Bạc Liêu kiểm soát tuyệt đối rủi ro sinh học và đạt năng suất cao
            gấp 15 – 20 lần truyền thống.
          </p>
        </div>

        {/* 4 Core Tech Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOUR_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-5 hover:border-sky-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tabular text-xs font-bold text-slate-500">
                    {pillar.number} TRỤ CỘT CÔNG NGHỆ
                  </span>
                  {renderPillarIcon(pillar.id)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs font-semibold text-sky-700">
                  {pillar.subtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono-tabular font-semibold text-emerald-800">
                <span>Chỉ số chuẩn: {pillar.keyMetrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Two-Zone Educational Sandbox Simulator (Following 6_education_simulations.md) */}
        <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md overflow-hidden">
          {/* Top Simulator Header */}
          <div className="p-6 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-950/70">
            <div>
              <div className="text-xs font-semibold text-cyan-400 mb-1">
                Phòng Thí Nghiệm Mô Phỏng Tương Tác · Trạm Điều Khiển Ao Nuôi
                Bạc Liêu
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Mô Phỏng Vận Hành Trạm Cảm Biến IoT &amp; Phản Ứng Sinh Học Ao
                Nuôi
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Explicit Text + Icon State Signal (No hue-only state signaling) */}
              <div
                className={`px-3.5 py-2 rounded-lg text-xs font-mono-tabular font-bold flex items-center gap-2 border ${
                  telemetry.systemStatus === 'NOMINAL'
                    ? 'bg-emerald-950/90 border-emerald-500/60 text-emerald-300'
                    : telemetry.systemStatus === 'WARNING'
                      ? 'bg-amber-950/90 border-amber-500/60 text-amber-300'
                      : 'bg-rose-950/90 border-rose-500/60 text-rose-300'
                }`}
              >
                {telemetry.systemStatus === 'NOMINAL' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                )}
                <span>{telemetry.statusLabelVi}</span>
              </div>

              <button
                type="button"
                onClick={handleResetNominal}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Khôi phục chuẩn CNC</span>
              </button>
            </div>
          </div>

          {/* Two-Zone Sandbox Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Zone (Interactive Stage & Telemetry Readouts - 7 cols) */}
            <div className="lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between space-y-6">
              {/* Live Telemetry 6-Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 block">
                    Oxy hòa tan (DO)
                  </span>
                  <span
                    className={`font-mono-tabular text-xl font-bold mt-0.5 block ${
                      telemetry.dissolvedOxygenMgL >= 5.5
                        ? 'text-emerald-400'
                        : 'text-amber-400'
                    }`}
                  >
                    {telemetry.dissolvedOxygenMgL} mg/L
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Chuẩn: 5.5 – 6.8 mg/L
                  </span>
                </div>

                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 block">
                    Độ pH &amp; Độ kiềm
                  </span>
                  <span className="font-mono-tabular text-xl font-bold text-sky-400 mt-0.5 block">
                    {telemetry.phLevel} · {telemetry.alkalinityMgL}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    pH 7.8 · Kiềm 140 mg/L
                  </span>
                </div>

                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 block">
                    Khí độc NH3 / NO2
                  </span>
                  <span
                    className={`font-mono-tabular text-xl font-bold mt-0.5 block ${
                      telemetry.nh3No2MgL <= 0.06
                        ? 'text-emerald-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {telemetry.nh3No2MgL} mg/L
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Ngưỡng an toàn: ≤ 0.05
                  </span>
                </div>

                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 block">
                    Nhiệt độ &amp; Độ mặn
                  </span>
                  <span className="font-mono-tabular text-xl font-bold text-cyan-300 mt-0.5 block">
                    {telemetry.temperatureC}°C · {telemetry.salinityPpt}‰
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Ổn định nhờ nhà màng
                  </span>
                </div>

                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 block">
                    Dự báo Tỷ lệ sống
                  </span>
                  <span
                    className={`font-mono-tabular text-xl font-bold mt-0.5 block ${
                      telemetry.projectedSurvivalPercent >= 85
                        ? 'text-emerald-400'
                        : 'text-amber-400'
                    }`}
                  >
                    {telemetry.projectedSurvivalPercent}%
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Cách ly bệnh: {telemetry.diseaseIsolationPercent}%
                  </span>
                </div>

                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 block">
                    Hệ số thức ăn (FCR)
                  </span>
                  <span className="font-mono-tabular text-xl font-bold text-white mt-0.5 block">
                    {telemetry.projectedFCR}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Nhờ hạt vi sinh Biofloc
                  </span>
                </div>
              </div>

              {/* Dynamic SVG Schematic reflecting active/inactive pillars */}
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-4">
                <svg
                  viewBox="0 0 540 210"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Sơ đồ mô phỏng trạng thái hoạt động của 4 trụ cột công nghệ"
                >
                  {/* Greenhouse Roof Indicator */}
                  <path
                    d="M 30 155 Q 270 10 510 155"
                    fill="none"
                    stroke={greenhouseActive ? '#38bdf8' : '#475569'}
                    strokeWidth="3"
                    strokeDasharray={greenhouseActive ? 'none' : '6 6'}
                  />
                  <text
                    x="270"
                    y="32"
                    textAnchor="middle"
                    fill={greenhouseActive ? '#7dd3fc' : '#94a3b8'}
                    fontSize="11"
                    fontWeight="700"
                  >
                    {greenhouseActive
                      ? '● NHÀ MÀNG ĐANG BẬT: CHẮN MƯA NẮNG & CÁCH LY DỊCH BỆNH'
                      : '▲ NHÀ MÀNG ĐÃ TẮT: AO PHƠI TRỰC TIẾP DƯỚI THỜI TIẾT CỰC ĐOAN'}
                  </text>

                  {/* Circular HDPE Pond */}
                  <rect
                    x="95"
                    y="85"
                    width="350"
                    height="85"
                    rx="10"
                    fill={
                      telemetry.systemStatus === 'NOMINAL'
                        ? '#0369a1'
                        : telemetry.systemStatus === 'WARNING'
                          ? '#78350f'
                          : '#7f1d1d'
                    }
                    fillOpacity="0.65"
                    stroke="#22d3ee"
                    strokeWidth="2"
                  />

                  {/* Biofloc Particles */}
                  {bioflocActive && (
                    <g fill="#fde047" opacity="0.9">
                      <circle cx="150" cy="115" r="3.5" />
                      <circle cx="210" cy="135" r="3" />
                      <circle cx="270" cy="110" r="4" />
                      <circle cx="330" cy="140" r="3.5" />
                      <circle cx="390" cy="120" r="3" />
                    </g>
                  )}

                  <text
                    x="270"
                    y="128"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12"
                    fontWeight="700"
                  >
                    MẬT ĐỘ THẢ: {stockingDensity} CON/M² ·{' '}
                    {bioflocActive
                      ? 'VI SINH BIOFLOC HOẠT ĐỘNG'
                      : 'THIẾU VI SINH BIOFLOC'}
                  </text>

                  {/* RAS Siphon & Loop */}
                  <text
                    x="270"
                    y="195"
                    textAnchor="middle"
                    fill={rasActive ? '#34d399' : '#f87171'}
                    fontSize="11"
                    fontWeight="700"
                  >
                    {rasActive
                      ? '↻ HỆ THỐNG TUẦN HOÀN RAS & KHỬ TRÙNG UV/OZONE: TUẦN HOÀN 100%'
                      : '✕ HỆ THỐNG RAS TẮT: TÍCH TỤ BÙN ĐÁY & KHÍ ĐỘC NH3/NO2'}
                  </text>
                </svg>
              </div>

              {/* Diagnostic Explanation Footer */}
              <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Chẩn đoán hệ thống: </strong>
                {telemetry.diagnosticNoteVi}
              </div>
            </div>

            {/* Right Zone (Control Deck - 5 cols) */}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between space-y-6 bg-slate-950/40">
              <div className="space-y-5">
                {/* Density Slider */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                    <label
                      htmlFor="sim-density-slider"
                      className="text-slate-200"
                    >
                      1. Điều chỉnh mật độ thả nuôi (con/m²):
                    </label>
                    <span className="font-mono-tabular text-sky-400 font-bold">
                      {stockingDensity} con/m²
                    </span>
                  </div>
                  <input
                    id="sim-density-slider"
                    type="range"
                    min={200}
                    max={300}
                    step={10}
                    value={stockingDensity}
                    onChange={(e) =>
                      setStockingDensity(parseInt(e.target.value, 10))
                    }
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono-tabular text-slate-400 mt-0.5">
                    <span>200 con/m²</span>
                    <span>250 con/m² (Chuẩn)</span>
                    <span>300 con/m² (Siêu cao)</span>
                  </div>
                </div>

                {/* Weather Condition Selector */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                    2. Giả lập biến đổi thời tiết bên ngoài (ĐBSCL):
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {
                        id: 'normal' as WeatherCondition,
                        label: 'Thời tiết ổn định',
                        icon: <CloudSun className="w-3.5 h-3.5" />
                      },
                      {
                        id: 'heavy_rain' as WeatherCondition,
                        label: 'Mưa bão kéo dài',
                        icon: <CloudRain className="w-3.5 h-3.5" />
                      },
                      {
                        id: 'heatwave' as WeatherCondition,
                        label: 'Nắng nóng 39°C',
                        icon: <Sun className="w-3.5 h-3.5" />
                      },
                      {
                        id: 'salinity_intrusion' as WeatherCondition,
                        label: 'Hạn mặn xâm nhập',
                        icon: <Waves className="w-3.5 h-3.5" />
                      }
                    ].map((w) => (
                      <button
                        key={w.id}
                        type="button"
                        onClick={() => setWeather(w.id)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium border flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
                          weather === w.id
                            ? 'bg-sky-600 border-sky-500 text-white font-semibold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {w.icon}
                        <span>{w.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4 Pillar Toggles */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                    3. Bật / Tắt từng trụ cột công nghệ để kiểm chứng vai trò:
                  </span>

                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setRasActive((v) => !v)}
                      aria-pressed={rasActive}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                        rasActive
                          ? 'bg-slate-900 border-emerald-500/50 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-semibold">
                        Trụ cột 1: Tuần hoàn nước RAS &amp; UV/Ozone
                      </span>
                      <span
                        className={`text-xs font-mono-tabular font-bold ${
                          rasActive ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {rasActive ? 'ĐANG BẬT' : 'ĐÃ TẮT'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBioflocActive((v) => !v)}
                      aria-pressed={bioflocActive}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                        bioflocActive
                          ? 'bg-slate-900 border-emerald-500/50 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-semibold">
                        Trụ cột 2: Hệ vi sinh Biofloc tự làm sạch
                      </span>
                      <span
                        className={`text-xs font-mono-tabular font-bold ${
                          bioflocActive ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {bioflocActive ? 'ĐANG BẬT' : 'ĐÃ TẮT'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setGreenhouseActive((v) => !v)}
                      aria-pressed={greenhouseActive}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                        greenhouseActive
                          ? 'bg-slate-900 border-emerald-500/50 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-semibold">
                        Trụ cột 3: Ao tròn HDPE &amp; Mái che Nhà màng
                      </span>
                      <span
                        className={`text-xs font-mono-tabular font-bold ${
                          greenhouseActive
                            ? 'text-emerald-400'
                            : 'text-rose-400'
                        }`}
                      >
                        {greenhouseActive ? 'ĐANG BẬT' : 'ĐÃ TẮT'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIotAutoAeration((v) => !v)}
                      aria-pressed={iotAutoAeration}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                        iotAutoAeration
                          ? 'bg-slate-900 border-emerald-500/50 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-semibold">
                        Trụ cột 4: Trạm cảm biến IoT &amp; Quạt Oxy 24/7
                      </span>
                      <span
                        className={`text-xs font-mono-tabular font-bold ${
                          iotAutoAeration ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {iotAutoAeration ? 'ĐANG BẬT' : 'ĐÃ TẮT'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
