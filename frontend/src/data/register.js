import keys from "../keys";
import axios from "axios";

const register = async (username, password) => {
  let axiosConfig = {
    withCredentials: false,
    headers: { "Content-Type": "application/json" },
  };

  const { backendHost } = keys;
  const url = `${backendHost}/api/user`;
  const response = await axios.post(url, { username, password }, axiosConfig);
  console.log(response);
};

export default register;
