import React from 'react';
import { useappContext } from '../state/store';
import MovieList from '../components/Movie/MovieList';

function LikedPage(props) {
  const [ movies ] = useappContext();
  const filteredMovies = movies.filter(movie => movie.liked === true);

  return <MovieList movies={filteredMovies} />
}

export default LikedPage;