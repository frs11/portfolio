/* eslint-disable react/no-unescaped-entities */
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-scroll";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import GradientText from "./GradientText";

const About = () => {
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
  const details = (
    <>
      "Passionate junior front-end developer adept at turning concepts into
      captivating digital interfaces. I thrive on staying at the forefront of
      tech trends. Eager to collaborate on groundbreaking projects and
      contribute to the evolving landscape of web development."
    </>
  );
  return (
    <div
      id="about"
      className=" flex flex-col-reverse md:flex-row md:justify-around lg:h-[550px]"
    >
      <div className="w-3/4 py-5 px-5 md:w-1/2 h-full mx-auto">
        <img
          data-aos="zoom-in-up"
          className="h-[90%] border-2 border-cyan-300 rounded-full mb-0 mx-auto"
          // className="h-[90%] mb-0 mx-auto border-2 rounded-full border-cyan-300"
          // src="https://i.ibb.co/FWstzZW/hand-cross-removebg-preview.png"
          src="https://i.ibb.co/jWGnHCK/Portfolio-Image-1-min-min.png"
          alt="Image"
        />
      </div>
      <div className="w-10/12 md:w-1/2 flex justify-center items-center mx-auto px-4 md:px-0 py-5 md:py-6 lg:py-10 text-slate-100">
        <div className="px-2 md:px-8 lg:px-20">
          <p className="text-2xl md:text-4xl my-2 md:my-4 font-Orbitron font-medium text-cyan-300">
            <span className=" border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
              <GradientText text={"About Me"}></GradientText>
            </span>
          </p>
          <p
            data-aos="flip-up"
            className="my-5 px-1 md:px-3 md:mb-8 text-sm md:text-base font-normal"
          >
            <GradientText text={details}></GradientText>
          </p>
          <p className="text-sm md:text-base mb-3 text-cyan-200 font-light">
            Connect with me
          </p>
          <Link to="contact" spy={true} smooth={true}>
            <button className="flex justify-center items-center border rounded-md border-cyan-400 hover:bg-cyan-400 hover:bg-opacity-60 text-base md:text-lg font-Rajdhani font-semibold  duration-150 ease-in-out text-white px-3 py-1 md:py-2">
              <FiPhoneCall className="mr-2"></FiPhoneCall>
              Connect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
