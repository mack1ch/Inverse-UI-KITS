import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

function Button() {
  return (
    <>
      <Link to="./">
        <button className="btn">Войти</button>
      </Link>
    </>
  );
}

export default Button;