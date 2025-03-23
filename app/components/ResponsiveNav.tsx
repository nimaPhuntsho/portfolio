import React from "react";
import styles from "@/app/custom-styles/Landing.module.css";
import Link from "next/link";
import { useDisclosure } from "../hooks/useDisclosure";
import { FiX } from "react-icons/fi";

const ResponsiveNav = () => {
  const { isOpen, onToggle, opening } = useDisclosure();
  return (
    <>
      {isOpen && (
        <div
          className={`p-5 flex flex-col justify-center gap-4 h-[100vh] w-[100%] bg-[#0F0F0F] fixed  top-0 left-0 z-20  ${
            opening ? styles["navbar-out"] : styles["navbar-in"]
          }`}
        >
          <div className={`absolute top-4 right-4  cursor-pointer`}>
            <FiX onClick={onToggle} size="30px" />
          </div>
          <Link onClick={onToggle} href="projects">
            <div
              className={`flex justify-start ${
                opening ? styles["reveal-navlinks"] : styles["hide-navlinks"]
              } opacity-0 `}
              style={{
                animationDelay: ".6s",
              }}
            >
              <h1 className={`text-5xl`}>My work</h1>
            </div>
          </Link>
          <Link onClick={onToggle} href="/about">
            <div
              className={`flex justify-start ${
                opening ? styles["reveal-navlinks"] : styles["hide-navlinks"]
              } opacity-0 text-5xl`}
              style={{
                animationDelay: ".6s",
              }}
            >
              <h1>About</h1>
            </div>
          </Link>
          <Link onClick={onToggle} href="/contact">
            <div
              className={`flex justify-start ${
                opening ? styles["reveal-navlinks"] : styles["hide-navlinks"]
              } opacity-0  text-5xl `}
              style={{
                animationDelay: ".6s",
              }}
            >
              <h1>Contact</h1>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default ResponsiveNav;
