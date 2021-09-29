import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const initialState = ["One Punch Man"];
  const [categories, setCategories] = useState(initialState);

  const handleAdd = (e) => {
    e.preventDefault();
    setCategories([...categories, "Hunter X Hunter"]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ul>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ul>
    </>
  );
};
export default GifExpertApp;
