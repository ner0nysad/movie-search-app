import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import LoaderUI from "../ui/loader/LoaderUI";
import BreadcrumbsUI from "../ui/breadcrumbs/BreadcrumbsUI";
import MovieCardBig from "./MovieCardBig";
import MovieTrailer from "./MovieTrailer";
import MovieDescription from "./MovieDescription";
import MovieProduction from "./MovieProduction";

import styles from "./Movie.module.css";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const [movieVideos, setMovieVideos] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    fetch(
      `https://movie-search-app-backend-434y.onrender.com/api/details/${search.replace(
        "?movie_id=",
        ""
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovieInfo(data);
        setMovieVideos(data.videos.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [search]);

  return (
    <>
      {loading ? (
        <LoaderUI />
      ) : (
        <div className={styles.movie}>
          <div className={styles.movie__container}>
            <BreadcrumbsUI text={movieInfo.original_title} />

            <MovieCardBig movieInfo={movieInfo} />

            {movieVideos.length &&
            movieInfo.overview &&
            movieInfo.production_companies.length ? (
              <div className={styles.movie__additional}>
                {movieVideos.length ? (
                  <MovieTrailer videos={movieInfo.videos.results} />
                ) : (
                  <></>
                )}
                {movieInfo.overview && (
                  <MovieDescription overview={movieInfo.overview} />
                )}
                {movieInfo.production_companies.length ? (
                  <MovieProduction companies={movieInfo.production_companies} />
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
