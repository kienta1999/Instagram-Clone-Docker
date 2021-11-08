import { useState, useRef, useContext } from "react";
import UserContext from "../context/UserContext";
import { newPost } from "./../data/post.js";
import Post from "./Post.jsx";

const NewPost = () => {
  const { getToken } = useContext(UserContext);
  const [submittedPost, setsubmittedPost] = useState(null);
  const token = getToken();
  const contentRef = useRef("");
  const handleSubmitPost = async () => {
    console.log(submittedPost);
    if (token) {
      const content = contentRef.current.value;
      const userId = token?.id;
      const data = (await newPost(userId, content))?.data;
      contentRef.current.value = null;
      console.log({ data, token });
      data.user = token;
      setsubmittedPost(data);
    } else {
      alert("Please login to post!!");
    }
  };
  return (
    <>
      <div className="review form-group">
        <h5>Share something so people know about your day</h5>
        <textarea
          name="content"
          id="content"
          cols="100"
          placeholder="How are you today?"
          ref={contentRef}
        ></textarea>
        <br />
        <button className="btn btn-primary" onClick={handleSubmitPost}>
          Post
        </button>
      </div>
      {submittedPost && <Post data={submittedPost} id={submittedPost.id} />}
    </>
  );
};

export default NewPost;
