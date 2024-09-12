


import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

export function Login() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email && password) {
      navigate('/Home'); 
    } else {
      alert('Please enter both email and password');
    }
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account?</p>
          <button onClick={goToSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
