import React, { useEffect, useRef, useState } from "react";
import "animate.css";

const Home = () => {
  const homeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div
      id="home"
      className=" rounded  container"
      style={{ marginTop: "30px", paddingTop: "50px" }}
    >
      <div className="row align-items-center">
        <div
          className={`col-md-5 text-center ${
            isVisible ? "animate__animated animate__fadeIn" : ""
          }`}
          ref={homeRef}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              color: "#2C3E50",
              letterSpacing: "0.5px",
            }}
          >
            Hey,
          </h1>
          <h3
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#34495E",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            I'm <span style={{ color: "#F26B0F" }}>Srikanth</span>
          </h3>
          <p
            className="font-italic"
            style={{
              fontSize: "1.3rem",
              fontWeight: "500",
              color: "#8D0B41",
            }}
          >
            MERN Stack Developer
          </p>
        </div>

        <div className="col-md-7">
          <p className="text-muted mt-3 fw-normal fs-5">
            Enthusiastic and skilled <strong>MERN stack developer</strong> with
            hands-on experience in building and deploying full-stack web
            applications. Proficient in
            <strong> MongoDB, Express.js, React.js, and Node.js</strong>, with a
            strong foundation in front-end and back-end development.
          </p>
          <p className="text-muted fw-normal fs-5">
            Successfully completed projects like a
            <strong> food ordering platform</strong> and
            <strong> table booking system</strong>. Passionate about crafting
            seamless user experiences and optimizing application performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
