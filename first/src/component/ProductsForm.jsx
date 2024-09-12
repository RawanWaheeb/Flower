
  
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductsForm.css';

export function ProductsForm() {
  let navigate = useNavigate();
  let { id } = useParams();
  let [products, setProducts] = useState({ name: '', price: '', quantity: '' });

  useEffect(() => {
    if (id !== '0') {
      axios.get(`http://localhost:3001/products/${id}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  let getInputData = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value
    });
  };

  let productHandler = (e) => {
    e.preventDefault();
    if (id === '0') {
      axios.post("http://localhost:3001/products", products)
        .then(() => {
          navigate('/products');
        });
    } else {
      axios.put(`http://localhost:3001/products/${id}`, products)
        .then(() => {
          navigate('/products');
        });
    }
  };

  return (
    <div className="p-5">
      <div className="container">
        <h1 className="text-center mb-4 custom-heading">{id === '0' ? 'Add New Product' : 'Edit Product'}</h1>

        <Form onSubmit={productHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              value={products.name}
              onChange={getInputData}
              name="name"
              type="text"
              placeholder="Enter Product Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              value={products.price}
              onChange={getInputData}
              name="price"
              type="number"
              placeholder="Enter Product Price"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicQuantity">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              value={products.quantity}
              onChange={getInputData}
              name="quantity"
              type="number"
              placeholder="Enter Product Quantity"
            />
          </Form.Group>

          <Button variant="outline-dark" type="submit" className="custom-button">
            {id === '0' ? 'Add New Product' : 'Edit Product'}
          </Button>
        </Form>
      </div>
    </div>
  );
}










