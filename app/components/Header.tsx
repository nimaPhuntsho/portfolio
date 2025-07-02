"use client";

import Logo from "./Logo";
import { FiAlignRight } from "react-icons/fi";
import ResponsiveNav from "./ResponsiveNav";
import { useDisclosure } from "../context/DisclosureContext";

const Header = () => {
  const { toggle, isOpen } = useDisclosure();
  return (
    <>
      <div className={`text-white flex items-center justify-between relative`}>
        <Logo />
        <div className="cursor-pointer" onClick={toggle}>
          <FiAlignRight size="30px" />
        </div>
        {isOpen && <ResponsiveNav />}
      </div>
    </>
  );
};

export default Header;
