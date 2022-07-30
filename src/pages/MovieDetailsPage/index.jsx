import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getDetails } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Button, Notify } from './MovieDetailsPage.style';



const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/home');
  };

  useEffect(() => {
    getDetails(movieId)
      .then(results => setMovie(results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      <Button type="button" onClick={onGoBack}>
        To Movies
      </Button>
      {!movie && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error && <Notify>Something went wrong, please try again later!</Notify>}
    </>
  );
};

export default MovieDetailsPage;
