import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">We'd love to hear from you! Fill out the form below or reach us through our social media.</p>

      <div className="contact-form-container">
        <form className="contact-form">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>

      <div className="contact-socials">
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="#" className="social-icon">🌐</a>
          <a href="#" className="social-icon">📘</a>
          <a href="#" className="social-icon">🐦</a>
          <a href="#" className="social-icon">📸</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
