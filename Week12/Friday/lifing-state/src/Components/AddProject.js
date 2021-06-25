import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AddProject = ({ addProject }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Front-End');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: uuidv4(),
      title: title,
      category: category
    };
    
    addProject(newProject);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <Form onSubmit={handleSubmit} >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={title} type="text" placeholder="Project Title" onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select" value={category} onChange={e => setCategory(e.target.value)} >
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
              </Form.Control>
            </Form.Group>

            <input type="submit" className="btn btn-secondary" />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AddProject
