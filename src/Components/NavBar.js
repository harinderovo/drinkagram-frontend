import React, { useState } from "react";
import Search from "./Search";
import HistoryOfLikes from "./HistoryOfLikes";
import AddDrinkForm from "./AddDrinkForm";

function NavBar({ drinkList, setDrinkList, setSubmittedSearch }) {
  const [showForm, setShowForm] = useState(false);
  function showOrHideForm() {
    setShowForm(!showForm);
  }

  return (
    <header>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <HistoryOfLikes />
      <button onClick={showOrHideForm}>➕</button>
      {showForm ? (
        <AddDrinkForm drinkList={drinkList} setDrinkList={setDrinkList} />
      ) : null}
    </header>
  );
}

export default NavBar;
