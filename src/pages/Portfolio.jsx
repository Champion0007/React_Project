import React from "react";
import "../styles/portfolio.css";

const projects = [
  {
    title: "Wanderlust Property Listing",
    description: "A full-stack MERN project for listing and booking properties.",
    image: "src/assets/trees-near-white-houses_417767-97.avif",
    link: "#",
  },
  {
    title: "Netflix Clone",
    description: "A React-based Netflix clone with real-time movie fetching.",
    image: "src/assets/man-watching-streaming-service-his-laptop_23-2149047332.jpg",
    link: "#",
  },
  {
    title: "Spotify Clone",
    description: "A music streaming platform built using React and Spotify API.",
    image: "src/assets/young-woman-holding-tablet-with-spotify-app_23-2147987822.jpg",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="text-lg text-gray-700">Showcasing my best projects</p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-button">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2 className="text-3xl font-semibold mb-4">Skills & Technologies</h2>
        <div className="skills-list">
          <span className="skill">React.js</span>
          <span className="skill">Node.js</span>
          <span className="skill">MongoDB</span>
          <span className="skill">Express.js</span>
          <span className="skill">Tailwind CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">Cloud Computing</span>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
