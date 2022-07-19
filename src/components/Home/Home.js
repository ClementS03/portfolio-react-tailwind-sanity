import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <div className="flex flex-col justify-center text-white text-lg">
      <div className="flex flex-col m-auto p-auto">
        <ul className="flex space-x-4 mb-3">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/ClementS03"
            >
              <button className="border-2 border-red rounded-full p-2">
                <AiFillGithub />
              </button>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/clem.codes/"
            >
              <button className="border-2 border-red rounded-full p-2">
                <AiFillInstagram />
              </button>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/clementseguin/"
            >
              <button className="border-2 border-red rounded-full p-2">
                <AiFillLinkedin />
              </button>
            </a>
          </li>
        </ul>
        <h2 className="text-2xl">Hello ! Moi c'est Clément !</h2>
        <p className="max-w-md mt-4">
          Developpeur web professionel j'aide les petites et moyennes entreprise
          à développer leur présence en ligne grâce à leur site internet
        </p>
        <div className="flex space-x-20 mt-6">
          <Link to="/projects">
            <button className="border-2 border-red rounded-full p-3 pl-5 pr-5">Mon Portfolio</button>
          </Link>
          <Link to="/contact">
            <button className="border-2 border-red rounded-full p-3 pl-5 pr-5">Contactez-moi</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
