import React from "react";
import "../styles/services.css";

const servicesData = [
  {
    title: "Web Development",
    description: "We build responsive and modern web applications.",
    image: "src/assets/3d-render-code-testing-functional-test-usability_107791-16607.avif",
  },
  {
    title: "Cloud Computing",
    description: "Secure and scalable cloud solutions for businesses.",
    image: "src/assets/secure-data-concept-illustration_114360-483.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Create stunning user experiences with our design services.",
    image: "src/assets/Ui-ux-image.png",
  },
  {
    title: "SEO & Marketing",
    description: "Optimize your online presence and grow your business.",
    image: "src/assets/front-view-pretty-woman-showing-diagrams-working-office_140725-109240.avif",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-button">Know More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
