import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  variable: "--sans-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nima Phuntsho 😃",
  description: "Portfolio designed and developed by Nima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#1A1A1D] text-[#DDE6ED] ${inter.className} p-6`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
