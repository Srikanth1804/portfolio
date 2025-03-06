import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

const Temp = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#D8C4B6" }}>
        <Home />
        <About />
        <Project />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default Temp;
