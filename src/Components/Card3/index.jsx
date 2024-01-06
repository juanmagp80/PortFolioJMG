import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import "../../App.css";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import Container from "../Container";
import TechCircle from "../TechCircle";

export function HorizontalCard3() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div className="flex justify-center items-center  bg-indigo-500">
      <Card className="w-full max-w-[70rem] md:h-[40rem] flex-col md:flex-row shadow-3xl z-20 md:z-40 bg-blue-400 overflow-hidden">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 bg-blue-400 w-full md:w-2/5 shrink-0 rounded-r-none"
        >
          <TechCircle />
        </CardHeader>
        <Fade
          direction="right"
          triggerOnce={false}
          duration="500"
          opposite={true}
          when={inView}
        >
          <CardBody>
            <Fade
              direction="right"
              triggerOnce={false}
              duration="500"
              opposite={true}
              when={inView}
            >
              <Typography className="mt-4 md:mt-20 font-poppins text-2xl md:text-3xl">
                Tecnologías
              </Typography>
            </Fade>
            <Typography
              variant="h1"
              className="mb-4 mt-4 font-poppins text-white font-bold md:text-5xl"
            >
              Aprendizaje Constante
            </Typography>
            <Typography color="gray" className="mb-8 font-normal text-left">
              Mi trayecto en el mundo del desarrollo web ha sido emocionante y
              lleno de aprendizaje. Comencé con las bases: HTML para la
              estructura, CSS para el diseño y JavaScript para la
              interactividad. Luego, avancé hacia librerías como React, que me
              han permitido crear aplicaciones más dinámicas. Además, he
              explorado herramientas como Tailwind y Bootstrap para agilizar el
              desarrollo. En el ámbito de la gestión de versiones, me
              familiaricé con Git y Github para control de versiones y
              colaboración en proyectos. He complementado mi aprendizaje con
              certificaciones de plataformas como Udemy, Platzi y Codecademy,
              obteniendo el certificado de Front-End Developer de Meta, validado
              por Coursera. Sigo comprometido con el aprendizaje continuo y
              emocionado por seguir explorando nuevas tecnologías en este
              apasionante campo del desarrollo web.
            </Typography>
          </CardBody>
        </Fade>
      </Card>
    </div>
  );
}
export default HorizontalCard3;
