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
  const path  = req.params[0];
  const params = req.query;
  try {
      const response = await axios.get(TMDB_BASE_URL + path, {
        headers,
        params,
      });
      res.json(response.data);
      console.log(response.data);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});