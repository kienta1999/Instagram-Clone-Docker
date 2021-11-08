import keys from "../keys";
import axios from "axios";

const getUser = async (id) => {
  const { backendHost } = keys;
  const url = `${backendHost}/api/user/${id}`;
  return await axios.get(url);
};

export default getUser;
