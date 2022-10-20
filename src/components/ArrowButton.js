import React from "react";
import { useState, useEffect } from "react";
import "./ArrowButton.css";

export const ArrowButton = () => {
  const [activeArrow, setActiveArrow] = useState(false);

  const onScroll = () => {
    window.scrollY > 400 ? setActiveArrow(true) : setActiveArrow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={activeArrow ? "arrow" : ""} onClick={scrollToTop}>
      <i className="fa-solid fa-angle-up"></i>
    </div>
  );
};
