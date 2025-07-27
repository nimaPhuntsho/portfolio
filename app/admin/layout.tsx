import { Metadata } from "next";

import AdminHeader from "../components/AdminHeader";

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
    <div>
      <div className=" flex flex-col flex-1">
        <div className="flex-1 flex flex-col items-center ">
          <div className="flex-1 flex flex-col w-full max-w-[1200px] ">
            <AdminHeader />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
