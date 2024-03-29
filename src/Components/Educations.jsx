import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import GradientText from "./GradientText";

const Educations = () => {
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
    <div className="w-11/12 md:w-10/12 py-10 mx-auto">
      <p className="text-2xl md:text-4xl text-center my-2 md:my-10 mb-10 font-Orbitron font-medium text-cyan-300">
        <span className="border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
          <GradientText text={"Educations"}></GradientText>
        </span>
      </p>

      <div className="w-10/12 lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 mx-auto py-8 bg-opacity-60 border-2 border-dotted border-slate-800 rounded-lg bg-slate-950">
        {/* University */}
        <div className="px-5" data-aos="zoom-in">
          <p className="text-center text-cyan-300 border-b border-b-cyan-400 text-lg">
            University
          </p>
          <div className="text-cyan-300 mt-2">
            <p className="font-medium">
              Name:{" "}
              <span className="font-light text-cyan-400">
                Bangladesh University of Business & Technology, Dhaka
              </span>
            </p>
            <p className="font-medium my-1">
              Degree:{" "}
              <span className="font-light text-cyan-400">
                Bachelor of Science (BSc)
              </span>
            </p>
            <p className="font-medium mb-1">
              Subject:{" "}
              <span className="font-light text-cyan-400">
                Computer Science and Engineering(CSE)
              </span>
            </p>
            <p className="font-medium">
              Passing Year:{" "}
              <span className="font-light text-cyan-400">2024</span>
            </p>
          </div>
        </div>

        {/* College */}
        <div className="lg:border-x border-cyan-500 px-4" data-aos="fade-up">
          <div>
            <p className="text-center text-cyan-300 border-b border-b-cyan-400 text-lg">
              College
            </p>
            <div className="text-cyan-300 mt-2">
              <p className="font-medium">
                Name:{" "}
                <span className="font-light text-cyan-400">
                  Khan Bahadur Awlad Hossain Khan College, Manikganj
                </span>
              </p>
              <p className="font-medium my-1">
                Degree:{" "}
                <span className="font-light text-cyan-400">
                  Higher Secondery Certificate (HSC)
                </span>
              </p>
              <p className="font-medium mb-1">
                Subject:{" "}
                <span className="font-light text-cyan-400">Science</span>
              </p>
              <p className="font-medium">
                Passing Year:{" "}
                <span className="font-light text-cyan-400">2019</span>
              </p>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="w-full md:w-[65%] lg:w-full mx-auto md:col-span-2 lg:col-auto">
          <div className="px-5" data-aos="zoom-in">
            <p className="text-center text-cyan-300 border-b border-b-cyan-400 text-lg">
              School
            </p>
            <div className="text-cyan-300 mt-2">
              <p className="font-medium">
                Name:{" "}
                <span className="font-light text-cyan-400">
                  Manikganj Islamia Kamil Madrasah, Manikganj
                </span>
              </p>
              <p className="font-medium my-1">
                Degree:{" "}
                <span className="font-light text-cyan-400">
                  Secondery School Certificate (SSC)
                </span>
              </p>
              <p className="font-medium mb-1">
                Subject:{" "}
                <span className="font-light text-cyan-400">General</span>
              </p>
              <p className="font-medium">
                Passing Year:{" "}
                <span className="font-light text-cyan-400">2017</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
