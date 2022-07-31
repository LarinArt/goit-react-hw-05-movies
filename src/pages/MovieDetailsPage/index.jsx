import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getDetails } from 'services/movie-api';
import { Loader } from 'components/ui/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { CallbackButton } from 'components/ui/CallbackButton';
import { Error } from 'components/ui/Error';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    getDetails(movieId)
      .then(results => setMovie(results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      <CallbackButton type="button" onClick={onGoBack}>
        To Movies
      </CallbackButton>
      {!movie && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error && (
        <Error>404 Something went wrong, please try again later! :(</Error>
      )}
    </>
  );
};

export default MovieDetailsPage;
