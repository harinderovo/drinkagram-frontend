import React, { useState } from "react";
import Search from "./Search";
import HistoryOfLikes from "./HistoryOfLikes";
import logo_transparent from "../logo_transparent.png";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "50px",
  height: "59px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "white",
};
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
        <img src={logo_transparent} className="brand-logo" alt="brand-logo" />
        <Search setSubmittedSearch={setSubmittedSearch} />
        <div className="nav-items">
          <NavLink style={linkStyles} exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/about" style={linkStyles}>
            About
          </NavLink>
          <NavLink
            exact
            to="/form"
            style={linkStyles}
            onClick={showOrHideForm}
            className="form-button"
          >
            Add Form
          </NavLink>
          <button onClick={showOrHideLikeHistory} className="history-button">
            ❤️
          </button>
          {showLikeHistory ? (
            <HistoryOfLikes likedDrinkNames={likedDrinkNames} />
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
