import React from 'react';
import Contact from './Contact';
import './Contacts.css';

const Contacts = ({ contacts, update }) => {
  const renderContacts = () => {
    return contacts.map((contact, index) => {
      return <Contact key={index} contact={contact} update={update} />
    });
  }

  return (
    <div className="Contacts offset-2 col-8 offset-2 p-1 mt-3" >
      {renderContacts()}
    </div>
  )
}

export default Contacts;