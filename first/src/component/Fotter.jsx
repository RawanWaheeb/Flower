



import React from 'react';
import './Footer.css';

export function Fotter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We are passionate about flowers and dedicated to bringing you the best floral designs and arrangements.</p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: Rawan123@.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section follow-us">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}






















