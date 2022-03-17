export const getGifs = async (search) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    search
  )}&limit=10&api_key=sVZLHeSkpHjZRYJMAdN633lpxCjAADDN`;
  const response = await fetch(url);
  const { data } = await response.json();
  console.log(data);
  const gifs = await data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.original.url,
    user: image.user,
  }));
  return gifs;
};
