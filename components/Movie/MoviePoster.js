import React from 'react';
import useFavorites from '../../hooks/useFavorite';
import { useappContext } from '../../state/store';
import {
  MoviePosterContainer,
  FavoriteButton
} from "./MovieStyles";

function MoviePoster(props) {
  const likedMovie = 'liked';
  const { id, poster, liked } = props;
  const [movies, setMovies] = useappContext();
  const [ toggleFavorites ] = useFavorites(movies, id, likedMovie);
 
  return (
    <MoviePosterContainer
      bgImageUrl={poster}
      className={liked ? '__isLiked' : ''}
    >
      <FavoriteButton
        label='like'
        value="like"
        onClick={() => {
          setMovies(toggleFavorites());
        }}
      >
        {!liked ? 'Like' : 'Unlike'}
      </FavoriteButton>
    </MoviePosterContainer>
  );
}

export default MoviePoster;