import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

const LogInModal = () => {


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);

    return(

    <>
  <Nav.Link variant="primary" onClick={handleShow}>
    Log in
  </Nav.Link>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Log in</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
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
        Log in
      </Button>
    </Modal.Footer>
  </Modal>
</>

)
}

export default LogInModal

