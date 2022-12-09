import React, { useState } from "react";

function Search({ setSubmittedSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedSearch(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-box"
        onChange={handleSearch}
        value={search}
        type="text"
        id="search"
        placeholder="Search..."
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
