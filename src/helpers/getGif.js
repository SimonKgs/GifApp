import { apiKey } from "../apiKey/apiKey";

export const getGifs = async (category) => {

  const tuApiKey = apiKey();
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${tuApiKey}&q=${encodeURI(
    category
  )}&limit=10&offset=0`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images?.downsized_medium.url,
  }));

  return gifs;
};
