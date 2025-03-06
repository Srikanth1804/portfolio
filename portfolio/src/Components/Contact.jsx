import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Contact.css";
import Contact1 from "../assets/contact.jpg";
import "animate.css";

const Contact = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="container mt-4  p-5 rounded contact-container" id="contact">
      <h2
        className="text-center"
        style={{ fontWeight: "bold", color: "#211C84" }}
      >
        Get in Touch
      </h2>
      <div className="row mt-3">
        <div className="col-sm-4">
          <img
            src={Contact1}
            alt=""
            className={`img-fluid rounded shadow-lg ${
              isVisible ? "animate__animated animate__fadeIn" : ""
            }`}
            ref={contactRef}
          />
        </div>
        <div className="col-sm-8">
          <p className="text-center mt-3 fw-normal fs-5">
            Want to chat? Just shoot me a DM with a direct question on{" "}
            <a
              href="https://www.linkedin.com/in/srikanth-p-3656a6280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fw-bold"
            >
              LinkedIn
            </a>{" "}
            or email me at{" "}
            <a
              href="mailto:mrmadukkur1804@gmail.com"
              className="text-primary fw-bold"
            >
              mrmadukkur1804@gmail.com
            </a>
            . I will respond whenever I can and will ignore all soliciting.
          </p>
          <div className="text-center mt-4 d-flex justify-content-center gap-4">
            <div
              className="icon-container"
              onMouseEnter={() => setHoveredIcon("GitHub")}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => setHoveredIcon("GitHub")}
            >
              <a
                href="https://github.com/Srikanth1804"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link github"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-dark"
                  size="2x"
                />
              </a>
              {hoveredIcon === "GitHub" && (
                <span className="icon-name">GitHub</span>
              )}
            </div>

            <div
              className="icon-container"
              onMouseEnter={() => setHoveredIcon("LinkedIn")}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => setHoveredIcon("LinkedIn")}
            >
              <a
                href="https://www.linkedin.com/in/srikanth-p-3656a6280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              {hoveredIcon === "LinkedIn" && (
                <span className="icon-name">LinkedIn</span>
              )}
            </div>

            <div
              className="icon-container"
              onMouseEnter={() => setHoveredIcon("Email")}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => setHoveredIcon("Email")}
            >
              <a
                href="mailto:mrmadukkur1804@gmail.com"
                className="icon-link email"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-danger"
                  size="2x"
                />
              </a>
              {hoveredIcon === "Email" && (
                <span className="icon-name">Email</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
