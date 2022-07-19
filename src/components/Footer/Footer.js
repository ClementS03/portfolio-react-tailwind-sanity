import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="p-3 h-20 w-full bottom-0 flex flex-col z-50 justify-center bg-header-bg text-white text-xl">
      <div className="flex flex-col m-auto">
      <ul className="flex justify-around space-x-3 mb-3">
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.github.com/ClementS03">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/clem.codes/">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/clementseguin/">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
      <div>Copyright &copy; {date} Seguin Clément</div>
      </div>
    </div>
  );
};

export default Footer;
