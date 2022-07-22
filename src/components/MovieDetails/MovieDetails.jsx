import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Img,
  Info,
  InfoTitle,
  ReleaseDate,
  Score,
  Overview,
  OverviewInfo,
  Genres,
  GenresInfo,
  Information,
  NavLinkStyle,
} from './MovieDetails.style';

export const MovieDetails = ({ movie }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  const genresAll = genres.map(genre => genre.name).join(', ');
  const location = useLocation();

  return (
    <>
      <Wrapper>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt={original_title}
        />
        <Info>
          <InfoTitle>{original_title}</InfoTitle>
          <ReleaseDate> ({release_date})</ReleaseDate>
          <Score>User Score: {vote_average}</Score>
          <Overview>Overview</Overview>
          <OverviewInfo>{overview}</OverviewInfo>
          <Genres>Genres</Genres>
          <GenresInfo>{genresAll}</GenresInfo>
        </Info>
      </Wrapper>
      <Information>
        <NavLinkStyle to="cast" state={location.state}>
          Cast
        </NavLinkStyle>
        <NavLinkStyle to="reviews" state={location.state}>
          Reviews
        </NavLinkStyle>
      </Information>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
