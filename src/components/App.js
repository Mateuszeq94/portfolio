import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { AboutMe } from "../views/AboutMe";
import { Skills } from "../views/Skills";
import { Contact } from "../views/Contact";
import { ErrorView } from "../views/ErrorView";
import { Menu } from "./Menu";

import "./App.css";
import { ArrowButton } from "./ArrowButton";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="navBar">
        <Menu />
      </div>

      <div className="main">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="my-skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </div>
      <ArrowButton />
      <footer>&copy; {new Date().getFullYear()} Mateusz Magier</footer>
    </div>
  );
};
