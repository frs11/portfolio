/* eslint-disable react/prop-types */
import { FaCode } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";
import { BsFillSignTurnRightFill } from "react-icons/bs";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import GradientText from "./GradientText";
import GradientDesc from "./GradientDesc";

const Project = ({ project }) => {
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
    <div
      data-aos="zoom-in-down"
      className="bg-slate-800 bg-opacity-50 rounded-lg"
    >
      <div className="relative">
        <p className="flex absolute rounded-t-lg h-full w-full z-10 opacity-0 hover:opacity-100 bg-black bg-opacity-60 justify-center items-center text-white duration-300 ease-in-out">
          <a rel="noreferrer" href={project.liveLink} target="_blank">
            <VscEye className=" text-3xl hover:text-cyan-400"></VscEye>
          </a>
          <a rel="noreferrer" href={project.repoLink} target="_blank">
            <FaCode className="text-3xl ml-5 hover:text-cyan-400"></FaCode>
          </a>
        </p>
        <img
          className="h-[250px] mx-auto p-2 rounded-t-lg"
          src={project.image}
          alt={` ${project.title} Image`}
        />
      </div>
      <div className="px-5 py-3">
        <p className="flex items-center font-Rajdhani font-semibold mb-5 text-xl">
          <BsFillSignTurnRightFill className="mr-1 text-cyan-400"></BsFillSignTurnRightFill>
          <GradientText text={project.title}></GradientText>
        </p>
        <p className="mb-6">
          <GradientDesc text={project.description}></GradientDesc>{" "}
        </p>
      </div>
    </div>
  );
};

export default Project;
