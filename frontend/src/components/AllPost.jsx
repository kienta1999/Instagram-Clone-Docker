import { useState, useEffect, useContext } from "react";
import { listAllPost } from "./../data/post.js";
import getUser from "../data/getUser";

const AllPost = () => {
  const [listData, setListData] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await listAllPost();
      setListData(result.data);
    })();
  }, []);

  return <>{JSON.stringify(listData)}</>;
};

export default AllPost;
