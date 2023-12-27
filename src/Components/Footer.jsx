import logo from "../assets/Logo 1.png";
const Footer = () => {
  return (
    <div className="px-6 md:px-11 pt-6 bg-slate-950 bg-opacity-80 border-t-[1px] border-gray-700">
      <div className="px-2 md:px-10 flex flex-col md:flex-row items-center justify-between">
        <img className="w-12" src={logo} alt="" />
        <p className="text-slate-500 text-sm md:text-base mt-5 md:mt-0">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
