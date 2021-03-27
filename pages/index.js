import { useEffect } from 'react';
import Header from '../components/Head/Header';
import useMoviesFetch from '../hooks/useMoviesFetch';
import MovieList from '../components/Movie/MovieList';
import { useappContext } from '../state/store';

export default function Home(props) {
  const [movies, setMovies] = useappContext();
  const {data, isLoading, isError } = useMoviesFetch(movies);
  
  useEffect(() => {
    setMovies(data);
  }, [data, movies]);

  if (isError) return <Error/>
  if (isLoading) return <div></div>;

  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  )
}
