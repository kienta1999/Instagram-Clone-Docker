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

export const listAllPost = async () => {
  const { backendHost } = keys;
  const url = `${backendHost}/api/posts`;
  return await axios.get(url);
};

export const updatePost = async (userId, postId, content) => {
  const { backendHost } = keys;
  const url = `${backendHost}/api/user/${userId}/post/${postId}`;
  return await axios.put(url, { content });
};

export const deletePost = async (userId, postId) => {
  const { backendHost } = keys;
  const url = `${backendHost}/api/user/${userId}/post/${postId}`;
  return await axios.delete(url);
};

export const getPost = async (userId, postId) => {
  if (!userId || !postId) return;
  const { backendHost } = keys;
  const url = `${backendHost}/api/user/${userId}/post/${postId}`;
  return await axios.get(url);
};
