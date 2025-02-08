import React from "react";
import "../styles/about.css"

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About Us</h1>
        <p>Empowering businesses with innovative technology solutions.</p>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <h2>Who We Are</h2>
        <p>
          We are a leading IT company specializing in web development, cloud computing, and AI-driven solutions. 
          Our team of experts is dedicated to delivering high-quality digital experiences that drive success.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>To create cutting-edge technology solutions that help businesses grow and innovate.</p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>To be a global leader in digital transformation by offering scalable and intelligent solutions.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="src/assets/team-4.avif" alt="Team Member" />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="src/assets/team-1.avif" alt="Team Member" />
            <h4>Jane Smith</h4>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <img src="src/assets/team-3.jpg" alt="Team Member" />
            <h4>Mark Taylor</h4>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
