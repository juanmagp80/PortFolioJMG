import React from "react";

const CardBio = () => {
  return (
    <div className="fixed left-0 top-14 mt-8 m-4 p-4 bg-indigo-700 rounded-lg shadow-3xl h-80">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="../../../public/sonrisa.png"
        alt="Tu nombre"
      />
      <div className="text-center mt-2 font-poppins">
        <h2 className="text-xl">Juanma Garrido</h2>
        <p className="text-white">Front-end Developer</p>
        <div className="mt-4">
          <a
            href="https://github.com/juanmagp80"
            className="text-orange-200 hover:underline"
          >
            GitHub
          </a>
          <br />
          <a
            href="https://linkedin.com/in/juan-manuel-garrido-portillo/"
            className="text-orange-200 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardBio;
