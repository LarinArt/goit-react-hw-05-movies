import PropTypes from 'prop-types';
import { MovieListItem } from './MovieListItem/MovieListItem';
import { List } from './MovieList.style';

export const MovieList = ({ movies }) => {
  return (
      <List>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    })
  ),
};
