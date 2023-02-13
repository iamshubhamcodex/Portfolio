import React from "react";
import "../CSS/about.css";

const About = (props) => {
  return (
    <>
      <div className="about" id={props.id}>
        <div className="aboutMe">
          <h1>About Me</h1>
          <h3>Hi There,</h3>
          <p>
            <span className="space"></span>I am Shubham Singh, B.Tech. CSE
            student at LNCT Jabalpur College. <br />
            <br />
            I have a keen interest in Web Development, thus as a result I have
            learnt HTML, CSS, JavaScript. <br />
            <br />
            To go on to next level, I have also learnt Libraries like ReactJS
            with ViteJS. <br />
            <br />I also some of Online Project on this site. That I have
            developed to test my Knowledge
            <span className="thank">:-Thank You for your Time</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
