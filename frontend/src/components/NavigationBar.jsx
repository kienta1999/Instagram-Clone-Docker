import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import UserContext from "../context/UserContext";

const NavigationBar = () => {
  const { getToken, deleteToken } = useContext(UserContext);
  const history = useHistory();
  const token = getToken();

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-instagram.png?w=585&scale=down"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Instagram
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Button
              className="btn btn-light"
              onClick={() => {
                deleteToken();
                history.push("/login");
              }}
            >
              Logout
            </Button>
          </Nav>
          <Nav>
            <div>{`Welcome back, ${token?.username}!`}</div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
