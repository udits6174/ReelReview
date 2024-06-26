import axios from "axios";

const Backend_URL = import.meta.env.VITE_APP_BE_URL;

const fetchDataFromApi = async (url, params) => {
  try {
    const response = await axios.get(Backend_URL + url, {
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchDataFromApi;
