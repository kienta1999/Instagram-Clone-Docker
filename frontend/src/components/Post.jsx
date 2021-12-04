import { useContext } from "react";
import UserContext from "../context/UserContext";

const Post = ({ data }) => {
  const { getToken } = useContext(UserContext);
  const { id: loginUserId } = getToken();
  console.log(loginUserId);
  const {
    userId: postUserId,
    id: postId,
    content,
    user: { username },
    createdAt,
  } = data;
  return (
    <div>
      <h5>{`${username}, at ${createdAt}`}</h5>
      <div>{content}</div>
      {postUserId == loginUserId && <a href={`/post/${postId}`}>Edit</a>}
      <br />
      <br />
    </div>
  );
};

export default Post;
