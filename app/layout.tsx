import "./globals.css";

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  variable: "--work-sans",
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "800"],
});

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
        {children}
      </body>
    </html>
  );
}
