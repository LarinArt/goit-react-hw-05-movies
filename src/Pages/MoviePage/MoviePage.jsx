import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import Notiflix from 'notiflix';
import { searchMovies } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { StyledForm, StyledInput, StyledButton, Icon } from './MoviePage.style';

const MoviePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const onFormSubmit = value => {
    if (value.query.trim() === '') {
      Notiflix.Notify.failure("Please, enter correct movie's name");
      return;
    } else {
      const newQuery = value.query !== '' ? value.query : '';
      setSearchParams({ query: newQuery });
    }
  };

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
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [searchParams]);

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={value => {
          onFormSubmit(value);
        }}
      >
        <StyledForm>
          <StyledInput type="text" name="query" autoFocus={true} />
          <StyledButton type="submit">
            <Icon />
          </StyledButton>
        </StyledForm>
      </Formik>
      {loading && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && <p>Something went wrong, please try again later!</p>}
    </>
  );
};

export default MoviePage;
