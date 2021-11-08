import { useState, useEffect } from "react";
import { listAllPost } from "./../data/post.js";
import Post from "./Post.jsx";

const AllPost = () => {
  const [listData, setListData] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await listAllPost();
      setListData(result.data);
    })();
  }, []);

  return listData && listData.map((data) => <Post data={data} key={data.id} />);
};

export default AllPost;
