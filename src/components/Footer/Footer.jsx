import React from "react";
import "./Footer.css";

import {
  SiGithub,
SiLinkedin,
SiHashnode,
SiWhatsapp,
SiInstagram
} from "react-icons/si";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/malik-muneeb-asghar-50a886244/">
            <SiLinkedin className="icons" />
          </a>
        <a href="https://github.com/MuneebProblemSolver/">
            <SiGithub className="icons" />
          </a>
          <a href="https://muneebcloudeng.hashnode.dev/">
            <SiHashnode className="icons" />
          </a>

          <a href=" https://wa.me/+923084198014">
            <SiWhatsapp className="icons" />
          </a>
          <a href="https://www.instagram.com/munib._27/">
            <SiInstagram className="icons" />
          </a>

        </div>

        <span>
         Made with ♥️ by <b>Malik Muneeb Asghar</b></span> <br />
      </div>
    </div>
  );
};

export default Footer;
