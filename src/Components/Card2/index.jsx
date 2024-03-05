import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";

export function HorizontalCard2({ sobremiRef }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      className="flex justify-center rounded-xl items-center mb-40 bg-indigo-500"
      ref={sobremiRef}
    >
      <Card className="w-full max-w-[70rem] md:h-[30rem] flex-col md:flex-row shadow-3xl bg-blue-400 overflow-hidden z-20 md:z-40">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 bg-blue-400 w-full md:w-2/5 shrink-0 rounded-r-none"
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
              <Typography className="mt-4 md:mt-20 font-raleway text-black text-3xl md:text-3xl">
                <FormattedMessage id="quiensoytitulo" />
              </Typography>
            </Fade>
            <Typography
              variant="h1"
              className="mb-4 mt-4 font-raleway text-white font-bold text-4xl md:text-5xl"
            >
              <FormattedMessage id="sobremititulo" />
            </Typography>
            <Typography
              color="gray"
              className="mb-8 font-normal font-raleway text-black text-left"
            >
              <FormattedMessage id="QuienSoy" />
            </Typography>
          </CardBody>
        </Fade>
      </Card>
    </div>
  );
}
export default HorizontalCard2;
