import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import authAxios from '../../services/authAxios.service'
// import { Link } from 'react-router-dom';


const RegistryModal = () => {
  const [newUser, setNewUser] = useState({});

  // ------ MODAL BOOTSTRAP ----- 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const createNewUser = (eventHTML) => {
    eventHTML.preventDefault();
    authAxios.registro(newUser).then((response) => {
      console.log(response);
    });
  };

  const updateNewUser = (eventHTML) => {
    const { name, value } = eventHTML.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return(

    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        Sign up
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up to CoinMap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={createNewUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name='email'
                onChange={updateNewUser}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                name='username'
                onChange={updateNewUser}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name='password'
                onChange={updateNewUser}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default RegistryModal