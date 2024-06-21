import React from 'react';

export default function ContactRow({ contact, setSelectedContactId }) { //creating a function to export for Contact Rows
    return ( // we are returning information when the contact is selected 
      <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  