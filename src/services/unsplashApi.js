import axios from "axios";
const ACCESS_KEY = "_p6UAMB0X3kVJoMRh10BP_zHt3Rb4eXXKJy3p0OEsps";
const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: ACCESS_KEY,
    orientation: "landscape",
    per_page: "12",
  },
});

export const getPhotos = async (query, page) => {
  const { data } = await instance.get(`search/photos`, {
    params: { query, page },
  });
  return {
    results: data.results,
    totalPages: data.total_pages,
  };
};
