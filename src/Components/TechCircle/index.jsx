import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaReact, FaCss3, FaJs, FaGit } from "react-icons/fa";

const TechCircle = () => {
  const controlsReact = useAnimation();
  const controlsCss = useAnimation();
  const controlsJs = useAnimation();
  const controlsGit = useAnimation();

  React.useEffect(() => {
    const animateCircle = async (controls) => {
      while (true) {
        const xOffset = Math.random() * 200 - 100;
        const yOffset = Math.random() * 200 - 100;
        await controls.start({
          x: [xOffset - 100, xOffset, xOffset + 100, xOffset, xOffset - 100],
          y: [yOffset - 100, yOffset, yOffset + 100, yOffset, yOffset - 100],
          transition: { duration: 6, ease: "linear", loop: Infinity },
        });
      }
    };

    animateCircle(controlsReact);
    animateCircle(controlsCss);
    animateCircle(controlsJs);
    animateCircle(controlsGit);
  }, [controlsReact, controlsCss, controlsJs, controlsGit]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-96 h-96">
        <motion.div animate={controlsReact} className="absolute">
          <FaReact
            className="text-blue-500"
            style={{
              fontSize: "3em",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
        <motion.div animate={controlsCss} className="absolute">
          <FaCss3
            className="text-blue-500"
            style={{
              fontSize: "3em",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
        <motion.div animate={controlsJs} className="absolute">
          <FaJs
            className="text-blue-500"
            style={{
              fontSize: "3em",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
        <motion.div animate={controlsGit} className="absolute">
          <FaGit
            className="text-blue-500"
            style={{
              fontSize: "3em",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
        {/* Agrega más iconos según tus necesidades */}
      </div>
    </div>
  );
};

export default TechCircle;
