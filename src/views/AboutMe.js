import React from "react";
import { Roll, Slide } from "react-awesome-reveal";
import myPhoto from "../images/mateusz.jpg";
import snowboard from "../images//snowboard.jpg";
import programming from "../images//programming.png";

import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="aboutMe">
      <article className="intro">
        <Roll direction="left" duration={1000} triggerOnce="true">
          <img src={myPhoto} alt="Mateusz Magier" className="myPhoto" />
          <div className="myPhoto"></div>
        </Roll>
        <Slide direction="right" duration={1000} triggerOnce="true">
          <div>
            <h1 className="header">About me</h1>
            <p className="intro">
              Hi! I'm <strong>Mateusz</strong>. I'm 28. I've always been
              interested in computers. I like playing computer games my passion
              began with them. Whenever I had a problem with my computer I
              always tried to solve it. I was looking for solutions on the
              internet and followed the step-by-step instructions to solve it. I
              was always aiming for the goal. From an early age I was learning
              features that are important for a programmer, such as patience,
              searching for information on the Internet, problem solving, pursue
              goals.
            </p>
          </div>
        </Slide>
      </article>
      <article className="freeTime">
        <Roll direction="left" duration={1000} triggerOnce="true">
          <img src={snowboard} alt="Mateusz on snowboard" />
        </Roll>
        <Slide direction="right" duration={1000} triggerOnce="true">
          <div>
            <h1 className="header">Free time</h1>
            <p className="freeTime">
              I like sports. My favorite at the moment is snowboarding. I love
              snowboarding and feeling free, fast and adrenaline. I also like
              kayaking and camping with my friends. I love traveling with my
              fiancee. Sightseeing and walking on the trails. Watching wild
              nature in natural environment. I like playing computer and board
              games.
            </p>
          </div>
        </Slide>
      </article>
      <article className="programmingStory">
        <Roll direction="left" duration={1000} triggerOnce="true">
          <img src={programming} alt="" />
        </Roll>
        <Slide direction="right" duration={1000} triggerOnce="true">
          <div>
            <h1 className="header">Programming story</h1>
            <p className="programmingStory">
              I decided to start programming in 2018. My first language that I
              started it was c++. After finishing the youtube course, I was not
              able to write anything myself and I didn't like it and I stopped
              learning it. My next language was Python. Python was much
              friendlier than c ++. I have familiarized myself with beginner and
              advanced aspects of python however, I didn't like it either. My
              third choice was HTML and CSS . I fell in love from the first line
              of code. Later I added JavaScript which was very similar to Python
              and which made it easier for me to learn. Once I had mastered
              HTML, CSS and JavaScript, I decided to add React.js. From then on,
              programming became even more fun and I writing code with passion.
            </p>
          </div>
        </Slide>
      </article>
    </div>
  );
};
