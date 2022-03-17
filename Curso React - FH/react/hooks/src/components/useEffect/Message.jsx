import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    console.log("Se abrió el message");

    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div className="w-100 shadow mt-5 bg-slate-900 rounded-xl p-8 dark:bg-slate-800">
      <h2 className="text-sky-500 font-bold dark:text-sky-400">Coordenadas</h2>
      <p className="text-lg font-medium text-white">
        x : {x}, y : {y}
      </p>
    </div>
  );
};

export default Message;
