import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import './Home.css'; // Custom styling for the home page

// Import local images
import nailArt1 from "../images/Acrylic Nails.jpg";
import nailArt2 from "../images/Angel Nails.jpg";
import nailArt3 from "../images/CAT EYE.jpg";
import nailArt5 from "../images/Gel Polish.jpg";
import nailArt8 from "../images/Nail Polish.jpg";
import nailArt7 from "../images/Simple Art.jpg";
import nailArt6 from "../images/Stiletto Nails.jpg";
import nailArt4 from "../images/Tips Nails.jpg";
import featured1 from "../images/hero1.jpg";
import featured10 from "../images/hero10.jpg";
import featured11 from "../images/hero11.jpg";
import featured12 from "../images/hero12.jpg";
import featured2 from "../images/hero2.jpg";
import featured3 from "../images/hero3.jpg";
import featured4 from "../images/hero4.jpg";
import featured5 from "../images/hero5.jpg";
import featured6 from "../images/hero6.jpg";
import featured7 from "../images/hero7.jpg";
import featured8 from "../images/hero8.jpg";
import featured9 from "../images/hero9.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel>
          {[featured1, featured2, featured3, featured4, featured5, featured6, featured7, featured8, featured9, featured10, featured11, featured12].map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2 className="gallery-title">Types of Nails</h2>
        <div className="gallery-container">
          {[ 
            { img: nailArt1, title: "Acrylic Nails" },
            { img: nailArt2, title: "Angel Nails" },
            { img: nailArt3, title: "CAT EYE" },
            { img: nailArt4, title: "Tips Nails" },
            { img: nailArt5, title: "Gel Polish" },
            { img: nailArt6, title: "Stiletto Nails" },
            { img: nailArt7, title: "Simple Art" },
            { img: nailArt8, title: "Nail Polish" },
          ].map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.img} alt={item.title} />
              <p className="gallery-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
