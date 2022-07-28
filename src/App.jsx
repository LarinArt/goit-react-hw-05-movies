import { SharedLayout } from 'layoutnew/SharedLayout';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('pagesnew/HomePage/HomePage'));
const MoviePage = lazy(() => import('pagesnew/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() => import('pagesnew/MovieDetailsPage'));
const CastPage = lazy(() =>
  import('pagesnew/MovieDetailsPage/CastPage/CastPage')
);
const ReviewsPage = lazy(() =>
  import('pagesnew/MovieDetailsPage/CastPage/ReviewsPage/ReviewsPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  );
};
