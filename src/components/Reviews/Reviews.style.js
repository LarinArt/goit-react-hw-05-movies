import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  max-width: 1400px;
  margin: 50px auto;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const List = styled.ul`
  padding: 20px;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Author = styled.h2`
  margin-bottom: 10px;
  color: rgb(255, 215, 0);
`;

export const Created = styled.p`
  margin-bottom: 20px;
  color: rgb(255, 215, 0);
`;

export const Content = styled.p`
  text-align: start;
  color: rgb(255, 215, 0);
`;
