import React, { useState, useEffect } from "react"; // importing two hooks to use

export default function SelectedContact({ //exporting Selected Contact function
  selectedContactId, // params
  setSelectedContactId, //params
}) {
  const [contact, setContact] = useState(null); // declaring the useState as empty

  useEffect(() => { // useEffect again to access data 
    async function fetchContact() { // async and await to fetch API for selected Contact 
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]); // specifying the selected Contact ID

  if (!contact) { // error if the contact is not selected
    return <div>Loading...</div>;
  }

  return ( //returning the props that will be displayed in the contact List 
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Username: {contact.username}</p>
      <p>Website: {contact.website}</p>
      <button onClick={() => setSelectedContactId(null)}> 
        Back to Contact List
      </button>
    </div>
  );
}