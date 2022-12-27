import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
export default function RestoNavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Resto Mini</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/product")}>Menu</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
