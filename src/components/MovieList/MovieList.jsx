import PropTypes from 'prop-types';
import { MovieListItem } from './MovieListItem/MovieListItem';
import { Wrapper, List } from './MovieList.style';

export const MovieList = ({ movies }) => {
  return (
    <Wrapper>
      <List>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </Wrapper>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
