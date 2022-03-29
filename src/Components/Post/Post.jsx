import React, { useEffect, useState } from "react";
import { Link, Outlet} from "react-router-dom";

const Post = () => {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
          <h1>All Posts are here 📪</h1>
          {posts.map(post => <strong>Post No.{post.id}  <Link to={`/post/${post.id}`}>Go</Link>     </strong>)}
          <Outlet/>
    </div>
  );
};

export default Post;
