import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieLink,
  ItemWrapper,
  Img,
  TitleWrapper,
  Title,
} from './MovieListItem.style';
import NoImage from 'images/No_image_available.svg.png';
import { IMG_URL } from 'constants';

export const MovieListItem = ({ movie }) => {
  const { poster_path, name, title, id } = movie;
  const location = useLocation();

  return (
    <MovieLink
      to={`/movies/${id}`}
      state={{
        from: location.pathname + location.search,
      }}
    >
      <ItemWrapper>
        <li>
          <Img
            src={poster_path ? `${IMG_URL}${poster_path}` : `${NoImage}`}
            alt={title}
          />
        </li>
        <TitleWrapper>
          <Title>{title ?? name}</Title>
        </TitleWrapper>
      </ItemWrapper>
    </MovieLink>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
