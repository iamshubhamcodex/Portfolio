import React from "react";
import "../CSS/contact.css";

const Contact = (props) => {
  return (
    <>
      <div className="contact" id={props.id}>
        <h1>Contact Me</h1>
        <div className="cont">
          <p className="p">
            Please let me <span className="know">Know</span> if you find me
            capable of letting me work with you or in your
            <span className="pro"> Project </span>, You can
            <span className="hire"> Hire </span>me by contacting me through:-
          </p>
          <div className="ids">
            <p className="email">
              <span>Email:-</span> shubhamsinghcodex@gmail.com
            </p>
            <p className="wame">
              <span>WhatsApp:-</span> +91 9685348243
            </p>
          </div>
        </div>
        <div className="img">
          <img src="/contactBg.png" alt="Contact Background" />
        </div>
      </div>
    </>
  );
};

export default Contact;
