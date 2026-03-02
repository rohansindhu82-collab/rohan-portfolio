export function generateQAData(count: number = 1500) {
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const data = [];

  for (let i = 0; i < count; i++) {
    data.push({
      id: i,
      month: months[Math.floor(Math.random() * 12)],
      bugs: Math.floor(Math.random() * 10),
      quality: 85 + Math.random() * 15,
      csat: 4 + Math.random(),
      automated: Math.random() > 0.3,
      slaMet: Math.random() > 0.1,
    });
  }

  return data;
}