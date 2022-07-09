import React from "react";
import "./css/Player.css";
import { PLAY, NEXT_PREV_BUTTON } from "../Media/media";
import cover0 from "./../Media/images/Zayn0.jpg";

function Player() {
  return (
    <section className="player close" id="player-2947">
      <header>
        <button className="slide-btn" onClick={togglePlayer}>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <p className="song-name">Song name</p>

        <div></div>
      </header>

      <main>
        <div className="cover" onClick={togglePlayer}>
          <img src={cover0} alt="" />
        </div>
      </main>

      <footer>
        <div className="song-details" onClick={togglePlayer}>
          <p className="song-name">Song name</p>

          <p className="singer">Singer</p>
        </div>

        <div className="music-controls">
          <div className="range">
            <div className="line">
              <div className="circle">
                <span></span>
              </div>
            </div>

            <div className="time start-time">01:33</div>

            <div className="time end-time">03:33</div>
          </div>

          <div className="controls">
            <button className="prev-btn">{NEXT_PREV_BUTTON}</button>
            <button className="play-btn">{PLAY}</button>
            <button className="next-btn">{NEXT_PREV_BUTTON}</button>
          </div>
        </div>
      </footer>
    </section>
  );
}

function togglePlayer() {
  const element = document.getElementById("player-2947"),
    classes = element.classList;

  if (classes.contains("close")) {
    classes.replace("close", "open");
    document.body.style = "height: 0px !important; overflow: hidden";
  } else {
    classes.replace("open", "close");
    document.body.attributes.removeNamedItem("style");
  }
}

export default Player;
