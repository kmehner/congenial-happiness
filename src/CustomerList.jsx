import React, {Component} from "react";
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
      // Customer array - blank array because we are defaulting that we don't have any customers 
      customers: [],

      // Be able to select the customer we want and save their ID 
      // null because we don't have any selected customer (allows us check truthyness of selectedCustomerValue)
      selectedCustomerID: null,

      // Pets (that are also shopping from our e-commerce website)
      pets: [], 

      selectedPetID: null, 
    }; 
  }

  /* 
  componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
  Initialization that requires DOM nodes should go here. 
  If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
   */  
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
    // Fetched customer data is emulating reponse data from API 
    this.setState({customers: fetchedCustomers})

    //  Fetching the pets and saving the pets to our state
    const fetchedPets = [
      {
        name: "Tortuga",
        type: "Tortoise",
        age: 102
      }, 
      {
        name: "Lassie",
        type: "Dog",
        age: 5
      }, 
      {
        name: "Kermit",
        type: "Frog",
        age: 3,
      }
    ]

    this.setState({pets: fetchedPets})
  }


  // Actually updating our page 
  selectCustomer = (id) => {
    // Set the state of selectedCustomerID - id 
    this.setState({ selectedCustomerID: id}); 

    // Grabbing the function onCustomerSelect from our parent page to update the parent with the new info we have 
    // so our next page has access to the selected customer ID 
    this.props.handleCustomerSelect(id); 
    console.log(`The default customer id is ${this.props.defaultCustomerID}`)
  }

  // Select Pet 
  selectPet = (petID) => {
    this.setState({ selectedPetID: petID}); 
    alert(`Selected pet: ${petID}`)
  }


  // Step 2: Show that we updated the page 
  // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
  componentDidUpdate(prevProps, prevState) {

    // We only call upon props from parent container IF the state has changed 
    if (prevState.selectedCustomerID !== this.state.selectedCustomerID){
      // this.props.handleCustomerSelect ( this.state.selectedCustomerID )
      console.log(`New customer selected: ID ${this.state.selectedCustomerID}`); 
    }
  }

  // Step 3: Unmounting 
  componentWillUnmount(){
    console.log("CustomerList component is being unmounted"); 
  }

  render() {
    const {customers, selectedCustomerID, pets} = this.state; 
    // const customers = this.state.customers

    return (
      <div className="customer-list">
        <h3>Customers</h3>
        <ul>
          { this.state.customers.map(customer => (
            <li key={customer.id} onClick={() => this.selectCustomer(customer.id)}>{customer.name}</li>
          )) }
        </ul>

        {/* Create unordered list */}
        {/* Map the pets array as list items */}
        <ul>
          { pets.map((pet, index) => (
            <li key={index} onClick={() => this.selectPet(index+1)} > {pet.name} - {pet.type}, Age: {pet.age} </li>
          )) }
        </ul>

        {/* { selectedCustomerID && (
          <>
            <h3>Selected Customer</h3>
            <p>Selected Customer ID: {selectedCustomerID}</p>

            <OrderList customerID={selectedCustomerID}/>
          </>
        )} */}
      </div>
    )
  }
}

export default CustomerList; 