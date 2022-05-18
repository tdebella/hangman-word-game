import React from "react";
import Logo from "../images/hanging-rope.png";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4 logo">
            <img src={Logo} />
          </div>
          <div className="col-12 col-sm-8 hm">
            <h1>Hangman</h1>
            <p>Interactive Word Game</p>
          </div>
          <button className={HeaderCSS.btn}>Button</button>
        </div>
      </div>
    </>
  );
};

export default Header;
