import React from "react";
import MoviePoster from "./MoviePoster";
import { MovieListGrid, MovieListContainer } from './MovieStyles';


function MovieList(props) {
  const rootUrl = 'https://www.themoviedb.org/t/p/w440_and_h660_face/';
  const { movies } = props;

  return (
    <MovieListContainer>
      <MovieListGrid>
        {movies && movies.map((movie) => {
          const { id, poster_path, original_title, liked } = movie;

          return  (
            <MoviePoster
              key={id}
              id={id}
              poster={`${rootUrl}${poster_path}`}
              alt={original_title}
              liked={liked}
            />
          )
        })}

      </MovieListGrid>
    </MovieListContainer>
  )
}

export default MovieList;