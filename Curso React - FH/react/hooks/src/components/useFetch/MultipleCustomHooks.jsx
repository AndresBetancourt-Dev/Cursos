import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const QUOTES = "quotes";
const BASE_URL = `https://www.breakingbadapi.com/api/`;

const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);
  useEffect(() => {
    console.log(state);
  });
  const { data, loading, error } = useFetch(`${BASE_URL}${QUOTES}/${state}`);
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold py-10">Breaking Bad Quotes</h1>
      {loading ? (
        <div className="bg-black rounded-md font-bold text-yellow-400 py-5 pl-5">
          Loading...
        </div>
      ) : null}
      {error ? (
        <div className="bg-red-600 rounded-md font-bold text-slate-100 py-5 pl-5">
          {error}
        </div>
      ) : null}
      {data ? (
        <>
          <div className="font-bold bg-blue-900 text-slate-100 py-5 pl-5 shadow-2xl rounded-sm hover:scale-[1.1] transition-transform duration-700">
            {JSON.stringify(data)}
          </div>
          <blockquote className="shadow-lg rounded-sm p-4">
            <p className="italic font-bold text-3xl">{data[0]?.quote}</p>
            <footer className="font-thin italic"> - {data[0]?.author}</footer>
          </blockquote>
        </>
      ) : null}
      <button className="btn btn-blue" onClick={() => increment(1)}>
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
