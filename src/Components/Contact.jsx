import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="w-11/12 lg:w-8/12 mx-auto mb-5 border border-cyan-900 bg-slate-900 bg-opacity-30 rounded-lg text-white px-5 py-4"
    >
      <p className="text-2xl md:text-4xl text-center my-2 md:my-10 font-Orbitron font-medium text-cyan-300">
        <span className=" border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
          Contact
        </span>
      </p>
      <div className="flex flex-col md:flex-row mx-auto py-2 px-3 justify-around items-center md:mt-12">
        <div className="w-full py-5 px-3 md:w-1/2">
          <p className="text-2xl md:text-3xl text-slate-200 font-thin mb-10 flex items-center justify-center md:justify-start">
            Lets stay Connected{" "}
            <FaHandHoldingHeart className="ml-2 text-cyan-400"></FaHandHoldingHeart>{" "}
          </p>
          <div className="flex justify-center md:justify-start px-5 my-5 space-x-3 text-center">
            <a
              href="https://github.com/frs11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl text-slate-400 hover:text-white"></FaGithub>
              {/* <img src={github} alt="" /> */}
            </a>
            <a
              href="https://www.linkedin.com/in/fayezur-rahman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl text-slate-400 hover:text-white"></FaLinkedin>
              {/* <img src={linkedin} className="w-[50px]" alt="" /> */}
            </a>
            <a
              href="https://www.facebook.com/fayezurrahman017"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-4xl text-slate-400 hover:text-white"></FaFacebookSquare>
              {/* <img src={facebook} className="w-[50px]" alt="" /> */}
            </a>
            <a
              href="mailto:fayezurrahman017@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <IoIosMail className="text-4xl"></IoIosMail> */}
              <IoMailSharp className="text-4xl text-slate-400 hover:text-white"></IoMailSharp>
              {/* <img src={facebook} className="w-[50px]" alt="" /> */}
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="px-5 py-5 my-5 bg-slate-950 w-full md:w-1/2 rounded-lg opacity-70"
        >
          <label className="block text-slate-300">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 px-2 py-1 placeholder:text-sm rounded bg-slate-700 bg-opacity-70"
            name="user_name"
          />{" "}
          <br />
          <label className="block text-slate-300">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full mb-3 px-2 py-1 placeholder:text-sm rounded bg-slate-700 bg-opacity-70"
            name="user_email"
          />{" "}
          <br />
          <label className="block text-slate-300">Message</label>
          <textarea
            name="message"
            placeholder="Type your message"
            className="w-full mb-3 px-2 py-1 placeholder:text-sm rounded bg-slate-700 bg-opacity-70"
          />{" "}
          <br />
          <input
            className="px-3 py-2 my-5 border border-cyan-500 rounded-md"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
