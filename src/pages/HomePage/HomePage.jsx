import { useState, useEffect } from 'react';
import { getTrending } from 'services/movie-api';
import { Loader } from 'components/ui/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from './HomePage.style';
import { Error } from 'components/ui/Error';

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
      {error && <Error>404, please try again later!</Error>}
    </>
  );
};

export default HomePage;
