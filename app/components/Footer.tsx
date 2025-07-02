import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex items-center text-[#7F8487] justify-between w-full mt-5">
        <div>
          <div className={`flex  gap-4`}>
            <a
              href="https://www.linkedin.com/in/nima-phuntsho/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/nimaPhuntsho" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <p> &copy; {new Date().getFullYear()} Nima Phuntsho </p>
      </div>
    </>
  );
};

export default Footer;
