



import React from "react";
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"; 

export function SignUp() {
  let navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up Form</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}










