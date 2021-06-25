import React from 'react';
import Contact from './Contact';

const Contacts = ({ contacts }) => {
  const renderContacts = () => {
    return contacts.map(contact => {
      return <Contact contact={contact} />
    });
  }

  return (
    <div className="offset-2 col-8 offset-2 min-vh-50 max-vh-100 d-inline-block border border-dark" >
      {renderContacts()}
    </div>
  )
}

export default Contacts;