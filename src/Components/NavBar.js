import React, { useState } from "react";
import Search from "./Search";
import HistoryOfLikes from "./HistoryOfLikes";
import AddDrinkForm from "./AddDrinkForm";
import logo_transparent from "../logo_transparent.png";

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
    <nav className="navbar">
      <div className="nav-wrapper">
        <img src={logo_transparent} className="brand-img" alt="brand-logo" />
        <Search setSubmittedSearch={setSubmittedSearch} />
        <div className="nav-items">
          <button onClick={showOrHideLikeHistory} className="history-button">
            ❤️
          </button>
          {showLikeHistory ? (
            <HistoryOfLikes likedDrinkNames={likedDrinkNames} />
          ) : null}
          <button onClick={showOrHideForm} className="form-button">
            +
          </button>
          {showForm ? (
            <AddDrinkForm drinkList={drinkList} setDrinkList={setDrinkList} />
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
