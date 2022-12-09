import React from "react";

function DrinkCard({ drink, onUpdateDrink }) {
  const { id, name, image, likes, season, description } = drink;

  function handleLikes() {
    const updateLikesObj = {
      likes: drink.likes + 1,
    };

    fetch(`http://localhost:3000/Drinks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateLikesObj),
    })
      .then((r) => r.json())
      .then(onUpdateDrink);
  }

  return (
    <li className="card">
      <h2>{name}</h2>
      <h4>{season}</h4>
      <div className="image">
        <img src={image} alt={name} />
        <button onClick={handleLikes} className="emoji-button-liked">
          ♥
        </button>
        <span className="likes">{likes} Likes</span>
      </div>
      <p>{description}</p>
    </li>
  );
}

export default DrinkCard;
