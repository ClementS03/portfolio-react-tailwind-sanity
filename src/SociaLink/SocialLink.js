import React from "react";

const SocialLink = ({ path, logo }) => {
  return (
    <ul>
      <li className="mr-5">
        <a target="_blank" rel="noreferrer" href={path}>
          {logo}
        </a>
      </li>
    </ul>
  );
};

export default SocialLink;
