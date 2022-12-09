import "../App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import DrinkContainer from "./DrinkContainer";

function App() {
  const [drinkList, setDrinkList] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Drinks")
      .then((r) => r.json())
      .then((json) => setDrinkList(json));
  }, []);

  return (
    <div>
      <NavBar
        drinkList={drinkList}
        setDrinkList={setDrinkList}
        setSubmittedSearch={setSubmittedSearch}
      />
      <DrinkContainer
        drinkList={drinkList}
        setDrinkList={setDrinkList}
        submittedSearch={submittedSearch}
      />
    </div>
  );
}

export default App;
