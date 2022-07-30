import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { searchMovies } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';


const MoviePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      setLoading(true);
      searchMovies(newQuery)
        .then(results => {
          results.length !== 0
            ? setMovies([...results])
            : Notiflix.Notify.failure(
                "Sorry, we didn't find any movies matching your search. Please, try again"
              );
        })
        .catch(error => Notiflix.Notify.failure(error))
        .finally(() => setLoading(false));
    }
  }, [searchParams]);

  const onFormSubmit = value => {
    if (value.query.trim() === '') {
      Notiflix.Notify.failure("Please, enter correct movie's name");
      return;
    } else {
      const newQuery = value.query !== '' ?  value.query : '';
      setSearchParams({ 'query': newQuery });}
  };

  return (
    <>
    <SearchForm onSubmit={onFormSubmit} value={searchParams.get('query')} />
      {loading && <Loader />}
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MoviePage;
