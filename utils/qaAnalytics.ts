// utils/qaAnalytics.ts

export function calculateMetrics(data: any[]) {

  const total = data.length;

  const avgQuality =
    data.reduce((a, b) => a + b.qualityScore, 0) / total;

  const avgCSAT =
    data.reduce((a, b) => a + b.csat, 0) / total;

  const automationRate =
    data.filter(d => d.automated).length / total * 100;

  const slaCompliance =
    data.filter(d => d.slaMet).length / total * 100;

  return {
    avgQuality: avgQuality.toFixed(1),
    avgCSAT: avgCSAT.toFixed(1),
    automationRate: automationRate.toFixed(1),
    slaCompliance: slaCompliance.toFixed(1),
  };
}