import React, { useEffect, useState } from "react";
import DrinkCard from "./DrinkCard";

function DrinkContainer({
  drinkList,
  setDrinkList,
  submittedSearch,
  addDrinkLike,
}) {
  function updateDrinkLikes(updatedDrinkLikes) {
    addDrinkLike(updatedDrinkLikes.id);
    const updateDrinkLikes = drinkList.map((drink) =>
      drink.id === updatedDrinkLikes.id ? updatedDrinkLikes : drink
    );
    setDrinkList(updateDrinkLikes);
  }

  function renderDrinkList() {
    return drinkList
      .filter((drink) =>
        drink.name.toLowerCase().includes(submittedSearch.toLowerCase())
      )
      .map((drink) => {
        return (
          <DrinkCard
            className="drink-card"
            key={drink.id}
            drink={drink}
            onUpdateDrink={updateDrinkLikes}
          />
        );
      });
  }

  return <div className="cards">{renderDrinkList()}</div>;
}

export default DrinkContainer;
