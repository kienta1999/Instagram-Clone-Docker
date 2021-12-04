import { useParams } from "react-router";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../NavigationBar.jsx";

const EditPost = () => {
  const { getToken } = useContext(UserContext);
  const history = useHistory();
  const token = getToken();
  const { id } = useParams();
  console.log(token);
  if (!token) {
    history.push("/login");
    return null;
  } else {
    return (
      <Container>
        <NavigationBar />
        <div>Editting Post {id}</div>
      </Container>
    );
  }
};

export default EditPost;
