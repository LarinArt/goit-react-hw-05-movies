import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NoImage from 'images/No_image_available.svg.png';
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
import { IMG_URL } from 'constants';

export const MovieDetails = ({ movie, location }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  const genresAll = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <Wrapper>
        <Img
          src={poster_path ? `${IMG_URL}${poster_path}` : `${NoImage}`}
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
        <NavLinkStyle to="cast" state={{ from: location }}>
          Cast
        </NavLinkStyle>
        <NavLinkStyle to="reviews" state={{ from: location }}>
          Reviews
        </NavLinkStyle>
      </Information>
      <Suspense>
        <Outlet />
      </Suspense>
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
