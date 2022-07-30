import { getPosterLink } from 'utils/getPosterLink';
import PropTypes from 'prop-types';
import noPoster from 'images/noPoster.png';

import { Section, List, Item, Img, Name, Notify } from './Cast.style';

export const Cast = ({ cast }) => {
  return (
    <>
      <Section>
        {!cast ? 
        <Notify>No cast</Notify>
        :
        <List>
          {cast.map(({ id, original_name, profile_path }) => (
            <Item key={id}>
              {profile_path ?
              <Img src={getPosterLink(profile_path)}
                alt={original_name}/> :
              <Img src={noPoster}
                alt='No Poster'/>
              }
              <Name>{original_name}</Name>
            </Item>
          ))}
        </List>
        }
      </Section>
    </>
  );
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
