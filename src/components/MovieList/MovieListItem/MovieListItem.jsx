import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noPoster from 'images/noPoster.png';
import {
  MovieLink,
  ItemWrapper,
  Img,
  TitleWrapper,
  Title,
} from './MovieListItem.style';
import { getPosterLink } from 'utils/getPosterLink';

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
        {poster_path ?
              <Img src={getPosterLink(poster_path)}
                alt={title}/> :
              <Img src={noPoster}
                alt='No Poster'/>
              }
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
