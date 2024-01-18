import { useContext } from "react";
import { VisibilityContext } from "../../context/index";

const CardBio = () => {
  const { isVisible } = useContext(VisibilityContext);

  return (
    <div
      className={`md:block hidden flex-row items-center space-x-2 fixed left-44 top-0 m-2  bg-indigo-700 rounded-lg shadow-3xl sm:w-48 sm:h-40 xl:h-20 xl:w-60 ${
        isVisible ? " opacity-100 slide-right" : "slide-left opacity-0"
      }`}
    >
      <div className="flex flex-row mt-[-10px]">
        <img
          className="w-20 h-20 rounded-full"
          src="./sonrisa.png"
          alt="Tu nombre"
        />
      </div>
      <div className="flex flex-row  pl-24 sm:mt-[-50px] sm:pl-10 xl:pl-20 xl:mt-[-60px]">
        <h2 className="text-lg sm:text-2xs xl:text-2xs md:text-lg text-orange-400 ">
          Juanma Garrido
        </h2>
      </div>
      <div className="flex flex-row xl:text-2xs pl-24 sm:pl-2 xl:pl-16">
        <a
          href="mailto:juanmagpdev@gmail.com"
          className="text-white xl:text-xs text-xs hover:underline"
        >
          juanmagpdev@gmail.com
        </a>
      </div>
      <div className="flex flex-row pl-24 sm:pl-2 xl:pl-16">
        <a
          href="https://github.com/juanmagp80"
          className="text-orange-200 text-lg hover:underline"
        >
          GitHub
        </a>
        <div className="flex flex-row pl-6">
          <a
            href="https://linkedin.com/in/juan-manuel-garrido-portillo/"
            className="text-orange-200 text-lg hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardBio;
