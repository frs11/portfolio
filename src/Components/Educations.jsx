import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

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
    <div className="w-11/12 md:w-10/12 pt-10 mx-auto">
      <p className="text-2xl md:text-4xl text-center my-2 md:my-10 font-Orbitron font-medium text-cyan-300">
        <span className=" border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
          Educations
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 w-10/12 lg:w-full lg:grid-cols-3 mx-auto py-8 bg-opacity-40 rounded-lg bg-slate-950">
        {/* University */}
        <div className="px-5" data-aos="zoom-in">
          <p className="text-center text-cyan-200 border-b border-b-cyan-400 text-lg">
            University
          </p>
          <div className="text-cyan-100 mt-2">
            <p className="font-medium">
              Name:{" "}
              <span className="font-light text-cyan-200">
                Bangladesh University of Business & Technology, Dhaka
              </span>
            </p>
            <p className="font-medium my-1">
              Degree:{" "}
              <span className="font-light text-cyan-200">
                Bachelor of Science (BSc)
              </span>
            </p>
            <p className="font-medium mb-1">
              Subject:{" "}
              <span className="font-light text-cyan-200">
                Computer Science and Engineering(CSE)
              </span>
            </p>
            <p className="font-medium">
              Passing Year:{" "}
              <span className="font-light text-cyan-200">2024</span>
            </p>
          </div>
        </div>

        {/* College */}
        <div className="lg:border-x border-cyan-500 px-4" data-aos="fade-up">
          <div>
            <p className="text-center text-cyan-200 border-b border-b-cyan-400 text-lg">
              College
            </p>
            <div className="text-cyan-100 mt-2">
              <p className="font-medium">
                Name:{" "}
                <span className="font-light text-cyan-200">
                  Khan Bahadur Awlad Hossain Khan College, Manikganj
                </span>
              </p>
              <p className="font-medium my-1">
                Degree:{" "}
                <span className="font-light text-cyan-200">
                  Higher Secondery Certificate (HSC)
                </span>
              </p>
              <p className="font-medium mb-1">
                Subject:{" "}
                <span className="font-light text-cyan-200">Science</span>
              </p>
              <p className="font-medium">
                Passing Year:{" "}
                <span className="font-light text-cyan-200">2019</span>
              </p>
            </div>
          </div>
        </div>

        {/* School */}
        <div>
          <div className="px-5" data-aos="zoom-in">
            <p className="text-center text-cyan-200 border-b border-b-cyan-400 text-lg">
              School
            </p>
            <div className="text-cyan-100 mt-2">
              <p className="font-medium">
                Name:{" "}
                <span className="font-light text-cyan-200">
                  Manikganj Islamia Kamil Madrasah, Manikganj
                </span>
              </p>
              <p className="font-medium my-1">
                Degree:{" "}
                <span className="font-light text-cyan-200">
                  Secondery School Certificate (SSC)
                </span>
              </p>
              <p className="font-medium mb-1">
                Subject:{" "}
                <span className="font-light text-cyan-200">General</span>
              </p>
              <p className="font-medium">
                Passing Year:{" "}
                <span className="font-light text-cyan-200">2017</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
