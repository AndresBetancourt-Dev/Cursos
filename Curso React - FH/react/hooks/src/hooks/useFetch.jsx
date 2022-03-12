import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  if (!url) throw new Error();
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
