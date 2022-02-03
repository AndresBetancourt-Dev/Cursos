import React from "react";
import GifGridUser from "./GifGridUser";

const GifGridItem = ({ url, title, user }) => {
  return (
    <div className="card">
      <img src={url} alt={title} title={title} />
      <p>{title}</p>
      {user && <GifGridUser user={user} />}
    </div>
  );
};

export default GifGridItem;
