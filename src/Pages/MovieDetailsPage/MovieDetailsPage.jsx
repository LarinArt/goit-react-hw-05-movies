import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  // Routes,
  // Route,
} from 'react-router-dom';
import { getDetails } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import Notiflix from 'notiflix';
import { Button } from './MovieDetailsPage.style';

// const CastPage = lazy(() => import('../CastPage'));
// const ReviewsPage = lazy(() => import('../ReviewsPage'));

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
      <Button type="button" onClick={onGoBack}>
        To Movies
      </Button>
      {!movie && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error &&
        Notiflix.Notify.failure(
          'Something went wrong, please try again later!'
        )}
      {/* <Routes>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Routes> */}
    </>
  );
};

export default MovieDetailsPage;
