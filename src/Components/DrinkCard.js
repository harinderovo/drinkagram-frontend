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
    <li className="image-container">
      <div className="image-card">
        <h2 className="title">{name}</h2>
        <h4 className="season">{season}</h4>
        <img src={image} className="image" alt={name} />
        <div className="likes-section">
          <button onClick={handleLikes} className="like-button">
            ♥
          </button>
          <span className="likes">{likes} Likes</span>
        </div>
        <div className="description-list">
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  );
}

export default DrinkCard;
