import React, {useState} from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";

function CustomerForm(){
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  // const customer = {name: "", phone: "", email: ""}
  // customerData = customer 

  const formStyles = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'start',
    justifyContent: 'space-between',
    height: '250px'
  }

  // Write a function to handle form submission 
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const response = await axios.post(`https://httpbin.org/post`, {
      body: customerData
    })

    console.log(response.data)
  }

  // Write a function to handle change of form 
  // const handleChange = (event) => {
  //   // event = {
  //   //   name: "name", 
  //   //   value: "Katelyn Mehner"
  //   // }

  //   event.preventDefault();

  //   let {name, value} = event.target; // Grabbing the name and value attribute and setting these variable names using the spread operator 
  //   // let name = event.target.name
  //   // let value = event.target.value 

  //   const newData = {...customerData}; 

  //   for (let [key, val] of Object.entries(newData)){
  //     console.log(`The key is ${key}`);
  //     console.log(`The value is ${val}`)

  //     if (key==name){
  //       newData[key] = value 

  //       console.log(`Key ${key} == name ${name}`)
  //     }
  //   } 
  //   console.log(newData); 
  //   setCustomerData(newData); 

  // }

  const handleChange = (event) => {
    // Phone number input event
    // event = { name: "phone", value: "(805) 333-4343" }
    event.preventDefault();
  
    let { name, value } = event.target;
    // let name = "phone"
    // let value = "(805) 333-4343"
  
    const newData = { ...customerData };
  
    if (customerData.hasOwnProperty(name)) {
      newData[name] = value;
    }
  
    setCustomerData(newData);
    
  };

  return (
    <div>
      <NavigationBar />
      <form style={formStyles} onSubmit={handleSubmit}>
        <h3>Add/Edit Customer</h3>

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={customerData.name} onChange={handleChange}/>

        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" value={customerData.phone} onChange={handleChange}/>

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={customerData.email} onChange={handleChange}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CustomerForm; 