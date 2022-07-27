import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movie-api';
import { Cast } from 'components/Cast/Cast';
import { Loader } from 'components/Loader/Loader';

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
      {error && <p>Something went wrong, please try again later!</p>}
    </>
  );
};

export default CastPage;