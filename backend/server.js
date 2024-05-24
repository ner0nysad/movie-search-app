const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 8000;

const API = "98c8f74ea047ecdec842efcf438f8bd9";
const BASE_URL = "https://api.themoviedb.org/3";

app.get("/api/movies", async (req, res) => {
  try {
    const { page, sort, genres, year, from, to } = req.query;

    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API}&language=en-US&` +
        new URLSearchParams({
          page: page,
          sort_by: sort,
          with_genres: genres,
          primary_release_year: year,
          "vote_average.gte": from,
          "vote_average.lte": to,
        })
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data ", error);
  }
});

app.get("/api/movie/:id", async (req, res) => {
  try {
    const movie_id = req.params.id;

    const response = await fetch(
      `${BASE_URL}/movie/${movie_id}?api_key=${API}&language=en-US`
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data ", error);
  }
});

app.get("/api/details/:id", async (req, res) => {
  try {
    const movie_id = req.params.id;

    const response = await fetch(
      `${BASE_URL}/movie/${movie_id}?api_key=${API}&language=en-US&append_to_response=videos`
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data ", error);
  }
});

app.get("/api/genres", async (req, res) => {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API}&language=en-US`
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data ", error);
  }
});

app.listen(PORT, () => {
  console.log(`listening...`);
});
