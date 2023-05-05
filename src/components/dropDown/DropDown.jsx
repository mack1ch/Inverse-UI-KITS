import React, { useState } from "react";
import "./DropDown.scss";
import { serviceDropDown } from "../navBar/NavItems";
import { Link } from "react-router-dom";

const DropDown = () => {

    const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <ul className={dropDown ? "services-submenu click" : "services-submenu"} onClick={() => setDropDown(!dropDown)}>
        {serviceDropDown.map((item) => {
          return (
            <li key={item.id}>
              <Link 
              to={item.path} 
              className={item.cName} 
              onClick={() => setDropDown(!dropDown)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
