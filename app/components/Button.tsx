"use client";

import React from "react";

interface Props {
  onClickHandler: () => void;
  title: string;
  icon: React.ReactNode;
}

const Button = ({ onClickHandler, title, icon }: Props) => {
  return (
    <>
      <button
        className="border cursor-pointer border-[#EAE4D5] flex gap-2 items-center justify-center p-2 rounded-lg"
        onClick={onClickHandler}
      >
        {title} {icon}
      </button>
    </>
  );
};

export default Button;
