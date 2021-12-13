import React from "react";
import "./App.css";
import video from "./videos/sculpture.mp4";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Videos App</h1>
      </header>
      <h2>0. Offline Video</h2>
      <div>
        <video src={video} controls height={200} />
      </div>
    </div>
  );
}

export default App;
