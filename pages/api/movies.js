const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`;

export default async (req, res) => {
  const movies = await fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json()
    });

   res.statusCode = 200;
   res.json(movies);
};


