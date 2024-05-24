import { Loader, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";

import styles from "./Movies.module.css";

import MoviesList from "../shared/movies-list/MoviesList";
import Filters from "./filters/Filters";
import NotFoundMovies from "../shared/not-found-movies/NotFoundMovies";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [params, setParams] = useState({
    sort: "popularity.desc",
    genre: [],
    year: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    fetch(`https://movie-search-app-backend-434y.onrender.com/api/genres`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://movie-search-app-backend-434y.onrender.com/api/movies?` +
        new URLSearchParams({
          page: `${activePage}`,
          sort: `${params.sort}`,
          genres: `${params.genre.join(", ")}`,
          year: `${params.year}`,
          from: `${params.from}`,
          to: `${params.to}`,
        })
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovieList(data.results);
        data.total_pages > 500
          ? setTotalPages(500)
          : setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [activePage, params]);

  return (
    <div className={styles.movies}>
      <div className={styles.movies__container}>
        <h1 className={styles.movies__title}>Movies</h1>
        <Filters setParams={setParams} params={params} genres={genres} />
        {loading ? (
          <Loader className={styles.movies__loader} color="#9854F6" size="xl" />
        ) : movieList.length === 0 ? (
          <NotFoundMovies />
        ) : (
          <>
            <MoviesList
              movieList={movieList}
              params={params}
              activePage={activePage}
              genresKey="genre_ids"
              genres={genres}
            />
            <Pagination
              className={styles.movies__pagination}
              classNames={{
                control: styles.movies__pagination__control,
              }}
              total={totalPages}
              value={activePage}
              onChange={setActivePage}
              color="#9854F6"
              size="md"
              radius="sm"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Movies;
