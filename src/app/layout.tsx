import type { Metadata } from "next";
import { Didact_Gothic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

const mainFontDidact = Didact_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mainFontDidact",
});

export const metadata: Metadata = {
  title: "Matt Doyle | Software Engineer",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mainFontDidact.className}`}>
      <body>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
