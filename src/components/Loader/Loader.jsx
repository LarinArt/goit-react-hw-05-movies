import { MdOutlineCameraswitch } from 'react-icons/md';
import { MovieLoader } from './Loader.style';

export const Loader = () => {
  return (
    <MovieLoader>
      <MdOutlineCameraswitch
        width={'40px'}
        height={'40px'}
        fill={'currentColor'}
      />
    </MovieLoader>
  );
};
