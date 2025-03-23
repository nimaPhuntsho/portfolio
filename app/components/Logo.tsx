import React from "react";
import { Marck_Script } from "next/font/google";
import Link from "next/link";

const marchScript = Marck_Script({
  subsets: ["latin"],
  variable: "--font-march-script",
  weight: "400",
});

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div>
          <h1 className={`${marchScript.className} text-2xl`}>nimaphuntsho.</h1>
        </div>
      </Link>
    </>
  );
};

export default Logo;
