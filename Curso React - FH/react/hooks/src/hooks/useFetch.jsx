import React, { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  if (!url) throw new Error();
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    console.log("entre");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};

export default useFetch;
