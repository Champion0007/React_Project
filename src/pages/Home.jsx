import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; // Importing CSS

const Home = () => {
  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Our IT Company</h1>
        <p>
          We provide cutting-edge solutions to drive digital transformation.
        </p>
        <Link to="/services" className="btn-primary">
          Explore Services
        </Link>
      </div>

      {/* Services Cards */}
      <div className="cards-container">
        <div className="card">
          <img
            src="src\assets\3d-render-code-testing-functional-test-usability_107791-16607.avif"
            alt="Web Development"
          />
          <h3>Web Development</h3>
          <p>We build responsive and scalable web applications.</p>
          <Link to="/services" className="btn-secondary">
            Know More
          </Link>
        </div>

        <div className="card">
          <img
            src="src\assets\saas-concept-collage_23-2149399295.avif"
            alt="Cloud Computing"
          />
          <h3>Cloud Solutions</h3>
          <p>Secure and scalable cloud services for businesses.</p>
          <Link to="/services" className="btn-secondary">
            Know More
          </Link>
        </div>

        <div className="card">
          <img
            src="src\assets\developers-robot-work-laptop-with-magnifier-industrial-cybersecurity-industrial-robotics-malware-safeguarding-industrial-robotics-concept_335657-1902.jpg"
            alt="Cyber Security"
          />
          <h3>Cyber Security</h3>
          <p>Advanced security solutions to protect your data.</p>
          <Link to="/services" className="btn-secondary">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
