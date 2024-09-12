
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1>Fresh Flowers</h1>
        <h2>Natural & Beautiful Flowers</h2>
        <p>Search for the best complement to your home</p>
      <Link to="/products" className="btn btn-dark mt-3">Go to product</Link>
      </div>
    </div>
  );
}


