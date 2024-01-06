import React from "react";
import Logo from "../../../public/default.png";

import { useRef } from "react";

function index({ handleContactClick, handleSobreMiClick }) {
  return (
    <header
      className=" text-white flex pt-16 justify-between fixed top-0 w-full z-50  backdrop-blur-xl shadow-3xl bg-gradient-to-r-porfolio"
      style={{ backgroundColor: "rgba(37, 99, 235, 0.2)" }}
    >
      <div className="p-3 pb-0 md:px-16 overflow-hidden">
        <nav className="flex px-8 py-5 justify-between z-30 fixed top-0 left-0 mb-5 w-full ">
          <a
            href="/"
            className=" text-white font-poppins text-2xl md:text-3xl lg:text-4l"
          >
            {`</Juanma Garrido/>`}
          </a>

          <ul className="flex flex-col items-center md:items-center md:justify-between md:flex-row md:space-x-4 font-poppins text-white font-bold">
            <li>
              <a
                href="#section1"
                className="text-white font-poppins text-2xl md:text-3xl lg:text-4l"
                onClick={handleSobreMiClick}
              >
                Sobre Mi
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className="text-white font-poppins text-2xl md:text-3xl lg:text-4l"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#section3"
                className="text-white font-poppins text-2xl md:text-3xl lg:text-4l"
              >
                Experiencia
              </a>
            </li>
          </ul>
          <a
            href="#_"
            className="relative inline-block text-sm md:text-lg group"
            onClick={handleContactClick}
          >
            <span className="relative z-10 block px-3 md:px-5 py-2 md:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-3 md:px-5 py-2 md:py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Contáctame</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default index;
