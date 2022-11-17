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
                <strong>HyperText Markup Language</strong> - I started with. How
                to build the structure of the page, what are the tags and what
                should go in them. How to nest tags to make them work better
                with CSS. I learned about "href", "src", "alt", etc. and how to
                use them in code. In HTML, I wrote my first web page with the
                text "Hello, World!". It didn't look pretty, but it was a step
                forward in my career as a Front-end Developer. Since then, I
                wanted to learn more and more to create something prettier, so I
                started learning CSS.
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
                <strong>Cascading Style Sheets</strong> - This was my second
                choice after HTML. Once I learned the structure of creating a
                website, I decided to make it look a little better and learned
                CSS. In CSS, I learned about font-family, font-size,
                backgroud-color, color, etc. I also learned about more advanced
                topics such as Media Queries, animations, Flexbox. After
                learning all these topics, I was able to test myself in smaller
                projects. I did more and more difficult tasks to learn more and
                more. Once I was able to complete most of the tasks, I decided
                to learn a programming language to combine my skills and create
                more dynamic pages. The ideal language turned out to be.
                JavaScript, which I began to learn.
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
                <strong>JavaScript</strong> - I started learning from the
                basics, i.e. how to retrieve elements from the DOM, I also
                learned how loops work, methods such as map (), filter (),
                forEach (), etc. how to import and export modules, how to create
                functions, how page elements can be manipulated using
                addEventListener(). I learned JavaScript according to the
                ECMAScript standard. Once I learned all these issues, I was able
                to create more dynamic pages, which gave me more and more
                satisfaction when writing code. After I became well acquainted
                with JavaScript, I decided to learn the React library.
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
                After spending many hours searching for the best framework, I
                chose React. I immediately noticed that it uses all the skills I
                acquired in the earlier stages, namely HTML, CSS and JS. At the
                very beginning, I noticed that React makes it very easy to work
                with code, because you no longer need to download all the
                elements and set addEventListener() on them, . The same can be
                achieved by setting an event on a JSX element. I became familiar
                with Hooks, React Router, Link, etc. After all these pieces of
                the puzzle, I can say that I am able to assemble a website.
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
