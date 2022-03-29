import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { post } = useParams();
  const [postt, setPostt] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
      .then((res) => res.json())
      .then((json) => setPostt(json));
  }, [post]);
  return (
    <div>
          <h1>Post Detals</h1>
          <h3>{postt.title}</h3>
          <p>{postt.body}</p>
    </div>
  );
};

export default PostDetails;
