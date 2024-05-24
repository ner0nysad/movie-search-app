import { Input, Pagination } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import MoviesList from "../shared/movies-list/MoviesList";
import { getFromStorage } from "../../utils/localStorage";

import RatedHavent from "./rated-havent/RatedHavent";
import ButtonUI from "../ui/button/ButtonUI";
import NotFoundMovies from "../shared/not-found-movies/NotFoundMovies";
import LoaderUI from "../ui/loader/LoaderUI";

import styles from "./Rated.module.css";

const Rated = () => {
  const [genres, setGenres] = useState([]);
  const [ratedMovies] = useState(getFromStorage());

  const [movieList, setMovieList] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const [searchValue, setSearchValue] = useState("");

  const [filteredMovieList, setFilteredMovieList] = useState([]);

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
    ratedMovies.forEach((movie) => {
      fetch(
        `https://movie-search-app-backend-434y.onrender.com/api/movie/${movie.id}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMovieList((prev) => [...prev, data]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    });
  }, [ratedMovies]);

  useEffect(() => {
    setFilteredMovieList(movieList);
  }, [movieList]);

  const handlerSearchMovie = () => {
    searchValue
      ? setFilteredMovieList(
          movieList.filter((el) =>
            el.original_title.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setFilteredMovieList(movieList);
  };

  return (
    <>
      {ratedMovies.length === 0 ? (
        <RatedHavent />
      ) : movieList.length !== ratedMovies.length ? (
        <LoaderUI />
      ) : (
        <div className={styles.rated}>
          <div className={styles.rated__container}>
            <div className={styles.rated__top}>
              <h1 className={styles.rated__title}>Rated movies</h1>
              <Input
                classNames={{
                  input: styles.rated__input,
                  section: styles.rated__section,
                }}
                size="md"
                radius="md"
                placeholder="Search movie title"
                value={searchValue}
                onChange={(event) => setSearchValue(event.currentTarget.value)}
                leftSection={<IconSearch stroke={1.5} size={16} />}
                rightSectionPointerEvents="all"
                rightSection={
                  <ButtonUI onClick={() => handlerSearchMovie()} size="xs">
                    Search
                  </ButtonUI>
                }
              />
            </div>
            {filteredMovieList.length !== 0 ? (
              <>
                <MoviesList
                  movieList={filteredMovieList.slice(
                    activePage * 4 - 4,
                    activePage * 4
                  )}
                  genres={genres}
                  genresKey="genres"
                />
                <Pagination
                  classNames={{
                    root: styles.rated__pagination,
                    control: styles.rated__pagination__control,
                  }}
                  total={Math.ceil(filteredMovieList.length / 4)}
                  value={activePage}
                  onChange={setActivePage}
                  color="#9854F6"
                  size="md"
                  radius="sm"
                />
              </>
            ) : (
              <NotFoundMovies />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Rated;
