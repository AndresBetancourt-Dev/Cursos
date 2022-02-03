import React from "react";
import GifGridItem from "../components/GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className="grid animate__animated animate__fadeIn">
      <h3>{category}</h3>
      {loading && "Cargando..."}
      <div className="card-grid ">
        {images.map(({ id, ...image }) => (
          <GifGridItem key={id} {...image} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
