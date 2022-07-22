import { useState, useEffect } from 'react';
import { getTrending } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Trending } from './HomePage.style';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getTrending()
      .then(results => setMovies([...results]))
      .catch(error => setError(error.message));
  }, []);

  return (
    <>
      <Trending>Trending Movies</Trending>
      {!movies && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && <p>Something went wrong, please try again later!</p>}
    </>
  );
};

export default HomePage;
