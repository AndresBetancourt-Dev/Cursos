import React from "react";

const GifGrid = ({ category }) => {
  const getGifs = async (search) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=10&api_key=sVZLHeSkpHjZRYJMAdN633lpxCjAADDN`;
    const response = await fetch(url);
    const { data } = await response.json();
    const images = await data.map((image) => ({
      id: image.id,
      title: image.title,
      url: image.images.original.url,
    }));
    console.log(images);
  };

  getGifs("One Punch Man");

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;
