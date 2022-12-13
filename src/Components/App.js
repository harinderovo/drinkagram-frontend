import "../App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import DrinkContainer from "./DrinkContainer";
import About from "./About";
import DrinkFormPage from "./DrinkFormPage";
import { Route, Switch } from "react-router-dom";
import AddDrinkForm from "./AddDrinkForm";

function App() {
  const [drinkList, setDrinkList] = useState([]);
  const [likedDrinkIds, setLikedDrinkIds] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");

  const likedDrinkNames = likedDrinkIds.map((id) => {
    return drinkList.find((drink) => drink.id === id).name;
  });

  const addDrinkLike = (id) => {
    setLikedDrinkIds((likedDrinkIds) => [...likedDrinkIds, id]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/Drinks")
      .then((r) => r.json())
      .then((json) => setDrinkList(json));
  }, []);

  return (
    <div>
      <NavBar
        likedDrinkNames={likedDrinkNames}
        drinkList={drinkList}
        setDrinkList={setDrinkList}
        setSubmittedSearch={setSubmittedSearch}
      />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/form">
          <DrinkFormPage drinkList={drinkList} setDrinkList={setDrinkList} />
        </Route>
        <DrinkContainer
          addDrinkLike={addDrinkLike}
          drinkList={drinkList}
          setDrinkList={setDrinkList}
          submittedSearch={submittedSearch}
        />
      </Switch>
    </div>
  );
}

export default App;
