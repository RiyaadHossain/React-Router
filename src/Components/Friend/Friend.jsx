import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {

    const navigate = useNavigate()
    const seeDetails = () => {
      navigate(`/friends/${friend.id}`)
  };
  return (
    <div>
      <h3>
        {friend?.name} <button onClick={seeDetails}>id</button>
      </h3>
    </div>
  );
};

export default Friend;
