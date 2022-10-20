import React from "react";
import { NavLink } from "react-router-dom";

export const MenuButton = (props) => {
  return props.menu.map((menuButton) => (
    <NavLink
      to={menuButton.route}
      key={menuButton.id}
      className={menuButton.name}
      activeclassname="active"
    >
      {menuButton.text}
    </NavLink>
  ));
};
