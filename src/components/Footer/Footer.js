import React from "react";
import SocialLink from "../../SociaLink/SocialLink";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="h-20 w-full fixed bottom-0 flex items-center justify-center bg-header-bg text-white text-xl">
      <div className="flex flex-row">
        <SocialLink
          path="https://www.linkedin.com/in/clementseguin/"
          logo={<AiFillLinkedin />}
        />
        <SocialLink
          path="https://www.instagram.com/clem.codes/"
          logo={<AiFillInstagram />}
        />
      </div>
      <div className="p-3">Copyright &copy; {date} Seguin Clément 
      </div>
    </div>
  );
};

export default Footer;
