import PropTypes from 'prop-types';
import NoImage from 'images/No_image_available.svg.png';
import { Section, List, Item, Img, Name } from './Cast.style';
import { IMG_URL } from 'constants';

export const Cast = ({ cast }) => {
  if ({ cast }) {
    return (
      <>
        <Section>
          <List>
            {cast.map(({ id, original_name, profile_path }) => (
              <Item key={id}>
                <Img
                  src={
                    profile_path ? `${IMG_URL}${profile_path}` : `${NoImage}`
                  }
                  alt={original_name}
                />
                <Name>{original_name}</Name>
              </Item>
            ))}
          </List>
        </Section>
      </>
    );
  }
  return <></>;
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};
