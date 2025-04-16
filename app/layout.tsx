import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body
        className={`bg-[#1A1A1D] text-[#DDE6ED] ${inter.className} p-6 flex flex-col`}
      >
        <Header />
        {children}
        <div className={`xl:absolute top-1/2`}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
