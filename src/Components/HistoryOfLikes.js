import React from "react";

function HistoryOfLikes({ likedDrinkNames }) {
  return (
    <ul>
      {likedDrinkNames.map((name) => (
        <li>you liked {name}</li>
      ))}
    </ul>
  );
}

export default HistoryOfLikes;
