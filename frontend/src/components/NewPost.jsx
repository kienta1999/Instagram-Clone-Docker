import { useState, useRef, useContext } from "react";
import UserContext from "../context/UserContext";
import { newPost } from "./../data/post.js";

const NewPost = () => {
  const { getToken } = useContext(UserContext);
  const token = getToken();
  const contentRef = useRef("");
  const handleSubmitPost = async () => {
    if (token) {
      const content = contentRef.current.value;
      const userId = token?.id;
      await newPost(userId, content);
      contentRef.current.value = null;
    } else {
      alert("Please login to post!!");
    }
  };
  return (
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
  );
};

export default NewPost;
