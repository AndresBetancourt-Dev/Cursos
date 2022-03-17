import React from "react";

const GifGridUser = ({ user: { avatar_url, display_name, username } = {} }) => {
  return (
    <div className="user">
      <img src={avatar_url} title={display_name} alt={display_name} />
      <div className="user-detail">
        <span>{display_name}</span>
        <span>@{username}</span>
      </div>
    </div>
  );
};

export default GifGridUser;
