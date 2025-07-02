import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DisclosureProvider } from "../context/DisclosureContext";

// const inter = Inter({
//   variable: "--sans-serif",
//   subsets: ["latin"],
// });

const workSans = Work_Sans({
  variable: "--work-sans",
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "800"],
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
        className={`min-h-screen bg-[#1A1A1D] text-[#E7F6F2] ${workSans.className} p-6 flex flex-col `}
      >
        <DisclosureProvider>
          <div className=" flex flex-col flex-1">
            <Header />
            <div className="flex-1 flex flex-col items-center ">
              <div className="flex-1 flex flex-col w-full max-w-[1200px] ">
                {children}
              </div>
            </div>
          </div>
        </DisclosureProvider>
        <Footer />
      </body>
    </html>
  );
}
