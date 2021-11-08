const Post = ({ data }) => {
  return (
    <div>
      <h5>{`${data.user.username}, at ${data.createdAt}`}</h5>
      <p>{data.content}</p>
    </div>
  );
};

export default Post;
