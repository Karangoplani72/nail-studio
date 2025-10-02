import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import "./Services.css";

// Import images...
import acrylicNailsImg from "../images/acrylic-nails.jpg";
import nailRemovalImg from "../images/Extension Removal.jpg";
import gelPolishImg from "../images/gel-polish.jpg";
import manicureImg from "../images/Manicure.jpg";
import NailBuffing from "../images/Nail Buffing.jpg";
import NailFill from "../images/nail fill.jpg";
import nailrepair from "../images/nail repair.jpg";
import nailStrengtheningImg from "../images/nail Strengthening.jpg";
import nailArtImg from "../images/nail-art.jpg";
import nailpolishchange from "../images/nailpolishchange.jpg";
import pedicureImg from "../images/pedicure.jpg";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null); // index of open form

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle same closes, new opens
  };

  const services = [
    { title: "Manicure", description: "Basic manicure with a fresh coat of polish.", image: manicureImg, price: "₹500", time: "30 min" },
    { title: "Pedicure", description: "Relaxing pedicure with scrubs and massage.", image: pedicureImg, price: "₹700", time: "45 min" },
    { title: "Nail Art", description: "Creative nail art designs for any occasion.", image: nailArtImg, price: "₹1000", time: "1 hr" },
    { title: "Gel Polish", description: "Long-lasting gel polish with a shiny finish.", image: gelPolishImg, price: "₹1200", time: "1 hr 15 min" },
    { title: "Acrylic Nails", description: "Durable and stylish acrylic nail extensions.", image: acrylicNailsImg, price: "₹1500", time: "1 hr 30 min" },
    { title: "Nail Fill", description: "Maintenance for acrylic nails to keep them looking fresh.", image: NailFill, price: "₹800", time: "1 hr" },
    { title: "Nail Repair", description: "Repair service for broken or damaged nails.", image: nailrepair, price: "₹300", time: "30 min" },
    { title: "Nail Removal", description: "Safe removal of acrylic or gel nails.", image: nailRemovalImg, price: "₹400", time: "30 min" },
    { title: "Nail Buffing", description: "Buffing service for a smooth and shiny finish.", image: NailBuffing, price: "₹200", time: "15 min" },
    { title: "Nail Polish Change", description: "Quick change of nail polish color.", image: nailpolishchange, price: "₹300", time: "15 min" },
    { title: "Nail Strengthening", description: "Treatment to strengthen weak or brittle nails.", image: nailStrengtheningImg, price: "₹600", time: "30 min" },
    { title: "Nail Spa", description: "Luxurious spa treatment for your nails.", image: acrylicNailsImg, price: "₹1200", time: "1 hr 15 min" },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
