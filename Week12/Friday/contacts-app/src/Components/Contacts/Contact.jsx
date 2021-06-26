import { faEdit, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = ({ contact, update }) => {
  const handleUpdateFavorites = (e) => {
    update.favorites(contact.id, contact.favorite);
  }

  const renderShort = () => {
    return (
      <div className="Contact-short">
        <div className="Contact-info">{contact.name} <br /> <span className="font-italic text-xs">-{contact.city} {contact.state}</span></div>
      
        <div className="address-icons">
          <span className={(!contact.favorite) ? "icon-heart" : "icon-heart-white"} onClick={handleUpdateFavorites} >
            <FontAwesomeIcon icon={faHeart} /></span> &nbsp;
          <span className="icon-edit"><FontAwesomeIcon icon={faEdit} /></span> &nbsp;
          <span className="icon-trash"><FontAwesomeIcon icon={faTrash} /></span>
        </div>
      </div>
    );
  }

  return (
    <div className="Contact p-2">
      {renderShort()}
    </div>
  )
}

export default Contact;
