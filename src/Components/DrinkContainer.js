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
            key={drink.id}
            drink={drink}
            onUpdateDrink={updateDrinkLikes}
          />
        );
      });
  }

  return (
    <main>
      <ul className="cards">{renderDrinkList()}</ul>
    </main>
  );
}

export default DrinkContainer;
