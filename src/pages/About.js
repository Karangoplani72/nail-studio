import React from "react";
import "./About.css"; // Import styles for About page

// Import images correctly
import missionImg from "../images/mission.jpg";
import teamImg from "../images/team.jpg";
import visionImg from "../images/vision.jpg";

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        We are committed to delivering exceptional nail care services,
        combining<br/> creativity and quality to ensure our
        clients always feel pampered and confident.
      </p>

      <div className="about-container">
        <div className="section">
          <div className="text-content">
            <h3>Our Mission</h3>
            <p>Our mission is to offer personalized nail services that elevate beauty and self-care, ensuring each client leaves feeling refreshed and beautiful.</p>
          </div>
          <img src={missionImg} alt="Our Mission" />
        </div>

        <div className="section reverse">
          <div className="text-content">
            <h3>Our Vision</h3>
            <p>To set a new standard in nail care by integrating the latest trends and techniques, providing a unique and relaxing experience for all.</p>
          </div>
          <img src={visionImg} alt="Our Vision" />
        </div>

        <div className="section">
          <div className="text-content">
            <h3>Our Team</h3>
            <p>A talented and passionate team of nail technicians, beauty experts, and customer care professionals dedicated to delivering top-tier nail services in a friendly and comfortable environment.</p>
          </div>
          <img src={teamImg} alt="Our Team" />
        </div>
      </div>
    </div>
  );
};

export default About;
