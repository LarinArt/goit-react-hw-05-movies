import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import BgImg from './images/videoImage.jpg';
import styled from 'styled-components';

const HomePage = lazy(() => import('./components/Pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('./components/Pages/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('./components/Pages/MovieDetailsPage/MovieDetailsPage')
);

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Copyright = styled.p`
  position: center;
  color: rgb(255, 215, 0);
`;

export const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Copyright>&#169; Copyright</Copyright>
    </AppWrapper>
  );
};
