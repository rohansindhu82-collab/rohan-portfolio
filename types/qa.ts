export interface QATicket {
  id: number;
  region: string;
  product: string;
  priority: "Low" | "Medium" | "High";
  qualityScore: number;
  csat: number;
  slaMet: boolean;
  automated: boolean;
  escalated: boolean;
  createdAt: Date;
}