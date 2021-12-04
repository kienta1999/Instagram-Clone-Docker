import { useParams } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../NavigationBar.jsx";
import { getPost, updatePost } from "../../data/post";

const EditPost = () => {
  const { getToken } = useContext(UserContext);
  const history = useHistory();
  const token = getToken();
  const userId = token?.id;
  const { id: postId } = useParams();
  const [content, setContent] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const result = await getPost(userId, postId);
        if (result) {
          setContent(result.data.content);
        }
      } catch (error) {
        history.push("/");
        console.log(error.response.data?.message);
      }
    })();
  }, []);
  if (!token) {
    history.push("/login");
    return null;
  }
  const updateContent = (e) => {
    setContent(e.target.value);
  };

  const submitUpdate = async () => {
    await updatePost(userId, postId, content);
    history.push("/");
  };

  return (
    <Container>
      <NavigationBar />
      <div>Editting Post {postId}</div>
      <textarea value={content} onChange={updateContent}></textarea>
      <br />
      <button className="btn btn-primary" onClick={submitUpdate}>
        Update
      </button>
    </Container>
  );
};

export default EditPost;
