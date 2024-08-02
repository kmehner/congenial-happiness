import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerForm from './CustomerForm';

// Wrapper component
function CustomerFormWrapper() {

  // https://reactrouter.com/en/main/hooks/use-params
  // The use params hook returns an object of key/value pairs from the current URL that was matched by the route path
  // ie. grabbing the user ID   
    // let { userId } = useParams();
    // <Route path=":userId" element={<ProfilePage />} />
  let params = useParams();


  // https://reactrouter.com/en/main/hooks/use-navigate
  let navigate = useNavigate();

  return <CustomerForm params={params} navigate={navigate} />;
}

export default CustomerFormWrapper;
