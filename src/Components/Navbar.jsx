const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-800 px-10">
      <div>
        <img
          className="w-12"
          src="https://i.ibb.co/5R5LR93/Logo-1.png"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center space-x-12 text-white">
        <h1 className="rounded-lg px-4 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out">
          Home
        </h1>
        <h1 className="rounded-lg px-4 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out">
          About
        </h1>
        <h1 className="rounded-lg px-4 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out">
          Projects
        </h1>
        <h1 className="rounded-lg px-4 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out">
          Contact
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
