import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

function navBar() {
  return (
    <>
      <Link to="./">
        <button className="btn">Войти</button>
      </Link>
    </>
  );
}

export default navBar;