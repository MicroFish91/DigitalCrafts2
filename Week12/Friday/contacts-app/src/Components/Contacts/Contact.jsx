import { faEdit, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


const Contact = ({ contact, update }) => {
  const [toggleExpand, setToggleExpand] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleDeleteContact = (e) => {
    update.delete(contact.id, contact.favorite);
  }

  const handleUpdateFavorites = (e) => {
    update.favorites(contact.id, contact.favorite);
  }

  const renderExpanded = () => {
    return (
      <div className="Contact-short" onClick={e => setToggleExpand(false)}>
        <div className="Contact-info">
          {contact.name} <br /> 
          {contact.addressOne} <br /> 
          {contact.addressTwo} <br /> 
          {contact.city}, {contact.state} {contact.zip} <br /> 
          {contact.email} <br /> 
          {contact.phone}  
        </div>
      
        <div className="address-icons">
          <span className={(!contact.favorite) ? "icon-heart" : "icon-heart-white"} onClick={handleUpdateFavorites} >
            <FontAwesomeIcon icon={faHeart} /></span> &nbsp;
          <span className="icon-edit"><FontAwesomeIcon icon={faEdit} /></span> &nbsp;
          <span className="icon-trash" onClick={handleDeleteContact} ><FontAwesomeIcon icon={faTrash} /></span>
        </div>
      </div>
    );
  }

  const renderShort = () => {
    return (
      <div className="Contact-short" onClick={e => setToggleExpand(true)} >
        <div className="Contact-info">{contact.name} <br /> <span className="font-italic text-xs">-{contact.city} {contact.state}</span></div>
      
        <div className="address-icons">
          <span className={(!contact.favorite) ? "icon-heart" : "icon-heart-white"} onClick={handleUpdateFavorites} >
            <FontAwesomeIcon icon={faHeart} /></span> &nbsp;
          <span className="icon-edit"><FontAwesomeIcon icon={faEdit} /></span> &nbsp;
          <span className="icon-trash" onClick={handleDeleteContact} ><FontAwesomeIcon icon={faTrash} /></span>
        </div>
      </div>
    );
  }

  return (
    <div className="Contact p-2">
      {(!toggleExpand) ? renderShort() : renderExpanded()}
    </div>
  )
}

export default Contact;
