import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Asests/MyLogo.jpg";

import menu_open from "../../Asests/menu_open.svg";
import menu_close from "../../Asests/menu_close.svg";

import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    document.getElementById("close-btn").style.display = "block";
    document.getElementById("nav").style.display = "block";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-380px";
    document.getElementById("close-btn").style.display = "none";
  };
  return (
    <div>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      <div className="navbar" id="nav">
        <img id="logo" src={logo} alt="" />

        <ul ref={menuRef} className="nav-menu">
          <img
            src={menu_close}
            onClick={closeMenu}
            alt=""
            className="nav-mob-close"
            id="close-btn"
          />

          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("About me")}>About me</p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#skills">
              <p onClick={() => setMenu("skills")}>Skills</p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("Contact")}>Contact</p>
            </AnchorLink>
          </li>
        </ul>
        <div className="nav-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
