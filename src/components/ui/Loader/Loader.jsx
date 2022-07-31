import { RotatingLines } from 'react-loader-spinner';
import { MovieLoader } from './Loader.style';

export const Loader = () => {
  return (
    <MovieLoader>
      <RotatingLines
        strokeColor="yellow"
        strokeWidth="2"
        animationDuration="1.75"
        width="100"
        visible={true}
      />
    </MovieLoader>
  );
};
