export function generateQAData(count = 1500) {

  const teams = ["Payments", "CX", "Trust", "Logistics"];
  const regions = ["US", "EU", "APAC"];
  const severities = ["Low", "Medium", "High"];

  return Array.from({ length: count }, (_, i) => ({
    id: i,

    team: teams[Math.floor(Math.random()*teams.length)],
    region: regions[Math.floor(Math.random()*regions.length)],
    severity: severities[Math.floor(Math.random()*severities.length)],

    qualityScore: 80 + Math.random()*20,
    csat: 3 + Math.random()*2,

    automated: Math.random() > 0.4,
    slaMet: Math.random() > 0.1,

    bugs: Math.floor(Math.random()*50),

    month: ["Jan","Feb","Mar","Apr","May","Jun"][Math.floor(Math.random()*6)]
  }));
}