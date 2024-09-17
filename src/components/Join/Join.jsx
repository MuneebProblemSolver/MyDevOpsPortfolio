import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lcyqm4m",
        "template_uu4llsa",
        form.current,
        "BlaQhUjtRdx2co23B"
      )
      .then(
        (success) => {
          console.log(success);
          toast.success("Message sent successfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error);
          toast.error("Error sending message, please try again", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Get in</span>
          <span>touch with me</span>
        </div>

        <p>
          <b>Ready to bring your project to life?</b> Contact me to discuss your
          goals and explore how I can contribute to your success.
        </p>
        <p>
          <b>Have a project in mind?</b> Drop me a line at{" "}
          <b>
            <a className="atag" href="mailto:muneebmaliktechie@gmail.com">
              muneebmaliktechie@gmail.com
            </a>
          </b>
        </p>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action="true"
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email Address"
          /> 
          <input
            type="text"
            name="user_message"
            placeholder="Message"
          />

          <button className="btn btn-j" action="true">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Join;