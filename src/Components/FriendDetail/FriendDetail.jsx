import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const [user, setUser] = useState([]);
  const { friendId } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [friendId]);
  return (
    <div>
      <h3>Hello, I am your Friend - {user.name}</h3>
    </div>
  );
};

export default FriendDetail;
