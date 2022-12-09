import React from "react";
import Search from "./Search";
import HistoryOfLikes from "./HistoryOfLikes";
import AddDrinkForm from "./AddDrinkForm";

function NavBar() {
  return (
    <header>
      <Search />
      <HistoryOfLikes />
      <AddDrinkForm />
    </header>
  );
}

export default NavBar;
