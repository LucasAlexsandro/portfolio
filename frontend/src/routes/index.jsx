import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home/Home";
import Bio from "../pages/Bio/Bio";
import PageError from "../pages/404";
import Contact from "../components/Contact/Contact";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}
