import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Auth.css'; // Shared CSS for authentication

// Login Component
export const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(); // Trigger login state change
    navigate(redirectTo); // Redirect after login
  };

  return (
    <div className="unique-auth-container">
      <h1 className="unique-auth-heading">Login</h1>
      <form className="unique-auth-form" onSubmit={handleSubmit}>
        <label className="unique-auth-label">Email:</label>
        <input
          className="unique-auth-input"
          type="email"
          required
          placeholder="Enter your email"
        />
        <label className="unique-auth-label">Password:</label>
        <input
          className="unique-auth-input"
          type="password"
          required
          placeholder="Enter your password"
        />
        <button className="unique-auth-button" type="submit">
          Login
        </button>
      </form>
      <p className="unique-auth-footer">
        Don't have an account? <span onClick={() => navigate('/register')}>Register here</span>
      </p>
    </div>
  );
};

// Register Component
export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic
    navigate('/login'); // Redirect to login on successful registration
  };

  return (
    <div className="unique-auth-container">
      <h1 className="unique-auth-heading">Register</h1>
      <form className="unique-auth-form" onSubmit={handleSubmit}>
        <label className="unique-auth-label">Name:</label>
        <input
          className="unique-auth-input"
          type="text"
          required
          placeholder="Enter your name"
        />
        <label className="unique-auth-label">Mobile Number:</label>
        <input
          className="unique-auth-input"
          type="tel"
          required
          placeholder="Enter your mobile number"
        />
        <label className="unique-auth-label">Email:</label>
        <input
          className="unique-auth-input"
          type="email"
          required
          placeholder="Enter your email"
        />
        <label className="unique-auth-label">Password:</label>
        <input
          className="unique-auth-input"
          type="password"
          required
          placeholder="Enter your password"
        />
        <button className="unique-auth-button" type="submit">
          Register
        </button>
      </form>
      <p className="unique-auth-footer">
        Already have an account? <span onClick={() => navigate('/login')}>Login here</span>
      </p>
    </div>
  );
};