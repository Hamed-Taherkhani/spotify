import React from "react";
import "./css/Menu.css";
import { Link } from "react-router-dom";

function Menu(props) {
  const { links } = props;

  return (
    <div className="menu">
      <Link
        to={{
          hash: "#menu",
        }}
      >
        <button
          className="toggle-menu-btn close flex column"
          id="toggle-menu-btn"
          onClick={() => toggle("#menu")}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </Link>

      <nav className="navbar close" id="menu">
        <ul className="list">
          {links.map((item, index) => (
            <li
              className={`item ${item.class !== undefined ? item.class : ""}`}
              key={index}
            >
              <a href={item.link} className="transition-350">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function toggle(selector) {
  const element = document.querySelector(selector),
    classes = element.classList,
    btn = document.getElementById("toggle-menu-btn"),
    btnClasses = btn.classList;

  if (classes.contains("close")) {
    classes.replace("close", "open");
    btnClasses.replace("close", "open");
  } else {
    window.history.back();
    classes.replace("open", "close");
    btnClasses.replace("open", "close");
  }
}

export default Menu;
