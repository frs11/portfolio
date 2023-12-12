import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <h1 className="rounded-lg px-4 hover:border-b-2 border-b-2 border-b-slate-800 hover:text-white hover:border-cyan-100 duration-100 ease-in-out">
        Home
      </h1>
      <h1 className="rounded-lg px-4 hover:border-b-2 border-b-2 border-b-slate-800 hover:text-white hover:border-cyan-100 duration-100 ease-in-out">
        About
      </h1>
      <h1 className="rounded-lg px-4 hover:border-b-2 border-b-2 border-b-slate-800 hover:text-white hover:border-cyan-100 duration-100 ease-in-out">
        Projects
      </h1>
      <h1 className="rounded-lg px-4 hover:border-b-2 border-b-2 border-b-slate-800 hover:text-white hover:border-cyan-100 duration-100 ease-in-out">
        Contact
      </h1>
    </>
  );
  const dropdownLinks = (
    <>
      <h1 className="rounded-lg px-4 bg-slate-800 text-white my-2 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out">
        Home
      </h1>
      <h1 className="rounded-lg px-4 bg-slate-800 text-white my-2 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out">
        About
      </h1>
      <h1 className="rounded-lg px-4 bg-slate-800 text-white my-2 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out">
        Projects
      </h1>
      <h1 className="rounded-lg px-4 bg-slate-800 text-white my-2 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out">
        Contact
      </h1>
    </>
  );
  return (
    <div className="navbar shadow-lg w-full bg-slate-800 md:px-12 mx-auto">
      <div className="navbar-start">
        <div>
          <span className="flex items-center">
            <img
              className="w-12"
              src="https://i.ibb.co/5R5LR93/Logo-1.png"
              alt=""
            />
          </span>
        </div>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div
          className="dropdown dropdown-end md:hidden"
          onClick={() => setOpen(!open)}
        >
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={` dropdown-content mt-3 p-2 z-[1] ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg w-[120px]`}
          >
            {dropdownLinks}
          </ul>
        </div>
        <div className="hidden md:flex">{links}</div>
      </div>
    </div>
  );
};

export default Navbar;
