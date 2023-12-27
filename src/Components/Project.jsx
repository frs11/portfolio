/* eslint-disable react/prop-types */
import { FaCode } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";

const Project = ({ project }) => {
  return (
    <div className="bg-gradient-to-tr from-slate-900 to-slate-600 rounded-lg">
      <div className="relative">
        <p className="flex absolute rounded-t-lg h-full w-full z-10 opacity-0 hover:opacity-100 bg-black bg-opacity-60  justify-center items-center text-white duration-100 ease-in-out">
          <a rel="noreferrer" href={project.liveLink} target="_blank">
            <VscEye className=" text-3xl hover:text-cyan-400"></VscEye>
          </a>
          <a rel="noreferrer" href={project.repoLink} target="_blank">
            <FaCode className="text-3xl ml-5 hover:text-cyan-400"></FaCode>
          </a>
        </p>
        <img
          className="h-[250px] -z-50 rounded-t-lg"
          src={project.image}
          alt={` ${project.title} Image`}
        />
      </div>
      <div className="px-5 py-3">
        <p className="text-white mb-3 text-lg">{project.title}</p>
        <p className="mb-6">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
