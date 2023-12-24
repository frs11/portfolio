/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div
      id="about"
      className="headerbg flex flex-col-reverse md:flex-row md:justify-around lg:h-[550px]"
    >
      <div className="w-3/4 py-5 md:py-0 md:w-1/2 h-full mx-auto">
        <img
          className="h-full mb-0 mx-auto"
          // src="https://i.ibb.co/FWstzZW/hand-cross-removebg-preview.png"
          src="https://i.ibb.co/nsZmQhR/Portfolio-Image-1.png"
          alt="Image"
        />
      </div>
      <div className="w-10/12 md:w-1/2 flex justify-center items-center mx-auto px-4 md:px-0 py-5 md:py-6 lg:py-10 text-slate-100">
        <div className="px-2 md:px-8 lg:px-20">
          <p className="text-2xl md:text-3xl my-2 md:my-4 font-Orbitron font-medium text-cyan-300">
            About Me
          </p>
          <p className="my-5 md:mb-7 text-sm md:text-base text-slate-300 font-light">
            I'm a MERN Stack Developer who enjoys learning new technologies and
            writing JavaScript code. With expertise in React.js, Node.js,
            Express.js, and MongoDB, I'm passionate about developing scalable
            web applications. I'm constantly searching for fresh challenges and
            chances to progress as a developer.
          </p>
          <p className="text-sm md:text-base text-slate-300 font-light">
            I have completed
          </p>
          <TypeAnimation
            className="font-Rajdhani my-2 md:my-4 text-cyan-400 text-lg lg:text-lg"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "a Junior Font-end Developer",
              1000,
              "a Junior React Developer",
              1000,
              "a Junior MERN-stack Developer",
              1000,
              "an Undergraduate CSE Student",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          ></TypeAnimation>
        </div>
      </div>
    </div>
  );
};

export default About;
