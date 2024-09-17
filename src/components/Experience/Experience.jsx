import React from 'react';
import './Experience.css';
import image1 from '../../assets/exp.png';
import tick from '../../assets/ticketPink.png';

const Experience = () => {
  return (
    <div className="Reasons" id="experience">
     
      <div className="right-r">
        <span>Journey Highlights</span>

        <div>
          <span className="stroke-text">Some of my </span>
          <span>Experience</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="img-icon"></img>
            <span className="span-home">
              Software Engineer
              at <b>The Logic Lounge</b><br />
              Jan 2024 - Present<br></br> <br /> 
            </span>
          </div>
          <div>
            <img src={tick} alt="img-icon"></img>
            <span className="span-home">
              Software Engineer Intern
              at <b>NetSol Technologies</b><br /> 
              Aug 2023 - Nov 2023 <br></br> <br />
            </span>
          </div> 
          <div>
            <img src={tick} alt="img-icon"></img>
            <span className="span-home">
            Technical Support Engineer 
              at <b>Elite Techlogix</b><br />
              Jan 2023 - Aug 2023 <br></br> <br />
            </span>
          </div>
          <div>
            <img src={tick} alt="img-icon"></img>
            <span className="span-home">
          Vice President 
              at <b>Artificial Intelligence Community Pakistan</b><br />
              Dec 2023 - Present <br></br>  <br />
            </span>
          </div>
          
        </div>
      </div>
      <div className="left-r">
        <img src={image1} alt="img-icon" />
      </div>
    </div>
    
  );
};

export default Experience;