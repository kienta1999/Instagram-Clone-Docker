import keys from "../keys";
import axios from "axios";

const register = async (username, password) => {
  const { backendHost } = keys;
  const host = "localhost:3001";
  const url = `${backendHost}/user`;
  const response = await axios.post(url, { username, password });
  console.log(response);
};

export default register;
