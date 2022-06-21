export const fetcher = (url) => fetch(url).then((res) => res.json());
export const objectToArray = (objecT) => Object.values(objecT);