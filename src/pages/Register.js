import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom"; // for redirecting
import "./Auth.css";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, password } = userData;

    // Simple validation
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Registration submitted:", userData);

    alert("User registered successfully!");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="text"
          placeholder="Full Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required
        />
        <button type="submit">Register</button>
        <p className="auth-link">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
      </form>
    </div>
  );
};

export default Register;
