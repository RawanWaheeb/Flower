

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function ProductsDetails() {
  let { id } = useParams();
  let [products, setProducts] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="bg-dark p-5 text-light">
      <div className="container">
        <h2>Product Details</h2>
        <p className="lead mt-2">Product Id: {id}</p>
        <p className="lead mt-2">Product Name: {products.name}</p>
        <p className="lead mt-2">Product Price: {products.price}</p>
        <p className="lead mt-2">Product Quantity: {products.quantity}</p>
        <p className="lead mt-2">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </p>
        <Link className="btn btn-danger p-3 mt-3" to='/products'>Back To Products</Link>
        <img src="/WhatsApp Image 2024-08-01 at 7.21.24 PM.jpeg" alt="Product" width={300} height={150} />
      </div>
    </div>
  );
}
