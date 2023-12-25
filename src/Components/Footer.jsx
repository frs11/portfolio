import logo from "../assets/Logo 1.png";
const Footer = () => {
  return (
    <div className="px-6 md:px-11 py-6 bg-slate-950 bg-opacity-80 border-t-[1px] border-gray-700">
      <div className="px-10 my-5 flex justify-between">
        <img className="w-12" src={logo} alt="" />
        <p className="text-slate-500">Copyright © 2023 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
