import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/pp_processed.jpeg";
import reactImg from "../../assets/k8s.png";
import Node from "../../assets/nodejs-logo.png";
import { Link } from "react-scroll";
import {
SiLinkedin,

} from "react-icons/si";


const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <span>Hello, I'm Malik Muneeb Asghar</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Custom Software Developer &</span>
            <br />
            <br />
            <span>DevOps Engineer</span>
          </div>
          <div>
            <span> </span>
          </div>
          <div>
            <span>
            I create powerful and delightful web products. I'm a Software Engineer currently building exceptional softwares with 🤍 at <b>The Logic Lounge</b>. Crafting scalable and efficient web, mobile, and custom applications using React, Node.js, JavaScript, and cloud-native technologies, leveraging DevOps tools like Docker, Kubernetes, and CI/CD pipelines.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+3</span>
            <span>In Development Career</span>
          </div>
          <div>
            <span>+30</span>
            <span>Projects on Github</span>
          </div>
          <div>
            <span>+15</span>
            <span>Freelancer Jobs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">
            <a href="mailto:muneebmaliktechie@gmail.com"> Get a Quote now </a>
          </button>
          <button className="btn"> 
          <SiLinkedin className="icons" /> 
            <a href="https://www.linkedin.com/in/malik-muneeb-asghar-50a886244/">LinkedIn</a>
          </button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
    
          <Link  to="footer" smooth={true}>
            Get in touch
            </Link>
        </button>

        <div className="heart-rate">
          <img src={reactImg} alt="img-react" />
          <span>Container Orchestration</span>
          <span>Kubernetes</span>
        </div>

        <img src={hero_image} alt="img-hero" className="hero-image"></img>

        <div className="node">
          <img src={Node} alt="img-node"></img>
          <div>
            <span>Back-End</span>
            <span>NodeJs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
