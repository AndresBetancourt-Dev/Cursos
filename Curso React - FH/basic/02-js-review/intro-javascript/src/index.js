import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_URL = "https://api.giphy.com/v1/";

const requestGiphy = fetch(`${API_URL}gifs/random?api_key=${API_KEY}`);
console.log(requestGiphy);

requestGiphy
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const { embed_url } = data;
    const embed = document.createElement("embed");
    const image = document.createElement("img");
    image.setAttribute("src", url);
    image.src = url;
    embed.setAttribute("src", embed_url);

    document.body.appendChild(image);
    document.body.insertBefore(embed, image);
  })
  .catch(console.error);
