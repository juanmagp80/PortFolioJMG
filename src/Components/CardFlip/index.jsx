import { motion } from "framer-motion";
import React, { useState } from "react";
import nflix from "../../assets/nflix.png";
import HomeMusic from "../../assets/HomeMusic.jpg";
import weather from "../../assets/weather.png";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";
const OpenCards = ({ proyectosRef }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
  });

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "450px",
    },
    collapsed: {
      width: "200px",
    },
  };
  const cardImagePositions = [
    "center", // Posición para la primera imagen
    "center", // Posición para la segunda imagen
    "bottom", // Posición para la tercera imagen
    "left", // Posición para la cuarta imagen
    "right", // P
  ];
  const cardLinks = [
    "../../assets/NFlix.apk",
    "https://homemusic.netlify.app/",
    "https://wheaterjmgp.netlify.app/",
  ];

  const cardImages = [nflix, HomeMusic, weather];
  const nflixtext = <FormattedMessage id="nflixtext" />;
  const homemusictext = <FormattedMessage id="homemusictext" />;
  const openweathertext = <FormattedMessage id="openweathertext" />;
  const cardDescriptions = [nflixtext, homemusictext, openweathertext];
  const cardTitles = ["NFlix", "HomeMusic", "OpenWeather"];
  return (
    <div
      className="flex justify-center rounded-xl items-center mb-40 bg-indigo-500"
      ref={proyectosRef}
    >
      <section className="py-16 pb-[200px] md:h-[50rem] md:w-[85rem] shadow-3xl rounded-xl bg-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold font-raleway text-white">
            <FormattedMessage id="misproyectos" />
          </h1>
        </div>
        <div className="mt-28 flex flex-col md:flex-row justify-center items-center gap-5">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[300px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? "expanded" : ""
              }`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundPosition: cardImagePositions[index],
                backgroundImage: `url(${cardImages[index]})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                <div className=" card-footer rounded-b-[10px] bg-gray-800 bg-opacity-75 min-h-[50px] flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold font-raleway text-white text-center">
                    {cardTitles[index]}
                  </h2>
                  {index === expandedIndex && (
                    <div className="flex font-raleway flex-col items-center">
                      <p className="mt-2 font-raleway text-white text-center">
                        {cardDescriptions[index]}{" "}
                      </p>
                      <a
                        href={cardLinks[index]}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="mt-2 mb-2 shadow-3xl font-poppins  bg-blue-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">
                          {index === 0 ? "Descargar archivo" : "Visitar Sitio"}
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OpenCards;
