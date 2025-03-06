import React from "react";
import "../Styles/Project.css";
import FoodOrdering from "../assets/food.jpg";
import KFC from "../assets/kfc.jpg";
import JWt from "../assets/jwt.jpg";

const projects = [
  {
    title: "Food Ordering App",
    description:
      "A full-stack MERN food ordering platform with user authentication, cart management, and online payments.",
    image: FoodOrdering,
    link: "https://foodyhub-one.vercel.app/",
    github: "https://github.com/Srikanth1804/FOODAPP.git",
  },
  {
    title: "KFC Clone Website",
    description:
      "A fully responsive KFC food ordering website built with React.js,menu browsing, cart functionality.",
    image: KFC,
    link: "https://srikanth-kfc.vercel.app/",
    github: "https://github.com/Srikanth1804/KFC.git",
  },
  {
    title: "JWT Authentication System",
    description:
      "Featuring JWT-based login, role-based access control, and password reset functionality.",
    image: JWt,
    link: "http://jwt-1804sri.vercel.app/",
    github: "https://github.com/Srikanth1804/Authenticate.git",
  },
];

const Project = () => {
  return (
    <div
      className="container mt-5 p-5 rounded shadow-lg"
      style={{
        backgroundColor: "#D1F8EF",
        paddingTop: "80px",
      }}
      id="projects"
    >
      <h2
        className="text-success text-center"
        style={{ fontWeight: "bold", paddingTop: "20px" }}
      >
        Projects
      </h2>
      <div className="row mt-4">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card project-card shadow-lg p-4 mb-4 bg-white"
              style={{ border: "none" }}
            >
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body ">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between">
                  <a
                    href={project.link}
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold" }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn btn-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold" }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
