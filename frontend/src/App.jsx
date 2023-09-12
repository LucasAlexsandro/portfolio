import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
// Css Geral
import "./App.css";

//Pages
import Home from "./pages/Home/Home";
import Bio from "./pages/Bio/Bio";

// App
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
    </Routes>
  );
};

export default App;
