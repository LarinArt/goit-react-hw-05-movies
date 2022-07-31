import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movie-api';
import { Reviews } from 'components/Reviews/Reviews';
import { Loader } from 'components/ui/Loader/Loader';
import { Error } from 'components/ui/Error';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getReviews(movieId)
      .then(results => setReviews(results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {!reviews && <Loader />}
      {reviews && <Reviews reviews={reviews} />}
      {error && (
        <Error>404 Something went wrong, please try again later! :(</Error>
      )}
    </>
  );
};
export default ReviewsPage;
