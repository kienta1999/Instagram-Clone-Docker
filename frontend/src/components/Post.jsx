import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { deletePost } from "../data/post";

const Post = ({ data }) => {
  const [deleted, setDeleted] = useState(false);
  const { getToken } = useContext(UserContext);
  const { id: loginUserId } = getToken();
  const {
    userId: postUserId,
    id: postId,
    content,
    user: { username },
    createdAt,
  } = data;
  const deletePostHandler = async () => {
    try {
      await deletePost(loginUserId, postId);
      setDeleted(true);
    } catch (error) {
      console.log(error.response.data?.message);
    }
  };
  return deleted ? null : (
    <div>
      <h5>{`${username}, at ${createdAt}`}</h5>
      <div>{content}</div>
      {postUserId == loginUserId && <a href={`/post/${postId}`}>Edit</a>}
      {postUserId == loginUserId && (
        <button onClick={deletePostHandler} className="btn btn-danger">
          Delete
        </button>
      )}
      <br />
      <br />
    </div>
  );
};

export default Post;
