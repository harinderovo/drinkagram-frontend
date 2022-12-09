import React from "react";

function HistoryOfLikes({ likedDrinkNames }) {
  return (
    <div className="like-history">
      {likedDrinkNames.map((name) => (
        <p className="like-entry">You liked {name}!</p>
      ))}
    </div>
  );
}

export default HistoryOfLikes;
