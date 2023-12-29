import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto flex justify-around items-center bg-slate-800 bg-opacity-50 rounded-lg text-white px-5 py-4"
    >
      <div>
        <p>Lets stay Connected </p>
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
  );
};

export default Contact;
