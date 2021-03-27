import useSWR from "swr";
/**
 * Fetches the movies from the api using vercel's fetching hook https://swr.vercel.app/, but if the movies have already been
 * fetched, returns that array to preven unneccary api calls
 * 
 * @param { Array } movies An array of already fetched movies;
 * @returns { Object } and Object containing the array of movies and the loading status
 *                     of the api fetch
 */
const useMoviesFetch = (movies) => {
  const shouldFetch = movies?.length > 0;  
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    '/api/movies',
    fetcher,
    {
      onError: (error) => {
        console.error("Error fetching movie data", error);
        return {
          data: {},
          error,
        };
      },
    }
  );

  return shouldFetch ?
    {
      data: movies,
      isLoading: false,
      isError: false,
    }
    :
    {
    data: data?.results,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useMoviesFetch;