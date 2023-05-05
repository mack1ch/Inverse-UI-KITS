import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import NavLogo from "./../../assets/inverse-fl.svg";
import Button from "./../buttons/Button";
import DropDown from "../dropDown/DropDown";
import "./Navbar.scss";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [close, open] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={NavLogo} alt="navbar-logo" />
        </Link>
        <div
          className={close ? "burgerBtn open" : "burgerBtn"}
          onClick={() => open(!close)}
        >
          <div class="icon-left"></div>
          <div class="icon-right"></div>
        </div>
        <ul className={`nav-items ${close ? "active" : ""}`}>
          {navItems.map((item) => {
            if (item.title === "Сервисы") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropDown(true)}
                  onMouseLeave={() => setDropDown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropDown && <DropDown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>

        <Button />
      </nav>
    </>
  );
};

export default Header;
