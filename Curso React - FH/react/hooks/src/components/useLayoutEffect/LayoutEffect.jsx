import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const QUOTES = "quotes";
const BASE_URL = `https://www.breakingbadapi.com/api/`;

const LayoutEffect = () => {
  const { state, increment } = useCounter(1);
  useEffect(() => {
    console.log(state);
  });
  const { data, error } = useFetch(`${BASE_URL}${QUOTES}/${state}`);

  const [boxSize, setBoxSize] = useState({});
  const { quote, author } = !!data ? data[0] : {};

  const pTag = useRef();

  useLayoutEffect(() => {
    const newBoxSize = pTag.current.getBoundingClientRect();
    setBoxSize({
      newBoxSize,
    });
    console.log(boxSize);
    return () => {};
  }, [quote]);

  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold py-10">Breaking Bad Quotes</h1>
      {error ? (
        <div className="bg-red-600 rounded-md font-bold text-slate-100 py-5 pl-5">
          {error}
        </div>
      ) : null}
      <blockquote className="shadow-lg rounded-sm p-4">
        <p ref={pTag} className="italic font-bold text-3xl">
          {quote}
        </p>
        <cite>{author}</cite>
      </blockquote>

      <button className="btn btn-blue" onClick={() => increment(1)}>
        Next Quote
      </button>
      <pre style={{ display: "flex", wordWrap: "break-word", maxWidth: "20%" }}>
        {JSON.stringify(boxSize)}
      </pre>
    </div>
  );
};

export default LayoutEffect;
