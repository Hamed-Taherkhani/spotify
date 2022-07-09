import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Player from "./Player";
import "./css/normalize.css";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Player />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
