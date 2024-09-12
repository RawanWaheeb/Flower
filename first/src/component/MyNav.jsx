
import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
 import"./Products.css";
export function MyNav() {
  return (
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Petals & Dreams</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={({ isActive }) => isActive ? 'text-danger nav-link' : 'nav-link'} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-danger nav-link' : 'nav-link'} to="/aboutus">AboutUs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-danger nav-link' : 'nav-link'} to="/products">Products</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-danger nav-link' : 'nav-link'} to="/contactus">ContactUs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-danger nav-link' : 'nav-link'} to="/login">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


































