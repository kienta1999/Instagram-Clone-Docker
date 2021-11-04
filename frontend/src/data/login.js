import keys from "../keys";
import axios from "axios";

const login = async (username, password) => {
  const { backendHost } = keys;
  const url = `${backendHost}/user`;
};

export default login;
