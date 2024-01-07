/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/Logo/Logo 1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linksStyles =
    "rounded-lg cursor-pointer px-4 text-slate-300 border-b-2 border-b-transparent hover:text-cyan-300 hover:border-b-cyan-400 duration-100 ease-in-out";

  const dropdownLinksStyles =
    "rounded-lg px-4 bg-slate-800 text-white hover:text-cyan-300 my-2 hover:border-b-2 cursor-pointer hover:border-cyan-300 duration-100 ease-in-out";

  const links = (
    <>
      <Link to="home" spy={true} smooth={true} className={linksStyles}>
        Home
      </Link>
      <Link to="about" spy={true} smooth={true} className={linksStyles}>
        About
      </Link>
      <Link to="skills" spy={true} smooth={true} className={linksStyles}>
        Skills
      </Link>
      <Link to="projects" spy={true} smooth={true} className={linksStyles}>
        Projects
      </Link>
      <Link to="contact" spy={true} smooth={true} className={linksStyles}>
        Contact
      </Link>
    </>
  );
  const dropdownLinks = (
    <>
      <Link to="home" spy={true} smooth={true}>
        <p className={dropdownLinksStyles}>Home</p>
      </Link>
      <Link to="about" spy={true} smooth={true}>
        <p className={dropdownLinksStyles}>About</p>
      </Link>
      <Link to="skills" spy={true} smooth={true}>
        <p className={dropdownLinksStyles}>Skills</p>
      </Link>
      <Link to="projects" spy={true} smooth={true}>
        <p className={dropdownLinksStyles}>Projects</p>
      </Link>
      <Link to="contact" spy={true} smooth={true}>
        <p className={dropdownLinksStyles}>Contact</p>
      </Link>
    </>
  );
  return (
    <div className="navbar shadow-lg w-full sticky top-0 z-50 bg-opacity-70 bg-slate-900 md:px-12 mx-auto">
      <div className="navbar-start">
        <div>
          <span className="flex items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true}>
              <img className="w-12" src={logo} alt="" />
            </Link>
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
            className={` dropdown-content mt-3 p-2 z-50 ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg w-[150px]`}
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
