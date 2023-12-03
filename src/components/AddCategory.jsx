import React, { useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    // console.log(target.value)
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewValue(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};