import React from "react";
import "./Reasons.css";
import image1 from "../../assets/about1_processed.jpg";
import tick from "../../assets/ticketPink.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="img-icon" />
      </div>
      <div className="right-r">
        <span>Who I am?</span>

        <div>
          <span className="stroke-text">About </span>
          <span>Me</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="img-icon"></img>
            <span className="span-home">
              I am a Software Engineer currently building delightful experiences
              at The Logic Lounge. <br></br> <br></br>
            </span>
          </div>
          <div>
            <img src={tick} alt="img-icon"></img>
            <span className="span-home">
              I focus on crafting high-performance, well-engineered, and elegant
              applications. I have experience developing beautiful, efficient,
              and scalable front-end and back-end services for enterprise
              applications, delivering applications which users love to use.
            </span>
          </div>
          <div>
            <img src={tick} alt="img-icon"></img>
            <span className="span-home">
              I am eager to contribute my skills and knowledge to your
              organization and help drive its success. I am available for
              freelance or full-time opportunities. Let's work together to
              achieve your business goals.
            </span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Reasons;
