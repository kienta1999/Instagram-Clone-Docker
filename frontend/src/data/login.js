import keys from "../keys";
import axios from "axios";

const login = async (username, password) => {
  const { backendHost } = keys;
  const url = `${backendHost}/api/login`;
  let axiosConfig = {
    withCredentials: false,
    headers: { "Content-Type": "application/json" },
  };
  return await axios.post(url, { username, password }, axiosConfig);
};

export default login;
