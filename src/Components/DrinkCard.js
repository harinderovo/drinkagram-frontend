import React, { useState } from "react";

function DrinkCard({ drink }) {
  const { name, image, likes, season, description } = drink;

  const [liked, setLiked] = useState(false);

  function likeButton() {
    setLiked(!liked);
  }

  return (
    <li className="card">
      <h2>{name}</h2>
      <h4>{season}</h4>
      <div className="image">
        <img src={image} alt={name} />
        {liked ? (
          <button onClick={likeButton} className="emoji-button-liked">
            ♥
          </button>
        ) : (
          <button onClick={likeButton} className="emoji-button">
            ♡
          </button>
        )}
        <span className="likes">{likes} Likes</span>
      </div>
      <p>{description}</p>
    </li>
  );
}

export default DrinkCard;
