import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Avt from "./Avt";

const pages = ["home", "about", "resume", "more"];

const Menu = ({ page }) => {
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState(null);
  const options = pages.filter((p) => p !== page);

  const renderMenuOptions = () => {
    return (
      <div className="menu__options menu__options--color">
        {options.map((p) => (
          <div
            className="menu__option menu__item menu__item--opened"
            key={p}
            onClick={() => history.push(p === "more" ? `/${p}/blogs` : (p==='home'?'/':`/${p}`))}
          >
            {p}
          </div>
        ))}
      </div>
    );
  };

  const closeMenuOptions = () => {
    return (
      <div className="menu__options--close  menu__options--color">
        {options.map((p) => (
          <div
            className="menu__option menu__item"
            key={p}
            onClick={() => history.push(p === "more" ? `/${p}/blogs` : (p==='home'?'/':`/${p}`))}
          >
            {p}
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="menu">
      <div className="menu__wrapper">
        <div className="menu__position">
          {openMenu===null ? null : (openMenu?renderMenuOptions() : closeMenuOptions())}
          <div
            className="menu__avatar menu__item menu__item--opened"
            onClick={() => {
              if(openMenu===null) setOpenMenu(true)
              else setOpenMenu(!openMenu);
              console.log("menu button clicked "+openMenu);
            }}
          >
            <Avt size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
