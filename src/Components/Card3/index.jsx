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

export function HorizontalCard3() {
  return (
    <div className="flex justify-center items-center  bg-indigo-500">
      <Card className="w-full max-w-[70rem] h-[30rem] flex-row shadow-3xl bg-blue-400">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <div className="relative w-500px h-500px">
            

            <h1 className="absolute animate-circle">Título 2</h1>
            <h1 className="absolute animate-circle">Título 3</h1>
          </div>
        </CardHeader>
        <CardBody>
          <Typography className="mt-20 font-poppins text-3xl">
            Tecnologías
          </Typography>
          <Typography
            variant="h1"
            className="mb-4 mt-4 font-poppins text-white font-bold text-5xl"
          >
            Aprendizaje Constante
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Mi trayecto en el mundo del desarrollo web ha sido emocionante y
            lleno de aprendizaje. Comencé con las bases: HTML para la
            estructura, CSS para el diseño y JavaScript para la interactividad.
            Luego, avancé hacia librerías como React, que me han permitido crear
            aplicaciones más dinámicas. Además, he explorado herramientas como
            Tailwind y Bootstrap para agilizar el desarrollo. En el ámbito de la
            gestión de versiones, me familiaricé con Git y Github para control
            de versiones y colaboración en proyectos. He complementado mi
            aprendizaje con certificaciones de plataformas como Udemy, Platzi y
            Codecademy, obteniendo el certificado de Front-End Developer de
            Meta, validado por Coursera. Sigo comprometido con el aprendizaje
            continuo y emocionado por seguir explorando nuevas tecnologías en
            este apasionante campo del desarrollo web.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
export default HorizontalCard3;
