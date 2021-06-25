import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddContactForm = ({ addContact, setToggleAdd }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("TX");
  const [zip, setZip] = useState("");
  const [favorite, setFavorite] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      phone,
      email,
      addressOne,
      addressTwo,
      city,
      state,
      zip
    }

    addContact(newContact, favorite);
    setToggleAdd(false);
  }

  return (
    <Form className="offset-2 col-8 offset-2" onSubmit={handleSubmit} >
      <Form.Row>
        <Form.Group className="col-12" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Enter name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group className="col-6" controlId="formGridName">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control onChange={e => setPhone(e.target.value)} value={phone} type="text" placeholder="Enter number" />
        </Form.Group>

        <Form.Group className="col-6" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={e => setAddressOne(e.target.value)} value={addressOne} placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control onChange={e => setAddressTwo(e.target.value)} value={addressTwo} placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group className="col-5" controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={e => setCity(e.target.value)} value={city} />
        </Form.Group>

        <Form.Group className="col-2" controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control onChange={e => setState(e.target.value)} value={state} as="select" defaultValue="Choose...">
            <option>TX</option>
            <option>WA</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="col-5" controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control onChange={e => setZip(e.target.value)} value={zip} />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check onChange={e => setFavorite(e.target.value)} value={favorite} type="checkbox" label="Favorite this contact" />
      </Form.Group>

      <Button className="bg-dark m-1" variant="dark" type="submit">
        Submit
      </Button>

      <Button onClick={(e) => setToggleAdd(false)} className="bg-dark m-1" variant="dark">
        Cancel
      </Button>
    </Form>
  );
}

export default AddContactForm;
