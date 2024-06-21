import { useState , useEffect} from "react"; //import both hooks to use 
import ContactRow from "./ContactRow"; // import component Contact row for singular use

 export default function ContactList({ setSelectedContactId }) { // export this function to use in app
  const [contacts, setContacts] = useState([]); // declaring the useState and setting to empty array

  useEffect(() => { // 
    async function fetchContacts() { 
        //The useEffect Hook allows you to perform side effects in your components.
        // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
      try { //try catch for retrieving the API via async await
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result); //
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts(); // calling the function
  }, []);

  return ( // for the ContactList function, we are displaying a returned table 
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => ( //we are mapping over the contact and rendering the info
          <ContactRow 
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId}
          />
        ))}
      </tbody>
    </table>
  )
}
