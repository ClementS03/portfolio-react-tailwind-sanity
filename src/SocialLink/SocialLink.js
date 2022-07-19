import React from "react";

const SocialLink = ({ path, logo, style}) => {
  return (
      <li className={style}>
        <a target="_blank" rel="noreferrer" href={path} className="mx-4">
          {logo}
        </a>
      </li>
  );
};

export default SocialLink;
