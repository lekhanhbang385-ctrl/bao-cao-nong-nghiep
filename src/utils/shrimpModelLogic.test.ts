import test from 'node:test';
import assert from 'node:assert/strict';
import {
  STUDENT_REPORT_PROFILE,
  COMPARISON_CRITERIA,
  calculateFarmComparison,
  simulatePondEnvironment,
  VIETNAM_SHRIMP_STATS_2022_2026,
  GLOSSARY_QNA_ITEMS,
  filterGlossaryQnA
} from './shrimpModelLogic';

test('student report metadata matches exact personal report requirements', () => {
  assert.equal(STUDENT_REPORT_PROFILE.fullName, 'Lê Khánh Băng');
  assert.equal(STUDENT_REPORT_PROFILE.className, '9A3');
  assert.equal(STUDENT_REPORT_PROFILE.schoolName, 'THCS Nhơn Ái');
  assert.equal(STUDENT_REPORT_PROFILE.subject, 'Địa lí 9 · Bài 7 (Thực hành)');
  assert.equal(STUDENT_REPORT_PROFILE.academicYear, '2025 - 2026');
});

test('comparison criteria covers all 4 mandatory curriculum benchmarks', () => {
  assert.equal(COMPARISON_CRITERIA.length, 4);
  const ids = COMPARISON_CRITERIA.map((c) => c.id);
  assert.deepEqual(ids, ['yield', 'survival', 'crops', 'fcr']);
  assert.equal(COMPARISON_CRITERIA[0].highTechAvg, 45);
  assert.equal(COMPARISON_CRITERIA[1].highTechAvg, 88);
});

test('calculateFarmComparison computes accurate yield and FCR savings', () => {
  const result = calculateFarmComparison({
    areaHa: 2,
    highTechCropsPerYear: 3.5,
    shrimpPriceMillionsPerTon: 180
  });

  // Traditional: 2 ha * 2.5 tons/ha/crop * 1.5 crops = 7.5 tons/year
  assert.equal(result.traditionalAnnualTons, 7.5);
  // High-tech: 2 ha * 45 tons/ha/crop * 3.5 crops = 315 tons/year
  assert.equal(result.highTechAnnualTons, 315);
  assert.equal(result.yieldRatio, 42);
  // Feed saved per ton of shrimp: 1.5 - 1.15 = 0.35 tons
  assert.equal(result.feedSavedTonsPerTonShrimp, 0.35);
  assert.equal(result.totalFeedSavedEquivalentTons, 110.3);
  assert.equal(result.waterRecirculatedPercent, 100);
});

test('simulatePondEnvironment maintains NOMINAL state when all 4 tech pillars are active', () => {
  const nominal = simulatePondEnvironment({
    stockingDensityPerM2: 250,
    weather: 'heavy_rain',
    rasActive: true,
    bioflocActive: true,
    greenhouseActive: true,
    iotAutoAeration: true
  });

  assert.equal(nominal.systemStatus, 'NOMINAL');
  assert.equal(nominal.diseaseIsolationPercent, 100);
  assert.ok(nominal.dissolvedOxygenMgL >= 5.5);
  assert.ok(nominal.nh3No2MgL <= 0.05);
});

test('simulatePondEnvironment triggers CRITICAL state when core tech pillars are disabled during harsh weather', () => {
  const critical = simulatePondEnvironment({
    stockingDensityPerM2: 280,
    weather: 'heatwave',
    rasActive: false,
    bioflocActive: false,
    greenhouseActive: false,
    iotAutoAeration: false
  });

  assert.equal(critical.systemStatus, 'CRITICAL');
  assert.ok(critical.nh3No2MgL > 0.25);
  assert.ok(critical.projectedSurvivalPercent < 50);
});

test('2025-2026 statistical series includes updated VASEP & Bạc Liêu figures', () => {
  const y2025 = VIETNAM_SHRIMP_STATS_2022_2026.find((r) => r.year === '2025');
  assert.ok(y2025);
  assert.equal(y2025.nationalExportBillionUSD, 4.6);
  const y2026 = VIETNAM_SHRIMP_STATS_2022_2026.find((r) =>
    r.year.startsWith('2026')
  );
  assert.ok(y2026);
  assert.ok(y2026.highlightNote.includes('3,7 tỷ USD'));
});

test('GLOSSARY_QNA_ITEMS contains all 8 mandatory presentation Q&A cards and supports filtering', () => {
  assert.equal(GLOSSARY_QNA_ITEMS.length, 8);
  assert.equal(GLOSSARY_QNA_ITEMS[0].code, 'Q&A 01');
  assert.equal(GLOSSARY_QNA_ITEMS[7].code, 'Q&A 08');

  const bioflocMatches = filterGlossaryQnA(GLOSSARY_QNA_ITEMS, 'all', 'Biofloc');
  assert.ok(bioflocMatches.length >= 2);

  const geoCategoryMatches = filterGlossaryQnA(
    GLOSSARY_QNA_ITEMS,
    'econ_geo',
    ''
  );
  assert.equal(geoCategoryMatches.length, 3);
});

