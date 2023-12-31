import React from "react";
import Logo from "../../../public/default.png";

function index() {
  return (
    <header className="bg-blue-400 text-white p-4 flex justify-between items-center">
      <div className="p-3 pb-0 md:px-16 overflow-hidden">
        <nav className="flex px-8 py-5 justify-between z-30 items-center shadow-3xl bg-blue-400 bg-gradient-to-r-porfolio fixed top-0 left-0 mb-5 w-full ">
          <a
            href="/"
            className=" text-white font-poppins text-3xl md:text-4xl "
          >
            {`</Juanma Garrido/>`}
          </a>

          <ul className="flex space-x-4 font-poppin text-white font-bold">
            <li>
              <a href="#section1">Sobre Mi</a>
            </li>
            <li>
              <a href="#section2">Proyectos</a>
            </li>
            <li>
              <a href="#section3">Experiencia</a>
            </li>
          </ul>
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
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
