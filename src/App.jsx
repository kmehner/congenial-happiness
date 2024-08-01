import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CustomerList from './CustomerList'
import CustomerForm from './CustomerForm'; 
import ProductList from './ProductList'
import ProductForm from './ProductForm';
import "./AppStyles.css"; 
import { Home } from './Home';
import { NotFound } from './NotFound';

function App() {

  // PATH: the url you want the user to enter to get to another page (in addition to our main URL)
    // route for customer page -> /add-customer/
    // main url -> localhost:5173
    // complete path -> localhost:5173/add-customer/ 

  return (
    <div className='app-container'>
      <Routes>
        {/* Add home page */}
        <Route path='/' element={ <Home/> } />

        {/* Customer related routes  */}

        {/* Add customer - CustomerForm element */}
        <Route path='/add-customer/' element={ <CustomerForm /> }/>
        {/* Edit customer - CustomerForm */}
        <Route path='/edit-customer/:id/' element={ <CustomerForm /> }/> 
        {/* Look at customer list (aka customers) - CustomerList */}
        <Route path='/customers' element={ <CustomerList /> } />

        {/* Product related routes */}
        {/* Add a product */}
        <Route path="/add-product" element={<ProductForm />} />
        {/* Edit a product(productID) */}
        <Route path="/edit-product/:id" element={<ProductForm />} />
        {/* List all products */}
        <Route path="/products" element={<ProductList />} />

        {/* Setting a default page if the path doesn't match anything */}
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </div>
  )
}

export default App
