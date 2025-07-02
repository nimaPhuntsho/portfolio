import React from "react";
// import { Marck_Script } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// const marchScript = Marck_Script({
//   subsets: ["latin"],
//   variable: "--font-march-script",
//   weight: "400",
// });

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/images/nima-logo.svg"
          width={150}
          height={100}
          alt="nima-logo"
        />
      </Link>
    </>
  );
};

export default Logo;
