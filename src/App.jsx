import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./Components/Aside";
import Player from "./Components/Player";
import Main from "./Components/Home";
import Artist from "./Components/Artist";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Aside />
        <Player />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:artist" element={<Artist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
