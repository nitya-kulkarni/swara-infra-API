import React, { useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../styles/Auth.css"; // Shared CSS for authentication
import axios from "axios";


const SubscriptionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [cookies, setCookie] = useCookies(["name", "email", "phone"]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    setCookie("name", name, { path: "/", maxAge: 86400 });
    setCookie("email", email, { path: "/", maxAge: 86400 });
    setCookie("phone", phoneNumber, { path: "/", maxAge: 86400 });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);


    try {
      // const response = await axios.post("http://localhost:8080/login/submit", formData, {
      //   withCredentials: true,
      const response = await fetch("http://localhost:8081/login/submit", {
        method: "POST",
        body: formData, // Send FormData
      });
      alert("Subscription successful!");
      navigate("/Projects");
      // window.location.href="/Projects";
    } catch (error) {
      console.error("Error:", error.response || error.message);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="unique-auth-container">
      <h1 className="unique-auth-heading">Subscribe</h1>
      
      <form className="unique-auth-form" onSubmit={handleSubmit}>
        <label className="unique-auth-label">Name:</label>
        <input
          className="unique-auth-input"
          type="text"
          required
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="unique-auth-label">Email:</label>
        <input
          className="unique-auth-input"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="unique-auth-label">Phone No:</label>
        <input
          className="unique-auth-input"
          type="tel"
          pattern="[0-9]{10}"
          required
          placeholder="Enter your phone no"
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="unique-auth-button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;



