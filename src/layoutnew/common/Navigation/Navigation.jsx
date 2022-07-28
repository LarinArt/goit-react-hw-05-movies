import { MovieNavLink } from './Navigation.style';

export const Navigation = () => {
  return (
    <nav>
      <MovieNavLink to="/">Home</MovieNavLink>
      <MovieNavLink to="movies">Movies</MovieNavLink>
    </nav>
  );
};
