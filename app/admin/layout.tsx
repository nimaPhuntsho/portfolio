import "../globals.css";
import { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import AdminHeader from "../components/AdminHeader";

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
      <body className={`min-h-screen ${workSans.className} flex flex-col`}>
        <div className=" flex flex-col flex-1">
          <div className="flex-1 flex flex-col items-center ">
            <div className="flex-1 flex flex-col w-full max-w-[1200px] ">
              <AdminHeader />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
