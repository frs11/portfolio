/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link
        to="home"
        spy={true}
        smooth={true}
        className="rounded-lg cursor-pointer px-4 hover:border-b-2 border-b-2 border-b-transparent hover:text-white hover:border-b-cyan-400 duration-100 ease-in-out"
      >
        Home
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        className="rounded-lg px-4 cursor-pointer hover:border-b-2 border-b-2 border-b-transparent hover:text-white hover:border-b-cyan-400 duration-100 ease-in-out"
      >
        About
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        className="rounded-lg px-4 hover:border-b-2 cursor-pointer border-b-2 border-b-transparent hover:text-white hover:border-b-cyan-400 duration-100 ease-in-out"
      >
        Projects
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        className="rounded-lg px-4 hover:border-b-2 border-b-2 cursor-pointer border-b-transparent hover:text-white hover:border-b-cyan-400 duration-100 ease-in-out"
      >
        Contact
      </Link>
    </>
  );
  const dropdownLinks = (
    <>
      <Link
        to="home"
        spy={true}
        smooth={true}
        className="rounded-lg px-4 bg-slate-800 text-white my-2 hover:border-b-2 cursor-pointer hover:border-cyan-100 duration-100 ease-in-out"
      >
        Home
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        className="rounded-lg px-4 bg-slate-800 text-white my-2 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out cursor-pointer"
      >
        About
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        className="rounded-lg px-4 bg-slate-800 text-white my-2 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out cursor-pointer"
      >
        Projects
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        className="rounded-lg px-4 bg-slate-800 text-white my-2 hover:border-b-2 hover:border-cyan-100 duration-100 ease-in-out cursor-pointer"
      >
        Contact
      </Link>
    </>
  );
  return (
    <div className="navbar shadow-lg w-full sticky top-0 bg-opacity-70 bg-slate-900 md:px-12 mx-auto">
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
