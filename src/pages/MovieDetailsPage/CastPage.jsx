import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movie-api';
import { Cast } from 'components/Cast/Cast';
import { Loader } from 'components/Loader/Loader';
import { Notify } from './MovieDetailsPage.style';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getCast(movieId)
      .then(results => setCast(results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {!cast && <Loader />}
      {cast && <Cast cast={cast} />}
      {error && (
        <Notify>404 Something went wrong, please try again later! :(</Notify>
      )}
    </>
  );
};

export default CastPage;
