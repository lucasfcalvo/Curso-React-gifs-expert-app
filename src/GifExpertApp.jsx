import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);
  const addCategory = (onNewValue) => {
    if (categories.includes(onNewValue)) return;
    setCategories([onNewValue, ...categories]);
  };

  return (
    <>
      {/* titulo  */}
      <h1>GifExpertApp</h1>

      {/* inputs */}
      <AddCategory
        onNewValue={addCategory}
        //  setCategories={setCategories}
      />

      {/* listado de Gifs*/}
      <h2>Categorias</h2>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif item  */}
    </>
  );
};
