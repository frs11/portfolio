import htmllogo from "../assets/Skills icons/html5.svg";
import csslogo from "../assets/Skills icons/icons8-css3.svg";
import jslogo from "../assets/Skills icons/icons8-javascript.svg";
import reactlogo from "../assets/Skills icons/reactjs.png";
import tailwindlogo from "../assets/Skills icons/icons8-tailwind-css.svg";
import nodelogo from "../assets/Skills icons/nodejs.png";
import expresslogo from "../assets/Skills icons/icons8-express-js.svg";
import mongologo from "../assets/Skills icons/mongpdb.png";
import firebaselogo from "../assets/Skills icons/firebase.png";
import jwtlogo from "../assets/Skills icons/icons8-jwt.svg";
const Skills = () => {
  const Skills = [
    htmllogo,
    csslogo,
    jslogo,
    reactlogo,
    tailwindlogo,
    nodelogo,
    expresslogo,
    mongologo,
    firebaselogo,
    jwtlogo,
  ];
  return (
    <div className="w-11/12 md:w-10/12 py-20 mx-auto">
      <p className="text-2xl md:text-3xl text-center my-2 md:my-10 font-Orbitron font-medium text-cyan-300">
        Skills
      </p>
      {/* <div className="grid grid-cols-5 gap-4"> */}
      <div className="flex flex-row flex-wrap justify-center items-center">
        {Skills.map((skill, idx) => (
          <div
            key={idx}
            className="w-20 h-20 px-2 py-2 m-3 border border-cyan-600 rounded-md"
          >
            <img className="w-full" src={skill} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
