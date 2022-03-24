import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = (e) => {
    /*  
    Bad Practice
    document.querySelector("input").focus();
    document.querySelector("input").select(); 
    */
    inputRef.current.focus();
    inputRef.current.select();
  };

  return (
    <div className="flex flex-col space-y-5">
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="shadow-md font-semibold p-2 focus:shadow-lg outline-none transition-shadow focus:shadow-[#222]"
        placeholder="Su nombre"
        type="text"
      />
      <button onClick={handleClick} className="btn btn-blue">
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
