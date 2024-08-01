import React, {Component} from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
// import { OrderList } from "./OrderList";
/* https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ */

/* Component lifecycle 
  0. Initializing 
  1. Mounting - when a component is created and inserted into the DOM 
    - constructor() 
    - render() - return jsx with state data in it 
    - componentDidMount() -> invoked immediately after the component is inserted into the DOM 
      --> A great place to instantiate network requests 
  2. Updating 
  3. Unmounting 
 */

// GOAL: A class component for a list of customers for our e-commerce application 

class CustomerList extends Component {
  // We are accepting properties from our App.jsx 
  constructor(props){

    // Inherit the component properties including component lifecyling (mount, update, unmount) AND keeping track of state 
    super(props); 

    // Setting our state to an object with a list of customers and a selectedCustomerID 
    this.state = {
      customers: [],
      selectedCustomerID: null,
    }; 
  }

  // Step 1: Mounting
  componentDidMount(){
    // Simulate fetching data from an API 
    // const response = await fetch(`https://exampleapi.com/)
    // data = response.json() 
    const fetchedCustomers = [
      {
        id: 1,
        name: "Alice"
      },
      {
        id: 2,
        name: "Bob"
      }, 
      {
        id: 3,
        name: "Allan (guest of honor)"
      }
    ]; 

    // Setting customer list = fetched customer data 
    this.setState({customers: fetchedCustomers})
  }


  selectCustomer = (id) => {
    // Set the state of selectedCustomerID - id 
    this.setState({ selectedCustomerID: id}); 

    // Grabbing the function onCustomerSelect from our parent page to update the parent with the new info we have 
    // so our next page has access to the selected customer ID 
    this.props.handleCustomerSelect(id); 
    console.log(`The default customer id is ${this.props.defaultCustomerID}`)
  }

  // Step 2: Updating 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCustomerID !== this.state.selectedCustomerID){
      console.log(`New customer selected: ID ${this.state.selectedCustomerID}`); 
    }
  }

  // Step 3: Unmounting 
  componentWillUnmount(){
    console.log("CustomerList component is being unmounted"); 
  }

  // Delete customer 
  deleteCustomer = (customerIDToDelete) => {
    const newCustomerList = this.state.customers.filter(customer => customer.id !== customerIDToDelete); 
    this.setState({customers: newCustomerList}); 
  }

  render() {
    const {customers, selectedCustomerID, pets} = this.state; 

    return (
      <div className="customer-list">
        <NavigationBar />
        <h3>Customers</h3>
        <ul>
          { customers.map(customer => (
            <li key={customer.id} onClick={() => this.selectCustomer(customer.id)}>
              {/* We want to edit customer: '/edit-customer/:id' */}
              <Link to={`/edit-customer/${customer.id}`}>{customer.name}</Link>

              {/* Delete the customer (pretend we have a function here) */}
              <button onClick={() => this.deleteCustomer(customer.id)}>Delete</button>
            </li>
          )) }
        </ul>

      </div>
    )
  }
}

export default CustomerList; 