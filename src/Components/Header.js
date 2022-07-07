import React from "react";
import { SPOTIFY_LOGO, SEARCH_BTN } from "./../Media/media";
import "./css/Header.css";
import Menu from "./Menu";

function Header() {
  return (
    <header className="root-header flex align-center justify-space-between">
      <section className="left flex align-center">
        <div className="spotify-logo">{SPOTIFY_LOGO}</div>

        <h1 className="heading1">Spotify</h1>
      </section>

      <section className="right">
        <ul className="list flex align-center">
          <li className="item search-btn">
            <button>{SEARCH_BTN}</button>
          </li>

          <li className="item open-app">
            <a href="#">OPEN APP</a>
          </li>

          <li className="item menu-container">
            <Menu
              links={[
                { text: "Log in", link: "#", class: "log-in" },
                { text: "Sign up", link: "#", class: "sign-up" },
                { text: "Premium", link: "#" },
                { text: "Help", link: "#" },
                { text: "Download", link: "#" },
                { text: "Privacy", link: "#" },
                { text: "Terms", link: "#" },
              ]}
            />
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
