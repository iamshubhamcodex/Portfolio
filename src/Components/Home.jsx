import React from "react";
import "../CSS/home.css";
// import avatar from "../Home/Assets/Avtar.png";
// import { Link } from "react-scroll";

const Home = (props) => {
  return (
    <>
      <div className="content" id={props.id}>
        <div className="greet">
          <h1>Hello EveryOne,</h1>
          <h3>
            I’m <span>Shubham</span> <span>Singh</span>
          </h3>
          <p className="idk">
            I'm pursuing <span>B. Tech. CSE</span>
          </p>
          <p className="btn">About Me</p>
          <div className="icons">
            <a
              target="blank"
              href="https://linkedin.com/in/iamshubhamcodex"
              className="icon"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="blank"
              href="https://github.com/iamshubhamcodex"
              className="icon"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              target="blank"
              href="https://instagram.com/shubhamcodx"
              className="icon"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="avtar">
          <img src="/Avatar.png" alt="Avatar" />
        </div>
      </div>
    </>
  );
};

export default Home;
