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
            I have learned Core Java, Advance Java Concepts, Java GUI (Swing
            Framework), DSA and Algorithm. <br />
            <br />I have solved many problems on HackerRank, HackerEarth website
            in Java and earned 5-star bedge. <br />
            <br />I also made many Projects on my own in Core Java, Java Swing
            and etc.<span className="thank">:-Thank You for your Time</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
