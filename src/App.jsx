import { SharedLayout } from 'Layout/SharedLayout';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('Pages/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() => import('Pages/MovieDetailsPage'));
const CastPage = lazy(() => import('Pages/CastPage'));
const ReviewsPage = lazy(() => import('Pages/ReviewsPage'));

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
