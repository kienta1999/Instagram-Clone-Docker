import keys from "../keys";
import axios from "axios";

const register = async (username, password, email) => {
  let axiosConfig = {
    withCredentials: false,
    headers: { "Content-Type": "application/json" },
  };

  const { backendHost } = keys;
  const url = `${backendHost}/api/register`;
  const response = await axios.post(
    url,
    { username, password, email },
    axiosConfig
  );
  console.log(response);
};

export default register;
