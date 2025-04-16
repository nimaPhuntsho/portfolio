import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={`flex xl:flex-col gap-4`}>
        <a href="https://www.linkedin.com/in/nima-phuntsho/" target="_blank">
          <BsLinkedin size="30px" />
        </a>
        <a href="https://github.com/nimaPhuntsho" target="_blank">
          <FaGithub size="30px" />
        </a>
      </div>
    </>
  );
};

export default Footer;
