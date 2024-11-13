const fetchCustomers = async () => {
    const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers');
    const data = await response.json();
    return data._embedded.customers;
}
const fetchTrainings = async () => {
    const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings');
    const data = await response.json();
    return data._embedded.trainings;
}
const addCustomer = async (customer) => {
    const options = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(customer)
    }
      const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers', options);
      const data = await response.json();
      console.log('Created:', data);
      return data;
  }

 function FetchCustomerByUrl({url}) {
    console.log(url);
    fetch(url)
.then(response => response.json())
.then(data => {
  const customername = data.firstname;
  console.log(JSON.stringify(customername))
})
.catch(err => {
  // Something went wrong
});
    return (
     <>
   {JSON.stringify(customername)}
     </> 
     )
};

const deleteCustomer = async (url) => {
  const options = {
    method: 'DELETE'
  }
    if(window.confirm("do you want to delete this customer")){
      return fetch(url, options);
    }
};

const deleteTraining = async (url) => {
  const options = {
    method: 'DELETE'
  }
    if(window.confirm("do you want to delete this customer")){
      return fetch(url, options);
    }
};

const addTraining = async (training) => {
  const options = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(training)
  }
    const response = await fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings', options);
    const data = await response.json();
    console.log('Created:', data);
    return data;
}

export {fetchCustomers, fetchTrainings, FetchCustomerByUrl, addCustomer, deleteCustomer, deleteTraining, addTraining};