import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Home = () => {
  const { getToken } = useContext(UserContext);
  const history = useHistory();
  const token = getToken();
  if (!token) {
    history.push("/login");
  }
  return <div>{token?.username}</div>;
};

export default Home;
