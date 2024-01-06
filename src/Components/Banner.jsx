import DownloadResumeButton from "./DownloadResumeButton";
import { TypeAnimation } from "react-type-animation";
/* eslint-disable react/no-unescaped-entities */
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import GradientText from "./GradientText";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 150,
    });
    AOS.init({
      startEvent: "onReveal",
    });
    AOS.refresh();

    return AOS.refreshHard();
  }, []);
  const bio = (
    <>
      Weaving creativity into code to build stunning and intuitive user
      interfaces. Passionate about the artistry of front-end development.
      Specializing in responsive and user-centric design. Bringing websites to
      life with a focus on accessibility and an eye for detail.
    </>
  );
  return (
    <div className=" flex flex-col-reverse md:flex-row md:justify-around lg:h-[550px]">
      <div className="w-10/12 md:w-1/2 flex justify-center items-center mx-auto py-5 md:py-6 lg:py-10 text-slate-100">
        <div className="px-2 md:px-8 lg:px-20">
          <p className="text-base md:text-xl font-Rivage">Hi, I'm</p>
          <p
            data-aos="zoom-in"
            className="text-2xl md:text-3xl lg:text-5xl my-2 md:my-4 font-Orbitron font-medium"
          >
            <GradientText text={"Fayezur Rahman"}></GradientText>
          </p>
          <TypeAnimation
            className="font-Rajdhani font-semibold my-2 md:my-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600 text-lg lg:text-lg"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "a Junior Font-end Developer",
              1000,
              "a Junior React Developer",
              1000,
              "a Junior MERN-stack Developer",
              1000,
              "a graduated CSE Student",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          ></TypeAnimation>

          <p
            data-aos="flip-down"
            className="my-5 md:mb-7 text-sm md:text-base text-slate-300"
          >
            <GradientText text={bio}></GradientText>{" "}
          </p>
          <DownloadResumeButton></DownloadResumeButton>
        </div>
      </div>
      <div className="w-3/4 py-5 md:w-1/2 h-full mx-auto">
        <img
          data-aos="zoom-in"
          className="h-[90%] border-2 border-cyan-300 rounded-full mb-0 mx-auto"
          // src="https://i.ibb.co/FWstzZW/hand-cross-removebg-preview.png"
          src="https://i.ibb.co/d71rcQS/Portfolio-Image-min.png"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Banner;
