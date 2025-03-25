import React from "react";
import Navbar from "./Navbar";

import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

const Temp = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-light">
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
