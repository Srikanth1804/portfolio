import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCloud,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faReact,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Skill from "../assets/skill.jpg";

import "../Styles/About.css";
import "animate.css";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Triggers animation when 30% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        id="about"
        className="container  rounded"
        style={{
          paddingTop: "70px",
        }}
      >
        <h2 className="text-primary text-center fw-bold">About My Skills</h2>

        {/* Main Section: Image on Left, Content & Icons below */}
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-5 text-center">
            <img
              src={Skill}
              className={`img-fluid rounded shadow-lg mt-3 ${
                isVisible ? "animate__animated animate__fadeIn" : " "
              }`}
              ref={aboutRef}
              alt="Skills"
              style={{ maxWidth: "90%", borderRadius: "15px" }}
            />
          </div>

          {/* Right Side - Text & Icons */}
          <div className="col-md-7 text-center text-md-start d-flex flex-column align-items-start mt-3">
            <p className="text-muted fw-normal fs-5">
              I'm a skilled <strong>MERN Stack Developer</strong> passionate
              about building dynamic web applications. My expertise includes
              modern front-end & back-end technologies.
            </p>

            <p className="text-muted fw-normal fs-5">
              I specialize in <strong>React.js</strong> for interactive UIs,
              <strong> Node.js & Express.js</strong> for backend development,
              and <strong>MongoDB</strong> for data management.
            </p>

            <p className="text-muted fw-normal fs-5">
              I also work with{" "}
              <strong>REST APIs, Git, and cloud deployment</strong> to ensure
              scalability and performance.
            </p>

            {/* Skill Icons - Slightly Left Aligned */}
            <div className="d-flex flex-wrap justify-content-md-start justify-content-center gap-3 mt-4">
              {[
                { icon: faHtml5, color: "#E34F26", label: "HTML" },
                { icon: faCss3Alt, color: "#1572B6", label: "CSS" },
                { icon: faJsSquare, color: "#F7DF1E", label: "JavaScript" },
                { icon: faBootstrap, color: "#7952B3", label: "Bootstrap" },
                { icon: faReact, color: "#61DBFB", label: "React.js" },
                { icon: faNodeJs, color: "#68A063", label: "Node.js" },
                { icon: faGithub, color: "#181717", label: "Git & GitHub" },
                { icon: faDatabase, color: "#4DB33D", label: "MongoDB" },
                { icon: faServer, color: "#6C757D", label: "Express.js" },
                { icon: faCloud, color: "#00AEEF", label: "REST API" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-center m-1"
                  style={{
                    background: `linear-gradient(45deg, ${skill.color}, #ffffff)`,
                    padding: "12px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    minWidth: "90px",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon icon={skill.icon} size="2x" />
                  <p className="mt-2 fw-bold">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
