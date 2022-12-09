import React, { useState } from "react";
import Search from "./Search";
import HistoryOfLikes from "./HistoryOfLikes";
import AddDrinkForm from "./AddDrinkForm";

function NavBar({
  drinkList,
  setDrinkList,
  setSubmittedSearch,
  likedDrinkNames,
}) {
  const [showForm, setShowForm] = useState(false);
  function showOrHideForm() {
    setShowForm(!showForm);
  }

  const [showLikeHistory, setShowLikeHistory] = useState(false);
  function showOrHideLikeHistory() {
    setShowLikeHistory(!showLikeHistory);
  }

  return (
    <header>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <button onClick={showOrHideLikeHistory}>❤️</button>
      {showLikeHistory ? (
        <HistoryOfLikes likedDrinkNames={likedDrinkNames} />
      ) : null}
      <button onClick={showOrHideForm}>➕</button>
      {showForm ? (
        <AddDrinkForm drinkList={drinkList} setDrinkList={setDrinkList} />
      ) : null}
    </header>
  );
}

export default NavBar;
