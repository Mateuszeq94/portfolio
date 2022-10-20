import React from "react";

import { AboutMe } from "../views/AboutMe";
import { Skills } from "../views/Skills";
import { Contact } from "../views/Contact";

export const MenuButtons = [
  {
    id: 1,
    text: "About me",
    route: "/",
    element: <AboutMe />,
    name: "about",
  },
  {
    id: 2,
    text: "My skills",
    route: "my-skills",
    element: <Skills />,
    name: "skills",
  },
  {
    id: 3,
    text: "Contact",
    route: "contact",
    element: <Contact />,
    name: "contact",
  },
];
