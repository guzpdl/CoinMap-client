import { Container, Navbar, Nav, Form, Button } from "react-bootstrap"
import { useContext } from 'react';

import { AuthContext } from "../../context/auth.context";
import LogInModal from "../LogIn/LogIn";
import RegistryModal from "../SignUp/SignUp";

const NavbarCoinMap = () => {

  const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);

    return(

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          CoinMap         
          </Navbar.Brand>
          <Nav className="me-auto">

          <Nav.Link className="pt-3" variant="primary" href="/home">Home</Nav.Link>    

          <Nav.Link as='span'>
            <RegistryModal/>
          </Nav.Link>

          <Nav.Link as='span'>
          <LogInModal/>
          </Nav.Link>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    )

}

export default NavbarCoinMap
