import React from "react";
import { Zoom, Slide } from "react-awesome-reveal";
import ReactLogo from "../images/react.png";
import HTMLLogo from "../images/html.png";
import CSSLogo from "../images/css.png";
import JSLogo from "../images/js.png";

import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills">
      <Zoom triggerOnce="true">
        <h1>My Skills</h1>
      </Zoom>

      <div className="mySkills">
        <Slide direction="left" triggerOnce="true">
          <section>
            <img src={HTMLLogo} alt="HTML logo" className="logo" />
            <div className="aboutSkill">
              <p>
                <strong>HyperText Markup Language</strong> - I started with
                this. How to build the structure of the page, what are the tags
                and what should be in them. How to nest tags to work better with
                CSS. I learned about "href", "src", "alt" etc. and how to use
                them in code. In HTML, I wrote my first website with the text
                "Hello, World!". It didn't look nice, but it was a step forward
                in my career as a Front-end Developer. Since then, I wanted to
                learn more and more to create something nicer, so I started
                learning CSS.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/HTML"
                className="readMore btn"
                target="_blank"
              >
                Read more about HTML
              </a>
            </div>
          </section>
        </Slide>
        <Slide direction="right" triggerOnce="true">
          <section className="even">
            <img src={CSSLogo} alt="CSS logo" className="logo" />
            <div className="aboutSkill">
              <p>
                <strong>Cascading Style Sheets</strong> - it was my second
                choice after HTML. Once I got to know the structure of creating
                the website, I decided to give it a little better look and learn
                CSS. In CSS I learned about font-family, font-size,
                backgroud-color, color etc. I also got to know more advanced
                topics such as Media Queries, animation, Flexbox. After getting
                acquainted with all these issues, I was able to test myself in
                smaller projects. I came up with an increasingly difficult task
                to learn more and more. Once I was able to do most of the tasks,
                I decided to learn a programming language to combine my skills
                and to create more dynamic pages. The ideal language was
                JavaScript that I started to learn.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/CSS"
                className="readMore btn"
                target="_blank"
              >
                Read more about CSS
              </a>
            </div>
          </section>
        </Slide>
        <Slide direction="left" triggerOnce="true">
          <section>
            <img src={JSLogo} alt="JavaScript logo" className="logo" />
            <div className="aboutSkill">
              <p>
                <strong>JavaScript</strong> - I started learning from scratch,
                i.e. how to download elements from the DOM, I also learned how
                loops work, methods such as map (), filter (), forEach () etc.
                how to import and export modules, how to create functions, how
                can you manipulate page elements using addEventListener(). I
                learned JavaScript according to the ECMAScript standard. Once I
                got to know all these issues, I was able to create more dynamic
                pages that gave me more and more satisfaction while writing the
                code. After I got to know JavaScript well, I decided to learn
                the React library.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/JavaScript"
                className="readMore btn"
                target="_blank"
              >
                Read more about JavaScript
              </a>
            </div>
          </section>
        </Slide>
        <Slide direction="right" triggerOnce="true">
          <section className="even">
            <img src={ReactLogo} alt="React.js logo" className="logo" />
            <div className="aboutSkill">
              <p>
                After many hours spent looking for the best framework I chose
                React. I noticed right away that it was using all the skills I
                had acquired in the earlier stages, i.e. HTML, CSS and JS. At
                the very beginning, I noticed that React makes it very easy to
                work with the code, because you no longer need to download all
                the elements and set them to addEventListener() to them, the
                same can be achieved by setting an event on a JSX element. I got
                acquainted with Hooks, React Router, Link etc. After all these
                pieces of the puzzle, I can say that I am able to put together a
                puzzle like a website.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                className="readMore btn"
                target="_blank"
              >
                Read more about React
              </a>
            </div>
          </section>
        </Slide>
      </div>
    </div>
  );
};
