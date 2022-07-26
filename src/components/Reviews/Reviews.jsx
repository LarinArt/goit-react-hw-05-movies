import PropTypes from 'prop-types';
import {
  ReviewsWrapper,
  List,
  Item,
  Author,
  Created,
  Content,
  Notify
} from './Reviews.style';

export const Reviews = ({ reviews }) => {
    return (
        <ReviewsWrapper>
          {reviews.length === 0 ? 
          <Notify>No reviews</Notify>
          :
          (<List>
            {reviews.map(({ id, created_at, content, author }) => (
              <Item key={id}>
                <Author>{author}</Author>
                <Created>{new Date(created_at).toLocaleDateString()}</Created>
                <Content>{content}</Content>
              </Item>
            ))}
          </List>)
          }
        </ReviewsWrapper>
    );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
