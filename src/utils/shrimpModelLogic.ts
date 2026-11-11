export interface StudentProfile {
  fullName: string;
  className: string;
  schoolName: string;
  subject: string;
  academicYear: string;
  reportTitle: string;
  modelOfficialName: string;
  focalLocation: string;
}

export const STUDENT_REPORT_PROFILE: StudentProfile = {
  fullName: 'Lê Khánh Băng',
  className: '9A3',
  schoolName: 'THCS Nhơn Ái',
  subject: 'Địa lí 9 · Bài 7 (Thực hành)',
  academicYear: '2025 - 2026',
  reportTitle:
    'Báo Cáo Khảo Sát Mô Hình Nuôi Tôm Siêu Thâm Canh Công Nghệ Cao Tại Bạc Liêu',
  modelOfficialName:
    'Mô hình nuôi tôm thẻ chân trắng siêu thâm canh 2-3 giai đoạn trong nhà màng, ứng dụng công nghệ vi sinh Biofloc kết hợp hệ thống tuần hoàn nước khép kín (RAS)',
  focalLocation:
    'Khu nông nghiệp ứng dụng công nghệ cao phát triển tôm Bạc Liêu (xã Hiệp Thành, TP. Bạc Liêu)'
};

export interface ComparisonCriterion {
  id: string;
  criterion: string;
  unit: string;
  traditionalLabel: string;
  highTechLabel: string;
  traditionalAvg: number;
  highTechAvg: number;
  multiplierText: string;
  scientificNote: string;
}

export const COMPARISON_CRITERIA: ComparisonCriterion[] = [
  {
    id: 'yield',
    criterion: 'Năng suất bình quân',
    unit: 'tấn/ha/vụ',
    traditionalLabel: '2 - 3 tấn/ha/vụ',
    highTechLabel: '40 - 50 tấn/ha/vụ',
    traditionalAvg: 2.5,
    highTechAvg: 45,
    multiplierText: 'Tăng gấp 15 - 20 lần',
    scientificNote:
      'Mật độ thả 200 - 300 con/m² trong ao nổi tròn lót bạt HDPE kết hợp cấp oxy đáy chuyên sâu.'
  },
  {
    id: 'survival',
    criterion: 'Tỷ lệ sống sót',
    unit: '%',
    traditionalLabel: '50% - 60% (rủi ro dịch bệnh cao)',
    highTechLabel: '85% - 90% (kiểm soát môi trường)',
    traditionalAvg: 55,
    highTechAvg: 88,
    multiplierText: '+33% tỷ lệ thu hoạch',
    scientificNote:
      'Cách ly 100% nguồn dịch bệnh tự nhiên (EMS, EHP, đốm trắng) nhờ nhà màng và khử trùng UV/Ozone.'
  },
  {
    id: 'crops',
    criterion: 'Số vụ nuôi trong năm',
    unit: 'vụ/năm',
    traditionalLabel: '1 - 2 vụ (phụ thuộc thời tiết)',
    highTechLabel: '3 - 4 vụ/năm (chủ động trong nhà màng)',
    traditionalAvg: 1.5,
    highTechAvg: 3.5,
    multiplierText: 'Canh tác quanh năm',
    scientificNote:
      'Quy trình chia 2 - 3 giai đoạn (ương vèo mật độ cao 25-30 ngày trước khi sang ao thương phẩm) rút ngắn chu kỳ.'
  },
  {
    id: 'fcr',
    criterion: 'Hệ số chuyển đổi thức ăn (FCR)',
    unit: 'kg thức ăn / kg tôm',
    traditionalLabel: '1.4 - 1.6',
    highTechLabel: '1.1 - 1.2 (nhờ hạt vi sinh Biofloc)',
    traditionalAvg: 1.5,
    highTechAvg: 1.15,
    multiplierText: 'Tiết kiệm ~23% chi phí thức ăn',
    scientificNote:
      'Hạt vi sinh vật dị dưỡng (flocs) chuyển hóa chất thải NH3/NO2 thành nguồn protein tự nhiên bổ sung 24/7.'
  }
];

export interface FarmSimulationInput {
  areaHa: number;
  highTechCropsPerYear: number;
  shrimpPriceMillionsPerTon: number;
}

export interface FarmSimulationOutput {
  areaHa: number;
  traditionalAnnualTons: number;
  highTechAnnualTons: number;
  yieldRatio: number;
  traditionalFeedTons: number;
  highTechFeedTons: number;
  feedSavedTonsPerTonShrimp: number;
  totalFeedSavedEquivalentTons: number;
  traditionalRevenueBillionVND: number;
  highTechRevenueBillionVND: number;
  estimatedHighTechProfitBillionVND: number;
  waterRecirculatedPercent: number;
}

export function calculateFarmComparison(
  input: FarmSimulationInput
): FarmSimulationOutput {
  const safeArea = Math.max(0.5, Math.min(100, input.areaHa));
  const safeCrops = Math.max(2, Math.min(4, input.highTechCropsPerYear));
  const safePrice = Math.max(120, Math.min(280, input.shrimpPriceMillionsPerTon));

  // Traditional: avg 2.5 tons/ha/crop * 1.5 crops/year = 3.75 tons/ha/year
  const traditionalYieldPerHaPerCrop = 2.5;
  const traditionalCrops = 1.5;
  const traditionalAnnualTons = Number(
    (safeArea * traditionalYieldPerHaPerCrop * traditionalCrops).toFixed(1)
  );

  // High-Tech: avg 45 tons/ha/crop * safeCrops (3-4 crops/year)
  const highTechYieldPerHaPerCrop = 45;
  const highTechAnnualTons = Number(
    (safeArea * highTechYieldPerHaPerCrop * safeCrops).toFixed(1)
  );

  const yieldRatio = Number(
    (highTechAnnualTons / Math.max(0.1, traditionalAnnualTons)).toFixed(1)
  );

  const traditionalFCR = 1.5;
  const highTechFCR = 1.15;

  const traditionalFeedTons = Number(
    (traditionalAnnualTons * traditionalFCR).toFixed(1)
  );
  const highTechFeedTons = Number((highTechAnnualTons * highTechFCR).toFixed(1));

  // If high-tech output were produced using traditional FCR (1.5), how much extra feed would it consume?
  const feedSavedTonsPerTonShrimp = Number(
    (traditionalFCR - highTechFCR).toFixed(2)
  );
  const totalFeedSavedEquivalentTons = Number(
    (highTechAnnualTons * feedSavedTonsPerTonShrimp).toFixed(1)
  );

  // Traditional smaller size shrimp fetches ~75% of export grade 20-30 pcs/kg price
  const traditionalRevenueBillionVND = Number(
    ((traditionalAnnualTons * (safePrice * 0.75)) / 1000).toFixed(2)
  );
  const highTechRevenueBillionVND = Number(
    ((highTechAnnualTons * safePrice) / 1000).toFixed(2)
  );

  // Typical net margin on super-intensive high-tech model ~28-32% after depreciation, power, seed & feed
  const estimatedHighTechProfitBillionVND = Number(
    (highTechRevenueBillionVND * 0.3).toFixed(2)
  );

  return {
    areaHa: safeArea,
    traditionalAnnualTons,
    highTechAnnualTons,
    yieldRatio,
    traditionalFeedTons,
    highTechFeedTons,
    feedSavedTonsPerTonShrimp,
    totalFeedSavedEquivalentTons,
    traditionalRevenueBillionVND,
    highTechRevenueBillionVND,
    estimatedHighTechProfitBillionVND,
    waterRecirculatedPercent: 100
  };
}

export type WeatherCondition =
  | 'normal'
  | 'heavy_rain'
  | 'heatwave'
  | 'salinity_intrusion';

export interface PondSimulationInput {
  stockingDensityPerM2: number; // 200 to 300 con/m2
  weather: WeatherCondition;
  rasActive: boolean;
  bioflocActive: boolean;
  greenhouseActive: boolean;
  iotAutoAeration: boolean;
}

export interface PondTelemetryOutput {
  dissolvedOxygenMgL: number; // Nominal: 5.5 - 6.8 mg/L
  phLevel: number; // Nominal: 7.6 - 8.1
  alkalinityMgL: number; // Nominal: 130 - 160 mg/L
  temperatureC: number; // Nominal: 28.0 - 30.5 °C
  salinityPpt: number; // Nominal: 15 - 20 ‰
  nh3No2MgL: number; // Nominal: <= 0.05 mg/L
  diseaseIsolationPercent: number;
  projectedSurvivalPercent: number;
  projectedFCR: number;
  systemStatus: 'NOMINAL' | 'WARNING' | 'CRITICAL';
  statusLabelVi: string;
  diagnosticNoteVi: string;
}

export function simulatePondEnvironment(
  input: PondSimulationInput
): PondTelemetryOutput {
  const density = Math.max(150, Math.min(350, input.stockingDensityPerM2));
  const densityLoad = (density - 200) / 100; // 0.0 at 200, 1.0 at 300

  // Base nominal parameters
  let doLevel = 6.4 - densityLoad * 0.4;
  let ph = 7.85;
  let alkalinity = 148;
  let temp = 29.0;
  let salinity = 18.0;
  let nh3 = 0.02 + densityLoad * 0.02;
  let isolation = 100;
  let survival = 89 - densityLoad * 2;
  let fcr = 1.12 + densityLoad * 0.05;

  // Apply weather impact if Greenhouse is NOT active
  if (!input.greenhouseActive) {
    isolation -= 45;
    if (input.weather === 'heavy_rain') {
      salinity -= 6.5;
      ph -= 0.55;
      alkalinity -= 35;
      temp -= 2.2;
      survival -= 18;
    } else if (input.weather === 'heatwave') {
      temp += 3.8;
      doLevel -= 1.1;
      nh3 += 0.12;
      survival -= 15;
    } else if (input.weather === 'salinity_intrusion') {
      salinity += 9.0;
      alkalinity -= 18;
      survival -= 12;
    } else {
      survival -= 8;
    }
  } else {
    // Greenhouse buffers external weather fluctuations to tiny variations
    if (input.weather === 'heavy_rain') {
      temp -= 0.3;
    } else if (input.weather === 'heatwave') {
      temp += 0.5;
    }
  }

  // Apply RAS impact
  if (!input.rasActive) {
    nh3 += 0.28 + densityLoad * 0.15;
    doLevel -= 0.7;
    isolation -= 40;
    survival -= 22;
    fcr += 0.18;
  }

  // Apply Biofloc impact
  if (!input.bioflocActive) {
    nh3 += 0.22 + densityLoad * 0.12;
    fcr += 0.28; // Loses natural microbial protein source
    alkalinity -= 15;
    survival -= 10;
  }

  // Apply IoT Auto Aeration impact
  if (!input.iotAutoAeration) {
    doLevel -= 1.6 + densityLoad * 0.6;
    ph -= 0.25;
    survival -= 14;
  }

  const dissolvedOxygenMgL = Number(Math.max(2.2, doLevel).toFixed(1));
  const phLevel = Number(Math.max(6.5, Math.min(9.0, ph)).toFixed(2));
  const alkalinityMgL = Math.round(Math.max(70, alkalinity));
  const temperatureC = Number(temp.toFixed(1));
  const salinityPpt = Number(Math.max(5, salinity).toFixed(1));
  const nh3No2MgL = Number(Math.max(0.01, nh3).toFixed(2));
  const diseaseIsolationPercent = Math.max(15, Math.min(100, isolation));
  const projectedSurvivalPercent = Math.round(
    Math.max(35, Math.min(92, survival))
  );
  const projectedFCR = Number(Math.max(1.1, Math.min(1.75, fcr)).toFixed(2));

  let systemStatus: 'NOMINAL' | 'WARNING' | 'CRITICAL' = 'NOMINAL';
  let statusLabelVi = 'TỐI ƯU · AN TOÀN SINH HỌC 100%';
  let diagnosticNoteVi =
    'Hệ thống RAS + Biofloc + Nhà màng + IoT vận hành đồng bộ: Nước tuần hoàn 100%, khí độc NH3/NO2 được vi sinh chuyển hóa thành đạm sinh học.';

  if (
    dissolvedOxygenMgL < 4.5 ||
    nh3No2MgL > 0.25 ||
    diseaseIsolationPercent < 55
  ) {
    systemStatus = 'CRITICAL';
    statusLabelVi = 'CẢNH BÁO ĐỎ · RỦI RO SỐC MÔI TRƯỜNG & DỊCH BỆNH';
    diagnosticNoteVi =
      'Tắt các trụ cột công nghệ khiến khí độc NH3/NO2 tích tụ cao, Oxy hòa tan sụt giảm và mất khả năng cách ly mầm bệnh từ bên ngoài.';
  } else if (
    dissolvedOxygenMgL < 5.5 ||
    nh3No2MgL > 0.08 ||
    diseaseIsolationPercent < 90
  ) {
    systemStatus = 'WARNING';
    statusLabelVi = 'CẢNH BÁO VÀNG · BIẾN ĐỘNG THÔNG SỐ NƯỚC';
    diagnosticNoteVi =
      'Thiếu một phần lớp bảo vệ công nghệ làm tăng hệ số thức ăn (FCR) và giảm sức đề kháng của tôm trước biến động thời tiết.';
  }

  return {
    dissolvedOxygenMgL,
    phLevel,
    alkalinityMgL,
    temperatureC,
    salinityPpt,
    nh3No2MgL,
    diseaseIsolationPercent,
    projectedSurvivalPercent,
    projectedFCR,
    systemStatus,
    statusLabelVi,
    diagnosticNoteVi
  };
}

export interface AnnualExportRecord {
  year: string;
  nationalExportBillionUSD: number;
  bacLieuExportBillionUSD: number;
  bacLieuHighTechAreaHa: number;
  highlightNote: string;
}

export const VIETNAM_SHRIMP_STATS_2022_2026: AnnualExportRecord[] = [
  {
    year: '2022',
    nationalExportBillionUSD: 4.3,
    bacLieuExportBillionUSD: 0.85,
    bacLieuHighTechAreaHa: 3800,
    highlightNote: 'Khôi phục chuỗi cung ứng sau đại dịch, mở rộng vùng nuôi lót bạt.'
  },
  {
    year: '2023',
    nationalExportBillionUSD: 3.4,
    bacLieuExportBillionUSD: 1.0,
    bacLieuHighTechAreaHa: 4350,
    highlightNote: 'Bạc Liêu lần đầu cán mốc 1 tỷ USD xuất khẩu bất chấp lạm phát toàn cầu.'
  },
  {
    year: '2024',
    nationalExportBillionUSD: 3.88,
    bacLieuExportBillionUSD: 1.12,
    bacLieuHighTechAreaHa: 4850,
    highlightNote: 'Tăng tốc chuyển đổi số và nhân rộng mô hình RAS + Biofloc 2-3 giai đoạn.'
  },
  {
    year: '2025',
    nationalExportBillionUSD: 4.6,
    bacLieuExportBillionUSD: 1.25,
    bacLieuHighTechAreaHa: 5450,
    highlightNote: 'Cột mốc lịch sử: Xuất khẩu tôm Việt Nam đạt kỷ lục 4,6 tỷ USD (+19% YoY, theo VASEP).'
  },
  {
    year: '2026 (9T & Dự kiến)',
    nationalExportBillionUSD: 4.85,
    bacLieuExportBillionUSD: 1.35,
    bacLieuHighTechAreaHa: 6000,
    highlightNote: '9 tháng đầu năm 2026 đạt 3,7 tỷ USD (+11% so với cùng kỳ 2025); Bạc Liêu vận hành Khu CNC Hiệp Thành 418,9 ha hạt nhân.'
  }
];

export type QnACategory =
  | 'all'
  | 'tech_bio'
  | 'infra_ops'
  | 'econ_geo';

export interface QnAGlossaryItem {
  id: string;
  code: string;
  category: Exclude<QnACategory, 'all'>;
  categoryLabel: string;
  question: string;
  technicalTerm: string;
  technicalDefinition: string;
  quickSummary: string;
  easyExplanation: string[];
  practicalMeaning: string;
  keywords: string[];
}

export const GLOSSARY_QNA_ITEMS: QnAGlossaryItem[] = [
  {
    id: 'qna-01',
    code: 'Q&A 01',
    category: 'tech_bio',
    categoryLabel: 'Công nghệ & Sinh học',
    question:
      'Hệ thống tuần hoàn nước khép kín (RAS) & Khử trùng UV/Ozone là gì?',
    technicalTerm: 'RAS (Recirculating Aquaculture System) & UV/Ozone Sterilization',
    technicalDefinition:
      'Tổ hợp kỹ thuật thu gom nước thải đáy ao qua trống lọc cơ học vi lưới (Drum Filter), bể lọc sinh học chuyển hóa đạm và buồng khử trùng tia cực tím (UV) kết hợp sục khí Ozone để tái cấp 100% nước sạch về ao nuôi.',
    quickSummary:
      'Lọc nước dùng đi dùng lại 100%, không xả thải ra sông rạch.',
    easyExplanation: [
      'Thay vì nuôi ao đất truyền thống phải xả nước bẩn ra sông rồi bơm nước sông vào (rất dễ rước mầm bệnh từ tự nhiên vào ao), hệ thống RAS hoạt động như một "máy lọc thận nhân tạo" khổng lồ.',
      'Nước bẩn ở đáy ao được rút ra, đi qua trống lọc vi lưới để tách phân và rác, qua bể vi sinh để khử chất độc, rồi chiếu tia cực tím (UV) và sục khí Ozone để tiêu diệt 100% vi khuẩn, virus. Nước sau khi lọc sạch tinh khiết lại được bơm tuần hoàn ngược về ao nuôi.'
    ],
    practicalMeaning:
      'Tiết kiệm trên 90% tài nguyên nước, đạt mức "0% xả thải" ra môi trường, ngăn chặn hoàn toàn dịch bệnh lây lan từ bên ngoài.',
    keywords: ['RAS', 'tuần hoàn nước', 'UV', 'Ozone', 'khử trùng', 'xả thải', 'máy lọc thận']
  },
  {
    id: 'qna-02',
    code: 'Q&A 02',
    category: 'tech_bio',
    categoryLabel: 'Công nghệ & Sinh học',
    question:
      'Công nghệ vi sinh Biofloc biến chất thải thành thức ăn như thế nào?',
    technicalTerm: 'Biofloc Technology (BFT) · Cân bằng tỷ lệ Carbon : Nitơ (C:N)',
    technicalDefinition:
      'Quy trình bổ sung nguồn Carbon hữu cơ (mật rỉ đường) để kích thích hệ vi khuẩn dị dưỡng đồng hóa Amoniac (NH3) và Nitrit (NO2) hòa tan thành sinh khối protein vi sinh kết bông (hạt flocs).',
    quickSummary:
      'Nuôi vi khuẩn có lợi để ăn phân tôm, rồi tôm lại ăn chính vi khuẩn đó.',
    easyExplanation: [
      'Khi nuôi mật độ siêu dày (200 – 300 con/m²), phân tôm và thức ăn thừa sẽ sinh ra khí độc Amoniac (NH3) và Nitrit (NO2) làm tôm ngạt thở.',
      'Công nghệ Biofloc giải quyết bằng cách thả vi khuẩn dị dưỡng có lợi vào ao (kèm mật rỉ đường để cung cấp Carbon theo tỷ lệ C:N chuẩn). Vi khuẩn này sẽ "ăn" sạch chất thải và khí độc NH3/NO2, sau đó kết dính lại thành các hạt bông nhỏ li ti trôi nổi trong nước (gọi là hạt flocs) chứa rất nhiều đạm (protein). Tôm sẽ ăn chính các hạt bông vi sinh này suốt 24/24 như một nguồn thức ăn dặm tự nhiên.'
    ],
    practicalMeaning:
      'Một mũi tên trúng hai đích — vừa tự làm sạch nước không cần hóa chất, vừa biến chất thải độc hại thành đạm dinh dưỡng miễn phí cho tôm.',
    keywords: ['Biofloc', 'vi sinh', 'flocs', 'NH3', 'NO2', 'khí độc', 'mật rỉ đường', 'đạm']
  },
  {
    id: 'qna-03',
    code: 'Q&A 03',
    category: 'econ_geo',
    categoryLabel: 'Kinh tế & Địa lí 9',
    question:
      'Hệ số chuyển đổi thức ăn FCR (1.1 – 1.2) có ý nghĩa gì?',
    technicalTerm: 'FCR (Feed Conversion Ratio) · Định mức tiêu hao thức ăn',
    technicalDefinition:
      'Tỷ số toán học giữa tổng khối lượng thức ăn công nghiệp sử dụng (kg) chia cho tổng khối lượng tôm thương phẩm thu hoạch được (kg) sau một chu kỳ canh tác.',
    quickSummary:
      'Số ký cám tiêu tốn để tạo ra được 1 ký tôm thương phẩm.',
    easyExplanation: [
      'FCR (Feed Conversion Ratio) là thước đo hiệu quả kinh tế cốt lõi trong chăn nuôi. Ở ao đất truyền thống, FCR là 1.4 – 1.6, nghĩa là người nông dân phải đổ xuống ao tới 1,5 kg cám công nghiệp mới thu hoạch được 1 kg tôm thịt (do cám bị tan vào bùn đất, tôm ăn không hết).',
      'Trong mô hình công nghệ cao, nhờ đáy bạt sạch sẽ, máy cho ăn tự động rải đúng cữ và có sẵn nguồn thức ăn tự nhiên từ hạt vi sinh Biofloc, chỉ cần 1,1 đến 1,2 kg cám là tạo ra được 1 kg tôm.'
    ],
    practicalMeaning:
      'Giảm được 0,3 – 0,4 kg cám trên mỗi ký tôm giúp các trang trại quy mô lớn tiết kiệm hàng trăm tấn thức ăn, giảm chi phí sản xuất hàng tỷ đồng mỗi năm.',
    keywords: ['FCR', 'chuyển đổi thức ăn', 'cám', 'chi phí', '1.1', '1.2']
  },
  {
    id: 'qna-04',
    code: 'Q&A 04',
    category: 'infra_ops',
    categoryLabel: 'Hạ tầng & Vận hành',
    question:
      'Tại sao phải làm Ao tròn nổi lót bạt HDPE và Hút Siphon đáy phễu?',
    technicalTerm: 'Circular HDPE Tank & Central Centrifugal Siphon Drainage',
    technicalDefinition:
      'Kết cấu bể nổi hình trụ tròn gia cố khung thép, lót màng chống thấm High-Density Polyethylene (HDPE), vận dụng lực hướng tâm của dòng chảy tuần hoàn để gom chất rắn lơ lửng về hố thu trung tâm và xả cặn bằng chênh lệch áp suất thủy tĩnh.',
    quickSummary:
      'Cách ly phèn/mầm bệnh từ đất và dùng lực xoáy ly tâm tự động gom sạch phân tôm.',
    easyExplanation: [
      'Bạt nhựa HDPE: Là lớp màng nhựa cao cấp siêu bền lót kín đáy và thành ao, giúp cách ly hoàn toàn nước nuôi với nền đất phèn tự nhiên, không lo xì phèn hay mầm bệnh tích tụ trong bùn đất.',
      'Ao nổi hình tròn & Hút Siphon: Khi các dàn quạt nước chạy xung quanh thành ao tròn, nó tạo ra dòng nước xoáy ly tâm giống như ta khuấy một ly nước. Lực ly tâm này sẽ tự động đẩy toàn bộ chất bẩn nặng (phân tôm, vỏ tôm lột xác, thức ăn thừa) tụ hết vào cái phễu trũng ở chính giữa đáy ao (rốn ao). Kỹ thuật viên chỉ cần mở van ống dưới đáy phễu (nguyên lý chênh lệch áp suất Siphon), nước sẽ tự động cuốn sạch 100% cặn bẩn ra ngoài chỉ trong vài phút mà không cần lội xuống ao dọn dẹp.'
    ],
    practicalMeaning:
      'Giữ đáy ao sạch bóng 24/7, loại bỏ ổ vi khuẩn yếm khí dưới đáy ao và giảm 80% sức lao động thủ công.',
    keywords: ['HDPE', 'ao tròn', 'Siphon', 'rốn ao', 'ly tâm', 'bạt nhựa', 'đất phèn']
  },
  {
    id: 'qna-05',
    code: 'Q&A 05',
    category: 'infra_ops',
    categoryLabel: 'Hạ tầng & Vận hành',
    question:
      'Tôm giống SPF PL12 và Quy trình nuôi 3 giai đoạn (San thưa) là gì?',
    technicalTerm: 'SPF (Specific Pathogen Free) Postlarvae 12 & Multi-Phase Nursing',
    technicalDefinition:
      'Sử dụng nguồn giống gia hóa sạch bệnh đặc hiệu ở ngày tuổi hậu ấu trùng thứ 12 (PL12), kết hợp chia nhỏ chu kỳ sinh trưởng thành 3 cấp độ mật độ (Ương vèo -> Tăng trưởng -> Thương phẩm) để tối ưu hóa công suất công trình.',
    quickSummary:
      'Tôm giống sạch bệnh 12 ngày tuổi và chia nhỏ ao nuôi để quay vòng 3 – 4 vụ/năm.',
    easyExplanation: [
      'Tôm SPF (Specific Pathogen Free) cỡ PL12 (Postlarvae 12): Là tôm giống con đã qua giai đoạn ấu trùng được 12 ngày, được xét nghiệm sinh học phân tử đảm bảo sạch hoàn toàn các mầm bệnh nguy hiểm (như hoại tử gan tụy EMS, vi bào tử trùng EHP, đốm trắng).',
      'Nuôi 3 giai đoạn (San thưa): Thay vì thả tôm con thẳng ra ao lớn từ đầu đến lúc thu hoạch, người ta chia thành 3 bước. Giai đoạn 1 (25 – 30 ngày đầu), tôm con được nuôi trong bể ương vèo nhỏ trong nhà màng kín để dễ kiểm soát nhiệt độ (29–30°C) và bảo vệ sức đề kháng. Khi tôm đã khỏe mạnh mới chuyển dần sang ao lớn hơn (Giai đoạn 2 và 3). Trong lúc ao lớn đang nuôi tôm thịt, ao ương nhỏ đã bắt đầu thả lứa tôm mới gối đầu.'
    ],
    practicalMeaning:
      'Giúp rút ngắn thời gian chờ đợi, tăng số vụ thu hoạch từ 1 – 2 vụ/năm lên tới 3 – 4 vụ/năm và nâng tỷ lệ sống lên 85% – 90%.',
    keywords: ['SPF', 'PL12', '3 giai đoạn', 'san thưa', 'ương vèo', 'EMS', 'EHP', 'đốm trắng']
  },
  {
    id: 'qna-06',
    code: 'Q&A 06',
    category: 'tech_bio',
    categoryLabel: 'Công nghệ & Sinh học',
    question:
      'Trạm cảm biến IoT 24/7 và chỉ số Oxy hòa tan (DO) hoạt động ra sao?',
    technicalTerm: 'Real-time IoT Water Quality Telemetry & Dissolved Oxygen (DO)',
    technicalDefinition:
      'Mạng lưới cảm biến quang học - điện hóa đo lường liên tục nồng độ Oxy hòa tan (DO ≥ 5.5 mg/L), pH, độ kiềm, nhiệt độ, độ mặn và điều khiển biến tần hệ thống quạt nước/máy sục khí tự động qua điện toán đám mây.',
    quickSummary:
      'Hệ thống đầu dò điện tử tự động đo sức khỏe nước và báo về điện thoại.',
    easyExplanation: [
      'Tôm nuôi mật độ dày cần thở oxy liên tục, đặc biệt là vào ban đêm. Chỉ số DO (Dissolved Oxygen) chính là lượng oxy hòa tan trong nước (phải luôn duy trì từ 5.5 – 6.8 mg/L).',
      'Trạm IoT là các đầu cảm biến ngâm dưới nước, đo liên tục DO, độ pH (độ chua/kiềm của nước), nhiệt độ và độ mặn từng giây. Nếu nửa đêm oxy trong ao tụt giảm, hệ thống sẽ tự động kích hoạt tăng công suất máy sục khí đáy và gửi cảnh báo về điện thoại cho kỹ sư trong vòng chưa đầy 30 giây.'
    ],
    practicalMeaning:
      'Ngăn chặn 100% sự cố tôm ngạt oxy hàng loạt vào ban đêm, chuyển đổi người nông dân thành kỹ thuật viên số quản trị trang trại từ xa.',
    keywords: ['IoT', 'DO', 'Oxy hòa tan', 'cảm biến', 'pH', 'độ mặn', 'điện thoại']
  },
  {
    id: 'qna-07',
    code: 'Q&A 07',
    category: 'econ_geo',
    categoryLabel: 'Kinh tế & Địa lí 9',
    question:
      'Các chứng nhận ASC, GlobalGAP, BAP (4 Sao) có vai trò gì?',
    technicalTerm: 'ASC · GlobalG.A.P. · BAP (Best Aquaculture Practices 4-Star)',
    technicalDefinition:
      'Bộ tiêu chuẩn kiểm định quốc tế độc lập đánh giá toàn diện chuỗi giá trị thủy sản về an toàn thực phẩm (0% dư lượng kháng sinh cấm), an sinh xã hội, bảo tồn đa dạng sinh học và truy xuất nguồn gốc điện tử.',
    quickSummary:
      '"Hộ chiếu thương mại" để tôm Việt Nam bước vào các siêu thị khắt khe nhất thế giới.',
    easyExplanation: [
      'Các thị trường cao cấp như Mỹ, Châu Âu (EU), Nhật Bản kiểm soát cực kỳ gắt gao về dư lượng kháng sinh và trách nhiệm môi trường.',
      'ASC (tiêu chuẩn Châu Âu), GlobalGAP (tiêu chuẩn toàn cầu) và BAP 4 Sao (tiêu chuẩn Hoa Kỳ) là những chứng nhận quốc tế xác nhận con tôm Bạc Liêu được nuôi hoàn toàn bằng vi sinh (0% kháng sinh cấm), không tàn phá rừng ngập mặn, đảm bảo an sinh cho người lao động và có mã QR truy xuất nguồn gốc từ trại giống đến tận bàn ăn.'
    ],
    practicalMeaning:
      'Nâng tầm giá trị thương phẩm tôm Việt Nam, giúp vượt qua các rào cản kỹ thuật và đóng góp vào kỷ lục xuất khẩu 4,6 tỷ USD.',
    keywords: ['ASC', 'GlobalGAP', 'BAP', 'xuất khẩu', 'kháng sinh', 'chứng nhận', 'EU', 'Mỹ', 'Nhật Bản']
  },
  {
    id: 'qna-08',
    code: 'Q&A 08',
    category: 'econ_geo',
    categoryLabel: 'Kinh tế & Địa lí 9',
    question:
      'Liên hệ trọng tâm Địa lí 9: Tại sao mô hình này là lời giải cho Biến đổi khí hậu ở ĐBSCL?',
    technicalTerm: 'Kinh tế nông nghiệp "Thuận thiên" · Thích ứng xâm nhập mặn & Chống sụt lún ĐBSCL',
    technicalDefinition:
      'Giải pháp chuyển đổi cơ cấu sử dụng đất và tài nguyên nước vùng ven biển bán đảo Cà Mau – Bạc Liêu theo Nghị quyết 120/NQ-CP: tận dụng nước lợ làm tư liệu sản xuất công nghệ cao và bảo tồn trữ lượng nước dưới đất.',
    quickSummary:
      'Biến thách thức xâm nhập mặn thành lợi thế kinh tế tỷ đô và chống sụt lún đồng bằng.',
    easyExplanation: [
      'Đồng bằng sông Cửu Long đang chịu tác động nặng nề nhất của biến đổi khí hậu, nước biển dâng và hạn mặn xâm nhập sâu vào nội đồng. Thay vì cố trồng lúa ở những vùng đất ven biển bị nhiễm mặn kém hiệu quả, tỉnh Bạc Liêu đã thực hiện chuyển dịch cơ cấu kinh tế "thuận thiên": lấy chính nguồn nước mặn/nước lợ làm tài nguyên để phát triển công nghệ nuôi tôm siêu thâm canh.',
      'Hơn nữa, nhờ có mái che nhà màng (không sợ nắng gắt làm tăng độ mặn hay mưa lớn làm ngọt hóa nước ao) và hệ thống tuần hoàn nước RAS (không cần khoan hút nước ngầm tràn lan), mô hình này giúp bảo vệ tầng nước ngầm, ngăn chặn nguy cơ sụt lún mặt đất đang đe dọa vùng ĐBSCL.'
    ],
    practicalMeaning:
      'Minh chứng tiêu biểu nhất cho bài học Thực hành Địa lí 9 (Bài 7): Kết hợp sức mạnh công nghệ hiện đại với tư duy "thuận thiên" để phát triển bền vững vùng ĐBSCL.',
    keywords: ['Địa lí 9', 'biến đổi khí hậu', 'xâm nhập mặn', 'ĐBSCL', 'thuận thiên', 'sụt lún', 'nước ngầm']
  }
];

export function filterGlossaryQnA(
  items: QnAGlossaryItem[],
  category: QnACategory,
  searchQuery: string
): QnAGlossaryItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    const searchableText = [
      item.code,
      item.question,
      item.technicalTerm,
      item.technicalDefinition,
      item.quickSummary,
      ...item.easyExplanation,
      item.practicalMeaning,
      ...item.keywords
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

