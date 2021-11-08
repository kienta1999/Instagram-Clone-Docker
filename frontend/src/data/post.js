import keys from "../keys";
import axios from "axios";

export const newPost = async (userId, content) => {
  const { backendHost } = keys;
  const url = `${backendHost}/api/post`;
  let axiosConfig = {
    withCredentials: false,
    headers: { "Content-Type": "application/json" },
  };
  return await axios.post(url, { userId, content }, axiosConfig);
};
