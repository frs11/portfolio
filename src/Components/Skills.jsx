import htmllogo from "../assets/Skills icons/html5.svg";
import csslogo from "../assets/Skills icons/icons8-css3.svg";
import jslogo from "../assets/Skills icons/icons8-javascript.svg";
import reactlogo from "../assets/Skills icons/reactjs.png";
import tailwindlogo from "../assets/Skills icons/icons8-tailwind-css.svg";
import nodelogo from "../assets/Skills icons/nodejs.png";
import expresslogo from "../assets/Skills icons/express with bg.png";
import mongologo from "../assets/Skills icons/mongpdb.png";
import firebaselogo from "../assets/Skills icons/firebase.png";
import jwtlogo from "../assets/Skills icons/icons8-jwt.svg";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import GradientText from "./GradientText";

const Skills = () => {
  const Skills = [
    {
      logo: htmllogo,
      title: "Html5",
    },
    {
      logo: csslogo,
      title: "CSS3",
    },
    {
      logo: jslogo,
      title: "JavaScript",
    },
    {
      logo: reactlogo,
      title: "ReactJs",
    },
    {
      logo: tailwindlogo,
      title: "Tailwind",
    },
    {
      logo: nodelogo,
      title: "NodeJs",
    },
    {
      logo: mongologo,
      title: "MongoDB",
    },
    {
      logo: expresslogo,
      title: "ExpressJs",
    },
    {
      logo: firebaselogo,
      title: "Firebase",
    },
    {
      logo: jwtlogo,
      title: "JWT",
    },
  ];
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

  return (
    <div id="skills" className="w-11/12 md:w-10/12 py-20 mx-auto">
      <p className="text-2xl md:text-4xl text-center my-2 md:my-10 font-Orbitron font-medium text-cyan-300">
        <span className=" border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
          <GradientText text={"Skills"}></GradientText>
        </span>
      </p>
      {/* <div className="grid grid-cols-5 gap-4"> */}
      <div className="flex flex-row flex-wrap justify-center items-center">
        {Skills.map((skill, idx) => (
          <div
            data-aos="flip-right"
            key={idx}
            className="w-20 h-20 hover:w-24 hover:h-24 px-2 py-2 m-4 hover:my-2 hover:mx-2 border bg-cyan-900 bg-opacity-20 text-cyan-500 hover:text-cyan-300 border-cyan-600 hover:border-cyan-400 rounded-md duration-1000"
          >
            <img className="w-full h-full" src={skill.logo} alt="" />
            <p className="mt-3 text-sm lg:text-base text-center">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
