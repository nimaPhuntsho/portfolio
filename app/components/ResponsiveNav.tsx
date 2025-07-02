import React from "react";
import styles from "@/app/custom-styles/Landing.module.css";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { useDisclosure } from "../context/DisclosureContext";

const ResponsiveNav = () => {
  const navlinks = [
    {
      href: "projects",
      title: "Projects",
    },
    {
      href: "about",
      title: "About",
    },
    {
      href: "blogs",
      title: "Blogs",
    },
    {
      href: "contact",
      title: "Contacts",
    },
  ];
  const { toggle, isOpen, close, isClosing } = useDisclosure();
  return (
    <>
      {isOpen && (
        <div
          className={`p-5 flex flex-col gap-4 h-[100vh] w-[100%] bg-[#0F0F0F] fixed top-0 left-0 z-20  `}
        >
          <div
            onClick={toggle}
            className={`flex justify-end p-2  cursor-pointer `}
          >
            <FiX className="active:border" size="30px" />
          </div>
          <div
            className={`flex flex-col  justify-center h-full ${
              isOpen &&
              `${styles["navbar-out"]} ${isClosing && `${styles["navbar-in"]}`}`
            }`}
          >
            {navlinks.map((link, index) => (
              <Link key={index} onClick={close} href={`/${link.href}`}>
                <div className={`flex justify-start`}>
                  <h1 className={`text-5xl hover:text-7xl transition-all `}>
                    {link.title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveNav;
