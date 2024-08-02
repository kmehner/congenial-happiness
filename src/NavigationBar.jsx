import React from "react";
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <Navbar bg='light' expand="lg">
      <Navbar.Brand href="/">E-Commerce App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-customer/">
            Add Customers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/customers">
            Customers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-product">
            Add Product
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products">
            Products
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <nav className="clearfix">
    //   <NavLink to="/">Home</NavLink> {/* <a href="/">Home</a> */}
    //   <NavLink to="/add-customer/">Add Customer</NavLink>
    //   <NavLink to="/customers">Customers</NavLink>
    //   <NavLink to="/add-product">Add Product</NavLink>
    //   <NavLink to="/products">Products</NavLink>
      
    // </nav>
  )
}

export default NavigationBar; 