import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../NavigationBar.jsx";
import NewPost from "../NewPost.jsx";

const Home = () => {
  const { getToken } = useContext(UserContext);
  const history = useHistory();
  const token = getToken();
  if (!token) {
    history.push("/login");
    return null;
  } else {
    return (
      <Container>
        <NavigationBar />
        <NewPost />
      </Container>
    );
  }
};

export default Home;
