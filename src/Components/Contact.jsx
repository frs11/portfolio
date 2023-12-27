/* eslint-disable react/no-unescaped-entities */
import facebook from "../assets/social icon/icons8-facebook.svg";
import github from "../assets/social icon/icons8-github.svg";
import linkedin from "../assets/social icon/icons8-linkedin.svg";

const Contact = () => {
  return (
    <div id="contact" className="w-10/12 mx-auto mb-10">
      <p className="text-2xl md:text-4xl text-center my-2 md:my-10 font-Orbitron font-medium text-cyan-300">
        <span className=" border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
          Contact
        </span>
      </p>
      <div className="w-5/6 md:w-1/2 mx-auto bg-slate-600 bg-opacity-40 px-5 py-4 rounded-lg text-center">
        <p className="text-xl md:text-3xl text-slate-200">
          Let's stay connected{" "}
        </p>
        <div className="flex justify-center my-5 space-x-2 text-center">
          <a
            href="https://github.com/frs11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="w-[50px]" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/fayezur-rahman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="w-[50px]" alt="" />
          </a>
          <a
            href="https://www.facebook.com/fayezurrahman017"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} className="w-[50px]" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
