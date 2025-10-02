// src/pages/BookingPage.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeSlot: "",
  });

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Info:", {
      service: service?.title,
      ...formData,
    });
    alert("Booking Confirmed!");
    navigate("/");
  };

  if (!service) return <p>Service not found.</p>;

  return (
    <div className="booking-page">
      <h2>Book: {service.title}</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <select
          value={formData.timeSlot}
          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
          required
        >
          <option value="">Select Time Slot</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
