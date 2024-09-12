import React from "react";
import { Table } from 'react-bootstrap';
import './Products.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Products.css"; 

export function Products() {
  let [products,setProducts] =useState([])

let getAllproducts= async()=>{
try{

  let response = await axios.get("http://localhost:3001/products")
  setProducts(response.data)
}
catch(error){
  console.log(error)

}
}
  useEffect(()=>{
  getAllproducts()
},[])

let deleteProduct=(productId)=>{
 axios.delete(`http://localhost:3001/products/${productId}`).then((response)=>{
 let filterdList= products.filter(products=>products.id!=productId)
 setProducts(filterdList)
 })
}

  
  return (
    <div className='products p-5 mt-3'>
      <div className='container'></div>
      <div className="product-header d-flex justify-content-around align-items-center">
        <h1 className="text-center text-muted">Our Products</h1>
        <Link to="/products/0/edit">
          <i className="mx-2 fs-2 text-baby-pink bi bi-plus-square"></i>
        </Link>
      </div>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>{products.id}</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
        {products.map((product, index) => {
  return (
    <tr key={product.id}>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>
        <Link to={`/products/${product.id}/edit`}>
          <i className="mx-2 fs-2 text-baby-pink bi bi-pencil-square"></i>
        </Link>
        <Link to={`/products/${product.id}`}>
          <i className="mx-2 fs-2 text-baby-pink bi bi-eye-fill"></i>
        </Link>
        <i
          onClick={() => deleteProduct(product.id)}
          className="mx-2 fs-2 text-baby-pink bi bi-trash-fill"
        ></i>
      </td>
    </tr>
  );
})}
        </tbody>
      </Table>
    </div>
  );
}















