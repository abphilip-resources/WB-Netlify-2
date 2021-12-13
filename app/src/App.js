import React from "react";
import "./App.css";
import {useState, useEffect} from 'react';
import video from "./videos/sculpture.mp4";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('https://orangevalleycaa.org/api/videos').then(
      response => response.json()
      );
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Videos App</h1>
      </header>

      <div key='0'>
        <h2>Offline Video</h2>
        <video height={200} controls src={video} />
      </div>
      {data.map(video => (
      <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
      </div>
      ))}
    </div>
  );
}

export default App;