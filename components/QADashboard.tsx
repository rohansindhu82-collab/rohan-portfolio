"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useQAData } from "@/hooks/useQAData";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function QADashboard() {

  /* =============================
     LOAD DATA
  ============================== */
  const { data, metrics } = useQAData();


  /* =============================
     BUG TREND DATA (FIXED POSITION)
  ============================== */
  const bugTrendData = useMemo(() => {
    return Object.values(
      data.reduce((acc: any, item: any) => {
        if (!acc[item.month]) {
          acc[item.month] = { month: item.month, bugs: 0 };
        }

        acc[item.month].bugs += item.bugs;
        return acc;
      }, {})
    );
  }, [data]);


  /* =============================
     METRICS
  ============================== */
  const dashboardMetrics = [
    { label: "Quality Score", value: `${metrics.avgQuality}%` },
    { label: "CSAT", value: metrics.avgCSAT },
    { label: "Automation", value: `${metrics.automationRate}%` },
    { label: "SLA Compliance", value: `${metrics.slaCompliance}%` },
  ];


  /* =============================
     JSX
  ============================== */
  return (
    <section id= "QADashboard"className="min-h-screen bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          QA Command Center
        </motion.h2>


        {/* GLOBAL HEALTH */}
        <div className="text-center mb-14">
          <h3 className="text-gray-400 text-sm">GLOBAL QA HEALTH</h3>
          <h1 className="text-7xl font-bold text-green-400">
            {metrics.avgQuality}%
          </h1>
          <p className="text-gray-500 mt-2">Release Confidence: HIGH</p>
        </div>


        {/* METRIC CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {dashboardMetrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="border border-gray-700 p-6 rounded-xl text-center
              bg-gradient-to-br from-neutral-900 to-black
              hover:border-blue-500 hover:scale-[1.02] transition-all"
            >
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>


        {/* BUG TREND CHART */}
        <div className="border border-gray-700 rounded-xl p-6 h-[350px]
        bg-gradient-to-br from-neutral-900 to-black">

          <h3 className="mb-4 font-semibold">Bug Trend Analysis</h3>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bugTrendData}>
              <CartesianGrid stroke="#333" />

              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis stroke="#aaa" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="bugs"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>
    </section>
  );
}