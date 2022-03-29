import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setFriends(json));
  }, []);
  return (
    <div>
      <h1>We are your Friend</h1>
          {
              friends.map(friend => <Friend key={friend.id} friend={friend}/>)
      }
    </div>
  );
};

export default Friends;
