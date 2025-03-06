import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{
        backgroundColor: "#213555",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
        >
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold"
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("home");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("about");
                }}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("projects");
                }}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold"
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("resume");
                }}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
