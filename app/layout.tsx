import { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { PLATFORM_CONFIG, PLATFORM_DESCRIPTION } from "@/components/constants";

export const metadata: Metadata = {
  title: PLATFORM_CONFIG.NAME,
  description: PLATFORM_DESCRIPTION.SHORT,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans">{children}</body>
    </html>
  );
}
