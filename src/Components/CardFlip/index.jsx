import React, { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../../assets/city1.png";
import city2 from "../../assets/city2.png";
import city3 from "../../assets/city3.png";
import planet1 from "../../assets/planet1.png";
import planet2 from "../../assets/planet2.png";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = [city1, city2, city3, planet1, planet2];

  const cardDescriptions = [
    "App de información sobre cine y series, realizada con React Native",
    "Réplica de spotify",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
  ];
  return (
    <div className="flex justify-center rounded-xl items-center mb-40 bg-indigo-500">
      <section className="py-16 pb-[200px] md:h-[50rem] md:w-[85rem] shadow-3xl rounded-xl bg-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold font-poppins text-white">
            Mis Proyectos
          </h1>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? "expanded" : ""
              }`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${cardImages[index]})`,
              }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold text-white text-center">
                    Proyecto {index + 1}
                  </h2>
                  {index === expandedIndex && (
                    <p className="mt-2 text-white text-center">
                      {cardDescriptions[index]}{" "}
                    </p>
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
