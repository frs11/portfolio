import { useRef } from "react";
import emailjs from "@emailjs/browser";
import facebook from "../assets/social icon/icons8-facebook.svg";
import github from "../assets/social icon/icons8-github.svg";
import linkedin from "../assets/social icon/icons8-linkedin.svg";

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
      className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto bg-slate-800 bg-opacity-50 rounded-lg text-white px-5 py-4  border border-red-700"
    >
      <p className="text-2xl md:text-4xl text-center my-2 md:my-10 font-Orbitron font-medium text-cyan-300">
        <span className=" border-b-2 border-cyan-300 px-2 py-1 rounded-lg">
          Contact
        </span>
      </p>
      <div className="flex justify-around items-center mt-10 border border-red-700">
        <div>
          <p>Lets stay Connected </p>
          <div className="flex justify-center my-5 space-x-2 text-center">
            <a
              href="https://github.com/frs11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="w-[50px]" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/fayezur-rahman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="w-[50px]" alt="" />
            </a>
            <a
              href="https://www.facebook.com/fayezurrahman017"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} className="w-[50px]" alt="" />
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="px-5 py-3 bg-slate-950 rounded-lg opacity-70"
        >
          <label>Name</label>
          <input type="text" name="user_name" /> <br />
          <label>Email</label>
          <input type="email" name="user_email" /> <br />
          <label>Message</label>
          <textarea name="message" /> <br />
          <input
            className="px-3 py-1 my-5 border border-cyan-500  rounded-md"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
