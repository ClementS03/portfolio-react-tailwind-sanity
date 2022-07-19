import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <div className="flex flex-col justify-center bg-bg-center fixed h-full top-0 w-full text-white text-lg">
      <div className="flex flex-col m-auto p-auto">
        <ul className="flex space-x-4 mb-3">
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.github.com/ClementS03">
              <button className="border-2 border-red rounded-full p-2">
              <AiFillGithub />
            </button>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/clem.codes/">
            <button className="border-2 border-red rounded-full p-2">
              <AiFillInstagram />
            </button>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/clementseguin/">
            <button className="border-2 border-red rounded-full p-2">
              <AiFillLinkedin />
            </button>
            </a>
          </li>
        </ul>
        <p className="">Hello ! Moi c'est Clément !</p>
      </div>
    </div>
  );
};

export default Home;
