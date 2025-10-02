import React, { useState } from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, description, image, price, time }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleToggleModal = () => {
    setShowModal(!showModal);
    document.body.style.overflow = showModal ? "auto" : "hidden"; // Prevent background scroll
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name}`);
    setFormData({ name: "", phone: "", date: "" });
    handleToggleModal(); // Close modal
  };

  return (
    <>
      <div className={`service-card ${showModal ? "blurred" : ""}`}>
        <img src={image} alt={title} className="service-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="service-price"><strong>Price:</strong> {price}</p>
        <p className="service-time"><strong>Time Required:</strong> {time}</p>
        <button className="book-btn" onClick={handleToggleModal}>Book Now</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Book: {title}</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Confirm Booking</button>
                <button type="button" className="cancel-btn" onClick={handleToggleModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
