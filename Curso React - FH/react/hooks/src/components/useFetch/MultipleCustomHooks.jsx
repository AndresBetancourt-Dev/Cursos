import React from "react";
import useFetch from "../../hooks/useFetch";

const QUOTES = "quotes";
const BASE_URL = `https://www.breakingbadapi.com/api/`;

const MultipleCustomHooks = () => {
  const state = useFetch(`${BASE_URL}${QUOTES}/1`);
  return <div>{JSON.stringify(state.data)}</div>;
};

export default MultipleCustomHooks;
