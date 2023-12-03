const apiKey = "QP9lA9jfiF1Mxwz5X01YYNNhNs3C35zx";
const baseUrl = "https://api.giphy.com/v1/gifs/search";
export const getGifs = async (category) => {
  const URL = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=9`;
  const resp = await fetch(URL);
  const { data } = await resp.json();
  // console.log(data)
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};
