import React, { useState } from "react";

function AddDrinkForm({ drinkList, setDrinkList }) {
  const [formData, setFormData] = useState({});

  function handleFormChange(e) {
    setFormData({ ...formData, likes: 0, [e.target.name]: e.target.value });
  }

  function submitNewDrink(newDrinkEntry) {
    fetch("http://localhost:3000/Drinks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDrinkEntry),
    })
      .then((r) => r.json())
      .then((newDrink) => {
        setDrinkList([...drinkList, newDrink]);
      });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    submitNewDrink(formData);
  }

  return (
    <form onSubmit={handleFormSubmit} className="new-drink-form">
      <input
        onChange={handleFormChange}
        value={formData.name}
        name="name"
        placeholder="Name"
      />
      <input
        onChange={handleFormChange}
        value={formData.image}
        name="image"
        placeholder="Image URL"
      />
      <input
        onChange={handleFormChange}
        value={formData.season}
        className
        name="season"
        placeholder="Season"
      />
      <textarea
        onChange={handleFormChange}
        value={formData.description}
        name="description"
        placeholder="Tell us about this drink..."
      />
      <input type="submit" value="Add new drink!" />
    </form>
  );
}

export default AddDrinkForm;
