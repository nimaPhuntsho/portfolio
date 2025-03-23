"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { FiAlignRight } from "react-icons/fi";
import ResponsiveNav from "./ResponsiveNav";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  useEffect(() => {}, []);

  const handleToggle = () => {
    setHamburgerMenu((prev) => !prev);
  };

  return (
    <>
      <div className={`text-white flex items-center justify-between relative`}>
        <Logo />
        <div className={`cursor-pointer`} onClick={() => handleToggle()}>
          <FiAlignRight size="30px" />
        </div>
        {hamburgerMenu && <ResponsiveNav />}
      </div>
    </>
  );
};

export default Header;
