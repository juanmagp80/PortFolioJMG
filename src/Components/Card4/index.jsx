import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import SignupForm from "../Formulario";

import "../../App.css";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";

export function HorizontalCard4({ formRef }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      className="flex justify-center items-center min-h-screen xl:h-[52rem] mt-40  bg-indigo-500"
      ref={formRef}
    >
      <Card className=" max-w-[70rem] md:h-[42rem]  flex-col md:flex-row shadow-3xl bg-blue-400 overflow-hidden z-20 md:z-40">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 bg-blue-400  md:w-2/5 shrink-0 rounded-r-none"
        >
          <SignupForm />
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
              <Fade
                direction="left"
                triggerOnce={false}
                duration="1000"
                opposite={true}
                when={inView}
              >
                <img
                  src="./email.png"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </Fade>
            </Fade>
          </CardBody>
        </Fade>
      </Card>
    </div>
  );
}
export default HorizontalCard4;
