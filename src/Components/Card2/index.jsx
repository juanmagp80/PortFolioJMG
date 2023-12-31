import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

export function HorizontalCard2() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      ref={ref}
      className="flex justify-center items-center mb-40 bg-indigo-500"
    >
      <Card className="w-full max-w-[70rem] h-[30rem] flex-row shadow-3xl bg-blue-400 overflow-hidden">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <Fade
            direction="left"
            triggerOnce={false}
            duration="1000"
            opposite={true}
            when={inView}
          >
            <img
              src="./saludo.png"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </Fade>
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
              duration="1000"
              opposite={true}
              when={inView}
            >
              <Typography className="mt-20 font-poppins text-3xl">
                Quien Soy
              </Typography>
            </Fade>
            <Typography
              variant="h1"
              className="mb-4 mt-4 font-poppins text-white font-bold text-5xl"
            >
              Sobre mi
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Hola, soy Juanma. Apasionado de la programación web y el
              desarrollo Front-end, busco constantemente expandir mis
              habilidades en este fascinante campo. Además de la tecnología, mi
              corazón late al ritmo de la música; disfruto tocando varios
              instrumentos y explorando nuevos sonidos. Cuando no estoy inmerso
              en líneas de código, me sumerjo en el mundo del cine y las series,
              encontrando inspiración en cada historia para alimentar mi
              creatividad.
            </Typography>
          </CardBody>
        </Fade>
      </Card>
    </div>
  );
}
export default HorizontalCard2;
