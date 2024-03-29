import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Swal from "sweetalert2";
import GradientText from "./GradientText";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 130,
    });
    AOS.init({
      startEvent: "onReveal",
    });
    AOS.refresh();

    return AOS.refreshHard();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lsvup1e",
        "template_ii0pan6",
        form.current,
        "Ki5fP7GvE1-dWNqH9"
      )
      .then(
        (res) => {
          if (res.status == 200 && res.text == "OK") {
            Swal.fire({
              title: "Message sent successfully!",
              text: "You will get a reply as soon as possible",
              icon: "success",
            });
            e.target.reset();
          }
        },
        (err) => {
          console.log(err);
          Swal.fire({
            title: "Message sending failed!",
            text: "Please try again",
            icon: "error",
          });
          e.target.reset();
        }
      );
  };
  const linksStyle =
    "text-2xl lg:text-3xl text-cyan-500 hover:text-cyan-300 hover:animate-pulse";
  const socialIconContainerStyle = "border border-cyan-600 rounded-full p-1.5";
  return (
    <div
      id="contact"
      className="w-11/12 lg:w-8/12 mx-auto my-8 border border-cyan-900 bg-slate-900 bg-opacity-30 rounded-lg text-white px-5 py-4"
    >
      <p className="text-2xl md:text-4xl text-center my-2 md:my-10 font-Orbitron font-medium text-cyan-300">
        <span className=" border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
          <GradientText text={"Contact Me"}></GradientText>
        </span>
      </p>
      <div className="flex flex-col md:flex-row mx-auto py-2 px-3 justify-around items-center md:mt-12">
        <div className="w-full py-5 px-3 md:w-1/2" data-aos="zoom-in">
          <p className="text-2xl md:text-3xl text-center md:text-left font-medium">
            <GradientText text={"Lets stay"}></GradientText>
          </p>
          <p className="text-4xl md:text-5xl font-thin mt-2 mb-12 flex items-center justify-center md:justify-start">
            <GradientText text={"Connected"}></GradientText>
            <FaHandHoldingHeart className="ml-2 text-cyan-400"></FaHandHoldingHeart>
          </p>
          <div className="flex justify-center md:justify-start px-5 my-5 space-x-3 text-center">
            <div className={socialIconContainerStyle}>
              <a
                href="https://github.com/frs11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={linksStyle}></FaGithub>
              </a>
            </div>
            <div className={socialIconContainerStyle}>
              <a
                href="https://www.linkedin.com/in/fayezur-rahman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={linksStyle}></FaLinkedin>
              </a>
            </div>
            <div className={socialIconContainerStyle}>
              <a
                href="https://www.facebook.com/fayezurrahman017"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className={linksStyle}></FaFacebookSquare>
              </a>
            </div>
            <div className={socialIconContainerStyle}>
              <a
                href="mailto:fayezurrahman017@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMailSharp className={linksStyle}></IoMailSharp>
              </a>
            </div>
            <div className={socialIconContainerStyle}>
              <a
                href="tel:+8801627245757"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className={linksStyle}></FaWhatsapp>
              </a>
            </div>
          </div>
        </div>
        <p className="md:hidden pt-5 pb-2 text-xl text-cyan-300">
          Leave a message
        </p>
        <form
          data-aos="zoom-in"
          ref={form}
          onSubmit={sendEmail}
          className="px-5 py-5 bg-slate-950 w-full md:w-1/2 rounded-lg bg-opacity-60"
        >
          <label className="block text-slate-500">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full text-slate-400 mb-5 px-2 py-1 placeholder:text-sm placeholder:text-slate-500 rounded bg-slate-800 bg-opacity-70"
            name="user_name"
            required
          />{" "}
          <br />
          <label className="block text-slate-500">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full text-slate-400 mb-5 px-2 py-1 placeholder:text-sm placeholder:text-slate-500 rounded bg-slate-800 bg-opacity-70"
            name="user_email"
            required
          />{" "}
          <br />
          <label className="block text-slate-500">Message</label>
          <textarea
            name="message"
            placeholder="Type your message"
            className="w-full text-slate-400 px-2 py-1 placeholder:text-sm placeholder:text-slate-500 rounded bg-slate-800 bg-opacity-70"
            required
          />{" "}
          <br />
          <div className="flex justify-center md:justify-start w-fit my-3 md:my-4 p-[1px] bg-gradient-to-br from-cyan-400 to-blue-700 rounded">
            <button
              className="px-3 py-2 cursor-pointer border-2 border-slate-900 rounded bg-slate-900 hover:bg-gradient-to-r from-cyan-600 to-blue-800 duration-200 text-cyan-300 font-Rajdhani"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
