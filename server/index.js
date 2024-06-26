const PORT = process.env.PORT || 8080;
import express from 'express' 
import cors from 'cors'
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = process.env.TMDB_TOKEN;

app.get("/*", async(req, res) => {
  const headers = {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  };
  const path = req.params[0];
  const params = req.query;
  try {
    const response = await axios.get(TMDB_BASE_URL + path, {
      headers,
      params,
    });
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
      res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error(error.request);
      res.status(500).json({ error: 'No response received from TMDB' });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});