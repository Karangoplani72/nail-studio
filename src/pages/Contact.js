import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: "", error: "" });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: "", error: "All fields are required!" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ success: "", error: "Invalid email format!" });
      return;
    }

    setTimeout(() => {
      setStatus({ success: "Message sent successfully!", error: "" });
      setFormData({ name: "", email: "", message: "" }); // Clear form
    }, 1000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have any questions or want to collaborate? <br />Send us a message!</p>

      {status.success && <p className="message success">{status.success}</p>}
      {status.error && <p className="message error">{status.error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
