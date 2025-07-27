import type { Metadata } from "next";
import { DisclosureProvider } from "../context/DisclosureContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <div
      className={`min-h-screen bg-[#1A1A1D] text-[#E7F6F2]  p-6 flex flex-col `}
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
    </div>
  );
}
