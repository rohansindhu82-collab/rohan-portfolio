export function calculateMetrics(data: any[]) {
  const avgQuality =
    data.reduce((a, b) => a + b.quality, 0) / data.length;

  const avgCSAT =
    data.reduce((a, b) => a + b.csat, 0) / data.length;

  const automationRate =
    (data.filter(d => d.automated).length / data.length) * 100;

  const slaCompliance =
    (data.filter(d => d.slaMet).length / data.length) * 100;

  return {
    avgQuality: avgQuality.toFixed(1),
    avgCSAT: avgCSAT.toFixed(2),
    automationRate: automationRate.toFixed(1),
    slaCompliance: slaCompliance.toFixed(1),
  };
}