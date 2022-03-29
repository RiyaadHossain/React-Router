import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {

    const navigate = useNavigate()
    const seeDetails = () => {
      navigate(`/friends/${friend.id}`)
  };
  return (
    <div>
          <h3>
              <Link to={`/friends/${friend.id}`}>Go</Link>
        {friend?.name} <button onClick={seeDetails}>id</button>
      </h3>
    </div>
  );
};

export default Friend;
