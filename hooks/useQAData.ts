"use client";

import { useEffect, useState } from "react";
import { generateQAData } from "@/lib/generateQAData";
import { calculateMetrics } from "@/lib/qaAnalytics";

export function useQAData() {

  const [data, setData] = useState<any[]>([]);
  const [metrics, setMetrics] = useState<any>({
    avgQuality: 0,
    avgCSAT: 0,
    automationRate: 0,
    slaCompliance: 0,
  });

  useEffect(() => {
    const generated = generateQAData(1500);
    setData(generated);
    setMetrics(calculateMetrics(generated));
  }, []);

  return { data, metrics };
}