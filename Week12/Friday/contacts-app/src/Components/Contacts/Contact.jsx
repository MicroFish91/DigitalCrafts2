import React from 'react';

const Contact = ({ contact }) => {
  const renderShort = () => {
    return (
      <li className="text-left">
        {contact.name} {contact.city} {contact.state}
      </li>
    );
  }

  return (
    <ul className="offset-2 col-8 offset-2">
      {renderShort()}
    </ul>
  )
}

export default Contact;
