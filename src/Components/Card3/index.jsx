import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import "../../App.css";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import Tecnologias from "../Tecnologías";
import { FormattedMessage } from "react-intl";

export function HorizontalCard3({ experienciaRef }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div className="flex justify-center   bg-indigo-500" ref={experienciaRef}>
      <Card className=" max-w-[70rem] md:h-[40rem] md:flex-row shadow-3xl z-20 md:z-40 bg-blue-400 overflow-hidden">
        <CardHeader
          shadow={false}
          floated={false}
          className=" bg-blue-400  md:w-2/5  rounded-r-none"
        ></CardHeader>
        <Fade
          direction="right"
          triggerOnce={false}
          duration="500"
          opposite={true}
          when={inView}
        >
          <CardBody className="flex flex-col items-center justify-center">
            <Fade
              direction="right"
              triggerOnce={false}
              duration="500"
              opposite={true}
              when={inView}
            >
              <Typography
                variant="h1"
                className="mb-4 mt-4 font-raleway text-white font-bold text-4xl md:text-5xl"
              >
                <FormattedMessage id="technologies" />
              </Typography>
              <Tecnologias />
            </Fade>

            <Typography
              color="gray"
              className="mb-8 font-normal text-black font-raleway text-left"
            >
              <FormattedMessage id="tecnologiastext" />
            </Typography>
          </CardBody>
        </Fade>
      </Card>
    </div>
  );
}
export default HorizontalCard3;
