import { useState, useEffect } from 'react';
import { getTrending } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from './HomePage.style';

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
      <Title>Trending Movies</Title>
      {!movies && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && <p>404, please try again later!</p>}
    </>
  );
};

export default HomePage;
