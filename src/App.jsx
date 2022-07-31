import { SharedLayout } from 'layout/SharedLayout';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const CastPage = lazy(() => import('pages/MovieDetailsPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/MovieDetailsPage/ReviewsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
