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
              Hi, I am <strong>Mateusz</strong>. I'm 28 years old. I have always
              been interested in computers. I like to play computer games my
              passion started with them. Whenever I had a problem with my
              computer I always tried to solve it. I looked for solutions on the
              Internet and proceeded step by step to solve it. I always pursued
              my goal. From an early age I learned the qualities important for a
              programmer, such as patience, searching for information on the
              Internet, solving problems, and striving for a goal.
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
              I like sports. The current favorite is snowboarding. I love
              snowboarding and the feeling of freedom, speed and adrenaline. I
              also enjoy kayaking and camping with my friends. I love to travel
              with my fiancé. Exploring and hiking the trails. Watching wildlife
              in a natural environment. I enjoy playing computer and board
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
              In 2018, I decided to start programming. My first language to
              start with was c++. After finishing a course on youtube, I
              couldn't write anything myself, I didn't like it and stopped
              learning it. My next language was Python. Python was much
              friendlier than c ++. I became familiar with the beginner and
              advanced aspects of python however I didn't like it either. My
              third choice was HTML and CSS . I fell in love from the first line
              of code. Later I added JavaScript, which was very similar to
              Python, which made learning easier. Once I mastered HTML, CSS and
              JavaScript, I decided to add React.js. Since then, programming has
              become even more fun, and I write code with passion.
            </p>
          </div>
        </Slide>
      </article>
    </div>
  );
};
