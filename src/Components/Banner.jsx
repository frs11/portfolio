import DownloadResumeButton from "./DownloadResumeButton";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div className="headerbg flex flex-col-reverse md:flex-row justify-around pt-6 md:h-[550px]">
      <div className="md:w-1/2 py-20 flex justify-center items-center text-slate-100">
        <div className="px-16 md:px-12 lg:px-20">
          <p>Hi, I'm</p>
          <p className="text-4xl my-2 font-Orbitron font-medium text-cyan-300">
            Fayezur Rahman
          </p>
          <p className="font-Rajdhani my-2 text-cyan-400 text-lg">
            a Junior Font-end Developer
          </p>
          <p className="mt-5 mb-10 text-slate-300">
            Weaving creativity into code to build stunning and intuitive user
            interfaces. Passionate about the artistry of front-end development.
            Specializing in responsive and user-centric design. Bringing
            websites to life with a focus on accessibility and an eye for
            detail.
          </p>
          <DownloadResumeButton></DownloadResumeButton>
        </div>
      </div>
      <div className="md:w-1/2 h-full mx-auto">
        <img
          className="h-full mx-auto"
          src="https://i.ibb.co/FWstzZW/hand-cross-removebg-preview.png"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Banner;
