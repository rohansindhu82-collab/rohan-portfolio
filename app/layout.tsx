import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import GlobalEffects from "@/components/GlobalEffects";
import HireMe from "@/components/HireMe";

<HireMe />

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Sindhu | Senior Quality Analyst",
  description:
    "Senior Quality Analyst specializing in QA processes, automation learning, and customer experience optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
 <html lang="en">
<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <GlobalEffects />
  {children}
</body>
</html>
);
}