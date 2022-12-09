import React, { useEffect, useState } from "react";
import DrinkCard from "./DrinkCard";

function DrinkContainer() {
  const API = "http://localhost:3000/Drinks";
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((json) => setDrinkList(json));
  }, []);

  function renderDrinkList() {
    return drinkList.map((drink) => {
      return <DrinkCard key={drink.id} drink={drink} />;
    });
  }

  return (
    <main>
      <ul className="cards">{renderDrinkList()}</ul>
    </main>
  );
}

export default DrinkContainer;
