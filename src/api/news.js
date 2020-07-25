import axios from "axios";

const apiData = {
  baseUrl: "http://newsapi.org/v2/top-headlines",
  key: `${process.env.API_KEY}`,
};

export const fetchNews = async (
  country = "in",
  category = "",
  searchText = ""
) => {
  const date = new Date();
  date.setDate(date.getDate() - 7);

  const from = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const response = await axios.get(apiData.baseUrl, {
    params: {
      country: country,
      category,
      from,
      q: searchText,
      apiKey: apiData.key,
    },
  });
  return response.data.articles;
};
