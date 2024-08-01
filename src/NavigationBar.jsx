import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'

function NavigationBar() {
  const navigate = useNavigate(); 
  return (
    <nav className="clearfix">
      <h3 onClick={() => navigate('/')}>Yacht Rockers</h3>
      <NavLink to="/">Home</NavLink> {/* <a href="/">Home</a> */}
      <NavLink to="/add-customer/">Add Customer</NavLink>
      <NavLink to="/customers">Customers</NavLink>
      <NavLink to="/add-product">Add Product</NavLink>
      <NavLink to="/products">Products</NavLink>
      
    </nav>
  )
}

export default NavigationBar; 