import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const initialState = ["One Punch Man"];
  const [categories, setCategories] = useState(initialState);

  return (
    <>
      <header className="animate__animated animate__fadeInTopLeft">
        <img
          className="giphy"
          src="/images/giphy.png"
          alt="Giphy"
          title="Giphy"
        />
      </header>
      <AddCategory setCategories={setCategories} />
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
export default GifExpertApp;
