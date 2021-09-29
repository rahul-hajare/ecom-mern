import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Electronic Shop</Navbar.Brand>
          </LinkContainer>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <i className="fas fa-shopping-cart" /> Cart
            </Nav.Link>
            <Nav.Link href="#features">
              <i className="fas fa-user" /> Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;