import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieLink,
  ItemWrapper,
  Img,
  TitleWrapper,
  Title,
} from './MovieListItem.style';

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
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
            }
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
