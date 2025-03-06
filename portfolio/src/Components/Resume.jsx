import React, { useEffect, useRef, useState } from "react";
import Download from "../assets/download.jpg";
import resume from "../assets/Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Resume = () => {
  const resumeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);

  return (
    <div
      id="resume"
      className="container-fluid d-flex flex-column align-items-center justify-content-center"
      style={{
        paddingTop: "50px",
        textAlign: "center",
      }}
    >
      <h2 className="fw-bold mb-3" style={{ color: "#000B58" }}>
        My Resume
      </h2>
      <p className="text-muted fw-normal fs-5">
        Download my resume to learn more about my skills and experience.
      </p>

      <img
        src={Download}
        alt="Download Resume"
        className={`img-fluid rounded shadow-lg ${
          isVisible ? "animate__animated animate__fadeIn" : ""
        }`}
        ref={resumeRef}
        style={{ maxWidth: "30%" }} // Increased image size
      />

      <a
        href={resume}
        download
        className="btn btn-primary px-4 py-2 fw-bold shadow-lg mt-4"
        style={{ fontSize: "1.2rem" }}
      >
        <FontAwesomeIcon icon={faDownload} /> Download Resume
      </a>
    </div>
  );
};

export default Resume;
