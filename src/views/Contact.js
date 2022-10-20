import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Mailer } from "../components/Mailer";

import "./Contact.css";

export const Contact = () => {
  return (
    <Zoom direction="down" duration={700}>
      <div className="contactContainer">
        <Mailer />
        <div className="media">
          <div>
            <a href="https://www.linkedin.com/in/mateusz-magier/?locale=en_US">
              <i className="fa-brands fa-linkedin" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div>
            <a href="https://github.com/Mateuszeq94">
              <i className="fa-brands fa-github" />
              <span>Git</span>
            </a>
          </div>

          <div>
            <i className="fa-solid fa-phone" />
            <span>+47 48624189</span>
          </div>
          <div>
            <i className="fa-solid fa-envelope" />
            <span>mateusz.magier12@gmail.com</span>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
