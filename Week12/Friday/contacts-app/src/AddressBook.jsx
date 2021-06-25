import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AddContactForm from './Components/AddContactForm';
import Contacts from './Components/Contacts';

const AddressBook = () => {
  const [contacts, setContacts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleFavorites, setToggleFavorites] = useState(false);

  const addContact = (newContact, favorite) => {
    const newContactList = [newContact, ...contacts];
    const newSortedContacts = newContactList.sort((a, b) => a.name - b.name);
    setContacts(newSortedContacts);

    if(favorite){
      const newFavoritesList = [newContact, ...favorites];
      const newSortedFavorites = newFavoritesList.sort((a, b) => a.name - b.name);
      setFavorites(newSortedFavorites);
    }
  }

  const renderSearchBar = () => {
    return (
      <Form className="offset-2 col-8 offset-2">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Contacts" />
        </Form.Group>
        <Button onClick={e => setToggleAdd(!toggleAdd)} className="m-1 bg-dark" variant="primary" size="md" active>
          Add New Contact
        </Button>
        {
        (!toggleFavorites) ? 
         <Button onClick={e => setToggleAdd(!toggleFavorites)} className="m-1 bg-dark" variant="primary" size="md" active>
            Show Favorites
         </Button> 
          :
         <Button onClick={e => setToggleAdd(!toggleFavorites)} className="m-1 bg-dark" variant="primary" size="md" active>
            Show All
         </Button>
        }
      </Form>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="offset-4 col-4 offset-4 text-center">Contact List</h1>
          {(!toggleAdd) ? renderSearchBar() : <AddContactForm addContact={addContact} setToggleAdd={setToggleAdd} />}
          {(!toggleFavorites) ? <Contacts contacts={contacts} /> : <Contacts contacts={favorites} />}
      </div>
    </div>
  );
}

export default AddressBook;