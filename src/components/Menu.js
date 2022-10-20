import React from "react";
import { MenuButtons } from "./MenuButtons";
import { MenuButton } from "./MenuButton";

import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <MenuButton menu={MenuButtons} />
    </div>
  );
};
