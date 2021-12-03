import React from "react";

import Menu from "../utils/Menu";
import Background from "../utils/Background";

const About = () => {
  return (
    
      <div className="about">
        <Background></Background>
        <Menu page="about" />

        <div className="about__wrapper">
          <div className="title">About me</div>
          <div className="about__content">
            &emsp;&emsp;Hello everyone, I'm Chien Bui.
            <br></br>
            <br></br>&emsp;&emsp;I'm a senior student at ITMO (Information
            Technologies, Mechanics and Optics) university in St.Petersburg,
            Russia.
            <br></br>&emsp;&emsp; I'm majoring in programming and internet technologies. I'm
            highly interested in JavaScript, therefore I'm learning Front-end
            developments  looking forward to becoming a Front-end web designer. To gain more skills, I'm joining web projects and internships
            <br></br>
            <br></br>&emsp;&emsp;Here, I write about daily life activities.
            Please check out my blogs and my social media.
          </div>
        </div>
      </div>
    
  );
};

export default About;
